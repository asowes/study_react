import React from "react";
import { useHistory } from "react-router-dom";
import withHello from "../../HOC/withHello";

function Home() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      home
      <div style={{ marginTop: 16 }}>
        <button type="button" onClick={goBack}>
          点我返回上一页
        </button>
      </div>
    </div>
  );
}

export default withHello(Home);
