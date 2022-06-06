import { Dimensions } from "react-native";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const HP = (val)=> (Height*val)/100;
const WP = (val)=> (Width*val)/100;

export const Sizes = {
    Width,
    Height,
    HP,
    WP
}