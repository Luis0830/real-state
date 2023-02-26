// In your schema.js file
export default {
    name: 'post',
    type: 'document',
    fields: [
      // Other fields...
      {
        name: 'video',
        type: 'file',
        title: 'Video',
        accept: 'video/*',
        description: 'Upload a video to associate with this post'
      }
    ]
  }
  