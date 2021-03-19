import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames";

const Schema = yup.object().shape({
  email: yup.string().required().email("Enter valid email please")
});

const EmailStep = (props) => {
  // get form on Submit handler from parent component
  const { onSubmit, email } = props;
  // apply validations schema to react-hook-form form object
  const { errors, register, handleSubmit } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      email
    }
  });

  //  you can check all validations errors in console
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <h2>Enter your email</h2>
      </div>
      <div className="form-group">
        {/* check validation errors */}
        {errors.email && (
          <h4 className="invalid-msg">{errors.email.message}</h4>
        )}
        <input
          // make input invalid if get email validation errors
          className={cn(errors.email && "input-invalid")}
          name="email"
          ref={register}
          placeholder="Your email"
        />
      </div>
      <div className="form-group">
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default EmailStep;
