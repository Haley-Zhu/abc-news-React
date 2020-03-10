import React from "react";
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
import { useMappedState } from "redux-react-hook";
import { arrayDeleteRepeat } from "../../helpers/handleArray";
import ReactEcharts from "echarts-for-react";

const Pie = () => {
  const data = useMappedState(state => state.data);

  const getNumberOfType = type => {
    const number = data.reduce((total, item) => {
      if (type !== "") {
        return total + (item.contenttype[0] === type ? 1 : 0);
      } else {
        return total + (item.contenttype.length === 0 ? 1 : 0);
      }
    }, 0);
    return number;
  };

  const typeList = arrayDeleteRepeat(
    data.map(item => item.contenttype.join(""))
  );

  let option = {
    title: {
      text: "Type Data",
      x: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      top: 20,
      right: 5,
      data: typeList.map(item => item === "" ? "Unknow Type" : item)
    },
    series: [
      {
        name: "numbers",
        type: "pie",
        radius: ["20%", "80%"],
        data: typeList.map(item => {
          return {
            value: getNumberOfType(item),
            name: item === "" ? "Unknow Type" : item
          };
        })
      }
    ]
  };

  return (
    <div className="chart">
      {data.length !== 0 ? (
        <ReactEcharts className="chart--pie" option={option} notMerge={true} />
      ) : null}
    </div>
  );
};

export default Pie;
