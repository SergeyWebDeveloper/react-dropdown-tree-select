import cn from 'classnames/bind'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import { getDataset, isEmpty } from '../utils'
import Actions from './actions'
import Toggle from './toggle'

import styles from './index.css'

const cx = cn.bind(styles)

const isLeaf = children => isEmpty(children)

export const refUpdater = ({ checked = false, indeterminate = false }) => input => {
  if (input) {
    input.checked = checked
    input.indeterminate = indeterminate
  }
}

const getNodeCx = props => {
  const {
    keepTreeOnSearch,
    keepChildrenOnSearch,
    _children,
    matchInChildren,
    matchInParent,
    disabled,
    partial,
    hide,
    className,
    showPartiallySelected,
    readOnly,
    checked,
    _focused: focused,
  } = props

  return cx(
    'node',
    {
      leaf: isLeaf(_children),
      tree: !isLeaf(_children),
      disabled,
      hide,
      'match-in-children': keepTreeOnSearch && matchInChildren,
      'match-in-parent': keepTreeOnSearch && keepChildrenOnSearch && matchInParent,
      partial: showPartiallySelected && partial,
      readOnly,
      checked,
      focused,
    },
    className
  )
}

class WrapperTreeNode extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    _depth: PropTypes.number,
    _children: PropTypes.array,
    actions: PropTypes.array,
    className: PropTypes.string,
    title: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    expanded: PropTypes.bool,
    disabled: PropTypes.bool,
    partial: PropTypes.bool,
    dataset: PropTypes.object,
    keepTreeOnSearch: PropTypes.bool,
    keepChildrenOnSearch: PropTypes.bool,
    searchModeOn: PropTypes.bool,
    onNodeToggle: PropTypes.func,
    onAction: PropTypes.func,
    onCheckboxChange: PropTypes.func,
    mode: PropTypes.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
    showPartiallySelected: PropTypes.bool,
    readOnly: PropTypes.bool,
    clientId: PropTypes.string,
    Checkbox: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    Radio: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    IconToggleTreeNode: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    NodeLabel: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    TreeNode: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }

  getAriaAttributes = () => {
    const { _children, _depth, checked, disabled, expanded, readOnly, mode, partial } = this.props
    const attributes = {}

    attributes.role = mode === 'simpleSelect' ? 'option' : 'treeitem'
    attributes['aria-disabled'] = disabled || readOnly
    attributes['aria-selected'] = checked
    if (mode !== 'simpleSelect') {
      attributes['aria-checked'] = partial ? 'mixed' : checked
      attributes['aria-level'] = (_depth || 0) + 1
      attributes['aria-expanded'] = _children && !!expanded
    }
    return attributes
  }

  handleCheckboxChange = e => {
    const { mode, _id: id, onCheckboxChange } = this.props

    if (mode === 'simpleSelect' || mode === 'radioSelect') {
      onCheckboxChange(id, true)
    } else {
      const {
        target: { checked },
      } = e
      onCheckboxChange(id, checked)
    }
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
  }

  render() {
    const {
      mode,
      keepTreeOnSearch,
      _id,
      _children,
      dataset,
      _depth,
      expanded,
      title,
      label,
      partial,
      checked,
      value,
      disabled,
      actions,
      onAction,
      searchModeOn,
      onNodeToggle,
      showPartiallySelected,
      readOnly,
      clientId,
      Checkbox,
      Radio,
      IconToggleTreeNode,
      NodeLabel,
      TreeNode,
    } = this.props
    const liCx = getNodeCx(this.props)
    const style = keepTreeOnSearch || !searchModeOn ? { paddingLeft: `${(_depth || 0) * 20}px` } : {}

    const liId = `${_id}_li`

    const sharedProps = { id: _id, value, checked, disabled: disabled || readOnly, readOnly, tabIndex: -1 }
    const indeterminate = showPartiallySelected && partial
    const nodeLabelProps = { className: 'node-label' }

    // in case of simple select mode, there is no checkbox, so we need to handle the click via the node label
    // but not if the control is in readOnly or disabled state
    const shouldRegisterClickHandler = mode === 'simpleSelect' && !readOnly && !disabled

    if (shouldRegisterClickHandler) {
      nodeLabelProps.onClick = this.handleCheckboxChange
    }
    return (
      <TreeNode
        className={liCx}
        style={style}
        id={liId}
        label={label}
        treeNodeProps={{
          onNodeToggle,
          searchModeOn,
          idNode: _id,
          isParent: !isLeaf(_children),
        }}
        {...getDataset(dataset)}
        {...this.getAriaAttributes()}
      >
        <Toggle
          isLeaf={isLeaf(_children)}
          expanded={expanded}
          id={_id}
          onNodeToggle={onNodeToggle}
          IconToggleTreeNode={IconToggleTreeNode}
        />
        <NodeLabel
          id={_id}
          title={title}
          label={label}
          nodeLabelProps={nodeLabelProps}
          value={value}
          expanded={expanded}
        >
          {mode === 'radioSelect' ? (
            <Radio
              name={clientId}
              className="radio-item"
              onChange={this.handleCheckboxChange}
              onRef={refUpdater({ checked })}
              {...sharedProps}
            />
          ) : (
            <Checkbox
              name={_id}
              className={cx('checkbox-item', { 'simple-select': mode === 'simpleSelect' })}
              indeterminate={indeterminate}
              onChange={this.handleCheckboxChange}
              onRef={refUpdater({ checked, indeterminate })}
              {...sharedProps}
            />
          )}
        </NodeLabel>
        <Actions actions={actions} onAction={onAction} id={_id} readOnly={readOnly} />
      </TreeNode>
    )
  }
}

export default WrapperTreeNode
