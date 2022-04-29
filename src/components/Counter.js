import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec, incByVal, decByVal } from "../features/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <b>Counter using redux toolkit</b>
      <br />
      <p>{count}</p>
      <button onClick={() => dispatch(inc())}>+1</button>
      <br />
      <button onClick={() => dispatch(dec())}>-1</button>
      <br />
      <button onClick={() => dispatch(incByVal(20))}>+10</button>
      <br />
      <button onClick={() => dispatch(decByVal(20))}>-20</button>
    </div>
  );
};

export default Counter;
