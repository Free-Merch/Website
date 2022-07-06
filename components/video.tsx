import Plyr from "plyr-react";
import "plyr-react/plyr.css";


const Video = () => {

  const plyrProps = {
    source: {
      type: "video",
      sources: [
        {
          src: "YoWMLoeQGeI",
          provider: "youtube"
        }
      ]
    }
  }
  
  return <Plyr {...plyrProps} />
}

export default Video;