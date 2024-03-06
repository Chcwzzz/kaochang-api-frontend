import { InterfaceRequestMethodEnum } from '@/enum/commonEnum';
import {
  addInterfaceInfoUsingPost,
  deleteInterfaceInfoUsingPost,
  interfaceOfflineUsingPost,
  interfaceOnlineUsingPost,
  listInterfaceInfoByPageUsingPost,
  updateInterfaceInfoUsingPost,
} from '@/services/kaochang-api-backend/interfaceInfoController';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Link } from '@umijs/max';
import { Button, Popconfirm, Tag, message } from 'antd';
import React, { useRef, useState } from 'react';
import { InterfaceInfoModalFormColumns } from '../Columns/InterfaceInfoColumns';
import CreateModal from './components/CreateModal';
import UpdateModal from './components/UpdateModal';

/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.InterfaceInfoAddRequest) => {
  const hide = message.loading('正在添加');
  try {
    await addInterfaceInfoUsingPost({
      ...fields,
    });
    hide();
    message.success('添加成功');
    return true;
  } catch (error: any) {
    hide();
    message.error('操作失败：' + error.message);
    return false;
  }
};

/**
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: API.InterfaceInfoUpdateRequest) => {
  const hide = message.loading('正在修改');
  try {
    await updateInterfaceInfoUsingPost({
      ...fields,
    });
    hide();
    message.success('修改成功');
    return true;
  } catch (error: any) {
    hide();
    message.error('操作失败：' + error.message);
    return false;
  }
};

/**
 *  Offline node
 * @zh-CN 发布接口
 *
 * @param selectedRows
 */
const handleOnline = async (record: API.IdRequest) => {
  const hide = message.loading('正在发布');
  if (!record) return true;
  try {
    await interfaceOnlineUsingPost({
      ...record,
    });
    hide();
    message.success('发布成功');
    return true;
  } catch (error: any) {
    hide();
    message.error('操作失败：' + error.message);
    return false;
  }
};

/**
 *  Offline node
 * @zh-CN 下线接口
 *
 * @param selectedRows
 */
const handleOffline = async (record: API.IdRequest) => {
  const hide = message.loading('正在下线');
  if (!record) return true;
  try {
    await interfaceOfflineUsingPost({
      ...record,
    });
    hide();
    message.success('下线成功');
    return true;
  } catch (error: any) {
    hide();
    message.error('操作失败：' + error.message);
    return false;
  }
};

