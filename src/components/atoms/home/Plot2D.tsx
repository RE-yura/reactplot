import React, { FC } from "react";
import styled from "styled-components";
import ReactECharts from "echarts-for-react";
import { usePlotState } from "../../../redux/plot/usePlotState";

// function generateData() {
//   function func(x) {
//     x /= 10;
//     return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50 + 10 * Math.random();
//   }
//   const data = [];
//   for (let i = 0; i <= 200; i += 1) {
//     data.push([i, func(i)]);
//   }
//   return data;
// }

// type Props = {
//   data: { [name: string]: { name: string; value: any } }[];
// };

type Props = {
  data: { [name: string]: { name: string; value: any } }[];
};

const Plot2D: FC<Props> = (props) => {
  const { plotState, setXAxis } = usePlotState();
  // console.log(
  //   props.data.map((data) => {
  //     // console.log(data);
  //     // console.log(data.name);
  //     // console.log(data.value);
  //     return {
  //       name: data.name,
  //       type: "line",
  //       showSymbol: true,
  //       clip: true,
  //       data: data.value,
  //     };
  //   }),
  // );

  const generateData = () => {
    const res = props.data
      ? props.data.map(
          (data) => {
            return {
              name: data.name,
              type: "line",
              showSymbol: true,
              clip: true,
              data: data.value,
            };
          },
          // console.log("key:" + key + " value:" + props.data[key]),
        )
      : null;
    console.log(props.data);
    console.log(res);
    if (res === []) return null;
    return res;
  };

  const options = {
    animation: false,
    // 凡例
    legend: {
      show: props.data?.length > 0 ? true : false,
      top: 10,
      right: 10,
      orient: "vertical",
      align: "left",
      selector: true,
      backgroundColor: "white",
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 1,
      padding: [
        0, // up
        10, // right
        10, // down
        10, // left
      ],
    },
    // コンテナ端までの距離
    grid: { top: 28, right: 28, bottom: 60, left: 60 },
    xAxis: {
      type: "value",
      name: plotState.xaxis?.label || "time [s]",
      nameLocation: "center",
      nameGap: 30,
      nameTextStyle: {
        fontSize: 20,
      },
      axisTick: {
        show: true,
        inside: true,
      },
      minorTick: {
        show: true,
      },
      minorSplitLine: {
        show: true,
      },
      min: plotState.xaxis?.range[0],
      max: plotState.xaxis?.range[1],
    },
    yAxis: {
      type: "value",
      name: plotState.yaxis?.label || "ylabel",
      nameLocation: "center",
      nameGap: 30,
      nameRotated: true,
      nameTextStyle: {
        fontSize: 20,
      },
      min: -100,
      max: 100,
      axisTick: {
        show: true,
        inside: true,
      },
      minorTick: {
        show: true,
      },
      minorSplitLine: {
        show: true,
      },
    },
    dataZoom: [
      {
        show: false,
        type: "inside",
        filterMode: "none",
        xAxisIndex: plotState.xaxis.id,
        // startValue: -20,
        // endValue: 20,
      },
      {
        show: true,
        type: "inside",
        filterMode: "none",
        yAxisIndex: plotState.yaxis.ids,
        // startValue: -20,
        // endValue: 20,
      },
    ],
    series: generateData(),

    //   props.data.map((d) => {
    //   return {
    //     name: props.data[0],
    //     type: "line",
    //     showSymbol: false,
    //     clip: true,
    //     data: props.data,
    //   };
    // }),
    //   [
    //   // {
    //   //   name: "typeA",
    //   //   type: "line",
    //   //   showSymbol: false,
    //   //   clip: true,
    //   //   // smooth: true,
    //   //   data: generateData(),
    //   // },
    //   // {
    //   //   name: "typeB",
    //   //   type: "line",
    //   //   showSymbol: false,
    //   //   clip: true,
    //   //   data: generateData(),
    //   // },
    //   {
    //     name: props.data[0],
    //     type: "line",
    //     showSymbol: false,
    //     clip: true,
    //     data: props.data,
    //   },
    // ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <StyledDiv>
      <ReactECharts
        option={options}
        notMerge={true}
        lazyUpdate={true}
        style={{ width: 800, height: 600 }}
      />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: white;
  border: 1px solid gray;
`;

export default Plot2D;
