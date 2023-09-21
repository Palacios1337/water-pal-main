import {Dimensions} from "react-native"
export const screenWidth=Dimensions.get("window").width;
export const screenHeight=Dimensions.get("window").height;
export const wpxToDp=(elepx)=>screenWidth*elepx/375
export const hpxToDp=(elepx)=>screenHeight*elepx/375