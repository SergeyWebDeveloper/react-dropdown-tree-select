import React from 'react'
import { getDataset } from '../utils'
import cn from 'classnames/bind'
import styles from '../input/index.css'
import PropTypes from 'prop-types'

const cx = cn.bind(styles)

const Tags = ({ listTags = [], onDelete, readOnly, disabled, labelRemove, Tag, TagDeleteIcon }) =>
  listTags.map(tag => {
    const { _id, label, tagClassName, dataset } = tag
    return (
      <li className={cx('tag-item', tagClassName)} key={`tag-item-${_id}`} {...getDataset(dataset)}>
        <Tag
          label={label}
          id={_id}
          onDelete={onDelete}
          readOnly={readOnly}
          disabled={disabled}
          labelRemove={labelRemove}
          TagDeleteIcon={TagDeleteIcon}
        />
      </li>
    )
  })

Tags.propTypes = {
  tags: PropTypes.array,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  labelRemove: PropTypes.string,
  Tag: PropTypes.func,
  TagDeleteIcon: PropTypes.func,
  onDelete: PropTypes.func,
}

export default React.memo(Tags)
