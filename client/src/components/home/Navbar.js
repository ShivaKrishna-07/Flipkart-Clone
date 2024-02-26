import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import {navData} from '../../constants/data'

const Component = styled(Box)`
    display:flex;
    justify-content: space-between;
    margin: 55px 130px 0 130px;
`

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: bold;
    font-family: inherit;
`

export default function Navbar() {
  return (
    <Component>
        {
            navData.map(data => (
                <Container key={data.url}>
                    <img src={data.url} alt="navbar" style={{width:64}}/>
                    <Text>{data.text}</Text>
                </Container>
            ))
        }
    </Component>
  )
}
