// import {useState, useEffect} from "react";
// import {client} from "../lib/client";

// export default function Homepage() {
//     const [properties, setProperties] = useState([]);

//     useEffect(() => {
//         client.fetch(
//             `*[_type == "post"] {
//                 info,
//                 id,
//                 title,
//                 path,
//                }`
//         ).then((data) => {
//             setProperties(data)
//             console.log(data)
//         })
//         .catch(console.error);
//     }, [])
// }