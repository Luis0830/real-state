import React, { useState, useEffect } from "react";
import {client} from "../lib/client";
import sanityClient from "../lib/client";


const Persona = () => {


    const [properties, setProperties] = useState(null);

    useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "property"]{
      title,
      id,
      price,
      path,
    }`
			)
			.then((data) => setProperties(data))
			.catch(console.error);
	}, []);



//    function Homepage() {
//         const [properties, setProperties] = useState([]);
    
//         useEffect(() => {
//             client.fetch(
//                 `*[_type == "post"] {
//                     info,
//                     id,
//                     title,
//                     path,
//                    }`
//             ).then((data) => {
//                 setProperties(data)
//                 console.log(data)
//             })
//             .catch(console.error);
//         }, [])
//     }

  return (
   <>
    {properties && properties.map((property) => ( <div>
        <h1>{property.id}</h1>
        <h1>{property.title}</h1>
        <h1>HOls HOla HOLA HOLa</h1>
    </div>
  ))}
   </>
);
    };

export default Persona