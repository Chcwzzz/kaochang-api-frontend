import { BetaSchemaForm, ProFormInstance } from '@ant-design/pro-components';
import '@umijs/max';
import { Button } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import React, { useEffect, useRef } from 'react';
export type Props = {
  width: string;
  title: string;
  columns: any[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfoAddRequest) => Promise<void>;
  createModalOpen: boolean;
  size?: SizeType;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateModal: React.FC<Props> = (props) => {
  const { width, title, columns, createModalOpen, size, onOpenChange } = props;
  const formRef = useRef<ProFormInstance>();
  useEffect(() => {
    if (formRef.current) {
      formRef.current.resetFields();
    }
  });
  return (
    <BetaSchemaForm<API.InterfaceInfo>
      width={width}
      title={title}
      size={size}
      open={createModalOpen}
      formRef={formRef}
      autoFocusFirstInput
      layoutType={'ModalForm'}
      onOpenChange={onOpenChange}
      onFinish={async (value) => {
        props.onSubmit(value);
      }}
      grid={true}
      rowProps={{
        gutter: [16, 16],
      }}
      colProps={{
        span: 12,
      }}
      submitter={{
        render: (props, defaultDoms) => {
          return [
            ...defaultDoms,
            <Button
              key="extra-reset"
              onClick={() => {
                formRef.current?.resetFields();
              }}
            >
              重置
            </Button>,
          ];
        },
      }}
      columns={columns}
    />
    // <Modal
    //   open={createModalOpen}
    //   onCancel={() => {
    //     props.onCancel();
    //   }}
    //   footer={null}
    // >
    //   <ProTable
    //     formRef={formRef}
    //     type="form"
    //     columns={columns}
    //     onSubmit={async (value) => {
    //       props.onSubmit(value);
    //     }}
    //   />
    //</Modal>
  );
};
export default CreateModal;
