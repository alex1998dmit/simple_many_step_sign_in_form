import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames";

const Schema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password is too short")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
});

const PasswordStep = (props) => {
  const { onSubmit } = props;
  const { errors, register, handleSubmit } = useForm({
    resolver: yupResolver(Schema)
  });

  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <h2>Enter your password</h2>
      </div>
      <div className="form-group">
        {errors.password && (
          <h4 className="invalid-msg">{errors.password.message}</h4>
        )}
        <input
          className={cn(errors.password && "input-invalid")}
          name="password"
          type="password"
          ref={register}
          placeholder="Your password"
        />
      </div>
      <div className="form-group">
        <button type="submit">Sign In</button>
      </div>
    </form>
  );
};

export default PasswordStep;
