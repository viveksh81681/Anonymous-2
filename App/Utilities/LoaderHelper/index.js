import { Loader_Ref } from "../ModalRef"

export const StartLoader = () =>{
    console.log('hndskn')
    Loader_Ref.current.startLoader();
}

export const StopLoader = () =>{
    Loader_Ref.current.stopLoader();
}