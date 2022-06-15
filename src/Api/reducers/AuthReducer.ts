import axios from "axios";
import { TextOf } from "../../Component/Helpers/Messages";
import { AuthActionToasts, AuthActionTypes } from "../Actions/AuthAction";
const STORAGE_KEY = "00xvtpkbnb2ah";
const dafaultState = {
  isLogedIn: false,

  accessToken: null,
  user: {
    name: "",
    email: "",
    id: "",
    roles: [],
  },
};
const toastes = [
  AuthActionTypes.SINGOUT_OUT
]
const GetAuthState = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  try {
    const auth = JSON.parse(data ?? "");
    if (auth) {
      const { accessToken } = auth;
      axios.defaults.headers.common["Authorization"] = accessToken;
      return { isLogedIn: true, user: auth, accessToken };
    }
    return dafaultState;
  } catch (error) {
    return dafaultState;
  }
};
const DefaultToaster = (m: string, t: any) => alert(m);

const AuthReducer = (state: any = GetAuthState(), action: any) => {
  debugger
  const { data: payload, errors, addToast } = action.payload ?? {};
  const message = TextOf(`app.messages.${action.type.toLowerCase()}`);

  switch (action.type) {
    case AuthActionTypes.SINGOUT_OUT:
      addToast(message, { appearance: 'info', autoDismiss: true })
      localStorage.removeItem(STORAGE_KEY);
      return dafaultState;
      break;

    case AuthActionTypes.REGISTER_SUCCESS:
      addToast(message, { appearance: 'success', autoDismiss: true })
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      return {
        isLogedIn: true,
        user: payload,
      };
      break;
    case AuthActionTypes.SINGON_UPDATE_SUCCESS:
      addToast(message, { appearance: 'success', autoDismiss: true })
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      return {
        isLogedIn: true,
        user: payload,
      };
      break;

    case AuthActionTypes.REGISTER_FAIL:
      errors.forEach((error: any) => {
        addToast(`${message} ~ ${error.message}`, { appearance: 'error', autoDismiss: true })
      });

      return dafaultState;
      break;

    case AuthActionTypes.SINGIN_SUCCESS:
      addToast(message, { appearance: 'success', autoDismiss: true })
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      return {
        isLogedIn: true,
        user: payload,
      };

      break;

    default:
      // return dafaultState;
      break;
  }
  return state;
};
export { GetAuthState }
export default AuthReducer;
