import { Box, Button, Typography, styled } from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';
import { useState, useContext } from 'react';
import {DataContext} from '../../context/DataProvider';

import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';

const Wrapper = styled(Box)(({theme}) => ({
    display:'flex',
    paddingLeft: '20px',
    alignItems: 'center',
    '& > p, & > div, & > button': {
        marginRight:40,
        fontSize:16,
        alignItems: 'center'
    },
    [theme.breakpoints.down('md')]:{
        display: 'block'
    }
}))

const Containers = styled(Box)(({theme}) => ({
    display:'flex',
    [theme.breakpoints.down('md')]:{
        display: 'block'
    }
}))

const LoginButton = styled(Button)`
    color:#2874f0;
    background: #FFFFFF;
    text-transform:none;
    padding:5px 40px;
    box-shadow: none;
    height: 32px;
    
    border-radius:2px;
    font-weight: 600;
`



export default function CustomButtons() {

    const [open, setOpen] = useState(false);

    const {account, setAccount} = useContext(DataContext);

    const openDialog = () => {
        setOpen(true); 
    }

  return (
    <Wrapper>
        {
            account ? <Profile account={account} setAccount={setAccount} /> :
            <LoginButton variant='contained' onClick={() => openDialog()} >Login</LoginButton>
        }

        <Typography style={{ paddingTop: 5, width: 135}}>Become a seller</Typography>
        <Typography style={{ paddingTop: 5}}>More</Typography>

        <Containers>
            <ShoppingCart/>
            <Typography style={{paddingLeft: 2}}>Cart</Typography>
        </Containers>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}
