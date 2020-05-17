import React, {useState} from 'react';

const LocationContext = React.createContext()

export const LocationProvider = LocationContext.Provider
export const LocationConsumer = LocationContext.Consumer

export default LocationContext

// const LocationContext = React.createContext({
    
// })


// // const setLatLng=(lat,lng) => {
// //     setState(state => ({...state, lat: lat,lng:lng}))
// // }
// export const LocationProvider = (props) =>{
//     const [state, setState] = useState({
//         center:{
//             lat: 59.95,
//             lng: 30.33
//         },
//         zoom: 11
//     })
//     return(
//     <LocationContext.Provider value={[state, setState]}>
//         {props.children}
//     </LocationContext.Provider>
//     )
    
    
// }
    
// export const LocationConsumer = LocationContext.Consumer

// export default LocationContext