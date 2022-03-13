import React,{useState} from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {updateUsers} from "../redux/actions/user"
import {useDispatch} from 'react-redux'

const UpdateUser = ({el,id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [update,setupdate]=useState({nom:el.nom,prenom:el.prenom,password:el.password})
    // handelInput
    const handleChange=(e)=>{
        const {name,value}=e.target
        setupdate({
            ...update,
            [name]:value
        })
        console.log("input",update)
    }
    // update Menu

    const updateOurUser=()=>{
        dispatch (updateUsers(id,update.nom, update.prenom,update.password )) 
        console.log("update",update)
        setShow(false)
        }


  return(
    <div>
    <div className='container '>
 <Button className="btn btn-warning" onClick={handleShow}>
 <i className="fas  fa-pen-fancy me-2"></i> 
   Update
</Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Modifier User</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form >
<Form.Group controlId="formBasicEmail">
<Form.Label>nom</Form.Label>
<Form.Control type="text" placeholder="title" name='nom' defaultValue={el.nom}  onChange={handleChange}/>

</Form.Group><Form.Group controlId="formBasicPassword">
<Form.Label>prenom</Form.Label>
<Form.Control type="text" placeholder="enter year"  name='prenom' defaultValue={el.prenom}  onChange={handleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>password</Form.Label>
<Form.Control type="text" placeholder="enter image"  name='password'  defaultValue={el.password}   onChange={handleChange} />
</Form.Group>



<Button className="ms-3  mt-3" variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button onClick={updateOurUser} >valider</Button>
</Form>  
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default UpdateUser