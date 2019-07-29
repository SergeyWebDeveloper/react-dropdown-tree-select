import React from 'react'
import PropTypes from 'prop-types'

const NodeLabel = ({ title, label, id, nodeLabelProps, children }) => (
  <label title={title || label} htmlFor={id}>
    {children}
    <span {...nodeLabelProps}>{label}</span>
  </label>
)

NodeLabel.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  nodeLabelProps: PropTypes.object,
  label: PropTypes.string.isRequired,
}

export default React.memo(NodeLabel)
