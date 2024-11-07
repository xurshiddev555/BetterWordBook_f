import React from "react";
import logo from "./bookerfly.svg";
import { DownOutlined } from "@ant-design/icons";

const HeaderComp = () => {
  return (
    <div className="App">
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>

        <img src={logo} alt="" style={{ width: "60px" }} />
        <div className={"bg-red-600"}>
          <p>Category</p>
          <DownOutlined />
        </div>
      </div>
    </div>
  );
};
export default HeaderComp;
