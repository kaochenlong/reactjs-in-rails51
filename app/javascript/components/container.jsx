import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import SquareDashboard from 'components/square_dashboard'

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "hello",
    }
  }

  updateWord(e) {
    this.setState({
      text: e.target.value
    });
  }

  render(){
    return(
      <div>
        測試元件 {this.props.data}<br />
        <div>
          <SquareDashboard className="square-dashboard" type="a" data="100" />
          <SquareDashboard className="square-dashboard" type="b" data="200" />
          <SquareDashboard className="square-dashboard" type="c" data="300" />
          <SquareDashboard className="square-dashboard" type="d" data="150" />
        </div>
        <div>
          <input type="text" onChange={this.updateWord.bind(this)} /><br />
          {this.state.text}
        </div>
      </div>
    )
  }
}

export default Container;

