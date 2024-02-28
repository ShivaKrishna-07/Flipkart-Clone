import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  styled,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import { useState } from "react";

const Navbar = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const CustomButtonsWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuButton = styled(Menu)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    color: "#fff",
  },
}));
export default function Header() {
  const [open, setopen] = useState(false);

  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const handleOpen = () => {
    setopen(true);
  };
  const handleClose = () => {
    setopen(false);
  };

  return (
    <Navbar>
      <Toolbar style={{minHeight: 55}}>
        <IconButton>
          <MenuButton onClick={handleOpen} />
          <Drawer open={open} onClose={handleClose}>
            <Box style={{width: 200}} onClick={handleClose} >
              <List>
                <ListItem>
                  <CustomButtons />
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </IconButton>
        <Component to={"/"}>
          <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component={"span"} style={{ color: "yellow" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subURL} alt="sub logo" />
          </Box>
        </Component>

        <Search />
        <CustomButtonsWrapper>
          <CustomButtons />
        </CustomButtonsWrapper>
      </Toolbar>
    </Navbar>
  );
}
