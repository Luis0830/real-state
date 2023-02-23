export default {
    name: 'slides',
    title: 'slides',
    type:'document',
    fields:[
        {
            name: 'project',
            title: 'project',
            type: 'string',
        },
        {
            name: 'video',
            title: 'video',
            type: 'file',
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
            title: "Main Image",
            name: "mainImage",
            type: "image",
            options: {
              hotspot: true,
            },
          },
        

    ],
}