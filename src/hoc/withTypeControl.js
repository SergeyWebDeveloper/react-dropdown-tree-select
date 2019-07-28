import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

function withTypeControl(ControlComponent, type) {
  return class HOCTypeControl extends PureComponent {
    render() {
      return <ControlComponent {...this.props} type={type} />
    }
  }
}

withTypeControl.propTypes = {
  ControlComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  type: PropTypes.string.isRequired,
}

export default withTypeControl
