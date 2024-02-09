import { IoArrowBack } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const Playlist = () => {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch("/videos.json")
            .then(res => res.json())
            .then(data => {
                setVideos(data)
            })
    }, [])

    const playerRef = useRef(null)
    const handleFullScreen = () => {
        if (playerRef.current) {
            playerRef.current.wrapper.requestFullscreen();
        }
    };

    return (
        <div className="mx-5 lg:mx-28 ">
            <div className="flex items-center gap-16">
                <h2 className="lg:text-4xl text-3xl py-10">Playlist</h2>
                <Link to="/"><button className="btn btn-sm lg:btn-md bg-basic"><IoArrowBack /> Go back</button></Link>
            </div>
            <hr />
            <br />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {videos.map((video) => (
                    <div key={video.id}>
                        <div className="card card-compact border-b-2 border-gray-400 shadow-xl">
                            <figure>
                                <ReactPlayer
                                    url={video.youtube_link}
                                    config={{
                                        youtube: {
                                            playerVars: { controls: 1, fs: 0 },
                                        },
                                    }}
                                    width="100%"
                                    height="200px"
                                    ref={playerRef} />
                            </figure>
                            <div className="card-body">
                                <div className='flex justify-between'>
                                    <h2 className="card-title text-2xl text-white">{video.name}</h2>
                                    <button onClick={handleFullScreen} className="btn btn-sm bg-basic text-white">View Fullscreen</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Playlist;