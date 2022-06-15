import axios from "axios";
import { GetAuthState } from "../reducers/AuthReducer";
import { ToastProvider, useToasts } from 'react-toast-notifications'
const UserActionTypes = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  SINGON_UPDATE_SUCCESS: "SINGON_UPDATE_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  SINGIN_SUCCESS: "SINGIN_SUCCESS",
  SINGIN_FAIL: "SINGIN_FAIL",
  SINGOUT_OUT: "SINGOUT_OUT",
};
const UserFindAction = (userState: any, props: any) => {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.get("/users/" + userState.id);
      return data
    } catch (error: any) {
      console.error(error);
      return
    }
  };
};
const SingOnAction = (userState: any, props: any) => {
  const { addToast } = props()
  addToast('Saved Successfully', { appearance: 'success' })
  return async (dispatch: any) => {
    try {
      const { data } = await axios.post("/auth/sing_on", userState);
      dispatch({ type: UserActionTypes.REGISTER_SUCCESS, payload: {  data, ...props } });
      return props.navigate('/mykurir')
    } catch (errors: any) {
      dispatch({ type: UserActionTypes.REGISTER_FAIL, payload: { errors , ...props } });
    }
  };
};
const CompleteSingOnAction = (userState: any, props: any) => {

  const { addToast } = useToasts()
  addToast('Saved Successfully', { appearance: 'success' })
  return async (dispatch: any) => {
    debugger
    try {
      // axios.defaults.headers.common["Authorization"] = GetAuthState().accessToken;
      const { data } = await axios.put("/users", userState);
      dispatch({ type: UserActionTypes.SINGON_UPDATE_SUCCESS, payload: { data, ...props } });
      return props.navigate('/mykurir?8ui0=', {
        auth: {
          isLogedIn: true,
          user: data,
        }
      })
    } catch (errors: any) {
      dispatch({ type: UserActionTypes.REGISTER_FAIL, payload: { errors , ...props } });
    }
  };
};

export { UserFindAction, UserActionTypes };
