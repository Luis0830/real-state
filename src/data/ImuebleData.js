import ImagenA from '../images/imagen1.jpeg'
import ImagenB from '../images/imagen2.jpeg'
import ImagenC from '../images/imagen3.jpeg'

export const ImuebleData= [
    {   
        id: '111',
        title: 'Villas del mar',
        price: '2000,000,',
        path: '/inmueble',
        label: 'residencia',
        info: 'recidencia ubicada en las terrenas con vista al mar, contactanos para cotizaciones',
        scroll: 'A',
        image: ImagenA,
        room: 5,
        bath: 3,
        images: [{img:ImagenB}, {img:ImagenA}, {img:ImagenC}],
        alt: 'Recidencia'
    },
    {
        id: '112',
        title: 'Mar-e-Lago Residence',
        price: 'desde 1500USD',
        path: '/inmueble',
        label: 'informacion',
        info: 'recidencia ubicada en las terrenas con vista al mar, contactanos para cotizaciones',
        image: ImagenB,
        room: 5,
        bath: 3,
        images: [{img:ImagenC}, {img:ImagenB}, {img:ImagenA}],
        alt: 'Recidencia'
    },
    {   
        id: '113',
        title: 'Mar-e-Lago Residence',
        price: 'desde 2500USD',
        path: '/inmueble',
        label: 'informacion',
        info: 'recidencia ubicada en las terrenas con vista al mar, contactanos para cotizaciones',
        image: ImagenC,
        room: 5,
        bath: 3,
        images: [{img:ImagenB}, {img:ImagenA}, {img:ImagenC}],
        alt: 'Recidencia'
    },
    {   
        id: '114',
        title: 'Mar-e-Lago Residence',
        price: 'desde 3500USD',
        path: '/inmueble',
        label: 'informacion',
        info: 'recidencia ubicada en las terrenas con vista al mar, contactanos para cotizaciones',
        image: ImagenC,
        room: 5,
        bath: 3,
        images: [{img:ImagenA}, {img:ImagenB}, {img:ImagenC}],
        alt: 'Recidencia'
    },
    {   
        id: '115',
        title: 'Mar-e-Lago Residence',
        price: 'desde 4500USD',
        path: '/inmueble',
        label: 'informacion',
        info: 'recidencia ubicada en las terrenas con vista al mar, contactanos para cotizaciones',
        image: ImagenC,
        room: 5,
        bath: 3,
        images: [ {img:ImagenB}, {img:ImagenA}, {img:ImagenC}],
        alt: 'Recidencia'
    }
]
