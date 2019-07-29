import Tags from './Tags'
import TagDeleteIcon from './TagDeleteIcon'
import Tag from './Tag'
import Input from './Input'
import Checkbox from './checkbox'
import Radio from './radio'
import IconToggleTreeNode from './IconToggleTreeNode'
import NodeLabel from './node-label'
import TreeNode from './TreeNode'

export const baseComponents = {
  Tags,
  TagDeleteIcon,
  Tag,
  Input,
  Checkbox,
  Radio,
  IconToggleTreeNode,
  NodeLabel,
  TreeNode,
}

export const components = customComponents => ({
  ...baseComponents,
  ...customComponents,
})
