import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar} from '@mui/material';
const Header = styled(AppBar)`
    background: #111111
`;
const Tab = styled(NavLink)`
    fontsize:20px;
    margin-right: 20px;
    color: #FFFFFF;
    text-decoration: none;

`;
const Top = () => {
    
    return (
        <Header position="static">
            <Toolbar >
                <Tab to='/All'>All Users</Tab>
                <Tab to='/Add'>Add User</Tab>
            </Toolbar>
        </Header>
        
    )
}

export default Top;