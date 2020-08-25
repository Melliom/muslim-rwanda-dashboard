import React from 'react';
import changeName from 'redux/actions/example/changeName';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from 'redux/initialStates';

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
      <p>{name}</p>
      <button type="button" onClick={changeMessage}>
        change message
      </button>
    </div>
  );
};

export default Test;

// TODO: next
// - add bootstrap, semantic UI, antdesign (global css)
// - add utils (toast and axios)
