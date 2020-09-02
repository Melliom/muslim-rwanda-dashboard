import React from 'react';
import changeName from 'redux/actions/example/changeName';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from 'redux/initialStates';
import { Button } from 'antd';

export interface TestProps {}

const Test: React.FC<TestProps> = () => {
  const dispatch = useDispatch();
  const name = useSelector(
    ({
      example: {
        changeName: { currentName },
      },
    }: IRootState) => currentName,
  );

  const changeMessage = () => changeName('Holla there!')(dispatch);

  return (
    <div>
      <p className="text-primary-dark">{name}</p>
      <Button type="primary" onClick={changeMessage}>
        change message
      </Button>
    </div>
  );
};

export default Test;

// TODO: next
// - antdesign (global css) + tailwindcss config and watch a tutorial (postcss, autoprefixer)
// - add utils (toast and axios)
