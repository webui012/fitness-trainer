import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SalesItem } from 'Components';
import Spinner from '../../components/Spinner/Spinner';
import SalesData from './SalesData';
import './Sales.scss';
import { connect } from 'react-redux';
import { waitSalesPage, waitSalesPageEnd } from '../../redux/actions/sales';

class Sales extends Component{

    static propTypes = {
        spinner: PropTypes.bool,
        data: PropTypes.array
    };


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
        sales: state.sales.sales,
        data: state.sales.data
     /*   showMessage: state.sendDataSpinner.showMessage*/
    });



const mapDispatchToProps = dispatch => ({
        waitSalesPage: () => dispatch(waitSalesPage()),
        waitSalesPageEnd: data => dispatch(waitSalesPageEnd(data))
    });


/*showError: data => dispatch(showMessage(data))*/

export default connect(mapStateToProps, mapDispatchToProps)(Sales)
