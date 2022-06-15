import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { TextOf } from "../../Component/Helpers/Messages";
import { GetAuthState } from "../reducers/AuthReducer";

const AuthActionTypes = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  SINGON_UPDATE_SUCCESS: "SINGON_UPDATE_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  SINGIN_SUCCESS: "SINGIN_SUCCESS",
  SINGIN_FAIL: "SINGIN_FAIL",
  SINGOUT_OUT: "SINGOUT_OUT",
};
const AuthActionToasts = {
  REGISTER_SUCCESS: { appearance: 'success' },
  SINGON_UPDATE_SUCCESS: { appearance: 'success' },
  REGISTER_FAIL: { appearance: 'error' },
  SINGIN_SUCCESS: { appearance: 'success' },
  SINGIN_FAIL: { appearance: 'error' },
  SINGOUT_OUT: { appearance: 'info' },
};

const SingInAction = (userState: any, props: any) => {

  const { addToast } = props;
  return async (dispatch: any) => {
    try {
      const { data } = await axios.post("/auth/sing_in", userState);
      axios.defaults.headers.common["Authorization"] = data.accessToken;
      dispatch({ type: AuthActionTypes.SINGIN_SUCCESS, payload: { ...{ data }, ...props } });
      return props.navigate('/mykurir')
    } catch (error: any) {
      debugger

      switch (error?.response?.status) {
        case 401:
          break;
        default:
          break;

      }
      addToast(TextOf(`app.messages.${error?.response?.data?.message}`)+error, { appearance: 'error', autoDismiss: true })
      dispatch({ type: AuthActionTypes.SINGIN_FAIL, payload: { ...{}, ...props } });
    }
  };
};
const SingOutAction = (props: any) => {
  return async (dispatch: any) => {
    try {
      await dispatch({ type: AuthActionTypes.SINGOUT_OUT, payload: { ...{}, ...props } });
      return props.navigate('/')
    } catch (error: any) {
      console.error(error);
    }
  };
};
const SingOnAction = (userState: any, props: any) => {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.post("/auth/sing_on", userState);
      debugger
      axios.defaults.headers.common["Authorization"] = data.accessToken;
      if (data?.errors?.length > 0)
        throw data.errors;
      dispatch({ type: AuthActionTypes.REGISTER_SUCCESS, payload: { data,...props } });
      return props.navigate('/mykurir')
    } catch (errors: any) {
      console.error(errors);
      dispatch({ type: AuthActionTypes.REGISTER_FAIL, payload: { errors , ...props } });
    }
  };
};
const CompleteSingOnAction = (userState: any, props: any) => {
  return async (dispatch: any) => {
    debugger
    try {
      // axios.defaults.headers.common["Authorization"] = GetAuthState().accessToken;
      const { data } = await axios.post("/auth/sing_on_complete", userState);
      debugger
      axios.defaults.headers.common["Authorization"] = data.accessToken;
      dispatch({ type: AuthActionTypes.SINGON_UPDATE_SUCCESS, payload: { data,...props } });

      window.location.reload();
    } catch (errors: any) {
      dispatch({ type: AuthActionTypes.REGISTER_FAIL, payload: { errors , ...props } });
    }
  };
};

export { SingOnAction, SingInAction, SingOutAction, CompleteSingOnAction, AuthActionTypes, AuthActionToasts };
