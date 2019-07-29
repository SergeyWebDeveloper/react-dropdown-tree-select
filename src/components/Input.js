import React from 'react'

const Input = ({ onRef, texts, activeDescendant, ...otherProps }) => (
  <li className={'tag-item'}>
    <input
      ref={onRef}
      className={'search'}
      aria-activedescendant={activeDescendant}
      aria-autocomplete={otherProps.onKeyDown ? 'list' : undefined}
      {...otherProps}
    />
  </li>
)

export default React.memo(Input)
