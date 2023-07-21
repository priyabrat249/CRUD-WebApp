import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button,Paper } from "@mui/material";
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { loginUser } from "../../api";
// import { useNavigate } from 'react-router-dom';


const Container = styled(FormGroup)`
    width: 50%;
    margin:5% auto 0 auto ;
    & > div{
        margin-top:20px;
    }
`;

const defaultvalue = {
    email:'',
    password:'',
}
const Login = () => {
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
        
        await loginUser(defaultvalue)
            .then(result =>
            {
                if (result.data == 'Succesful') navigate('/All');
                if (result.data == 'Incorrect password') { 
                    alert('Inorrect Password');
                    navigate('/login');
                } 
                if(result.data =='Not Found') {
                    alert('User not found');
                }
            })
            .catch(err => { console.log(err) })

            
       
        
    }
    return (
        <Container>
            <Typography variant='h4' align='center'>
                Log In       
            </Typography>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>setEmail(e.target.value)} name='email'/>
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e)=>setPassword(e.target.value)} name='password'/>
            </FormControl>
            
            {/* <FormControl>
                <Button variant="contained" component={Link} to={`/`}>Sign Up</Button>
            </FormControl> */}
            <FormControl>
                <Button variant="contained"  onClick={handleSubmit} >Log in</Button>
            </FormControl>
        </Container>
        
    )
}

export default Login;