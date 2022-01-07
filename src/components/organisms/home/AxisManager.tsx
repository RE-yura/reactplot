import React, { FC, useEffect } from "react";
import styled from "styled-components";
import Accordion from "../../atoms/global/Accordion";
// import TextField from "../../atoms/global/TextField";
import TextField from "@material-ui/core/TextField";
import { usePlotState } from "../../../redux/plot/usePlotState";
import Select from "../../atoms/global/Select";
import RangeSlider from "../../atoms/global/Slider";

const AxisManager: FC = () => {
  const { plotState, setXAxis, setYAxis } = usePlotState();

  // useEffect(() => {});

  return (
    <StyledDiv>
      <Accordion label="X軸">
        {/* <TextField
          label="xlabel"
          width="160px"
          onChange={(e) => {
            setXAxis({ ...plotState.xaxis, label: e.target.value });
          }}
          placeholder="xlabel"
        /> */}
        <TextField
          id="xaxis-label"
          label="ラベル"
          onChange={(e) => {
            setXAxis({ ...plotState.xaxis, label: e.target.value });
          }}
        />
        <Select
          id="xaxis-select"
          label="データ"
          // value={plotState.xaxis.id}
          multiple={false}
          onChange={(value) => {
            setXAxis({ ...plotState.xaxis, id: value });
          }}
          options={plotState.labels}
          error=""
        />
        <RangeSlider
          id="xaxis-range"
          // value={plotState.xaxis?.range}
          onChange={(value) => {
            console.log(value);
            console.log({ ...plotState.xaxis, range: value });
            setXAxis({ ...plotState.xaxis, range: value });
          }}
        />
      </Accordion>

      <Accordion label="Y軸">
        <TextField
          id="yaxis-label"
          label="ラベル"
          onChange={(e) => {
            setYAxis({ ...plotState.yaxis, label: e.target.value });
          }}
        />
        <Select
          id="yaxis-select"
          multiple
          label="データ"
          // value={plotState.yaxis.ids}
          options={plotState.labels}
          onChange={(value) => {
            setYAxis({ ...plotState.yaxis, ids: value });
          }}
          error=""
        />
      </Accordion>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  min-width: 250px;
  margin: 10px;
`;

export default AxisManager;
