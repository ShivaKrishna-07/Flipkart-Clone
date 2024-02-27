import { Box, styled } from '@mui/material'
import Slide from "./Slide";

const Component = styled(Box)`
    display: flex;
`

const LeftComponent = styled(Box)(({theme}) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const RightCmponent = styled(Box)(({theme}) => ({
    background: '#fff',
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
    width: '17%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

export default function MidSlide({timer, title}) {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (
    <Component>
        <LeftComponent>
            <Slide title={title} timer={timer} />
        </LeftComponent>
        <RightCmponent>
            <img src={adURL} alt="ad" style={{width: 217}} />
        </RightCmponent>
    </Component>
  )
}
