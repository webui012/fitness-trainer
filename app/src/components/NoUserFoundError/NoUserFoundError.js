
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './NoUserFoundError.scss';

 class NoUserFoundError extends Component {


 	componentWillMount(){
 		this.props.redraw(false);
 	}

render() {
    return (
	  <div className='error-loading-data'>
	    Пользователь не найден, попробуйте ещё раз
	    <button type='button' name='agree' onClick={this.props.closeMessage}>Ок</button>
	  </div>
	 )

// ErrorLoadingData.propTypes = {
//   closeMessage: PropTypes.func.isRequired
// }
}
}

export default NoUserFoundError;
