import React from 'react'
import './Post.css'
import { MoreVert} from '@material-ui/icons'
const Post = () => {
  return (
      <div className='post'>
          <div className="postWrapper">
              <div className="postTop">
                  <div className="postTopLeft">
                      <img src="/assets/friends.jpg" alt="" className="postProfileImage" />
                      <span className="postUserName">Animaw Yitayal</span>
                      <span className="postDate">3 mins ago</span>
                  </div>
                  <div className="postTopRight">
                      <MoreVert />
                  </div>
              </div>
              <div className="postCenter">
                  <span className="postText">Hey! It Is My first text!</span>
                  <img src="/assets/profile.jpg" alt="" className="postImage" />
              </div>
              <div className="postBottom">
                  <div className="postBottomLeft">
                      <img src="/assets/like.png" alt="" className="likeIcon" />
                      <img src="/assets/heart.jpg" alt="" className="likeIcon" />
                      <span className="postLikeCounter">32 people liked</span>
                  </div>
                  <div className="postBottomRight">
                      <span className="postCommentText">9 comments</span>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Post