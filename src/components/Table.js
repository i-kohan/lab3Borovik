import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { withStyles } from '@material-ui/core'

import buildInput from '../utils/buildInput'

const styles = {
  table: {
    minWidth: 700,
  },
};

const renderHeaderRows = (headerRows) => headerRows.map(row => (
  <TableCell key={row.name}>{row.label}</TableCell>
))

const renderRow = (headerRows, row) => headerRows.map(hRow => {
  const Component = buildInput(hRow.type)
  return <Component key={hRow.name} data={row[hRow.name]} metadata={hRow} />
})

const TableComponent = ({ headerRows, rows, renderOperations, classes }) => (
  <Table className={classes.table}>
    <TableHead>
      <TableRow>
        {renderHeaderRows(headerRows)}
        <TableCell>Operations</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map(row => (
        <TableRow key={row._id.$oid}>
          {renderRow(headerRows, row)}
          <TableCell>{renderOperations(row._id.$oid)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

export default withStyles(styles)(TableComponent)