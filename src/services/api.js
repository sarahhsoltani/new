import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:4000" });

//addMenu
function addNewUser(nom, prenom,password,tel ) {
    return Api.post("/formUser/addUser", { nom, prenom,password,tel});
  }

  //getMenu
  function getAllUsers() {
    return Api.get("/formUser/getUser");
  }

//deleteMenu
function deleteUser(id) {
    return Api.delete(`/formUser/deleteUser/${id}`);
  }

  //update Menu 

  function updateUser(id) {
    return Api.put(`/formUser/updateUser/${id}`);
  }

   

 


  export {addNewUser,getAllUsers,deleteUser,updateUser} 
  export default {addNewUser,getAllUsers,deleteUser,updateUser}