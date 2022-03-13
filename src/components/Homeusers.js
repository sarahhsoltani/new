import React ,{useEffect}from 'react'

import {useSelector,useDispatch} from 'react-redux'
import {getUserAPI,deleteUsers} from "../redux/actions/user"
import AddUser from './addUser';
import UpdateUser from "./updateUser"



const HomeUser = () => {
const datas = useSelector(state => state.datas)
// const loading = useSelector(state => state.menuReducer.loading)
const dispatch = useDispatch()
// const [input,setInput]=useState({title:"",price:"", image:"" ,description:""})

// const hanleChange=(e)=>{
//     const {name,value}=e.target
//     setInput({
//         ...input,
//         [name]:value
//     })
//     console.log("input",input)
// }
//getMenu
  useEffect(() => {
  dispatch(getUserAPI())
     }, [dispatch])
  console.log("myyyydata",datas)
//   //DeleteMenu
  const deleteUserss=(id)=>{
    dispatch (deleteUsers(id)) 
    // console.log(deleteMenu(id))
  }
  return(
    <div>

     <h1>Home User</h1>
   
      {/* --------------End Navbar-------------- */}
     
      <AddUser/>
{/*       
      {loading? <div className="text-center w-100"> <Spinner animation="grow" variant="success" />
              <Spinner animation="grow" variant="danger" />
              <Spinner animation="grow" variant="warning" /></div> :
      datas.length===0 ? <div  className="text-center"> Aucune publication disponible actuellement</div>:
       <div className="d-flex justify-content-around mt-5" >
    
            </div> } */}
               <div className='d-flex mt-5 '>
               {datas.map((el,key )=> (
              <div className="card w-50  h-25 text-center mx-5" key={key}>
              
              <div className="card-body">
              <h5 className="card-title">{el.nom}</h5>
                <p className="card-text">{el.prenom}</p>
                <p className="card-text"><small className="menu-price">{el.password}</small></p>
              
                <div className="d-flex justify-content-around">
                 <button className="btn btn-danger  h-25" onClick={() => deleteUserss(el._id)}> 
                <i class="fas me-2 fa-minus-circle"></i>
                 delete</button>
                <UpdateUser id={el._id}  el={el}/>
                </div>
              </div>
            </div>
        ))} 

               </div>
            <div className="container-fluid pied-page text-center pt-3 mt-5">
      <div className="row">
       
       <div className="col-md-10">
           <p>Copyright ©2021 All rights reserved | By Sarah </p>
       </div>
       <div className="col-md-2">
          
              
              <a href="kkk"><i className="fab fa-facebook me-2"></i></a>
              <a href="kkk"><i className="fab fa-twitter me-2"></i></a>
              <a href="kkk"><i className="fab fa-youtube me-2"></i></a>
              <a href="kkk"><i className="fab fa-instagram"></i></a>
      
          
       </div>
      </div>
   </div>
    </div>
   )

 }

export default HomeUser