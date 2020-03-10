import React from "react";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
import ReactEcharts from "echarts-for-react";
import { useMappedState, useDispatch } from "redux-react-hook";
import { arrayDeleteRepeat } from "../../helpers/handleArray";
import {
  addTypeListDataForBar as addTypeListDataForBarAction,
  setTypeListDataForBar as setTypeListDataForBarAction
} from "../../redux/actions";

const Bar = () => {
  const data = useMappedState(state => state.data);
  const isSetTypeListDataForBar = useMappedState(state => state.isSetTypeListDataForBar);
  const typeListDataForBar = useMappedState(state => state.typeListDataForBar);
  const isFileLoad = useMappedState(state => state.isFileLoad);
  const dispatch = useDispatch();

  const yearList = [
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ];
  const typeList = arrayDeleteRepeat(
    data.map(item => item.contenttype.join(""))
  );

  const getTypeListData = () => {
    if ((!isSetTypeListDataForBar) && isFileLoad) {
      const typeListArray =  typeList.map(item => {
        return {
          name: item === "" ? "Unknow Type" : item,
          type: "bar",
          barGap: 0,
          data: yearList.map(year => {
            return getNumberOfTypeInYear(item, year);
          })
        };
      });
      dispatch(addTypeListDataForBarAction(typeListArray));
      dispatch(setTypeListDataForBarAction(true));
      return typeListArray;
    }
    return typeListDataForBar;
  };

  const getNumberOfTypeInYear = (typeName, year) => {
    const number = data.reduce((total, item) => {
      if (item.hasOwnProperty("contentfirstpublished")) {
        if (item.contentfirstpublished[0]) {
          const itemYear = item.contentfirstpublished[0].split("-")[0];
          if (typeName !== "") {
            return (
              total +
              (itemYear === year && item.contenttype[0] === typeName ? 1 : 0)
            );
          } else {
            return (
              total +
              (itemYear === year && item.contenttype.length === 0 ? 1 : 0)
            );
          }
        }
      }
      return total;
    }, 0);
    return number;
  };

  let option = {
    title: {
      text: "Type Data of Year",
      x: "center"
    },
    color: [
      "#630066",
      "#de9325",
      "#749f83",
      "#006699",
      "#4cabce",
      "#d48265",
      "#e5323e"
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    legend: {
      data: yearList.map(item => (item === "" ? "Unknow Type" : item))
    },
    toolbox: {
      show: true,
      orient: "vertical",
      left: "right",
      top: "center",
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    xAxis: [
      {
        type: "category",
        axisTick: { show: false },
        data: yearList
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: getTypeListData()
  };
  return (
    <div className="chart">
      {data.length !== 0 ? (
        <ReactEcharts className="chart--bar" option={option} notMerge={true} />
      ) : null}
    </div>
  );
};

export default Bar;
