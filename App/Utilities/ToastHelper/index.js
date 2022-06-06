import { Platform } from "react-native";
import {showMessage} from "react-native-flash-message";
import Fonts from "../../Configs/Fonts";

// import { RNToasty } from "react-native-toasty";
function Message({type, message}){
    if(type=="Success"){
        showMessage({
            style : {paddingTop : Platform.OS=="android" ? 30 : 0},
            titleStyle : {fontFamily : Fonts.SemiBold},
            type : 'success',
            message : message,
            icon : 'danger'
        })
        // RNToasty.Success({title : message});
        // alert(message);
    }
    if(type=="Error"){
        // alert(message);
        showMessage({
            style : {paddingTop : Platform.OS=="android" ? 30 : 0},
            titleStyle : {fontFamily : Fonts.SemiBold},
            type : 'danger',
            message,
            icon : 'danger'
        })
        // RNToasty.Error({title : message});
    }
    // alert(message);
}
const ToastMessage = {
    Success : (message)=> Message({type:'Success',message}),
    Error : (message) =>Message({type : 'Error',message})
}

export default ToastMessage;