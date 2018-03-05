import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem key={video.eta} video = {video} />
    });
    
    return (
    <ul className = "col-md-4 list-group">
        {videoItems}
    </ul>
    )
}

export default VideoList;