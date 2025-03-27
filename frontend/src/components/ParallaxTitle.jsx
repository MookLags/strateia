import { ParallaxLayer } from '@react-spring/parallax';

const ParallaxTitle = ({ title }) => {
  return (
    <ParallaxLayer className={"textDiv"} offset={0} speed={1}>
      <h1 className={"title"}>{title}</h1>
    </ParallaxLayer>
  )
}

export default ParallaxTitle;
