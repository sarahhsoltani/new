import {ADD_USER ,GET_USER,DELETE_USER,UPDATE_USER } from "./type"

import {addNewUser,getAllUsers,deleteUser,updateUser}   from "../../services/api"
import axios from "axios"


// export const addUserApi=(nom, prenom,password,tel  )=> async (dispatch) =>{
//     try{ 
//         const res=await axios.post("http://localhost:4000/formUser/addUser", {nom, prenom,password,tel} );
//         dispatch ({
//             type:ADD_USER,
//             payload:res.data
//         })
//         console.log("payload add user")
//     }
//     catch (error) {
//               console.log(error);
//              }
// }
export const addusernew = (
    nom, prenom,password
  ) => async dispatch => {
    try {
      const res = await axios.post("http://localhost:4000/formUser/addUser", {
        nom, prenom,password
      });
      dispatch({
        type: ADD_USER,
        payload: res.data
      })
      console.log("add useeeer")
      ;
    } catch (error) {
      console.log(error);
    }
  };
//getALL
export const getUserAPI=()=>async (dispatch)=> {
try{
const res=await getAllUsers ();
dispatch({
    type:GET_USER,
    payload:res.data
})
}
catch (error) {
              console.log(error);
             }
}
//deleteMenu

export const deleteUsers = (id)=> async (dispatch) => {
    try {
      await deleteUser (id);
      dispatch({
        type:DELETE_USER,
        payload:id
    })
      console.log("delete")
      dispatch(getUserAPI);
    } catch (error) {
      console.log(error);
    }
  };
// update Menu
export const updateUsers = (nom, prenom,password,id ) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:4000/formUser/updateUser/${id}`,{nom, prenom,password}) 
       
      dispatch({
        type: UPDATE_USER, 
        payload: res.data
      });
      console.log("superrr")
    } catch (error) {
      console.log(error);
    }
  };
