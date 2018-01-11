import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './Contacts.scss';
import { Map, ContactsField, Spinner } from 'Components';
import { connect } from 'react-redux';
import { pageLoadingContacts, pageLoadingEndContacts } from '../../redux/actions';
import Api from '../../redux/Api';

class Contacts extends Component{

  componentDidMount() {
    this.props.pageLoadingContacts()
  }

  render() {

    return (this.props.data ?
      <div className='contacts'>
        <p className='contacts-title'>{this.props.data.mainTitle}</p>
        <div className='wrap-contacts-field'>
          <span className='contacts-field-text-title'>{this.props.data.title}</span>
          {this.props.data.fields.map( item =>
            <ContactsField
                key={item.id}
                data={item.data}
          />)}
        </div>
        <Map data={this.props.data.mapData} />
      </div> : <Spinner />
    )
  }
}

Contacts.propTypes = {
  key: PropTypes.number,
  title: PropTypes.string,
  mainTitle: PropTypes.string,
  fields: PropTypes.array,
  data: PropTypes.object,
  mapData: PropTypes.object
};

const mapStateToProps = state => ({
  data: state.Contacts.data
});

const mapDispatchToProps = dispatch => ({
  pageLoadingContacts: () => dispatch(pageLoadingContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
