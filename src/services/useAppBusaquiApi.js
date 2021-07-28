import Geocoder from "react-native-geocoding";
import { MapsAPI } from '../services/config';
export default () => ({
     signin:(email,  password) => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let json = {
                    error:'',
                    token:'123'
                };
                resolve(json);
            }, 1000);
        });
     },
     signup:(name, email, password) => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let json = {
                    error:''
                };
                if(email == 'erro@hotmail.com'){
                     json.error = 'Esse e-mail já existe!';  
                } else {
                    json.token = '123';
                }
                resolve(json);
            }, 1000);
        });
     }
});

export const makeLocationSearch = function(locTxt) {
        
    return new Promise(function(resolve, reject){
        
        setTimeout(async () => {
            Geocoder.init(MapsAPI, {language:'pt-br'});
            console.log("FAZENDO PESQUISA!");
            const geo = await Geocoder.from(locTxt);
            console.log("RESULTADO: ",geo.results.length);
            if(geo.results.length > 0) { 
                let array = [];
                for(let i in geo.results){
                    array.push({
                        address:geo.results[i].formatted_address,
                        latitude:geo.results[i].geometry.location.lat,
                        longitude:geo.results[0].geometry.location.lng,
                    });
                }
                resolve(array);
            } else {
                resolve([]);
            }
            
            
        }, 1000);
    });
}