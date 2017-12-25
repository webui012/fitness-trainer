import React, {Component} from 'react';
import {SalesItem} from 'Components';
import SalesData from './SalesData';
import './Sales.scss';
import { connect } from 'react-redux';
import { waitPage } from '../../redux/actions';


/*const Sales = props => {
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
    </div>
  )
}*/

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
            <div>
              {this.props.spinner}
            </div>
          </div>
        )
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