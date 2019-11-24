import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";
import { Dispatch, Action } from "redux";

const Counter: Function = (): JSX.Element => {
  const count: number = useSelector((state: any) => state.count);
  const dispatch: Dispatch = useDispatch();
  const [inc, dec]: [Action, Action] = [increment(), decrement()];

  return (
    <>
      Counter is at {count}.
      <button onClick={(): Action => dispatch(inc)}>Increment</button>
      <button onClick={(): Action => dispatch(dec)}>Decrement</button>
    </>
  );
};

export default Counter;
