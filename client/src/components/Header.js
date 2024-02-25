import { AppBar, Typography, Box, Toolbar, styled } from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
const Navbar = styled(AppBar)`
  background: #2874f0;
`;

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImage = styled('img')({
    width:10,
    height:10,
    marginLeft:4
})

export default function Header() {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <Navbar>
      <Toolbar>
        <Component>
          <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box style={{display:"flex"}}>
            <SubHeading>Explore&nbsp;
                <Box component={'span'} style={{color:"yellow"}}>Plus</Box>
            </SubHeading>
            <PlusImage src={subURL} alt="sub logo" />
          </Box>
        </Component>

        <Search/>

        <CustomButtons/>
      </Toolbar>
    </Navbar>


  );
}
