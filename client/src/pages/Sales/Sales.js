import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SalesData from './SalesData';
import './Sales.scss';
import { waitSalesPage } from '../../redux/actions';
import { Card, Icon, Image, Button, Header, Loader, Dimmer, Modal } from 'semantic-ui-react'

class Sales extends Component {
    // static propTypes = {
    //   spinner: PropTypes.bool,
    //   data: PropTypes.object,
    //   waitSalesPage: PropTypes.func
    // };

    componentDidMount() {
        this.props.waitSalesPage();
    }

    renderSalesItem(sale, i) {
        return (
            <Card key={i} fluid>
                <Image src={sale.img} />
                <Card.Content>
                    <Card.Header>{sale.title}</Card.Header>
                    <Card.Meta>до {sale.expireDate}</Card.Meta>
                    <Card.Description>{sale.description}</Card.Description>
                </Card.Content>

                <Modal trigger={<Button secondary>Подробнее</Button>}>
                    <Modal.Header>Подробнее про акцию</Modal.Header>
                    <Modal.Content image>
                        <Modal.Description>
                            <Image wrapped size='large' src={sale.img} />
                            <Header>{sale.title}</Header>
                            <div className="wrap-text">до {sale.expireDate}</div>
                            <p className="wrap-desc">{sale.longDescription}</p>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Card>
        )
    }

    render() {
        return (
            this.props.data
                ? <section className='page-wrapper sales-wrapper'>
                <h1 className='page-title'>Акции</h1>
                <div className='sales-content'>
                    {this.props.data.map((item, i) => this.renderSalesItem(item, i))}
                </div>
            </section>
                : <Dimmer active inverted>
                <Loader inverted content='Загрузка' />
            </Dimmer>);
    }
}

const mapStateToProps = state => ({ data: state.sales.sales });

const mapDispatchToProps = dispatch => ({
    waitSalesPage: () => dispatch(waitSalesPage()),
    /* waitSalesPageEnd: data => dispatch(waitSalesPageEnd(data)) */
});

/* showError: data => dispatch(showMessage(data)) */

export default connect(mapStateToProps, mapDispatchToProps)(Sales);
