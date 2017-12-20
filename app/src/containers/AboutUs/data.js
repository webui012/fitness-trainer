import avatar from '../../images/about_us_avatar.png';

export const fullNameAvatar = {
  defaultAvatar: avatar,
  userAvatar: null
}

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
  },
];

export const data = {
    fieldsMeasuredDataForm:
        [
            {
                nameField: 'Age',
                placeholder: 'Enter your'
            },
            {
                nameField: 'Height',
                placeholder: 'Enter your'
            },
            {
                nameField: 'Weight',
                placeholder: 'Enter your'
            },
            {
                nameField: 'Neck',
                placeholder: 'Enter your'
            },
            {
                nameField: 'Breast',
                placeholder: 'Enter your'
            },
            {
                nameField: 'Waist',
                placeholder: 'Enter your'
            },
            {
                nameField: 'Hips',
                placeholder: 'Enter your'
            },
            {
                nameField: 'Height of legs',
                placeholder: 'Enter your'
            }
        ]
}
