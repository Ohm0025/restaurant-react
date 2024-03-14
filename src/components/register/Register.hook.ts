import { AxiosError } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useLoading } from "../../store/loading";
import { userRegister } from "../../api/authApi";

type RegisterObj = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address?: string;
  gender: "male" | "female" | "";
  phoneNumber: string;
  birthDate: Date;
};

const useRegister = () => {
  const { openLoading, closeLoading } = useLoading();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<RegisterObj>();
  const onSubmitRegister: SubmitHandler<RegisterObj> = async (data) => {
    try {
      openLoading();
      const res = await userRegister({ ...data });
      console.log(res.data);
    } catch (err: AxiosError | any) {
      toast.error(
        (err.response?.data && err.response.data?.message) || err.message
      );
    } finally {
      closeLoading();
    }
  };

  return {
    fieldRegister: register,
    handleSubmit: handleSubmit(onSubmitRegister),
    errors,
    watch,
    reset,
  };
};

export default useRegister;
export type { RegisterObj };
