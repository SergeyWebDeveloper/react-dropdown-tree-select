import cn from 'classnames/bind'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import styles from './index.css'

const cx = cn.bind(styles)

export const refUpdater = ({ checked, indeterminate = false }) => input => {
  if (input) {
    input.checked = checked
    input.indeterminate = indeterminate
  }
}

class BaseNodeLabel extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    actions: PropTypes.array,
    title: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    partial: PropTypes.bool,
    disabled: PropTypes.bool,
    dataset: PropTypes.object,
    mode: PropTypes.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
    showPartiallySelected: PropTypes.bool,
    onCheckboxChange: PropTypes.func,
    readOnly: PropTypes.bool,
    clientId: PropTypes.string,
    Checkbox: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    Radio: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }

  handleCheckboxChange = e => {
    const { mode, id, onCheckboxChange } = this.props

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
      title,
      label,
      id,
      partial,
      checked,
      value,
      disabled,
      showPartiallySelected,
      readOnly,
      clientId,
      Checkbox,
      Radio,
    } = this.props
    const nodeLabelProps = { className: 'node-label' }

    // in case of simple select mode, there is no checkbox, so we need to handle the click via the node label
    // but not if the control is in readOnly or disabled state
    const shouldRegisterClickHandler = mode === 'simpleSelect' && !readOnly && !disabled

    if (shouldRegisterClickHandler) {
      nodeLabelProps.onClick = this.handleCheckboxChange
    }

    const sharedProps = { id, value, checked, disabled, readOnly, tabIndex: -1 }

    const isDisabled = disabled || readOnly

    const indeterminate = showPartiallySelected && partial

    return (
      <label title={title || label} htmlFor={id}>
        {mode === 'radioSelect' ? (
          <Radio
            name={clientId}
            className="radio-item"
            disabled={isDisabled}
            onRef={refUpdater({ checked })}
            onChange={this.handleCheckboxChange}
            {...sharedProps}
          />
        ) : (
          <Checkbox
            name={id}
            className={cx('checkbox-item', { 'simple-select': mode === 'simpleSelect' })}
            indeterminate={indeterminate}
            onChange={this.handleCheckboxChange}
            onRef={refUpdater({ checked, indeterminate })}
            disabled={isDisabled}
            {...sharedProps}
          />
        )}
        <span {...nodeLabelProps}>{label}</span>
      </label>
    )
  }
}

export default BaseNodeLabel
