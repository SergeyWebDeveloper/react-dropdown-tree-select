import Input from './input'
import Trigger from './trigger'
import Tree from './tree'
import Tag from './tag'
import Tags from './tags'
import TagDeleteIcon from './tag-delete-icon'
import TreeNode from './tree-node'
import NodeLabel from './tree-node/node-label'
import Checkbox from './checkbox'
import Radio from './radio'

export const baseComponent = {
  Input,
  Trigger,
  Tree,
  Tag,
  Tags,
  TagDeleteIcon,
  TreeNode,
  NodeLabel,
  Checkbox,
  Radio,
}

export const components = customComponents => ({
  ...baseComponent,
  ...customComponents,
})
