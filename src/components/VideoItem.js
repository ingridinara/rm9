import React from 'react'
import "../style/videoitem.css"

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={() => handleVideoSelect(video)} className="videoitem__video itm">
            <img  
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.description}
             />
            <div className="videoitem__text">
                <div >{video.snippet.title}</div>
            </div>
        </div>
    )
};

export default VideoItem
