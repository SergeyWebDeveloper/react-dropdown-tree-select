import React from 'react'
import Control, { controlComponentDefaultProps } from '../../control'
import withTypeControl from '../../hoc/withTypeControl'

const Radio = withTypeControl(Control, 'radio')

Radio.propTypes = {
  ...controlComponentDefaultProps,
}

export default React.memo(Radio)
