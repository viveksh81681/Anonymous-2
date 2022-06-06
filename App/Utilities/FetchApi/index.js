import axios from 'axios';
import { Endpoints } from '../../Configs/Endpoints';
import { store } from '../../Redux/Store';




export const FetchApi = (endpoint,data) =>{
    console.log('ofjfn',store.getState());
    return new Promise(async(resolve, reject)=>{
        let options = {
            'content-type' : 'application/json'
        };
        if(store.getState().token){
            options["jwt"] = store.getState().token;
        }
        try{
            let resp = await axios({
                headers : options,
                method : data ? 'POST' : 'GET',
                baseURL : Endpoints.base_url,
                url : endpoint,
                data : data ? data : {}
            });
            console.log('resphbhh',JSON.stringify(resp,null,4));
            resolve(resp.data);
        }
        catch(e){
            console.log('e',e);
            reject(e);
        }
    })
}