import React, {Component} from 'react';
import './AdditionalInfoFields.scss';

class AdditionalInfoFields extends Component {
  render(){
    return (
      <div className='additional-info'>
        <h2>Персональные данные</h2>
        <select value={{/*this.state.value*/}} onChange={{/*this.handleChange*/}}>
          <option value='musclepower'>Наростить мышечную массу</option>
          <option value='loseweight'>Похудеть</option>
          <option value='beautybody'>Создание рельефа тела</option>
        </select>
        <input type='number' placeholder='Рост в см' />
        <input type='number' placeholder='Вес в кг' />
        <input type='number' placeholder='Возраст' />
        <input type='number' placeholder='Талия в см' />
        <input type='number' placeholder='Грудь в см' />
        <input type='number' placeholder='Бедро в см' />
        <input type='number' placeholder='Бицепс в см' />
        <textarea placeholder='Противопоказания'></textarea>
        <button>Назад</button>
        <button>Далее</button>
      </div>
    )
  }
}

export default AdditionalInfoFields