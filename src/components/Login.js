import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(login(data.userName));
  };
  return (
    <div>
      <b>Login</b>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="userName"
          {...register("userName", { required: "*" })}
        />
        {errors.userName && <span>{errors.userName.message}</span>}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
