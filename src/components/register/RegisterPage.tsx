import InputText from "../login/InputText";
import SelectGender from "../login/SelectGender";
import useRegister from "./Register.hook";

const RegisterPage = () => {
  const {
    fieldRegister: register,
    errors,
    handleSubmit,
    watch,
    reset,
  } = useRegister();
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
      <InputText
        objInput={register("firstName", {
          required: {
            value: true,
            message: "firstname is required",
          },
        })}
        labelName="firstname"
        errors={errors}
      />
      <InputText
        objInput={register("lastName", {
          required: {
            value: true,
            message: "lastname is required",
          },
        })}
        labelName="lastname"
        errors={errors}
      />
      <InputText
        objInput={register("email", {
          required: {
            value: true,
            message: "email is required",
          },
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "email is invalid",
          },
        })}
        type="email"
        labelName="email"
        errors={errors}
      />
      <InputText
        objInput={register("phoneNumber", {
          required: {
            value: true,
            message: "phone number is required",
          },
        })}
        type="tel"
        labelName="phone number"
        errors={errors}
      />
      <InputText
        objInput={register("password", {
          required: {
            value: true,
            message: "password is required",
          },
          pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
            message:
              "password must has length at least 8 character \n include one uppercase \n include one number",
          },
        })}
        type="password"
        labelName="password"
        errors={errors}
      />
      <SelectGender
        objInput={register("gender", {
          required: { value: true, message: "gender is required" },
          value: "",
        })}
        currentValue={watch("gender")}
        errors={errors}
      />
      <InputText
        objInput={register("birthDate", {
          required: { value: true, message: "birthDate is required" },
        })}
        labelName="birth date"
        errors={errors}
        type="date"
      />
      <div>
        <button className="px-2 py-1 rounded-md bg-primary" type="submit">
          submit
        </button>
        <button
          className="px-2 py-1 rounded-md bg-red"
          type="button"
          onClick={() => reset()}>
          clear
        </button>
      </div>
    </form>
  );
};

export default RegisterPage;
