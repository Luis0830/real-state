export default {
name: 'property',
title: 'property',
type:'document',
fields:[
    {
        name: 'project',
        title: 'project',
        type: 'string',
    },
    {
        name: 'title',
        title: 'title',
        type: 'string',
    },
    {
        name: 'details',
        title: 'details',
        type: 'string',
    },
  
    {
        name: 'location',
        title: 'location',
        type: 'string',
            },
            {
                name: 'status',
                title: 'status',
                type: 'string',
                    },
    {
        name: 'price',
        title: 'price',
        type: 'string',
    },
    {
        name: 'nivel',
        title: 'nivel',
        type: 'number',

    },
    {
        name: 'path',
        title: 'path',
        type: 'string',
    },
    {
        name: 'tipo',
        title: 'tipo',
        type: 'string',
    },
    {
        name: 'info',
        title: 'info',
        type: 'string',
    },
    {
        title: "Main Image",
        name: "mainImage",
        type: "image",
        options: {
          hotspot: true,
        },
      },

    {
        name: 'propertytype',
        title: 'propertytype',
        type: 'string',
        options: {
            list: [
                {title: 'house', value: 'Casa'},
                {title: 'apartamento', value: 'Apartamento'},
                {title: 'villa', value: 'Villa'},
                {title: 'habitacion', value: 'Habitacion'},

            ],
            layout: 'ratio'
        }
    },
    {
        name: 'beds',
        title: 'beds',
        type: 'number',

    },
    {
        name: 'mts',
        title: 'mts',
        type: 'string',

    }, 
    {
        name: 'mt2',
        title: 'mt2',
        type: 'number',

    },
    {
        name: 'bath',
        title: 'bath',
        type: 'number',

    },
    {
        name: 'park',
        title: 'park',
        type: 'number',

    },
    {
        name: 'patio',
        title: 'patio',
        type: 'string',

    },
    {
        title: 'Images',
        name: 'images',
        type: 'array',
        of: [{ type: 'image', options: { hotspot: true } }],
      },
      {
        title: "imagen 1",
        name: "img1",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        title: "imagen 2",
        name: "img2",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        title: "imagen 3",
        name: "img3",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        title: "imagen 4",
        name: "img4",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        title: "imagen 5",
        name: "img5",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        title: "imagen 6",
        name: "img6",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        title: "imagen 7",
        name: "img7",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        title: "imagen 8",
        name: "img8",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        title: "imagen 9",
        name: "img9",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        title: "imagen 10",
        name: "img10",
        type: "image",
        options: {
          hotspot: true,
        },
      },
],
// preview: {
//     title: 'name', media: 'image'
// }
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