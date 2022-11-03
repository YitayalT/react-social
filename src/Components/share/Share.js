import React from 'react'
import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons'
import './share.css'
const Share = () => {
  return (
      <div className='share'>
          <div className="shareWrapper">
              <div className="shareTop">
                  <img src="/assets/profile.jpg" alt="" className="shareProfileImage" />
                  <input placeholder='what is in your mind?' className="shareInput" />
              </div>
              <hr className="shareHr" />
              <div className="shareBottom">
                  <div className="shareOptions">
                      <div className="shareOption">
                          <PermMedia htmlColor='tomato' className = 'shareIcon' />
                          <span className="shareOptionText">photo or video</span>
                      </div>
                      {/* second */}
                      <div className="shareOption">
                          <Label htmlColor='blue' className = 'shareIcon' />
                          <span className="shareOptionText">Tag</span>
                      </div>
                      {/* third */}
                      <div className="shareOption">
                          <Room htmlColor='red' className = 'shareIcon' />
                          <span className="shareOptionText">Locations</span>
                      </div>
                      {/* fourth */}
                      <div className="shareOption">
                          <EmojiEmotions htmlColor='goldenrod' className = 'shareIcon' />
                          <span className="shareOptionText">Feelings</span>
                      </div>
                  </div>
                  <button className="shareButton">Share</button>
              </div>
          </div>
      </div>
  )
}

export default Share