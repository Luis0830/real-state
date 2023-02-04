export default {
name: 'property',
title: 'property',
type:'document',
fields:[
    {
name: 'id',
title: 'id',
type: 'number',
    },
    {
        name: 'title',
        title: 'title',
        type: 'string',
    },
    {
        name: 'price',
        title: 'price',
        type: 'number',
    },
    {
        name: 'path',
        title: 'path',
        type: 'string',
    },
    {
        name: 'label',
        title: 'label',
        type: 'string',
    },
    {
        name: 'info',
        title: 'info',
        type: 'string',
    },
    // {
    //     name: 'image',
    //     title: 'image',
    //     type: 'array',
    //     of: [{type: 'propertyImage'}]

    // },
    {
        name: 'propertyType',
        title: 'property Type',
        type: 'string',
        options: {
            list: [
                {title: 'house', value: 'house'},
                {title: 'apartamento', value: 'apartamento'},
                {title: 'villa', value: 'villa'},
                {title: 'habitacion', value: 'habitacion'},

            ],
            layout: 'ratio'
        }
    },
    {
        name: 'image',
        title: 'image',
        type: 'array',

    },
]
}
// id: '111',
// title: 'Villas del mar',
// price: '2000,000,',
// path: '/inmueble',
// label: 'residencia',
// info: 'recidencia ubicada en las terrenas con vista al mar, contactanos para cotizaciones',
// scroll: 'A',
// image: ImagenA,
// room: 5,
// bath: 3,
// images: [{img:ImagenB}, {img:ImagenA}, {img:ImagenC}],
// alt: 'Recidencia'