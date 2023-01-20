import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import myVedio from "../Vedio/large_2x.mp4"


class Video extends Component {
    render () {
      return (
        <div className='player-wrapper'>
          <video width="100%" height="100%" preload="auto" autoPlay loop>
        <source src={myVedio} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
        </div>
      )
    }
  }

  export default Video;