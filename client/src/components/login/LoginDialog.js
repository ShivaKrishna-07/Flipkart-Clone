import { useState , useContext} from "react";
import { authenticateSignup, authenticateLogin } from "../../service/api";
import {DataContext} from '../../context/DataProvider';
import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  styled,
} from "@mui/material";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  display: flex;
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 88% no-repeat;
  height: 78.5%;
  width: 30%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #fff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 45px 35px;
  flex: 1;
  & > div & > button {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  margin: 10px 0px;
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
  height: 48px;
  margin: 10px 0px;
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
  margin: 5px;
  text-align: center;
`;

const CreateAccount = styled(Typography)`
  font-size: 13px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color:#ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`

const AccountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email:'',
    password: '',
    phone: ''
}
const loginInitialValues = {
    username: '',
    password: ''
}

export default function LoginDialog({ open, setOpen }) {
  const [account, toggleAccount] = useState(AccountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false)
  const { setAccount} = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(AccountInitialValues.login);
    setError(false)
  };

  const toggleSignup = () => {
    toggleAccount(AccountInitialValues.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value })
  }

  const signupUser = async() => {
    let response = await authenticateSignup(signup);
    if(!response) return;
    handleClose();
    setAccount(signup.firstname);
  }

  const onValueChange = (e) => {
    setLogin({...login, [e.target.name]: e.target.value});
  }

  const loginUser = async() => {
    let response = await authenticateLogin(login);
    if(response.status===200){
      handleClose();
      setAccount(response.data.data.firstname)
    }else{
      setError(true)
    }
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <Image>
          <Typography variant="h5" style={{ paddingBottom: 10 }}>
            {account.heading}
          </Typography>
          <Typography>{account.subHeading}</Typography>
        </Image>

        {account.view === "login" ? (
          <Wrapper>
            <TextField variant="standard" name="username" onChange={(e) => onValueChange(e)} label="Enter Username" />

           {error && <Error>Please enter valid username or password</Error>}

            <TextField variant="standard" name="password" onChange={(e) => onValueChange(e)} label="Enter Password" />
            <Text>
              By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
            </Text>
            <LoginButton onClick={() => loginUser()} >Login</LoginButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <RequestOTP>Request OTP</RequestOTP>
            <CreateAccount onClick={() => toggleSignup()}>
              New to Flipkart? Create an account
            </CreateAccount>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField variant="standard" name="firstname" onChange={(e) => onInputChange(e)} label="Enter First Name" />
            <TextField variant="standard" name="lastname" onChange={(e) => onInputChange(e)} label="Enter Last Name" />
            <TextField variant="standard" name="username" onChange={(e) => onInputChange(e)} label="Enter Username" />
            <TextField variant="standard" name="email" onChange={(e) => onInputChange(e)} label="Enter Email" />
            <TextField variant="standard" name="password" onChange={(e) => onInputChange(e)} label="Enter Password" />
            <TextField variant="standard" name="phone" onChange={(e) => onInputChange(e)} label="Enter Phone" />
            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
          </Wrapper>
        )}
      </Component>
    </Dialog>
  );
}
