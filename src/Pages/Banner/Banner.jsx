import { useRef } from "react";
import { BsFullscreen } from "react-icons/bs";
import ReactPlayer from "react-player/youtube";
// import { useNavigate } from 'react-router-dom';
import Background from "../../assets/background.png";

const Player = props => {
  const playerRef = useRef(null);
  const handleFullScreen = () => {
    if (playerRef.current) {
      playerRef.current.wrapper.requestFullscreen();
    }
  };
  return <div className="card card-compact lg:w-[450px] bg-basic bg-opacity-50 backdrop-blur-md shadow-xl">
                <figure>
                  <ReactPlayer
                    url={props.url}
                    config={{
                      youtube: {
                        playerVars: {
                          controls: 1,
                          fs: 0,
                          modestbranding: 0,
                          showinfo: 0,
                        },
                      },
                    }}
                    width="100%"
                    height="230px"
                    ref={playerRef}
                  />
                </figure>
                {/* tssd */}
                <div className="card-body">
                  <div className="flex justify-between">
                    <h2 className="card-title text-2xl text-white">Lesson 1</h2>
                    <button
                      onClick={handleFullScreen}
                      className="btn btn-sm text-lg btn-ghost font-bold text-white"
                    >
                      <BsFullscreen />
                    </button>
                  </div>
                </div>
              </div>
}

const Banner = () => {
  

  // const navigate = useNavigate();
  // const handleLink = () => {
  //     navigate("/playlist")
  // }

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="items-center space-y-32">
            <div>
              <h1 className="text-6xl text-basic font-bold ">
                Arabic Cartoons
              </h1>
              <p className="w-1/3 text-left font-medium mx-auto my-12 text-sm lg:text-base text-basic">
                And We have certainly made the Quran easy to remember. So is
                there anyone who will be mindful? <br />
                <span className="flex justify-end -mt-1 mr-5">
                  Al-Qamar : 17
                </span>
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Player url="https://youtu.be/bpU2Esv8xRo?list=PLDJj4dgyFfNRCm96fB5YaXKxqixsQ7Uj-" />
              <Player url="https://youtu.be/dbqR8Jh73ww?list=PLd4KNFZy4bSBl7Xxuoda1x9-EIWkQkGgu" />
              <Player url="https://youtu.be/u8e5t86TDWs?list=PLjk5Q0xJ9l7133Z3SDERN2dDslYAfa0Dn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
