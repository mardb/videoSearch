import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const renderedLIst = videos.map(video => {
    return <VideoItem video={video}/>
  });
  return <div>{renderedLIst}</div>
};

export default VideoList;