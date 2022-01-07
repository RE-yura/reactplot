import React, { FC, useState, useEffect, useMemo } from "react";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import * as MaterialCore from "@material-ui/core";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: "16px 0",
      width: 200,
      // minWidth: 120,
      // maxWidth: 330,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
    },
    chip: {
      margin: 2,
      color: "white",
      backgroundColor: "gray",
    },
  }),
);

type Props = {
  id: string;
  error: string;
  label: string;
  options: string[];
  multiple?: boolean;
  onChange?: (value) => void;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const Select: FC<Props> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [selected, setSelected] = useState<number>(0);
  const [selectedMultiple, setSelectedMultiple] = useState<number[]>([1]);

  const options = props.options;

  function getStyles(name: number, personName: number[], theme: Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  useEffect(() => {
    console.log("============here =============");
    if (!props.multiple) {
      setSelected(0);
      props.onChange(0);
    } else {
      setSelectedMultiple(props.options?.length > 1 ? [1] : [0]);
      props.onChange(props.options?.length > 1 ? [1] : [0]);
    }
  }, [props.options?.length]);

  const handleChange = (event) => {
    console.log(event.target.value);
    console.log(props.options[event.target.value]);
    console.log(props.options);
    setSelected(event.target.value);
    props.onChange(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    console.log(event.target.value);
    setSelectedMultiple(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <div>
      {!props.multiple ? (
        <FormControl className={classes.formControl} error={!!props.error}>
          <InputLabel id={`${props.id}-label`}>{props.label}</InputLabel>
          <MaterialCore.Select
            labelId={`${props.id}-label`}
            id={props.id}
            value={props.options?.length > 0 ? selected : ""}
            onChange={handleChange}
          >
            {props.options?.map((option, idx) => (
              <MenuItem key={idx} value={idx}>
                {option}
              </MenuItem>
            ))}
          </MaterialCore.Select>
          {!!props.error && <FormHelperText>{props.error}</FormHelperText>}
        </FormControl>
      ) : (
        <FormControl className={classes.formControl}>
          <InputLabel id={props.id}>{props.label}</InputLabel>
          <MaterialCore.Select
            labelId={props.id}
            id={props.id}
            multiple
            value={selectedMultiple}
            input={<Input id={props.id} />}
            renderValue={(selectedMultiple) => (
              <div className={classes.chips}>
                {(selectedMultiple as string[]).map(
                  (selected) =>
                    props.options?.length > 0 && (
                      <Chip
                        key={selected}
                        label={props.options[selected]}
                        className={classes.chip}
                      />
                    ),
                )}
              </div>
            )}
            onChange={handleChangeMultiple}
            MenuProps={MenuProps}
          >
            {props.options?.map((option, idx) => (
              <MenuItem
                key={option + idx.toString()}
                value={idx}
                // style={getStyles(idx, selectedMultiple, theme)}
              >
                <Checkbox checked={selectedMultiple.indexOf(idx) > -1} />
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </MaterialCore.Select>
        </FormControl>
      )}
    </div>
  );
};

export default Select;
