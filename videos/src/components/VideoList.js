import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const renderedLIst = videos.map(video => {
    return <VideoItem video={video}/>
  });
  return <div className='ui relaxed divided list'>{renderedLIst}</div>
};

export default VideoList;