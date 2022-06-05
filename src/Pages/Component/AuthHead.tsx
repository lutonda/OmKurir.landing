import { Link } from "react-router-dom";

const AuthHead = ({ auth }: { auth: any }) => {
  return (
    <Link to="/mykurir">
      <i
        className="lni lni-user"
        style={{
          padding: 10,
          background: "#FFF",
          borderRadius: "50%",
          color:'#441e9e'
        }}
      ></i>
    </Link>
  );
};

export default AuthHead;
