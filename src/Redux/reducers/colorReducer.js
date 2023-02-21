import {SET_COLOR} from '../types/types'
const initialState = {
    color : "red"
  };
export const color_reducer = (state=initialState,action) =>{
    console.log(action, 'first');
    switch(action.type){
        case SET_COLOR :
            {
                console.log(action.payload.color);
                return {
                    ...state,
                    color : action.payload.color
                }
            }
        default: return state
    }

}