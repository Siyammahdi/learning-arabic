import { useRef } from 'react';
import ReactPlayer from 'react-player/youtube'

const Banner = () => {

    const playerRef = useRef(null)
    const handleFullScreen = () => {
        if(playerRef.current){
            playerRef.current.wrapper.requestFullscreen();
        }
    };

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/c3nd9gZ/istockphoto-1469852365-170667a.webp)' }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex items-center">
                        <div className="w-1/2 text-start">
                            <h1 className="mb-5 text-5xl font-bold text-basic">Learning Arabic</h1>
                            <p className="mb-5 text-basic">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn text-white bg-basic">Explore More</button>
                        </div>
                        <div>
                            <div className="card card-compact w-[650px] bg-basic bg-opacity-50 backdrop-blur-md shadow-xl">
                                <figure>
                                    <ReactPlayer 
                                    url='https://www.youtube.com/watch?v=bpU2Esv8xRo&          list=PLDJj4dgyFfNRCm96fB5YaXKxqixsQ7Uj-&index=1' 
                                    config={{
                                        youtube: {
                                            playerVars: { controls: 1, fs: 0, modestbranding: 0, showinfo: 0  },
                                        },
                                    }}
                                    width="100%" 
                                    height="300px"
                                    ref={playerRef} />
                                </figure>
                                <div className="card-body">
                                    <div className='flex justify-between'>
                                        <h2 className="card-title text-2xl text-white">Lesson 1</h2>
                                        <button onClick={handleFullScreen} className="btn btn-sm bg-basic text-white">View Fullscreen</button>
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