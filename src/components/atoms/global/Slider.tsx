import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

type Props = {
  id: string;
  // value: number[];
  onChange: (value) => void;
  min?: number;
  max?: number;
};

const RangeSlider: FC<Props> = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: any, newValue: number | number[]) => {
    console.log(newValue[0]);
    setValue(newValue as number[]);
    props.onChange([newValue[0], newValue[1]]);
  };

  return (
    <div className={classes.root}>
      <Typography id={props.id} gutterBottom>
        Range
      </Typography>
      <Slider
        aria-labelledby={props.id}
        value={value}
        // onDropAccepted={handleChange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={-10}
        max={200}
        // getAriaValueText={valuetext}
      />
    </div>
  );
};

export default RangeSlider;
