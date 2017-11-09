import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class SquareDashboard extends React.Component {
  render() {
    return(
      <div className="square-dashboard">
        <span>{this.props.data}</span>
      </div>
    )
  }
}

SquareDashboard.defaultProps = {
  type: "default",
  data: 0
}

export default SquareDashboard

