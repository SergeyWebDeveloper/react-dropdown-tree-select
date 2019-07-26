import React from 'react'
import PropTypes from 'prop-types'

const Control = ({ indeterminate, checked, onRef, ...rest }) => <input ref={onRef} {...rest} />

Control.defaultProps = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  indeterminate: PropTypes.bool,
}

export default React.memo(Control)
