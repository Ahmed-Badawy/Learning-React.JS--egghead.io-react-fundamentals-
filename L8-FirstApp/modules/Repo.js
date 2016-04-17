// modules/Repo.js
import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Repos Template: 
        	<br />Param1: {this.props.params.param1}
        	<br />Param2: {this.props.params.param2}
        </h2>
      </div>
    )
  }
})