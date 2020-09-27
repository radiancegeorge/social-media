import React from 'react';
import {Heart} from 'react-feather';
import {Link} from 'react-router-dom'

const FeedCard = ({name, time, userPhoto, toPost, toProfile, liked = false, post})=>{
    return(
        <div className="box" style={{
            padding: '0.5rem 0'
        }}>
            <Link to = {toPost}>
                <img src={post} alt="" width='100%' />
            </Link>
            <div className="user-section" style={{
                paddingTop: '0.5rem'
            }}>
                <Link to = {toProfile}>
                    <div className="user">
                        <div className="img" style = {{
                            marginRight: 10
                        }}>
                            <img src={userPhoto} alt="" width = '25'/>
                        </div>
                        <div className="detail">
                            <span className="name">
                                {name}
                                            </span>
                            <span className="time">
                                {time}
                                            </span>
                        </div>
                    </div>
                </Link>
                <div className="like" style={{
                    cursor: 'pointer'
                }}>
                    <Heart fill = {liked ? 'red' : 'transparent'} color = {liked ? 'red' : 'lightgrey'}/>
                </div>
            </div>
        </div>
    )
}
export default FeedCard;