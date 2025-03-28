import { ParallaxLayer } from '@react-spring/parallax';

const HorizontalScrollContainer = ({ offset, speed, factor, link }) => {
  return (
    <ParallaxLayer offset={offset} factor={factor} speed={speed}>
      <div className={"horizontal-scroll-container"}>
      </div>
    </ParallaxLayer>
  )
}

export default HorizontalScrollContainer;
