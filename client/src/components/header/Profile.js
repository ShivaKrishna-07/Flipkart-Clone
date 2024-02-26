import { Box, Button, Typography, Menu, MenuItem, styled } from "@mui/material";
import {useState} from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    margin-top: 10px;
    margin-right: 20px;
`

const LogOut = styled(Typography)`
    font-size: 14px;
    margin-left: 10px;
`

const LoginButton = styled(Button)`
    color:#2874f0;
    background: #FFFFFF;
    text-transform:none;
    padding:5px 40px;
    border-radius:2px;
    font-weight: 600;
`

export default function Profile({ account, setAccount }) {

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }

    const handleClose = () => {
        setOpen(false);
    }

    const Logout = () => {
        setAccount('')
    }

  return (
    <>
      <Box onClick={handleClick} style={{cursor: 'pointer', padding: 3}}>
      <LoginButton variant='contained' >{account}</LoginButton>
      </Box>

      <Component
        anchorEl={open}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() =>{handleClose(); Logout();}}>
            <PowerSettingsNewIcon color="primary" fontSize="small" />
            <LogOut>Logout</LogOut>
        </MenuItem>
      </Component>
    </>
  );
}
