import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";

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
  return (
    <LeftComponent>
      <Box style={{padding: "15px 20px", border: "1px solid #f0f0f0",}} >
        <Image src={product.detailUrl} />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: "10px", background: "#ff9f00" }}
      >
        <Cart />
        Add to Cart
      </StyledButton>
      <StyledButton variant="contained" style={{ background: "#fb541b" }}>
        <Flash />
        Buy Now
      </StyledButton>
    </LeftComponent>
  );
}