/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (record: API.DeleteRequest) => {
  const hide = message.loading('正在删除');
  if (!record) return true;
  try {
    await deleteInterfaceInfoUsingPost({
      ...record,
    });
    hide();
    message.success('删除成功');
    return true;
  } catch (error: any) {
    hide();
    message.error('操作失败：' + error.message);
    return false;
  }
};
const TableList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalOpen, handleCreateModalOpen] = useState<boolean>(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.InterfaceInfoVO>();
  const [selectedRowsState, setSelectedRows] = useState<API.RuleListItem[]>([]);

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */

  const columns: ProColumns<API.InterfaceInfoVO>[] = [
    {
      dataIndex: 'id',
      valueType: 'index',
      hideInTable: true,
      key: 'id',
    },
    {
      title: '接口名称',
      dataIndex: 'interfaceName',
      copyable: true,
      valueType: 'text',
      formItemProps: {
        rules: [
          {
            required: true,
          },
        ],
      },
      render: (_, record) => (
        <Link key={record.id} to={`/interface_info/${record.id}`}>
          {record.interfaceName}
        </Link>
      ),
      ellipsis: true,
      key: 'interfaceName',
    },
    {
      title: '接口地址',
      dataIndex: 'url',
      valueType: 'text',
      ellipsis: true,
      copyable: true,
      key: 'url',
      formItemProps: {
        rules: [
          {
            required: true,
          },
        ],
      },
    },
    {
      title: '请求类型',
      dataIndex: 'method',
      filters: true,
      width: 100,
      onFilter: true,
      valueType: 'text',
      key: 'method',
      render: (_, record) => (
        <Tag color={InterfaceRequestMethodEnum[record?.method ?? 'default']}>{record.method}</Tag>
      ),
      valueEnum: {
        GET: {
          text: 'GET',
        },
        POST: {
          text: 'POST',
        },
        PUT: {
          text: 'PUT',
        },
        DELETE: {
          text: 'DELETE',
        },
      },
    },
    {
      title: '请求示例',
      dataIndex: 'requestExample',
      key: 'requestExample',
      valueType: 'text',
      search: false,
      copyable: true,
      ellipsis: true,
    },
    {
      title: '总调用次数',
      dataIndex: 'totalInvokes',
      valueType: 'text',
      width:90,
      search: false,
      key: 'totalInvokes',
      hideInForm: true,
    },
    {
      title: '描述',
      dataIndex: 'description',
      valueType: 'textarea',
      copyable: true,
      ellipsis: true,
      key: 'description',
    },
    
    {
      title: '接口状态',
      dataIndex: 'status',
      key: 'status',
      width:80,
      valueEnum: {
        0: {
          text: '关闭',
          status: 'Default',
        },
        1: {
          text: '开启',
          status: 'Processing',
        },
      },
      formItemProps: {
        rules: [
          {
            required: true,
          },
        ],
      },
      hideInForm: true,
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      valueType: 'dateTime',
      hideInForm: true,
      search: false,
      width:150,
      key: 'updateTime',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="update"
          onClick={() => {
            handleUpdateModalOpen(true);
            setCurrentRow(record);
          }}
        >
          修改
        </a>,
        record.status === 0 ? (
          <a
            key="online"
            onClick={async () => {
              const success = await handleOnline(record);
              if (success) {
                if (actionRef.current) {
                  actionRef.current.reload();
                }
              }
            }}
          >
            发布
          </a>
        ) : (
          <a
            key="offline"
            style={{ color: 'red' }}
            onClick={async () => {
              const success = await handleOffline(record);
              if (success) {
                if (actionRef.current) {
                  actionRef.current.reload();
                }
              }
            }}
          >
            下线
          </a>
        ),
        <Popconfirm
          key={'Delete'}
          title="删除"
          description="确定要删除吗？"
          okText="Yes"
          cancelText="No"
          onConfirm={async () => {
            const success = await handleRemove(record);
            if (success) {
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
        >
          <a
            key="Remove"
            style={{ color: 'red' }}
            onClick={async () => {
              setCurrentRow(record);
            }}
          >
            删除
          </a>
        </Popconfirm>,
      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.RuleListItem, API.PageParams>
        headerTitle={'接口管理'}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleCreateModalOpen(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={async (params) => {
          setLoading(true);
          const res: API.BaseResponsePageInterfaceInfoVO_ = await listInterfaceInfoByPageUsingPost({
            ...params,
          });
          if (res?.code === 0 && res?.data) {
            setLoading(false);
            return {
              data: res?.data.records || [],
              success: true,
              total: res?.data.total || 0,
            };
          } else {
            return {
              data: [],
              success: false,
              total: 0,
            };
          }
        }}
        columns={columns}
      />
      <CreateModal
        title={'添加接口'}
        onSubmit={async (value) => {
          const success = await handleAdd(value);
          if (success) {
            handleCreateModalOpen(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleCreateModalOpen(false);
        }}
        columns={InterfaceInfoModalFormColumns}
        createModalOpen={createModalOpen}
        onOpenChange={handleCreateModalOpen}
        width={'840px'}
      />
      <UpdateModal
        title={'编辑接口'}
        onSubmit={async (value) => {
          const success = await handleUpdate(value);
          if (success) {
            handleUpdateModalOpen(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalOpen(false);
          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        columns={InterfaceInfoModalFormColumns}
        updateModalOpen={updateModalOpen}
        onOpenChange={handleUpdateModalOpen}
        values={currentRow || {}}
        width={'840px'}
      />
    </PageContainer>
  );
};
export default TableList;
