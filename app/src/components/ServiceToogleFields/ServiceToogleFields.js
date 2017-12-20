import React, {Component} from 'react';
import './ServiceToogleFields.scss';

class ServiceToogleFields extends Component {
  render(){
    return (
      <div className='service-toogle'>
        <h2>Выбор услуги </h2>
        <select value={{/*this.state.value*/}} onChange={{/*this.handleChange*/}}>
          <option value='trainonline'>Онлайн треинровка 1 на 1</option>
          <option value='trainprogram'>Програма тренировок</option>
          <option value='nutritionplan'>План питания</option>
        </select>
        <button>Далее</button>
      </div>
    )
  }
}

export default ServiceToogleFields