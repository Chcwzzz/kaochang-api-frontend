import { ProColumns, ProFormInstance, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Modal } from 'antd';
import React, { useEffect, useRef } from 'react';
export type Props = {
  columns: ProColumns<API.InterfaceInfo>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfoAddRequest) => Promise<void>;
  createModalOpen: boolean;
};

const CreateModal: React.FC<Props> = (props) => {
  const { columns, createModalOpen } = props;
  const formRef = useRef<ProFormInstance>();
  useEffect(() => {
    if (formRef.current) {
      formRef.current.resetFields();
    }
  });
  return (
    <Modal
      open={createModalOpen}
      onCancel={() => {
        props.onCancel();
      }}
      footer={null}
    >
      <ProTable
        formRef={formRef}
        type="form"
        columns={columns}
        onSubmit={async (value) => {
          props.onSubmit(value);
        }}
      />
    </Modal>
  );
};
export default CreateModal;
