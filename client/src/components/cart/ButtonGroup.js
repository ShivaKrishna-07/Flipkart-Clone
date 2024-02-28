import { ButtonGroup, Button, styled } from '@mui/material'
import React from 'react'

const Component = styled(ButtonGroup)`
    margin-top: 20px;
`

const StyledButton = styled(Button)`
    border-radius: 50%
`

export default function GroupedButton() {
  return (
    <Component>
        <StyledButton>-</StyledButton>
        <Button disabled>1</Button>
        <StyledButton>+</StyledButton>
    </Component>
  )
}
