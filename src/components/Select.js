import React from 'react';
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
  },
  chip: {
    // margin: theme.spacing.unit / 4,
  },
})

const SelectComponent = ({
  metadata: {
    multiple,
    options,
    disabled
  },
  data: {
    value = []
  },
  classes
}) => {
  return (
    <Select
      multiple={multiple}
      value={value}
      onChange={(e) => console.log(e)}
      disabled={disabled}
      renderValue={(selected) => {
        return (
        <div className={classes.chips}>
          {selected.map(value => (
            <Chip key={value} label={value} className={classes.chip} />
          ))}
        </div>
      )}}
    >
      {options.map(opt => {
        return (
        <MenuItem key={opt.name} value={opt.name}>
          {opt.lable}
        </MenuItem>
      )})}
    </Select>
)}

export default withStyles(styles, { withTheme: true })(SelectComponent)
