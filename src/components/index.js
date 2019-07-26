import Tags from './Tags'
import TagDeleteIcon from './TagDeleteIcon'
import Tag from './Tag'

export const baseComponents = {
  Tags,
  TagDeleteIcon,
  Tag,
}

export const components = customComponents => ({
  ...baseComponents,
  ...customComponents,
})
