import avatar from '../../images/about_us_avatar.png';
import bodyImg from '../../images/body-sizes.jpg';

export const dataAboutUs = {
  fullNameAvatar: {
    defaultAvatar: avatar,
    userAvatar: null,
  },

  bodySizesImg: bodyImg,

  fullNameFields: [
    {
      type: 'text',
      placeholder: 'Имя',
      ref: 'name',
      id: 'ecl09xzvrm',
    },
    {
      type: 'text',
      placeholder: 'Фамилия',
      ref: 'surname',
      id: '6cl4w8pu86',
    },
  ],

  dataFields: {
    fieldsMeasuredDataForm: [
      {
        type: 'number',
        nameField: 'Возраст(лет)',
        ref: 'age',
        placeholder: 'Введите возраст',
      },
      {
        type: 'number',
        nameField: 'Рост(см)',
        ref: 'height',
        placeholder: 'Введите рост',
      },
      {
        type: 'number',
        nameField: 'Вес(кг)',
        ref: 'weight',
        placeholder: 'Введите вес',
      },
      {
        type: 'number',
        nameField: 'Шея(см)',
        ref: 'neck',
        placeholder: 'Введите обхват шеи',
      },
      {
        type: 'number',
        nameField: 'Грудь(см)',
        ref: 'breast',
        placeholder: 'Введите обхват груди',
      },
      {
        type: 'number',
        nameField: 'Талия(см)',
        ref: 'tail',
        placeholder: 'Введите обхват талии',
      },
      {
        type: 'number',
        nameField: 'Бедра(см)',
        ref: 'hips',
        placeholder: 'Введите обхват бедер',
      },
    ],

    MeasuredData: {
      name: 'form',
      action: '#',
      method: 'POST',
      legendName: 'Замеры тела',
    },
  },

  aimsFormData: {
    nameField: 'Цель тренировок',
    selectName: 'aimsSelect',
    options: [
      {
        optionValue: 'weightDown',
        optionInfo: 'Похудеть',
      },
      {
        optionValue: 'weightUp',
        optionInfo: 'Набрать вес',
      },
      {
        optionValue: 'relief',
        optionInfo: 'Рельеф',
      },
      {
        optionValue: 'press',
        optionInfo: 'Пресс',
      },
      {
        optionValue: 'biceps',
        optionInfo: 'Бицeпс',
      },
    ],
  },

  formData: {},
};
