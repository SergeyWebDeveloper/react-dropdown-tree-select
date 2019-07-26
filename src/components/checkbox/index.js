import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Checkbox extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.string,
    id: PropTypes.string,
  }

  render() {
    const { checked = false, onRef, readOnly, indeterminate, ...rest } = this.props
    return <input checked={checked} type="checkbox" ref={onRef} {...rest} />
  }
}

export default Checkbox
