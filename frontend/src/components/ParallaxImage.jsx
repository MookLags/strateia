import { ParallaxLayer } from '@react-spring/parallax';

const ParallaxImage = ({ source }) => {
  return (
    <ParallaxLayer offset={0} speed={0.5} factor={1}>
     <img className={"parallax-image"} src={source} />
    </ParallaxLayer>
  )
}

export default ParallaxImage
