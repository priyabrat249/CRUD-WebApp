import { FormGroup,FormControl ,InputLabel,Input,Typography,styled,Button} from "@mui/material";
import { useState,useEffect } from "react";
import { editUser} from "../../api";
import { useNavigate ,useParams} from "react-router-dom";
import { getUserDetails } from "../../api";
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

const EditUser = () => {
    const [user, setUser] = useState(defaultvalue);
    // const navigate = useNavigate();
    const { userId } = useParams();
    // console.log(userId);
    useEffect(() => {
        loadUserDetails(userId);
    }, [])
    const loadUserDetails =  ((id) => {
        const response = getUserDetails(id);
        // console.log(response);
        response.then(
            (result) => { 
                // console.log(result);
                setUser(result.data[0]);
            },
            (error) => { 
               console.log(error);
            }
          );
    })
    const onChangeValue = (e)=> {
        // console.log(e.target.name, e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
        // console.log(user);
    }
    const UpdateUsersDetails = async() => {
        await editUser(user,userId);
    //    console.log(user);
    }
    return (
        <Container>
            <Typography variant='h4'>
                    Edit User
            </Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onChangeValue(e)} name='name' value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e)=>onChangeValue(e) } name='username' value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onChangeValue(e)} name='email' value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onChangeValue(e)} name='phone' value={user.phone}/>
            </FormControl>
            
            <FormControl>
                <Button variant="contained" onClick={()=>UpdateUsersDetails()}>Edit User</Button>
            </FormControl>
        </Container>
        
    )
}

export default EditUser;