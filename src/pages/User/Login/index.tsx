import { Footer } from '@/components';
import {
  userLoginUsingPost,
  userRegisterUsingPost,
} from '@/services/kaochang-api-backend/userController';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  LoginFormPage,
  ProFormCheckbox,
  ProFormInstance,
  ProFormText,
} from '@ant-design/pro-components';
import { Helmet, useModel } from '@umijs/max';
import { Modal, Tabs, message } from 'antd';
import type { CSSProperties } from 'react';
import React, { useRef, useState } from 'react';

type LoginType = 'register' | 'account';
const iconStyles: CSSProperties = {
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '18px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};
const Login: React.FC = () => {
  const formRef = useRef<ProFormInstance>();
  const [type, setType] = useState<LoginType>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
  const handleSubmit = async (values: API.UserRegisterRequest) => {
    const { userPassword, checkPassword } = values;
    if (checkPassword) {
      // 注册
      if (userPassword !== checkPassword) {
        message.error('两次输入密码不一致！');
        return;
      }
      const res = await userRegisterUsingPost(values);
      if (res.code === 0) {
        // 注册成功
        const defaultRegisterSuccessMessage = '注册成功！';
        message.success(defaultRegisterSuccessMessage);
        // 切换到登录
        setType('account');
        // 重置表单
        formRef.current?.resetFields();
      }
    } else {
      // 登录
      const res = await userLoginUsingPost({
        ...values,
      });
      if (res.data) {
        const defaultLoginSuccessMessage = '登录成功！';
        message.success(defaultLoginSuccessMessage);
        // 登录成功后处理
        const urlParams = new URL(window.location.href).searchParams;
        // 重定向到 redirect 参数所在的位置
        location.href = urlParams.get('redirect') || '/';
        // 保存登录状态
        setInitialState({
          loginUser: res.data,
        });
        return;
      } else {
        message.error(res.message);
      }
    }
  };
  return (
    <div>
      <Helmet>
        <title>{'烤肠API分享平台'}</title>
      </Helmet>
      <div style={{ backgroundColor: 'white', height: 'calc(100vh - 95px)', margin: 0 }}>
        <LoginFormPage
          formRef={formRef}
          backgroundImageUrl="/home-nav-background2.webp"
          logo={<img alt="logo" src="/favicon.ico" />}
          title="烤肠API"
          subTitle={'重新定义API的使用方式'}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.UserLoginRequest);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={(activeKey) => {
              setType(activeKey as LoginType);
              // 重置表单
              formRef.current?.resetFields();
            }}
            centered
          >
            <Tabs.TabPane key={'account'} tab={'登录'} />
            <Tabs.TabPane key={'register'} tab={'注册'} />
          </Tabs>
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'请输入用户名'}
                rules={[
                  {
                    required: true,
                    message: '用户名是必填项！',
                  },
                  {
                    min: 4,
                    message: '长度不能少于4位！',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    message: '长度不能少于8位！',
                  },
                ]}
              />
              <div
                style={{
                  marginBottom: 24,
                }}
              >
                <ProFormCheckbox noStyle name="autoLogin">
                  自动登录
                </ProFormCheckbox>
                <a
                  style={{
                    float: 'right',
                  }}
                  onClick={() => {
                    Modal.info({
                      title: '忘记密码',
                      content: '请联系管理员',
                    });
                  }}
                >
                  忘记密码 ?
                </a>
              </div>
            </>
          )}
          {type === 'register' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'请输入用户名'}
                rules={[
                  {
                    required: true,
                    message: '用户名是必填项！',
                  },
                  {
                    min: 4,
                    message: '长度不能少于4位！',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    message: '长度不能少于8位！',
                  },
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'请再次输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    message: '长度不能少于8位！',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('userPassword') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('两次密码不一致！');
                    },
                  }),
                ]}
              />
            </>
          )}
        </LoginFormPage>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
