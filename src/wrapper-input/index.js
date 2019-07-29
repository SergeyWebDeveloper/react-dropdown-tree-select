import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames/bind'
import styles from './index.css'
import { debounce } from '../utils'
import { getAriaLabel } from '../a11y'

const cx = cn.bind(styles)

class WrapperInput extends PureComponent {
  static propTypes = {
    listTags: PropTypes.array,
    texts: PropTypes.object,
    onInputChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onTagRemove: PropTypes.func,
    onKeyDown: PropTypes.func,
    inputRef: PropTypes.func,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    activeDescendant: PropTypes.string,
    Input: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    Tag: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    Tags: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    TagDeleteIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }

  constructor(props) {
    super(props)
    this.delayedCallback = debounce(e => this.props.onInputChange(e.target.value), 300)
  }

  handleInputChange = e => {
    e.persist()
    this.delayedCallback(e)
  }

  render() {
    const {
      listTags,
      onTagRemove,
      inputRef,
      texts = {},
      onFocus,
      onBlur,
      disabled,
      readOnly,
      onKeyDown,
      activeDescendant,
      Input,
      Tag,
      Tags,
      TagDeleteIcon,
    } = this.props

    return (
      <ul className={cx('tag-list')}>
        <Tags
          listTags={listTags}
          onDelete={onTagRemove}
          readOnly={readOnly}
          disabled={disabled}
          labelRemove={texts.labelRemove}
          Tag={Tag}
          TagDeleteIcon={TagDeleteIcon}
        />
        <Input
          type="text"
          disabled={disabled}
          onRef={inputRef}
          className={cx('search')}
          placeholder={texts.placeholder || 'Choose...'}
          onKeyDown={onKeyDown}
          onChange={this.handleInputChange}
          onFocus={onFocus}
          onBlur={onBlur}
          readOnly={readOnly}
          aria-activedescendant={activeDescendant}
          aria-autocomplete={onKeyDown ? 'list' : undefined}
          {...getAriaLabel(texts.label)}
        />
      </ul>
    )
  }
}

export default WrapperInput
