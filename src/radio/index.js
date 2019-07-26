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
    const { checked, onRef, ...rest } = this.props
    return <input checked={checked || false} type="radio" ref={onRef} {...rest} />
  }
}

export default RadioButton
