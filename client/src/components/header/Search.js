import { Box, InputBase, List, ListItem, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

const SearchBox = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  color: #2874f0;
  padding: 5px;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: #fff;
  color: #000;
  margin-top: 36px;
`;

export default function Search() {
  const [text, setText] = useState("");

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };

  return (
    <SearchBox>
      <InputSearchBase
        onChange={(e) => getText(e.target.value)}
        placeholder="Search for Products and more"
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.longTitle
                .toLowerCase()
                .includes(text.toLocaleLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link to={`/product/${product.id}`} style={{textDecoration: 'none', color: 'inherit'}} onClick={() => setText('')}>
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchBox>
  );
}
