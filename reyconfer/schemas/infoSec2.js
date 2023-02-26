export default {
    name: 'infoSec2',
    title: 'infoSec2',
    type:'document',
    fields:[
        {
            name: 'title',
            title: 'title',
            type: 'string',
        },
        {
            name: 'torf',
            title: 'torf',
            type: 'boolean',
        },
        {
            name: 'price',
            title: 'price',
            type: 'string',
        },
        {
            name: 'description',
            title: 'description',
            type: 'string',
        },
        {
            name: 'label',
            title: 'label',
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
        

    ],
}