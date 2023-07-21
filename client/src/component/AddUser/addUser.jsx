import { FormGroup,FormControl ,InputLabel,Input,Typography,styled,Button} from "@mui/material";
import { useState } from "react";
import { addUser } from "../../api";
import Header from '../Header/header';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled(FormGroup)`
    width: 50%;
    margin:5% auto 0 auto ;
    & > div{
        margin-top:20px;
    }
`;

const defaultvalue = {
    name:'',
    username:'',
    email:'',
    phone:'',
}

const AddUser = () => {
    
    const [user,setUser]= useState(defaultvalue);
    const onChangeValue = (e)=> {
        user[e.target.name] = e.target.value;
        setUser(user)
        //  console.log(user);
    }

    const addUsersDetails = async () => {
        console.log(user);
        await addUser(user);
    }
    return (
        <>
        <Header/>
        <Container>
            <Typography variant='h4' align='center'>
                    AddUser
            </Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onChangeValue(e)} name='name'/>
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e)=>onChangeValue(e) } name='username'/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onChangeValue(e)} name='email'/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onChangeValue(e)} name='phone'/>
            </FormControl>
            
            <FormControl>
                <Button variant="contained" onClick={()=>addUsersDetails()}>Add User</Button>
            </FormControl>
        </Container>
        </>
    )
}

export default AddUser;