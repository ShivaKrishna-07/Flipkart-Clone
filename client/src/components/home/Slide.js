import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import Countdown from "react-countdown";

import { Box, Button, Divider, Typography, styled } from "@mui/material";



const Component = styled(Box)`
  margin-top: 10px;
  background: #fff;
`;

const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;

const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  align-items: center;
`;

const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right: 25px;
  line-height: 32px;
`;

const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;
`;

const Image = styled("img")({
  width: "auto",
  height: 150,
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

export default function Slide({title, timer}) {
  const { products } = useSelector((state) => state.getProducts);
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box>
        {hours} : {minutes} : {seconds} Left
      </Box>
    );
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 664 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 2,
    },
  };

  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer &&
            <Timer>
                <img src={timerURL} alt="timer" style={{ width: 24 }} />
                <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
            </Timer>
        }
        <ViewAllButton variant="contained">View All</ViewAllButton>
      </Deal>

      <Divider />

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((product) => (
          <Box textAlign="center" style={{ padding: "25px 15px" }}>
            <Image src={product.url} alt="" />
            <Text style={{ color: "#212121", fontWeight: 600 }}>
              {product.title.shortTitle}
            </Text>
            <Text style={{ color: "green", fontWeight: 600 }}>
              {product.discount}
            </Text>
            <Text style={{ color: "#212121" }}>{product.tagline}</Text>
          </Box>
        ))}
      </Carousel>
    </Component>
  );
}
