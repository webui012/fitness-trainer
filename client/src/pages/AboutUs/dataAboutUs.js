import avatar from '../../images/about_us_avatar.png';

export const dataAboutUs = {
  fullNameAvatar: {
    defaultAvatar: avatar,
    userAvatar: null,
  },

  fullNameFields: [
    {
      type: 'text',
      placeholder: 'Имя',
      ref: 'name',
      id: 'ecl09xzvrm',
      nameField: 'Имя',
    },
    {
      type: 'text',
      placeholder: 'Фамилия',
      ref: 'surname',
      id: '6cl4w8pu86',
      nameField: 'Фамилия',
    },
    {
      type: 'date',
      placeholder: 'День рождения',
      ref: 'birth',
      id: '6cl4w8pu80',
      nameField: 'День рождения',
    },
    {
      type: 'number',
      placeholder: 'Рост(см)',
      ref: 'height',
      id: '6cl4w8pq45',
      nameField: 'Рост(см)',
    },
    {
      type: 'number',
      placeholder: 'Вес(кг)',
      ref: 'weight',
      id: '6cl4w8ree7',
      nameField: 'Вес(кг)',
    },
  ],

  dataFields: {
    fieldsMeasuredDataForm: [
      {
        type: 'number',
        nameField: 'Бицепс(см)',
        ref: 'biceps',
        placeholder: 'Введите обхват бицепса',
      },
      {
        type: 'number',
        nameField: 'Ягодицы(см)',
        ref: 'buttocks',
        placeholder: 'Введите обхват ягодиц',
      },
      {
        type: 'number',
        nameField: 'Голень(см)',
        ref: 'shin',
        placeholder: 'Введите обхват голени',
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
