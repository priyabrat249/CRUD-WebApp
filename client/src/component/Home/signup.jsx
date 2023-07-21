import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { HomeUser } from "../../api";
import { useNavigate } from 'react-router-dom';
const Container = styled(FormGroup)`
    width: 50%;
    margin:5% auto 0 auto ;
    & > div{
        margin-top:20px;
    }
`;

const defaultvalue = {
    name:'',
    email:'',
    password:'',
}
const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        const defaultvalue = {
            name:name,
            email:email,
            password:password,
        }
        
        await HomeUser(defaultvalue)
            .then(result => {navigate('/login'); })
            .catch(err => { console.log(err) })

            
       
        
    }
    return (
        <Container>
            <Typography variant='h4' align='center'>
                Register        
            </Typography>
            <FormControl>
                <InputLabel>Enter Name</InputLabel>
                <Input onChange={(e)=>setName(e.target.value)} name='name'/>
            </FormControl>
            
            <FormControl>
                <InputLabel>Enter Email</InputLabel>
                <Input onChange={(e)=>setEmail(e.target.value)} name='email'/>
            </FormControl>
            <FormControl>
                <InputLabel>Enter Password</InputLabel>
                <Input onChange={(e)=>setPassword(e.target.value)} name='password'/>
            </FormControl>
            
            <FormControl>
                <Button variant="contained" onClick={(e)=>handleSubmit(e)} >Sign Up</Button>
            </FormControl>
            <FormControl>
                <Button variant="contained" component={Link} to={`/login`}>Log in</Button>
            </FormControl>
        </Container>
        
    )
}

export default SignUp;