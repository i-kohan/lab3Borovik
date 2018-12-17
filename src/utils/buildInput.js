import TableCell from '../components/TableCell'
import Select from '../components/Select'
import Chips from '../components/Chips'
import TextInput from '../components/TextInput'

const TYPES = {
  text: 'text',
  select: 'select',
  chips: 'chips'
}

export default (type) => {
  switch (type) {
    case TYPES.chips:
      return Chips
    case TYPES.select:
      return Select
    case TYPES.text:
      return TextInput
    default:
      return TableCell
  }
}
