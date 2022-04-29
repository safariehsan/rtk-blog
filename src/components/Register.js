import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <b>Register</b>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="firstName"
          {...register("firstName", {
            required: "this is required...",
            maxLength: 20,
          })}
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
        <br />
        <input
          placeholder="lastName"
          {...register("lastName", {
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors.lastName && <span>{errors.lastName.message}</span>}
        <br />
        <input
          placeholder="userName"
          {...register("userName", {
            validate: (value) => value.length > 3,
            message: "bigger than 3",
          })}
        />
        {errors.userName && <span>{errors.userName.message}</span>}
        <br />
        <input
          placeholder="age"
          type="number"
          {...register("age", { min: 18, max: 99, message: "not valid" })}
        />
        {errors.age && <span>{errors.age.message}</span>}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
