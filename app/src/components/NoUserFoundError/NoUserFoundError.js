
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './NoUserFoundError.scss';

 class NoUserFoundError extends Component {


 	componentWillMount(){
 		this.props.redraw(false);
 	}

render() {
    return <div className='wrap-error'>
      <div className='error-loading-data'>
        <p>Пользователь не найден, попробуйте ещё раз</p>
      	<button type='button' name='agree' onClick={this.props.closeMessage}>Ок</button>
    	</div>
		</div>
	 

// ErrorLoadingData.propTypes = {
//   closeMessage: PropTypes.func.isRequired
// }
}
}

export default NoUserFoundError;
