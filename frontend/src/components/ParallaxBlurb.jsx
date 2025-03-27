import { ParallaxLayer } from '@react-spring/parallax';

const ParallaxBlurb = ({ subtitle, text }) => {
  return (
    <ParallaxLayer className={"aboutBlurb"} factor= {0.6} offset={0.9} speed={1}>
      <div className={"page-text-container"}>
        <div className={"page-text-div"}>
         <p className={"page-text-subtitle"}>{subtitle}</p>
         <p className={"page-text"}>{text}</p>
      </div>
      </div>
    </ParallaxLayer>
  )
}

export default ParallaxBlurb;
