import React from 'react';
import { Endpoints } from '../../Configs/Endpoints';
import { SaveUserData_, SaveVehicleInfo_ } from '../../Redux/Actions';
import { SAVE_VEHICLE_INFO } from '../../Redux/ActionTypes';
import { FetchApi } from '../FetchApi';


export const _ProfileInfo = async()=>{
    try{
        let resp = await FetchApi(Endpoints.get_profile);
        console.log('resp',JSON.stringify(resp,null,4));
        SaveUserData_(resp.data);
        return resp;
    }
    catch(e){
        console.log('e',e);
    }
}

export const _GetVehicleInfo = async()=>{
    try{
        let resp = await FetchApi(Endpoints.get_vehicle_info);
        console.log('respknkn',JSON.stringify(resp,null,4));
        SaveVehicleInfo_(resp.data);
    }
    catch(e){
        console.log('e',e);
    }
}