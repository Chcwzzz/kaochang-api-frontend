import { ProColumns, ProFormInstance, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Modal } from 'antd';
import React, { useEffect, useRef } from 'react';
export type UpdateFormProps = {
  columns: ProColumns<API.InterfaceInfo>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfoUpdateRequest) => Promise<void>;
  updateModalOpen: boolean;
  values: API.InterfaceInfoUpdateRequest;
};
const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const { columns, updateModalOpen, values } = props;
  //监听表单值的变化
  const formRef = useRef<ProFormInstance>();
  useEffect(() => {
    if (formRef) {
      formRef?.current?.setFieldsValue(values);
    }
  });
  return (
    <Modal
      open={updateModalOpen}
      onCancel={() => {
        props.onCancel();
      }}
      footer={null}
    >
      <ProTable
        type="form"
        formRef={formRef}
        columns={columns}
        onSubmit={(value) => {
          value.id = values.id;
          props.onSubmit(value);
        }}
      />
    </Modal>
  );
};
export default UpdateForm;
