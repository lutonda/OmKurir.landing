import axios from "axios";

const AuthActionTypes = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  SINGIN_SUCCESS: "SINGIN_SUCCESS",
  SINGIN_FAIL: "SINGIN_FAIL",
  SINGOUT_OUT: "SINGOUT_OUT",
};
const SingInAction = (userState: any, props: any) => {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.post("/auth/sing_in", userState);
      dispatch({ type: AuthActionTypes.SINGIN_SUCCESS, payload: data });
      console.log({ type: AuthActionTypes.SINGIN_SUCCESS, payload: data });
      location.href = "/mykurir";
    } catch (error: any) {
      console.error(error);
      dispatch({ type: AuthActionTypes.SINGIN_FAIL, payload: {} });
    }
  };
};
const SingOutAction = (userState: any) => {
  return async (dispatch: any) => {
    try {
      await dispatch({ type: AuthActionTypes.SINGOUT_OUT, payload: {} });
      
      location.href = "/";
    } catch (error: any) {
      console.error(error);
    }
  };
};
const SingOnAction = (userState: any, props: any) => {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.post("/auth/sing_on", userState);
      dispatch({ type: AuthActionTypes.REGISTER_SUCCESS, payload: data });
      console.log({ type: AuthActionTypes.REGISTER_SUCCESS, payload: data });
      location.href = "/mykurir";
    } catch (error: any) {
      console.error(error);
      dispatch({ type: AuthActionTypes.REGISTER_FAIL, payload: {} });
    }
  };
};

export { SingOnAction, SingInAction, SingOutAction, AuthActionTypes };
