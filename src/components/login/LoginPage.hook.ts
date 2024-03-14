import { SubmitHandler, useForm } from "react-hook-form";
import { useLoading } from "../../store/loading";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

type LoginObj = {
  email: string;
  password: string;
};

const useLoginPage = () => {
  const { openLoading } = useLoading();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginObj>();

  const onSubmitLogin: SubmitHandler<LoginObj> = async (data) => {
    try {
      openLoading();
      console.log("Login process");
    } catch (err: AxiosError | any) {
      toast.error(
        (err.response?.data && err.response.data?.message) || err.message
      );
    }
  };

  return {
    fieldLogin: register,
    handleSubmit: handleSubmit(onSubmitLogin),
    errors,
  };
};

export default useLoginPage;
