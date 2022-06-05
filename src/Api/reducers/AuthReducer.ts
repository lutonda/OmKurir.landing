import axios from "axios";
import { AuthActionTypes } from "../Actions/AuthAction";
const STORAGE_KEY = "00xvtpkbnb2ah";
const dafaultState = {
  isLogedIn: false,
  user: {
    name: "",
    email: "",
    id: "",
    roles: [],
  },
};

const GetAuthState = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  try {
    const auth = JSON.parse(data ?? "");
    if (auth) {
      const { accessToken } = auth;
      axios.defaults.headers.common["Authorization"] = accessToken;
      return { isLogedIn: true, user: auth };
    }
    return dafaultState;
  } catch (error) {
    return dafaultState;
  }
};
const AuthReducer = (state: any = GetAuthState(), action: any) => {
  alert(JSON.stringify(action.type));
  //if (state.isLogedIn) return state;
  switch (action.type) {
    case AuthActionTypes.SINGOUT_OUT:
      alert(123);
      localStorage.removeItem(STORAGE_KEY);
      return dafaultState;
      break;

    case AuthActionTypes.REGISTER_SUCCESS:
      localStorage.setItem(STORAGE_KEY, JSON.stringify(action.payload));
      return {
        isLogedIn: true,
        user: action.payload,
      };
      break;

    case AuthActionTypes.REGISTER_FAIL:
      return dafaultState;
      break;

    case AuthActionTypes.SINGIN_SUCCESS:
      localStorage.setItem(STORAGE_KEY, JSON.stringify(action.payload));
      return {
        isLogedIn: true,
        user: action.payload,
      };

      break;

    default:
      // return dafaultState;
      break;
  }
  return state;
};

export default AuthReducer;
