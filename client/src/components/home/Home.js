import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch } from "react-redux";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

const Image = styled('img')(({theme}) =>({
  margiTop: 10,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    objectFit: 'cover',
    height: 120
  }
}));

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

  return (
    <>
      <Navbar />
      <Component>
        <Banner />
        <MidSlide title="Deal of the day" timer={true} />
        <Slide title="Top Deals" timer={false} />
        <MidSection/>
        <Slide title="Pick you styles" timer={false} />
        <Image src={url} alt="covid-img" />
        <Slide title="Season's top picks" timer={false} />
        <Slide title="Top deals on Accessories" timer={false} />
        <Slide title="Trending offers" timer={false} />
        <Slide title="Discount for you" timer={false} />
      </Component>
    </>
  );
}
