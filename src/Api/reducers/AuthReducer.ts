import axios from "axios";
import { AuthActionTypes } from "../Actions/AuthAction";
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
const AuthReducer = (state: any = GetAuthState(), action: any) => {


  switch (action.type) {
    case AuthActionTypes.SINGOUT_OUT:
      alert(JSON.stringify(action.type));
      localStorage.removeItem(STORAGE_KEY);
      return dafaultState;
      break;

    case AuthActionTypes.REGISTER_SUCCESS:
      alert(JSON.stringify(action.type));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(action.payload));
      return {
        isLogedIn: true,
        user: action.payload,
      };
      break;
    case AuthActionTypes.SINGON_UPDATE_SUCCESS:
      alert(JSON.stringify(action.type));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(action.payload));
      return {
        isLogedIn: true,
        user: action.payload,
      };
      break;

    case AuthActionTypes.REGISTER_FAIL:
      alert(JSON.stringify(action.type));
      return dafaultState;
      break;

    case AuthActionTypes.SINGIN_SUCCESS:
      alert(JSON.stringify(action.type));
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
export { GetAuthState }
export default AuthReducer;
