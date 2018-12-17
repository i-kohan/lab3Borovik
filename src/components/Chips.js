import React from 'react';
import Chip from '@material-ui/core/Chip';
import TableCell from '@material-ui/core/TableCell'

import { withStyles } from '@material-ui/core';

const styles = theme => ({
  chips: {
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})

const SelectComponent = ({
  data: {
    value = []
  },
  classes
}) => (
  <TableCell>
    {value.map(val => <Chip key={val} label={val} className={classes.chip}/>)}
  </TableCell>
)

export default withStyles(styles, { withTheme: true })(SelectComponent)
