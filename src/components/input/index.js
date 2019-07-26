import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames/bind'
import styles from './index.css'
import { debounce } from '../../utils'
import { getAriaLabel } from '../../a11y'

const cx = cn.bind(styles)

class Input extends PureComponent {
  static propTypes = {
    tags: PropTypes.array,
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
    Tag: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    TagsWrapper: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
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
      tags,
      onTagRemove,
      inputRef,
      texts = {},
      onFocus,
      onBlur,
      disabled,
      readOnly,
      onKeyDown,
      activeDescendant,
      Tag,
      TagDeleteIcon,
      TagsWrapper,
    } = this.props

    return (
      <ul className={cx('tag-list')}>
        <TagsWrapper
          tags={tags}
          onDelete={onTagRemove}
          readOnly={readOnly}
          disabled={disabled}
          labelRemove={texts.labelRemove}
          Tag={Tag}
          TagDeleteIcon={TagDeleteIcon}
        />
        <li className={cx('tag-item')}>
          <input
            type="text"
            disabled={disabled}
            ref={inputRef}
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
        </li>
      </ul>
    )
  }
}

export default Input
