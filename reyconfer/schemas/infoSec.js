export default {
    name: 'infoSec',
    title: 'infoSec',
    type:'document',
    fields:[
        {
            name: 'title',
            title: 'title',
            type: 'string',
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