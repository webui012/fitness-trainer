import React, { Component } from 'react';
import './InputFile.scss';

class InputFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'загрузите фото'
    }
  }

  loadHandler = event => {
    this.setState({value: event.target.value})
    this.props.location(event.target.value);
  }

  render() {
    return (
      <div className="InputFile">
        <div className='file-address'>{this.state.value}</div>
        <input type="file" className='load-avatar' onChange={this.loadHandler}/>
      </div>
    )
  }
}

export default InputFile;
