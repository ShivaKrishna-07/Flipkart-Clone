import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import {Box, styled} from '@mui/material'
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Component = styled(Box)`
    padding:10px;
    background:#F2F2F2;
`


export default function Home() {

  const { products } = useSelector(state => state.getProducts);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  }, [dispatch])

  return (
    <>
      <Navbar />
      <Component>
      <Banner />
      </Component>
    </>
  );
}
