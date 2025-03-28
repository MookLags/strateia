import { ParallaxLayer } from '@react-spring/parallax';

const HorizontalScrollContainer = ({ offset, factor, link }) => {
  return (
    <ParallaxLayer>
      <div>
        {/* okay so
          A horizontal scroll bar that clicks through to the left and right to reveal videos or articles
          div width: thumbnailWidth * totalItems
          it extends off screen
          thumbnail div contains image, Link to playerPage with that video's id, duration, title 
          then .map thumbnail div to repeat with latest data (no idea how I'm gonna do that) * totalItems
          let startingIndex = 0;
          if startingIndex === 0 then left button is hidden
          if startingIndex === totalItems right button is hidden
          onClick functions for arrows:
          startingIndex
        */}
      </div>
    </ParallaxLayer>
  )
}

export default HorizontalScrollContainer;
