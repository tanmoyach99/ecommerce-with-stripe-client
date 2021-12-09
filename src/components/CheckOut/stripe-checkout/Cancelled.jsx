import React from "react";
import { useHistory } from "react-router";

const Cancelled = () => {
  const history = useHistory();
  return (
    <div>
      <h1> sorry there was an problem</h1>
      <h3>
        {" "}
        try again and pay for your desired products. thank you for staying with
        us.{" "}
      </h3>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => history.push("/shop")}
        >
          {" "}
          continue shopping
        </button>
      </div>
    </div>
  );
};

export default Cancelled;
