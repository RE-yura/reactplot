import React from "react";
import styled from "styled-components";
import ReactECharts from "echarts-for-react";
import "echarts-gl";

const Plot3D: React.FC = () => {
  const option = {
    grid3D: {
      viewControl: {
        rotateSensitivity: 3,
      },
    },
    xAxis3D: {},
    yAxis3D: {},
    zAxis3D: {},
    series: [
      {
        type: "line3D",
        symbolSize: 50,
        data: [
          [-10, -1, -1],
          [0, 4, 0],
          [1, 1, 1],
        ],
        itemStyle: {
          opacity: 1,
        },
      },
    ],
  };

  return (
    <StyledDiv>
      <ReactECharts option={option} style={{ width: 700, height: 700 }} />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: white;
  border: 1px solid gray;
`;

export default Plot3D;
