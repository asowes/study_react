import React from "react";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const gotoLogin = () => {
    history.push("/home");
  };

  return (
    <div>
      login
      <div style={{ marginTop: 16 }}>
        <button type="button" onClick={gotoLogin}>
          点我登陆，跳转到首页
        </button>
      </div>
      <div style={{ marginTop: 16 }}>
        <Link to="/home">通过Link跳转</Link>
      </div>
    </div>
  );
}

export default Login;
