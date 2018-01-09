import React, { Component } from 'react';
import { SalesItem } from 'Components';
import Spinner from '../../components/Spinner/Spinner';
import SalesData from './SalesData';
import './Sales.scss';
import { connect } from 'react-redux';
import Api from '../../redux/Api';
import { waitSalesPage, waitSalesPageEnd, showError } from '../../redux/actions';

class Sales extends Component{
    componentDidMount(){
        this.props.waitSalesPage();
    }

    render(){
        return ( this.props.data ?
          <div className='sales-wrap'>
            { SalesData.map( item =>
              <SalesItem key={item.id}
                 salesHeadline={item.salesHeadline}
                 content={item.content}
                 expireDate={item.expireDate}
                 salesImgCaption={item.salesImgCaption}
              />) }
          </div> : <Spinner />
        );
    }
}

const mapStateToProps = state => ({
        spinner: state.spinner.spinner,
        data: state.spinner.data
     /*   showMessage: state.sendDataSpinner.showMessage*/
    });



const mapDispatchToProps = dispatch => ({
        waitSalesPage: () => dispatch(waitSalesPage()),
        waitSalesPageEnd: data => dispatch(waitSalesPageEnd(data))
    });


/*showError: data => dispatch(showMessage(data))*/

export default connect(mapStateToProps, mapDispatchToProps)(Sales)
