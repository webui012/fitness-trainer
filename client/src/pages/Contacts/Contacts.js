import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Contacts.scss';
import { Map, ContactsField } from 'Components';
import { connect } from 'react-redux';
import { constantsGetData } from '../../redux/actions';
import { List, Dimmer, Loader } from 'semantic-ui-react';

class Contacts extends Component {

  static propTypes = {
    key: PropTypes.number,
    title: PropTypes.string,
    mainTitle: PropTypes.string,
    fields: PropTypes.array,
    data: PropTypes.object,
    mapData: PropTypes.object,
  };

  componentDidMount() {
    this.props.constantsGetData();
  };

  render() {
    return (this.props.data
      ? <div className='page-wrapper contacts-wrapper'>
        <div className='page-content contacts-content'>
          <div className='block contacts-block'>
            <span className='contacts-block-title'>{this.props.data.title}</span>
            <List>
              {this.props.data.fields.map(field =>
                <List.Item className='s' key={field.id}>
                  <List.Icon name={field.icon} />
                  <List.Content>{field.data}</List.Content>
                </List.Item>
              )}
            </List>
          </div>
          <Map data={this.props.data.mapData} />
        </div>
      </div>
      : <Dimmer active inverted>
        <Loader inverted content='Загрузка' />
      </Dimmer>
    );
  }
}

const mapStateToProps = state => ({
  data: state.contactsGetData.data,
});

const mapDispatchToProps = dispatch => ({
  constantsGetData: () => dispatch(constantsGetData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
