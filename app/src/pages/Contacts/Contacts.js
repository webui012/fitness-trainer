import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './Contacts.scss';
import { Map, ContactsField} from 'Components';
import { connect } from 'react-redux';
import { constantsGetData } from '../../redux/actions';
import { Card, Icon, Image, Button, Header, Loader, Dimmer } from 'semantic-ui-react'


class Contacts extends Component {

  static propTypes = {
    key: PropTypes.number,
    title: PropTypes.string,
    mainTitle: PropTypes.string,
    fields: PropTypes.array,
    data: PropTypes.object,
    mapData: PropTypes.object
  };

  componentDidMount() {
    this.props.constantsGetData();
  }

  render() {
    return (this.props.data
      ?<div className='contacts'>
        <p className='contacts-title'>{this.props.data.mainTitle}</p>
        <div className='wrap-contacts-info'>
          <div className='wrap-contacts-field'>
            <span className='contacts-field-text-title'>{this.props.data.title}</span>
            {this.props.data.fields.map( item =>
              <ContactsField
                  key={item.id}
                  data={item.data}
            />)}
          </div>
          <Map data={this.props.data.mapData} />
        </div>
      </div>
      : <Dimmer active inverted>
          <Loader inverted content='Загрузка' />
        </Dimmer>
    )
  }
}

const mapStateToProps = state => ({
  data: state.contactsGetData.data
});

const mapDispatchToProps = dispatch => ({
  constantsGetData: () => dispatch(constantsGetData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
