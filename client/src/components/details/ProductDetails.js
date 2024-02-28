import React from "react";
import { Typography, Box, styled, Table, TableRow, TableBody, TableCell } from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";

const SmallText = styled(Box)`
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`   

const StyledBadge  = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
`

const ColumnText = styled(TableRow)`
    font-size:14px;
    vertical-align: baseline;
    & > td {
        font-size:14px;
        margin-top: 10px;
    }
`

export default function ProductDetails({ product }) {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';


    const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000))

  return (
    <>
      <Typography>{product.title.shortTitle}</Typography>
      <Typography style={{ color: "#878787", marginTop: 5, fontSize: 14 }}>
        8 Ratings & 1 Review
        <Box component="span">
          <img style={{ width: 77, marginLeft: 20 }} src={fassured} alt="" />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>{" "}
        &nbsp; &nbsp; &nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>{" "}
        &nbsp; &nbsp;
        <Box component="span" style={{ color: "#388E3c" }}>
          {product.price.discount}
        </Box>
      </Typography>
      <Typography style={{fontWeight: 'bold'}} >Available Offers</Typography>
      <SmallText>
        <Typography><StyledBadge />Flat ₹1,000 off on OneCard Credit Card EMI Transactions on orders of ₹10,000 and aboveT&C</Typography>
        <Typography><StyledBadge />5% Cashback on Flipkart Axis Bank CardT&C</Typography>
        <Typography><StyledBadge />Get extra 8% off (price inclusive of cashback/coupon)T&C</Typography>
        <Typography><StyledBadge />Flat 1% Instant discount up to ₹ 1,000 on purchase of Flipkart Digital Gift Cards</Typography>
      </SmallText>

        <Table>
            <TableBody>
                <ColumnText>
                    <TableCell style={{color: '#878787'}} >Delivery</TableCell>
                    <TableCell style={{fontWeight: 600}} >Delivery by {date.toDateString()} | ₹40 </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color: '#878787'}} >Warranty</TableCell>
                    <TableCell>No Warranty</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color: '#878787'}} >Seller</TableCell>
                    <TableCell  >
                        <Box component='span' style={{color: '#2874f0'}} >SuperComNet</Box>
                        <Typography>GST invoice Available</Typography>
                        <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell colSpan={2} >
                        <img src={adURL} style={{width:390}} alt="ad" />
                    </TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{color: '#878787'}} >Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                </ColumnText>
            </TableBody>
        </Table>

    </>
  );
}
