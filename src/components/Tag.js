import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Tag extends PureComponent {
  static defaultProps = {
    tagId: PropTypes.string,
    label: PropTypes.string,
    labelRemove: PropTypes.string,
    className: PropTypes.string,
    buttonId: PropTypes.string,
    isDisabled: PropTypes.bool,
    TagDeleteIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }
  render() {
    const {
      tagId,
      label,
      buttonId,
      isDisabled,
      labelRemove,
      className,
      TagDeleteIcon,
      onClick,
      onKeyDown,
      onKeyUp,
    } = this.props
    return (
      <span className={'tag'} id={tagId} aria-label={label}>
        {label}
        <TagDeleteIcon
          id={buttonId}
          onClick={onClick}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          className={className}
          type="button"
          aria-label={labelRemove}
          aria-labelledby={`${buttonId} ${tagId}`}
          aria-disabled={isDisabled}
        />
      </span>
    )
  }
}

export default Tag
