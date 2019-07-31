import React from 'react'

const TagsContainer = ({ children }) => <ul className={'tag-list'}>{children}</ul>

export default React.memo(TagsContainer)
