import React from 'react'
import "../style/videodetail.css"

const VideoDetail = ({video}) => {
    if (!video) {
        return  <div>
                     <h4>Enter a search keyword  on Video Search and get the video results.</h4>
                     <h4>Then, select a video of your choice</h4>
                </div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div >
            <div className="videodetail__video">
                <iframe src={videoSrc} allowFullScreen title='Video player'
                className="videodetail__responsiveiframe"/>
            </div>
            <div className="videodetail__text">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}
export default VideoDetail
