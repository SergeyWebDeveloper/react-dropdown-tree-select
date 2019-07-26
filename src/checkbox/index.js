import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Checkbox extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
  }

  render() {
    const { checked, indeterminate, readOnly, onRef, ...rest } = this.props
    return <input type="checkbox" ref={onRef} {...rest} />
  }
}

export default Checkbox
