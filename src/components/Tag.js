import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Tag extends PureComponent {
  static defaultProps = {
    tagProps: PropTypes.object,
    buttonProps: PropTypes.object,
    label: PropTypes.string,
    TagDeleteIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }
  render() {
    const { tagProps, buttonProps, label, TagDeleteIcon } = this.props
    return (
      <span {...tagProps}>
        {label}
        <TagDeleteIcon {...buttonProps} />
      </span>
    )
  }
}

export default Tag
