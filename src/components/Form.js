import React from 'react'
import buildInput from '../utils/buildInput'

const buildFields = (metadata) => {
  return metadata.map(field => {
    const Component = buildInput(field.type)
    return <Component metadata={field} data={{}} />
  })
}

const FormComponent = ({ metadata }) => {
  const fields = buildFields(metadata)
  return (
    fields
  )
}

export default FormComponent
