import { useState } from "react";
// import axios, { AxiosResponse } from "axios";
import GoogleLogin from "react-google-login";

interface AuthResponse {
  token: string;
  user: User;
}

interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}

const GoogleAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const handleFailure = async (res: any) => {
    //  alert(JSON.stringify(res));
  }
  const onSuccess = async (res: any) => {
    try {
     /* const result: AxiosResponse<AuthResponse> = await axios.post("/auth/", {
        token: res?.tokenId,
      });

      setUser(result.data.user);*/
    } catch (err) {
    //  console.log(err);
    }
  };

  return (
    <>
      {!user && (
        <GoogleLogin
          clientId={`${process.env.REACT_APP_CLIENT_ID??'967655101649-erh5ol6s8bcgi3uq6ofmjet70t1loifa.apps.googleusercontent.com'}`}
          onSuccess={onSuccess}

          
        buttonText="Login with Google"
        //onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy="single_host_origin"
        className="main-btn wow fadeInUp btn btn-primary google-auth-btn"
        />
      )}

      {user && (
        <>
          <img src={user.avatar} className="rounded-full" />
          <h1 className="text-xl font-semibold text-center my-5">
            {user.name}
          </h1>
        </>
      )}
    </>
  );
};

export default GoogleAuth;