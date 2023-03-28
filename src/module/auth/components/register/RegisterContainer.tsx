import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import useGoogleAuth from "hooks/googleAuthHook";

import RegisterView from "./RegisterView";

// import { NInitialState, registerUser, registerWithForm, selectAuth } from "module/auth";

function RegisterContainer() {
  const dispatch = useAppDispatch();

  const { handleGoogleButton } = useGoogleAuth();

  // const onSubmitForm = (values: NInitialState.IREGISTER_INITIALSTATE) => {
  //   dispatch(registerWithForm({ addInput: values }));
  // };

  const handleMetaSubmit = async () => {
    // dispatch(registerUser({ referralOther: undefined }));
  };

  // return <RegisterView formSubmit={onSubmitForm} metaSubmit={handleMetaSubmit} googleSubmit={handleGoogleButton} />;
}

export default RegisterContainer;
