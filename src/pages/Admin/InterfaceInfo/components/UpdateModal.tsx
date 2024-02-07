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
  onSubmit: (values: API.InterfaceInfoUpdateRequest) => Promise<void>;
  updateModalOpen: boolean;
  size?: SizeType;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  values: API.InterfaceInfo;
};

const UpdateModal: React.FC<Props> = (props) => {
  const { width, title, columns, updateModalOpen, size, onOpenChange, values } = props;
  const formRef = useRef<ProFormInstance>();
  useEffect(() => {
    if (formRef.current) {
      formRef?.current?.setFieldsValue(values);
    }
  });
  return (
    <BetaSchemaForm<API.InterfaceInfoUpdateRequest>
      width={width}
      title={title}
      size={size}
      open={updateModalOpen}
      formRef={formRef}
      autoFocusFirstInput
      layoutType={'ModalForm'}
      onOpenChange={onOpenChange}
      onFinish={async (value) => {
        value.id = values.id;
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
  );
};
export default UpdateModal;
