import React from 'react';
import './authLayout.scss';
import { Form, Button, Typography, Alert } from 'antd';
import { validateMessages } from 'validators/validationMessages';
import { IUnknownObject } from 'interfaces/unknownObject';

const { Title } = Typography;

export interface AuthLayoutProps {
  title: string;
  subTitle: string;
  action: string;
  handleSubmit: (data: IUnknownObject) => void;
  FormLayout: React.FC;
  state: {
    loading: boolean;
    error: string;
  };
}

const AuthLayout: React.SFC<AuthLayoutProps> = ({
  title,
  subTitle,
  action,
  FormLayout,
  handleSubmit,
  state: { loading, error },
}) => {
  const [form] = Form.useForm();
  return (
    <div className="authLayout">
      <div className="authLayout__content shadow-xl">
        <div className="authLayout__content__header mb-5">
          <Title level={2} className="capitalize mb-0">
            {title}
          </Title>
          <span className="text-gray-600">{subTitle}</span>
          {error && <Alert message={error} type="error" className="mt-3" />}
        </div>
        <Form
          validateTrigger={['onBlur', 'onSubmit']}
          validateMessages={validateMessages}
          form={form}
          layout="vertical"
          requiredMark
          onFinish={handleSubmit}
        >
          <FormLayout />
          <Button
            htmlType="submit"
            type="primary"
            className="capitalize px-6 mt-6 font-medium"
            loading={loading}
          >
            {action}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AuthLayout;
