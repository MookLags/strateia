import { ParallaxLayer } from '@react-spring/parallax';

const OpaqueParallax = () => {
  return (
    <ParallaxLayer className={"opaqueDiv"} offset={0} speed={0.5} factor={1}>
      <div className={"opaque-div"} />
    </ParallaxLayer>
  )
}

export default OpaqueParallax;
