import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import flamingMountain from '../assets/flaming-mountain.webp';
import ParallaxImage from '../components/ParallaxImage';
import OpaqueParallax from '../components/OpaqueParallax';
import ParallaxTitle from '../components/ParallaxTitle';
import ParallaxBlurb from '../components/ParallaxBlurb';

const HomePage = () => {

  return (
    <Parallax className={"home-page-parallax"} pages={4}>
      {/* OPENING SCREN WITH TITLE */}
      <ParallaxImage source={flamingMountain} />
      <OpaqueParallax />
      <ParallaxTitle title={"ΣΤΡΑΤΕΙΑ"} />
      {/* ABOUT BLURB */}
      <ParallaxBlurb subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} text={"Nam id gravida sapien. Mauris libero lorem, rutrum sit amet diam sed, varius viverra ligula. Aenean sed pulvinar ante. Praesent ac ligula sollicitudin, aliquet tortor ut, elementum turpis. Suspendisse in porta nibh. Cras malesuada velit sapien, vel vulputate ligula vehicula ut. Sed sollicitudin pretium lacus, eget fermentum diam rhoncus nec."} />
    </Parallax>
  )
}

export default HomePage;
