import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import flamingMountain from '../assets/flaming-mountain.webp';

const HomePage = () => {

  return (
    <Parallax className={"home-page-parallax"} pages={4}>
      {/* OPENING SCREN WITH TITLE */}
      <ParallaxLayer offset={0} speed={0.5} factor={1}>
       <img className={"flaming-mountain"} src={flamingMountain} />
      </ParallaxLayer>   
      <ParallaxLayer className={"opaqueDiv"} offset={0} speed={0.5} factor={1}>
        <div className={"opaque-div"} />
      </ParallaxLayer>
      <ParallaxLayer className={"textDiv"} offset={0} speed={1}>
        <h1 className={"title"}>ΣΤΡΑΤΕΙΑ</h1>
      </ParallaxLayer>
      {/* ABOUT BLURB */}
      <ParallaxLayer className={"aboutBlurb"} factor= {0.6} offset={0.9} speed={1}>
        <div className={"page-text-container"}>
          <div className={"page-text-div"}>
           <p className={"page-text-subtitle"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           <p className={"page-text"}>Nam id gravida sapien. Mauris libero lorem, rutrum sit amet diam sed, varius viverra ligula. Aenean sed pulvinar ante. Praesent ac ligula sollicitudin, aliquet tortor ut, elementum turpis. Suspendisse in porta nibh. Cras malesuada velit sapien, vel vulputate ligula vehicula ut. Sed sollicitudin pretium lacus, eget fermentum diam rhoncus nec.</p>
        </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  )
}

export default HomePage;
