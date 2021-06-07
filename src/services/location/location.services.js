import camelize from 'camelize'
import { locations } from './location.mock'

export const locationRequest = (searchTerm) =>{
    return new Promise( (resolve, reject) => {
        const locationMock = locations[searchTerm]
        if(!locationMock){
            reject("not found location !")
        }
        resolve(locationMock)
    })

}

export const locationTransform = (result) =>{
   
    const fomattedResponse = camelize(result)
    const { geometry = {}} =  fomattedResponse.results[0]
    const { lat, lng  } = geometry["location"]
    const { viewport } = geometry
    return {lat, lng, viewport}
}