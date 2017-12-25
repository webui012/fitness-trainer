import React, {Component} from 'react';
import {SalesItem} from 'Components';
import Spinner from '../../components/Spinner/Spinner';
import SalesData from './SalesData';
import './Sales.scss';
import { connect } from 'react-redux';
import { waitPage } from '../../redux/actions';

class Sales extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.waitPage()
    }

    render(){
        return (

          <div className='sales-wrap'>
            {
             SalesData.map(item => <SalesItem key={item.id}
                 salesHeadline={item.salesHeadline}
                 content={item.content}
                 expireDate={item.expireDate}
                 salesImgCaption={item.salesImgCaption}
                            />
                        )
                    }
            {this.props.spinner ? <Spinner /> : null}
          </div>


        );
    }
}

const mapStateToProps = state => {
    return {
        spinner: state.spinner
    }
}

const mapDispatchToProps = dispatch => {
    return {
        waitPage : () => dispatch(waitPage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sales)