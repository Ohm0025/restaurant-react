import { SubmitHandler, useForm } from "react-hook-form";
import { useLoading } from "../../store/loading";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { userLogin } from "../../api/authApi";

type LoginObj = {
  email: string;
  password: string;
};

const useLoginPage = () => {
  const { openLoading, closeLoading } = useLoading();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginObj>();

  const onSubmitLogin: SubmitHandler<LoginObj> = async (data) => {
    try {
      openLoading();
      const res = await userLogin({ ...data });
      alert(res.data.token);
      console.log(res.data.message);
    } catch (err: AxiosError | any) {
      toast.error(
        (err.response?.data && err.response.data?.message) || err.message
      );
    } finally {
      closeLoading();
    }
  };

  return {
    fieldLogin: register,
    handleSubmit: handleSubmit(onSubmitLogin),
    errors,
  };
};

export default useLoginPage;
export type { LoginObj };
