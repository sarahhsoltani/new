import React,{useState}  from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {addusernew} from "../redux/actions/user"
import {useDispatch} from 'react-redux'

const AddUser = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

const [input,setInput]=useState({nom:"",prenom:"", password:""})

const hanleChange=(e)=>{
    const {name,value}=e.target
    setInput({
        ...input,
        [name]:value
    })
    console.log("input",input)
}
const addNewUser=()=>{
dispatch (addusernew(input.nom, input.prenom,input.password )) 
console.log("inpuuuuuuuuuuuut",input)
setShow(false)
}
  return(
    <div className="mt-5"> 
    <div className='container mt-5'>
 <Button className="btn btn-oraange " onClick={handleShow}>
 <i className="fas me-2 fa-plus-circle"></i> 
   Add Menu
</Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header >

<Modal.Title className="title-modal">Add New Menu</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form >
<Form.Group controlId="formBasicEmail">
<Form.Label>Nom</Form.Label>
<Form.Control type="text" placeholder="title" name='nom' onChange={hanleChange} />

</Form.Group><Form.Group controlId="formBasicPassword">
<Form.Label>Prénom</Form.Label>
<Form.Control type="text" placeholder="enter year"  name='prenom' onChange={hanleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>password</Form.Label>
<Form.Control type="text" placeholder="enter description"  name="password" onChange={hanleChange}   />
</Form.Group>

<Button   className="ms-3  me-3 btn btn-secondary px-5  mt-3"  onClick={handleClose}>Close</Button>


<Button
className="btn btn-oraange  px-5 mt-3" 
onClick={addNewUser}>Save </Button>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default AddUser

      