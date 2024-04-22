"use client";
import React from 'react';
import YouTube from 'react-youtube';

const YoutubeVideo = ({ videoId }) => {
    const opts = {
        height: '390',
        width: '940',
        playerVars: {
            autoplay: 1,
            start: 2, // Start at 2 seconds
          },
    };

    return (
        <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
    );
};

const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo(); // example of controlling the player
};

export default YoutubeVideo;
