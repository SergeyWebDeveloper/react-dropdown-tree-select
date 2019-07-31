import cn from 'classnames/bind'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import styles from './index.css'

const cx = cn.bind(styles)

class Toggle extends PureComponent {
  static propTypes = {
    expanded: PropTypes.bool,
    isLeaf: PropTypes.bool,
    onNodeToggle: PropTypes.func,
    id: PropTypes.string,
    IconToggleTreeNode: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  }

  onToggle = e => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    this.props.onNodeToggle(this.props.id)
  }

  onKeyDown = e => {
    if (e.key === 'Enter' || e.keyCode === 32) {
      this.props.onNodeToggle(this.props.id)
      e.preventDefault()
    }
  }

  render() {
    if (this.props.isLeaf) return null

    const { expanded, IconToggleTreeNode } = this.props

    const toggleCx = cx('toggle', { expanded, collapsed: !expanded })
    return (
      <IconToggleTreeNode
        role="button"
        tabIndex={-1}
        className={toggleCx}
        onClick={this.onToggle}
        onKeyDown={this.onKeyDown}
        aria-hidden
      />
    )
  }
}

export default Toggle
