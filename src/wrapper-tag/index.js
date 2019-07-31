import cn from 'classnames/bind'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import styles from './index.css'

const cx = cn.bind(styles)

export const getTagId = id => `${id}_tag`

class WrapperTag extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    labelRemove: PropTypes.string,
    Tag: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    TagDeleteIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }

  handleClick = e => {
    const { id, onDelete } = this.props
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    onDelete(id, (e.key || e.keyCode) !== undefined)
  }

  onKeyDown = e => {
    if (e.key === 'Backspace') {
      this.handleClick(e)
      e.preventDefault()
    }
  }

  onKeyUp = e => {
    if (e.keyCode === 32 || ['Delete', 'Enter'].indexOf(e.key) > -1) {
      this.handleClick(e)
      e.preventDefault()
    }
  }

  render() {
    const { id, label, labelRemove = 'Remove', readOnly, disabled, Tag, TagDeleteIcon } = this.props

    const tagId = getTagId(id)
    const buttonId = `${id}_button`
    const className = cx('tag-remove', { readOnly }, { disabled })
    const isDisabled = readOnly || disabled
    return (
      <Tag
        tagProps={{
          className: 'tag',
          id: tagId,
          'aria-label': label,
        }}
        buttonProps={{
          className,
          id: buttonId,
          onClick: !isDisabled ? this.handleClick : undefined,
          onKeyDown: !isDisabled ? this.onKeyDown : undefined,
          onKeyUp: !isDisabled ? this.onKeyUp : undefined,
          type: 'button',
          'aria-label': labelRemove,
          'aria-labelledby': `${buttonId} ${tagId}`,
          'aria-disabled': isDisabled,
        }}
        label={label}
        TagDeleteIcon={TagDeleteIcon}
      />
    )
  }
}

export default WrapperTag
