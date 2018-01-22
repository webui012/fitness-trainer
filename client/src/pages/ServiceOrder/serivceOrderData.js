import {renderField} from './renderField';
import {ageValidation, bodyParams, heightValidation, weightValidation} from '../../utils/orderFormValidation';

export const ServiceOrderData = {
  orderFormData: {
    serviceType: 'default',
    trainingPurpose: 'default'
  },
  serviceToogleFields: [
    {
      value: 'default',
      text: 'Выберите услугу...'
    },
    {
      value: 'trainonline',
      text: 'Онлайн тренировка 1 на 1'
    },
    {
      value: 'trainprogram',
      text: 'Програма тренировок'
    },
    {
      value: 'nutritionplan',
      text: 'План питания'
    },
  ],
  additionalInfoFields: {
    options: [
      {
        value: 'default',
        text: 'Выберите цель тернировок...'
      },
      {
        value: 'musclepower',
        text: 'Наростить мышечную массу'
      },
      {
        value: 'loseweight',
        text: 'Похудеть'
      },
      {
        value: 'beautybody',
        text: 'Создание рельефа тела'
      },
    ],
    fields: [
      {
        id: '1',
        name: 'age',
        component: renderField,
        validate: ageValidation,
        type: 'number',
        label: 'Возраст',
        placeholder: 'Возраст'
      },
      {
        id: '2',
        name: 'height',
        component: renderField,
        validate: heightValidation,
        type: 'number',
        label: 'Рост',
        placeholder: 'Рост в см'
      },
      {
        id: '3',
        name: 'weight',
        component: renderField,
        validate: weightValidation,
        type: 'number',
        label: 'Вес',
        placeholder: 'Вес в кг'
      },
      {
        id: '4',
        name: 'waist',
        component: renderField,
        validate: bodyParams,
        type: 'number',
        label: 'Талия',
        placeholder: 'Талия в см'
      },
      {
        id: '5',
        name: 'brest',
        component: renderField,
        validate: bodyParams,
        type: 'number',
        label: 'Грудь',
        placeholder: 'Грудь в см'
      },
      {
        id: '6',
        name: 'hip',
        component: renderField,
        validate: bodyParams,
        type: 'number',
        label: 'Бедро',
        placeholder: 'Бедро в см'
      },
      {
        id: '7',
        name: 'biceps',
        component: renderField,
        validate: bodyParams,
        type: 'number',
        label: 'Бицепс',
        placeholder: 'Бицепс в см'
      },
      {
        id: '8',
        name: 'neck',
        component: renderField,
        validate: bodyParams,
        type: 'number',
        label: 'Шея',
        placeholder: 'Шея в см'
      },
      {
        id: '9',
        name: 'contraindication',
        component: 'textarea',
        placeholder: 'Противопоказания'
      }
    ]
  }
};