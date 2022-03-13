import {ADD_USER,GET_USER,DELETE_USER, UPDATE_USER} from "../actions/type"
const initialState={
  datas : [],
  loading:true,
  data:null
} 

 const userReducer = ( state = initialState, action) => {
  const { type, payload } = action;
  switch (type){
    case GET_USER:
      
      return {
        ...state,
        datas: payload,
        loading: false
      };

    case ADD_USER:
     return {
      ...state,
      datas: [...state.datas, payload]

     }
     case DELETE_USER:
      return {
        ...state,
        datas: state.datas.filter(
          data => data._id !== payload
        ),
        loading: false
      };
      case UPDATE_USER:
        return {
          ...state,
          datas: state.datas.map(data =>
            data._id === payload._id ? payload : data
          )
        };
     
  }
  return state
};

export default userReducer 