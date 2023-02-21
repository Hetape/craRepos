import {SET_COLOR} from '../types/types';
export const SetColor = (color) =>{
    return{
       type:SET_COLOR,
       payload:{
        color : color
       }
    }
}