import InputText from "./InputText";
import useLoginPage from "./LoginPage.hook";

const LoginPage = () => {
  const { fieldLogin: register, errors, handleSubmit } = useLoginPage();
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-[20px]">
        <InputText
          objInput={register("email", {
            required: {
              value: true,
              message: "email is required",
            },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid Email Format",
            },
          })}
          labelName="Email"
          errors={errors}
          type="email"
        />
        <InputText
          objInput={register("password", {
            required: {
              value: true,
              message: "password is required",
            },
          })}
          labelName="password"
          errors={errors}
          type="password"
        />
        <div className="flex justify-between">
          <button type="submit" className="px-2 py-1 rounded-md bg-primary">
            login
          </button>
          <button type="reset" className="px-2 py-1 rounded-md bg-[red]">
            clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
