import React, { FC } from "react";
import styled from "styled-components";
import Spinner from "../global/Spinner";

type Props = {
  loading: boolean;
  rank: number;
  point: number;
  diffPoint?: number;
};

const PointCard: FC<Props> = (props) => {
  const point = `${props.diffPoint > 0 ? "+" : ""}${props.diffPoint}`;

  return (
    <StyledDiv>
      {!props.loading ? (
        <>
          <div className="rank text-center text-sm">{props.rank}位</div>
          <div className="points">
            <div className="text-center text-3xl">{props.point}Pt</div>
            {props.diffPoint && <span className="diff text-sm">{point}pt</span>}
          </div>
        </>
      ) : (
        <Spinner size={40} color="gray" bg="white" top={10} />
      )}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: white;
  border-radius: 6px;
  width: 100%;
  height: 92px;
  padding: 15px 0px;
  font-weight: bold;

  .points {
    width: 100%;
    position: relative;

    .diff {
      position: absolute;
      bottom: 0;
      left: calc(50% + 60px);
    }
  }
`;

export default PointCard;
