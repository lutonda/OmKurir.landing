import axios from "axios";
import { GetAuthState } from "../reducers/AuthReducer";

const AuthActionTypes = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  SINGON_UPDATE_SUCCESS: "SINGON_UPDATE_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  SINGIN_SUCCESS: "SINGIN_SUCCESS",
  SINGIN_FAIL: "SINGIN_FAIL",
  SINGOUT_OUT: "SINGOUT_OUT",
};
const SingInAction = (userState: any, props: any) => {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.post("/auth/sing_in", userState);
      debugger
      axios.defaults.headers.common["Authorization"] = data.accessToken;
      dispatch({ type: AuthActionTypes.SINGIN_SUCCESS, payload: data });
      console.log({ type: AuthActionTypes.SINGIN_SUCCESS, payload: data });
      return props.navigate('/mykurir')
    } catch (error: any) {
      console.error(error);
      dispatch({ type: AuthActionTypes.SINGIN_FAIL, payload: {} });
    }
  };
};
const SingOutAction = (props: any) => {
  return async (dispatch: any) => {
    try {
      await dispatch({ type: AuthActionTypes.SINGOUT_OUT, payload: {} });
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
      dispatch({ type: AuthActionTypes.REGISTER_SUCCESS, payload: data });
      return props.navigate('/mykurir')
    } catch (error: any) {
      console.error(error);
      dispatch({ type: AuthActionTypes.REGISTER_FAIL, payload: {} });
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
      dispatch({ type: AuthActionTypes.SINGON_UPDATE_SUCCESS, payload: data });

      window.location.reload();
    } catch (error: any) {
      console.error(error);
      dispatch({ type: AuthActionTypes.REGISTER_FAIL, payload: {} });
    }
  };
};

export { SingOnAction, SingInAction, SingOutAction, CompleteSingOnAction, AuthActionTypes };
