import avatar from '../../images/about_us_avatar.png';
import bodyImg from '../../images/body-sizes.jpg';

export const fullNameAvatar = {
  defaultAvatar: avatar,
  userAvatar: null
}

export const bodySizesImg = bodyImg

export const fullNameFields = [
  {
    type: 'text',
    placeholder: 'Имя',
    ref: 'name',
    id: 'ecl09xzvrm'
  },
  {
    type: 'text',
    placeholder: 'Отчество',
    ref: 'patronymic',
    id: '9gwqnfzri6'
  },
  {
    type: 'text',
    placeholder: 'Фамилия',
    ref: 'surname',
    id: '6cl4w8pu86'
  }
];

export const data = {
    fieldsMeasuredDataForm:
        [
            {
                type: 'text',
                nameField: 'возраст',
                placeholder: 'Введите '
            },
            {
                type: 'text',
                nameField: 'рост',
                placeholder: 'Введите '
            },
            {
                type: 'text',
                nameField: 'вес',
                placeholder: 'Введите '
            },
            {
                type: 'text',
                nameField: 'обхват шеи',
                placeholder: 'Введите '
            },
            {
                type: 'text',
                nameField: 'обхват груди',
                placeholder: 'Введите '
            },
            {
                type: 'text',
                nameField: 'обхват талии',
                placeholder: 'Введите '
            },
            {
                type: 'text',
                nameField: 'обхват бедер',
                placeholder: 'Введите '
            },
            {
                type: 'text',
                nameField: 'высоту ног',
                placeholder: 'Введите '
            }
        ],

    MeasuredData: {
        name: 'form',
        action: '#',
        method: 'POST',
        legendName: 'Замеры тела'
    }
}

export const aimsFormData = {
    nameField: 'Цель тренировок',
    selectName: 'aimsSelect',
    options:[
        {
            optionValue:'weightDown',
            optionInfo: 'Похудеть'
        },
        {
            optionValue:'weightUp',
            optionInfo: 'Набрать вес'
        },
        {
            optionValue:'relief',
            optionInfo: 'Рельеф'
        },
        {
            optionValue:'press',
            optionInfo: 'Пресс'
        },
        {
            optionValue:'biceps',
            optionInfo: 'Бицeпс'
        }
    ]
}