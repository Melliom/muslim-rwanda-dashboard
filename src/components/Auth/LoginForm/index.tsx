import React from 'react';
import { Form, Input } from 'antd';
import { emailValidation, passwordValidation } from 'validators/auth';

export interface LoginFormProps {}

const LoginForm: React.FC = () => {
  return (
    <>
      <Form.Item label="Email" name="email" rules={emailValidation}>
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={passwordValidation}>
        <Input.Password placeholder="Password" type="password" visibilityToggle />
      </Form.Item>
    </>
  );
};

export default LoginForm;
