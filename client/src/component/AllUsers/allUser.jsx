import { useEffect,useState } from 'react';
import { TableHead, TableBody, TableRow, Table, TableCell,Button ,styled} from '@mui/material';
import {getUsers,deleteUser} from '../../api/index.js'
import  EditUser  from '../EditUser/editUser.jsx'
import { Link } from 'react-router-dom'
import Header from '../Header/header.jsx'
const StyledTable = styled(Table)`
    width:90%;
    margin:50px auto 0 auto
`;

const HTable = styled(TableRow)`
    background:#000000;
    & > th {
        color:#ffffff;
        font-size:20px;
    }
`;

const BTable = styled(TableRow)`
    
    & > td {
        font-size:20px;
    }
`;

const AllUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => { 
        getUsersDetails();
    },[])
    const getUsersDetails = async() => {
        let response = await getUsers();
        setUsers(response.data);
        

    }
    const deleteUserDetails = async (id) => {
        console.log(id);
        await deleteUser(id);
        getUsersDetails();
        
        

    }
    const EditUsersDetails = async() => {
        await EditUser();
    //    console.log(user);
    }
    console.log(users);
    return (
        <>
            <Header/>
        <StyledTable>
            <TableHead>
                <HTable>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </HTable>
            </TableHead>
            <TableBody>
                {
                    users.map((user) => (
                        <BTable>
                            <TableCell>{user.userId}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}
                                {/* <TableCell> */}
                                    <Button variant="contained" style={{marginRight:10,marginLeft:50}} component={Link} to={`/Edit/${user.userId}`}>Edit</Button>
                                    <Button variant="contained" color="secondary" onClick={() =>deleteUserDetails(user.userId)}>Delete</Button>
                                {/* </TableCell> */}
                            </TableCell>
                            
                        </BTable>
                    ))
                }
            </TableBody>
            </StyledTable>
        </>
    )
}

export default AllUser;