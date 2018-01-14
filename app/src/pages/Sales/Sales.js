import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import SalesData from './SalesData';
import './Sales.scss';
import { waitSalesPage } from '../../redux/actions';
import { Card, Icon, Image, Button, Header } from 'semantic-ui-react'

class Sales extends Component {
  static propTypes = {
    spinner: PropTypes.bool,
    data: PropTypes.object,
    waitSalesPage: PropTypes.func
  };

  componentDidMount() {
    this.props.waitSalesPage();
  }

  renderSalesItem(sale, i) {
    return (
      <Card key={i} fluid>
        <Image src={sale.img}/>
        <Card.Content>
          <Card.Header>{sale.title}</Card.Header>
          <Card.Meta>до {sale.expireDate}</Card.Meta>
          <Card.Description>{sale.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button secondary color='green'>Подробнее</Button>
        </Card.Content>
      </Card>
    )
  }

  render() {
    return (
      this.props.data
      ? <div className='sales-wrapper'>
        <Header as='h1' textAlign='center'>{this.props.data.title}</Header>
        <div className='sales-content'>
          {this.props.data.salesData.map((item, i) => this.renderSalesItem(item, i))}
        </div>
      </div>
      : <Spinner/>);
  }
}

const mapStateToProps = state => ({
  sales: state.sales.sales,
  data: state.sales.data
  /* showMessage: state.sendDataSpinner.showMessage */
});

const mapDispatchToProps = dispatch => ({
  waitSalesPage: () => dispatch(waitSalesPage()),
  /* waitSalesPageEnd: data => dispatch(waitSalesPageEnd(data)) */
});

/* showError: data => dispatch(showMessage(data)) */

export default connect(mapStateToProps, mapDispatchToProps)(Sales)
