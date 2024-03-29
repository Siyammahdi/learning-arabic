import { useRef } from 'react';
import { BsFullscreen } from 'react-icons/bs';
import ReactPlayer from 'react-player/youtube'
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const playerRef = useRef(null)
    const handleFullScreen = () => {
        if(playerRef.current){
            playerRef.current.wrapper.requestFullscreen();
        }
    };

    const navigate = useNavigate();
    const handleLink = () => {
        navigate("/playlist")
    }

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/c3nd9gZ/istockphoto-1469852365-170667a.webp)' }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 my-10 lg:my-0 text-start">
                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-basic">Learning Arabic</h1>
                            <p className="mb-5 font-medium mr-20 text-sm lg:text-base text-basic">And We have certainly made the Quran easy to remember. So is there anyone who will be mindful? <br />
                            <span className='flex justify-end -mt-1 mr-5'>Al-Qamar : 17</span>
                            </p>
                             
                            <button onClick={handleLink} className="btn btn-sm lg:btn-md text-white bg-basic hover:bg-amber-950">View full playlist</button>
                        </div>
                        <div>
                            <div className="card card-compact lg:w-[650px] bg-basic bg-opacity-50 backdrop-blur-md shadow-xl">
                                <figure>
                                    <ReactPlayer 
                                    url='https://www.youtube.com/watch?v=bpU2Esv8xRo&list=PLDJj4dgyFfNRCm96fB5YaXKxqixsQ7Uj-&index=1' 
                                    config={{
                                        youtube: {
                                            playerVars: { controls: 1, fs: 0, modestbranding: 0, showinfo: 0  },
                                        },
                                    }}
                                    width="100%" 
                                    height="300px"
                                    ref={playerRef} />
                                </figure>
                                {/* tssd */}
                                <div className="card-body">
                                    <div className='flex justify-between'>
                                        <h2 className="card-title text-2xl text-white">Lesson 1</h2>
                                        <button onClick={handleFullScreen} className="btn btn-sm text-lg btn-ghost font-bold text-white"><BsFullscreen /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;