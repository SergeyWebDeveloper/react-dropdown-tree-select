import { shallow } from 'enzyme'
import React from 'react'
import test from 'ava'
import toJson from 'enzyme-to-json'

import Checkbox from './index'
import { refUpdater } from '../../wrapper-tree-node'

test('Checkbox component', t => {
  const tree = toJson(shallow(<Checkbox className="sample" name={'test'} />))
  t.snapshot(tree)
})

test('renders indeterminate state', t => {
  const input = {}
  refUpdater({ indeterminate: true })(input)
  t.true(input.indeterminate)
})

test('renders checked state', t => {
  const input = {}
  refUpdater({ checked: true })(input)
  t.true(input.checked)
})

test('renders disabled state', t => {
  const tree = toJson(shallow(<Checkbox disabled name={'test'} />))
  t.snapshot(tree)
})
