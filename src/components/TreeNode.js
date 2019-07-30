import React from 'react'
import PropTypes from 'prop-types'

const TreeNode = ({ children, treeNodeProps, ...other }) => <li {...other}>{children}</li>

TreeNode.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  role: PropTypes.string,
  dataSet: PropTypes.object,
  ariaAttributes: PropTypes.object,
  treeNodeProps: PropTypes.shape({
    idNode: PropTypes.string,
    isParent: PropTypes.bool,
    searchModeOn: PropTypes.bool,
    onNodeToggle: PropTypes.func,
  }),
}

export default React.memo(TreeNode)
