import { FormGroup,FormControl ,InputLabel,Input,Typography,styled,Button} from "@mui/material";
import { useState } from "react";
import { addUser } from "../../api";

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
        // console.log(e.target.name, e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
        // console.log(user);
    }
    const addUsersDetails = async() => {
        await addUser(user);
    //    console.log(user);
    }
    return (
        <Container>
            <Typography variant='h4'>
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
        
    )
}

export default AddUser;