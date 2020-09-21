import { Rule } from 'antd/lib/form';

export const emailValidation: Rule[] = [
  {
    type: 'email',
    required: true,
    min: 3,
  },
];

export const passwordValidation: Rule[] = [
  {
    required: true,
    min: 3,
  },
];
