import React from 'react'
import TextField from '@material-ui/core/TextField'

const TextInput = (
  {
    metadata: {
      label,
      value,
      onChange = (name) => () => console.log(name), name
    }
  }) => {
  debugger
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange(name)}
    />
  )
}

export default TextInput
