import React from "react";
import Pie from "./Pie";
import Bar from "./Bar";
import { Empty } from "antd";
import { useMappedState } from "redux-react-hook";

const Charts = () => {
  const isFileLoad = useMappedState(state => state.isFileLoad);
  return (
    <div>
      {isFileLoad ? (
        <div>
          <Bar />
          <Pie />
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Charts;
