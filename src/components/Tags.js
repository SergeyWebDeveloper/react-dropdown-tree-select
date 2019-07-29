import React from 'react'
import { getDataset } from '../utils'
import cn from 'classnames/bind'
import styles from '../wrapper-input/index.css'
import WrapperTag from '../wrapper-tag'
import PropTypes from 'prop-types'

const cx = cn.bind(styles)

const Tags = ({ listTags = [], onDelete, readOnly, disabled, labelRemove, Tag, TagDeleteIcon }) =>
  listTags.map(tag => {
    const { _id, label, tagClassName, dataset } = tag
    return (
      <li className={cx('tag-item', tagClassName)} key={`tag-item-${_id}`} {...getDataset(dataset)}>
        <WrapperTag
          label={label}
          id={_id}
          onDelete={onDelete}
          readOnly={readOnly}
          disabled={disabled}
          labelRemove={labelRemove}
          Tag={Tag}
          TagDeleteIcon={TagDeleteIcon}
        />
      </li>
    )
  })

Tags.propTypes = {
  listTags: PropTypes.array,
  onDelete: PropTypes.func,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  labelRemove: PropTypes.string,
  Tag: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  TagDeleteIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
}

export default React.memo(Tags)
