import Control, { controlComponentDefaultProps } from '../../control'
import withTypeControl from '../../hoc/withTypeControl'

const Checkbox = withTypeControl(Control, 'checkbox')

Checkbox.propTypes = {
  ...controlComponentDefaultProps,
}

export default Checkbox
