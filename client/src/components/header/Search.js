
import { Box, InputBase, styled } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = styled(Box)`
    background: #fff;
    border-radius: 2px;
    width:38%;
    margin-left:10px;
    display:flex;
`

const InputSearchBase = styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
`

const SearchIconWrapper = styled(Box)`
    color: #2874f0;
    padding:5px;
`

export default function Search() {
  return (
    <SearchBox>
        <InputSearchBase placeholder='Search for Products and more'/>
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
    </SearchBox>
  )
}
