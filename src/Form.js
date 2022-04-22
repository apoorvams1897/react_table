import React, { Component } from 'react';

class Form extends React.Component {
  render() {
    return (
      <div id="Form">
      
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="username">
          CTC Offerred:
          <input id="ctc" value={this.props.newctc} 
            type="int" name="ctc"
            onChange={this.props.handleInputChange} />
          </label>
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
