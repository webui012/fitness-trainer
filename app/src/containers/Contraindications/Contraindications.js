import React, { Component } from 'react';
import './Contraindications.scss';

class Contraindications extends Component {

  render() {
    return (
      <form className='Contraindications'>
        <textarea className='text' placeholder='Введите противопоказания'></textarea>
        <input type='submit' value='Сохранить данные' className='submit-contraindications' />
      </form>
    )
  }
}

export default Contraindications;
