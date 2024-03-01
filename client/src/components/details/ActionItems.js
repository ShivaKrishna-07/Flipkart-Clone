import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToCart} from '../../redux/actions/cartActions'
import { useState } from "react";
import { payUsingPaytm } from "../../service/api";

import { post } from "../../utils/paytm";

const LeftComponent = styled(Box)(({theme}) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('lg')]:{
    padding: '20px 40px'
  }
}))

const Image = styled("img")({
  
  width: "90%",
  padding: '15px'
});

const StyledButton = styled(Button)(({theme}) => ({
  width: '48%',
  height: 50,
  borderRadius: 2,
  [theme.breakpoints.down('lg')]: {
    width: '46%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '48%'
  }
}))

export default function ActionItems({ product }) {

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity))
  }

  const buyNow = async () => {
    let response = await payUsingPaytm({ammount: 500, email: 'tarunyadav@gmail.com'})
    let information = {
      action: 'https://securegw-stage.paytm.in/order/process',
      params: response
    }
    post(information);
  }

  return (
    <LeftComponent>
      <Box style={{padding: "15px 20px", border: "1px solid #f0f0f0",}} >
        <Image src={product.detailUrl} />
      </Box>
      <Link to={'/cart'}>
      <StyledButton
        variant="contained"
        style={{ marginRight: "10px", background: "#ff9f00" }}
        onClick={() => addItemToCart()}
      >
        <Cart />
        Add to Cart
      </StyledButton>
      </Link>
      <StyledButton onClick={() => buyNow()} variant="contained" style={{ background: "#fb541b" }}>
        <Flash />
        Buy Now
      </StyledButton>
    </LeftComponent>
  );
}
