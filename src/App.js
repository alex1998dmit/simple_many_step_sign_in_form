import "./styles.css";
import { useStateMachine } from "little-state-machine";
import updateFormState from "./store/actions";
import EmailStep from "./steps/Email";
import CongratsStep from "./steps/Congrats";
import PasswordStep from "./steps/Password";

export default function App() {
  // use hook for getting form state and actions
  const { state, actions } = useStateMachine({ updateFormState });
  // form on submit handles
  const emailFormHandle = ({ email }) => {
    actions.updateFormState({
      email: email,
      step: "Password"
    });
  };
  const passwordFormHandle = ({ password }) => {
    actions.updateFormState({
      step: "Congrats"
    });
  };
  const signOutHandle = () => {
    actions.updateFormState({
      step: "Email"
    });
  };

  return (
    <div>
      {state.step === "Email" && (
        <EmailStep email={state.email} onSubmit={emailFormHandle} />
      )}
      {state.step === "Password" && (
        <PasswordStep onSubmit={passwordFormHandle} />
      )}
      {state.step === "Congrats" && (
        <CongratsStep email={state.email} onSignOut={signOutHandle} />
      )}
    </div>
  );
}
