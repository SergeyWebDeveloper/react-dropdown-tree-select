import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class RadioButton extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
  }

  render() {
    const { onRef, ...rest } = this.props
    return <input type="radio" ref={onRef} {...rest} />
  }
}

export default RadioButton
