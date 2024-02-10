import { IoArrowBack } from "react-icons/io5";
import { BsFullscreen } from "react-icons/bs";
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
        <div className="bg-[url(https://i.ibb.co/c3nd9gZ/istockphoto-1469852365-170667a.webp)]">
            <div className="mx-5 lg:mx-28 ">
                <div className="flex items-center gap-16 border-b-2 border-basic">
                    <h2 className="lg:text-4xl text-3xl py-10 text-basic font-semibold">Playlist</h2>
                    <Link to="/"><button className="btn btn-sm lg:btn-md text-white bg-basic"><IoArrowBack /> Go back</button></Link>
                </div>
                <br />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-20">
                    {videos.map((video) => (
                        <div key={video.id}>
                            <div className="card card-compact border-b-2 bg-basic bg-opacity-50 backdrop-blur-sm border-basic shadow-xl">
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
                                        <button onClick={handleFullScreen} className="btn btn-sm text-lg btn-ghost font-bold text-white"><BsFullscreen /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <footer className="footer footer-center p-4 bg-basic bg-opacity-50 backdrop-blur-md text-white">
                <aside>
                    <p>Copyright © 2024 - All right reserved by UqiDev Technologies</p>
                </aside>
            </footer>
        </div>
    );
};

export default Playlist;