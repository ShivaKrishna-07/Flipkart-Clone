import { Grid, styled } from '@mui/material'
import {imageURL} from '../../constants/data'


const Wrapper = styled(Grid)`
    margin-top: 10px;
`

export default function MidSection() {
  return (
    <Wrapper lg={12} sm={12} md={12} xs={12} container >
        {
            imageURL.map(image => (
                <Grid items lg={4} md={4} sm={12} xs={12} >
                    <img style={{width: '100%'}} src={image} alt="img" />
                </Grid>
            ))
        }
    </Wrapper>
  )
}
