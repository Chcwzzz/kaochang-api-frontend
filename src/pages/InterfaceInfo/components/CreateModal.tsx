import { ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Modal } from 'antd';
import React from 'react';
export type Props = {
  columns: ProColumns<API.InterfaceInfo>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfoAddRequest) => Promise<void>;
  createModalOpen: boolean;
};

const CreateModal: React.FC<Props> = (props) => {
  const { columns, createModalOpen } = props;
  return (
    <Modal
      open={createModalOpen}
      onCancel={() => {
        props.onCancel();
      }}
    >
      <ProTable
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
