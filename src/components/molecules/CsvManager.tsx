import React, { FC, useState } from "react";
import styled from "styled-components";
import StyledDropzone from "../atoms/global/StyledDropzone";
import Papa from "papaparse";
import { usePlotState } from "../../redux/plot/usePlotState";

type Props = {
  setCsvData: React.Dispatch<React.SetStateAction<number[][]>>;
};

const CsvManager: FC<Props> = (props) => {
  const [textarea, setTextArea] = useState("");
  const [data, setData] = useState("");
  const [filename, setFileName] = useState("");
  const { plotState, setLabels } = usePlotState();

  const onDropAccepted = (files) => {
    setTextArea("");
    setFileName("(Parsing CSV...)");

    Papa.parse(files[0], {
      skipEmptyLines: true,
      header: false,
      error: (e) => alert(e),
      complete: (parsed) => {
        console.log(files);
        console.log(parsed);
        props.setCsvData(parsed.data);
        setLabels(parsed.data[0]);
        const csv: string = Papa.unparse(parsed.data);
        console.log(csv);
        setTextArea(csv);
        setFileName(files[0].name);
        // pivotState: { data: parsed.data },
      },
    });
  };

  const onType = (event) => {
    Papa.parse(event.target.value, {
      skipEmptyLines: true,
      header: false,
      error: (e) => alert(e),
      complete: (parsed) => {
        setTextArea(event.target.value);
        setFileName("Data from <textarea>");
        console.log(parsed.data);
        props.setCsvData(parsed.data);
        setLabels(parsed.data[0]);
        // pivotState: { data: parsed.data },
      },
    });
  };

  return (
    <StyledDiv>
      <div className="row text-center">
        <div className="col-md-3 col-md-offset-3">
          <StyledDropzone
            accept="text/csv"
            onDropAccepted={onDropAccepted}
            onDropRejected={() => alert("Please select CSV file")}
          >
            <p>Drop a CSV file here, or click to choose a file from your computer.</p>
          </StyledDropzone>
        </div>
        <div className="col-md-3 text-center mt-2">
          <textarea
            value={textarea}
            onChange={onType}
            placeholder="Paste from a spreadsheet or CSV-like file"
          />
        </div>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  textarea {
    padding: 4px 10px;
    width: 100%;
    max-width: 80vw;
    height: 100px;
    resize: auto;
  }
`;

export default CsvManager;
