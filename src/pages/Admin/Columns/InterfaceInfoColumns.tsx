import ParamsTable from '@/components/ParamsTable';
import { NewRequestColumn, NewResponseColumn } from '@/components/ParamsTable/components/type';
import { ProColumns, ProFormColumnsType } from '@ant-design/pro-components';

export const defaultNewRequestColumn: NewRequestColumn = {
  fieldName: '',
  required: '是',
  type: 'string',
  desc: '',
};

export const defaultNewResponseColumn: NewResponseColumn = {
  fieldName: '',
  type: 'string',
  desc: '',
};

export const requestParam: ProColumns[] = [
  {
    title: '参数名称',
    dataIndex: 'paramName',
    formItemProps: {
      rules: [
        {
          required: true,
          whitespace: true,
          message: '此项是必填项',
        },
      ],
    },
  },
  {
    title: '必填',
    valueType: 'select',
    dataIndex: 'required',
    valueEnum: {
      是: { text: '是' },
      否: { text: '否' },
    },
    formItemProps: {
      rules: [
        {
          required: true,
          whitespace: true,
          message: '此项是必填项',
        },
      ],
    },
  },
  {
    title: '参数类型',
    dataIndex: 'type',
    valueEnum: {
      int: { text: 'int' },
      string: { text: 'string' },
      long: { text: 'long' },
      boolean: { text: 'boolean' },
      double: { text: 'double' },
      object: { text: 'object' },
    },
    valueType: 'select',
    formItemProps: {
      rules: [
        {
          required: true,
          whitespace: true,
          message: '此项是必填项',
        },
      ],
    },
  },
  {
    title: '描述',
    dataIndex: 'description',
  },
];
export const responseParam: ProColumns[] = [
  {
    title: '参数名称',
    dataIndex: 'paramName',
    formItemProps: {
      rules: [
        {
          required: true,
          whitespace: true,
          message: '此项是必填项',
        },
      ],
    },
  },
  {
    title: '参数类型',
    dataIndex: 'type',
    valueEnum: {
      int: { text: 'int' },
      string: { text: 'string' },
      long: { text: 'long' },
      boolean: { text: 'boolean' },
      double: { text: 'double' },
      object: { text: 'object' },
    },
    valueType: 'select',
    formItemProps: {
      rules: [
        {
          required: true,
          whitespace: true,
          message: '此项是必填项',
        },
      ],
    },
  },
  {
    title: '描述',
    dataIndex: 'description',
  },
];

export const InterfaceInfoModalFormColumns: ProFormColumnsType<API.InterfaceInfo>[] = [
  {
    dataIndex: 'id',
    valueType: 'index',
    hideInTable: true,
    key: 'id',
  },
  {
    title: '接口名称',
    dataIndex: 'interfaceName',
    tooltip: '接口名称',
    valueType: 'text',
    key: 'name',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '接口名称为必填项',
        },
      ],
    },
    width: 'lg',
  },
  {
    title: '接口地址',
    dataIndex: 'url',
    tooltip: '接口地址',
    valueType: 'text',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '接口地址为必填项',
        },
      ],
    },
    key: 'url',
    width: 'lg',
  },
  {
    title: '请求方法',
    dataIndex: 'method',
    tooltip: '请求方法',
    valueType: 'radio',
    key: 'method',
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
    formItemProps: {
      rules: [
        {
          required: true,
          message: '请求方法为必填项',
        },
      ],
    },
    width: 'lg',
    colProps: {
      span: 12,
    },
  },
  {
    title: '请求示例',
    key: 'requestExample',
    dataIndex: 'description',
    width: 'lg',
    valueType: 'text',
    colProps: {
      span: 12,
    },
  },
  {
    title: '请求参数',
    dataIndex: 'requestParams',
    tooltip: '请求参数',
    key: 'requestParams',
    colProps: {
      span: 24,
    },
    renderFormItem: () => (
      <ParamsTable column={requestParam} defaultNewColumn={defaultNewRequestColumn} />
    ),
  },
  {
    title: '响应参数',
    dataIndex: 'responseParams',
    tooltip: '响应参数',
    key: 'responseParams',
    colProps: {
      span: 24,
    },
    renderFormItem: () => (
      <ParamsTable column={responseParam} defaultNewColumn={defaultNewResponseColumn} />
    ),
  },
  {
    title: '接口描述',
    key: 'description',
    dataIndex: 'description',
    tooltip: '接口描述',
    width: 'lg',
    valueType: 'jsonCode',
    colProps: {
      span: 12,
    },
  },
  {
    title: '请求头',
    dataIndex: 'requestHeader',
    width: 'lg',
    valueType: 'jsonCode',
    colProps: {
      span: 12,
    },
    key: 'requestHeader',
  },
];
