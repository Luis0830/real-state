import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "m4z2cfaq", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: '2023-02-04',
  useCdn: true,
});

//example: const sanityClient = require('@sanity/client')

// const client = sanityClient({
//   projectId: 'm4z2cfaq',
//   dataset: 'bikeshop',
//   apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
//   token: 'sanity-auth-token', // or leave blank for unauthenticated usage
//   useCdn: true, // `false` if you want to ensure fresh data
// })

// export default client