import React, {useState ,useContext} from 'react';
import {Link,useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import {v4 as uuid } from 'uuid';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
}from 'reactstrap';


export const AddUser = () => {
    const [name,setName ] = useState("");
    const  { addUser } = useContext(GlobalContext);
    // const history = useHistory();
    const Navigate = useNavigate();

const onSubmit = (e) =>{
    e.preventDefault()
    // console.log("Onsubmit")

    const newUser = {
        id: uuid(),
        name
    }
    // return console.log(newUser)
    addUser(newUser);
    // history.push('/');
    Navigate('/', {replace: true})

}

const onChangeHandle = (e) =>{
    // console.log(e.target.value)
    // console.log(e.target.value)
    setName(e.target.value);
    
    // return
}

    return (
        // console.log(name),
        <Form onSubmit={onSubmit}>
        <FormGroup>
        <Label>Name</Label>
        <Input type="text"
         value={name}
        //  onChange={(e) => setName(e.target.value)}
          onChange={onChangeHandle} 
        //   placeholder="Enter Name"
          ></Input>
        </FormGroup>
        <Button type="submit"> Submit</Button>
        <Link to="/" className='btn btn-danger ml-2'> cancel </Link>

        </Form>
    )
}

