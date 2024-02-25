import { Box, Button, Typography, styled } from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';

const Wrapper = styled(Box)`
    display:flex;
    margin: 0 3% 0 auto;
    & > button, & > p, & > div {
        margin-right:40px;
        font-size:16px;
        align-items: center;
    }
`

const LoginButton = styled(Button)`
    color:#2874f0;
    background: #FFFFFF;
    text-transform:none;
    padding:5px 40px;
    border-radius:2px;
    font-weight: 600;
`



export default function CustomButtons() {
  return (
    <Wrapper>
        <LoginButton variant='contained'>Login</LoginButton>

        <Typography style={{marginTop: 3, paddingTop: 5}}>Become a seller</Typography>
        <Typography style={{marginTop: 3, paddingTop: 5}}>More</Typography>

        <Box style={{display: "flex"}}>
            <ShoppingCart/>
            <Typography style={{paddingLeft: 2}}>Cart</Typography>
        </Box>
    </Wrapper>
  )
}
