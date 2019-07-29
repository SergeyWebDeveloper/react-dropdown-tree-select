import React from 'react'
import PropTypes from 'prop-types'

const TreeNode = ({ children, ...other }) => <li {...other}>{children}</li>

TreeNode.propTypes = {
  id: PropTypes.string,
  idNode: PropTypes.string,
  role: PropTypes.string,
  onNodeToggle: PropTypes.func,
  'aria-checked': PropTypes.bool,
  'aria-disabled': PropTypes.bool,
  'aria-expanded': PropTypes.bool,
  'aria-level': PropTypes.number,
}

export default React.memo(TreeNode)
