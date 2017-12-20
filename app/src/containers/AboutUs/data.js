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
                nameField: 'возраст',
                placeholder: 'Введите '
            },
            {
                nameField: 'рост',
                placeholder: 'Введите '
            },
            {
                nameField: 'вес',
                placeholder: 'Введите '
            },
            {
                nameField: 'обхват шеи',
                placeholder: 'Введите '
            },
            {
                nameField: 'обхват груди',
                placeholder: 'Введите '
            },
            {
                nameField: 'обхват талии',
                placeholder: 'Введите '
            },
            {
                nameField: 'обхват бедер',
                placeholder: 'Введите '
            },
            {
                nameField: 'высоту ног',
                placeholder: 'Введите '
            }
        ]
}
