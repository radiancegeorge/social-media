import React from 'react';
import '../styles/Feed.css';
import {Menu, Search, Camera} from 'react-feather';
import FeedCard from '../components/FeedCard';
import staticImage from '../assets/Rectangle -1.png';
import {Link} from 'react-router-dom'

const Feed = ()=>{
    const feeds = [
        { name: 'radiance Obi', time: '10 mins ago', userPhoto: staticImage, post: staticImage, toPost: '/', toProfile: '/', liked: false },
        { name: 'Onyedikachi obi', time: '10 mins ago', userPhoto: staticImage, post: staticImage, toPost: '/', toProfile: '/', liked: true },
        { name: 'chinemeze obi', time: '10 mins ago', userPhoto: staticImage, post: staticImage, toPost: '/', toProfile: '/', liked: false },
        { name: 'juliet obi', time: '10 mins ago', userPhoto: staticImage, post: staticImage, toPost: '/', toProfile: '/', liked: false }
    ]
    return(
        <div className="Feed" style={{
            paddingBottom: '3rem'
        }}>
            <header>
                <div className="container">
                    <nav>
                        <div className="menu" style = {{
                            cursor: 'pointer'
                        }}>
                            <Menu size = '25'/>
                        </div>
                        <h1>My Feeds</h1>
                        <div className="search" style = {{cursor:'pointer'}}>
                        <Search size = '25'/>
                        </div>
                        {/* introduce a side bar later */}
                    </nav>
                </div>
            </header>
            <div className="main-feeds">
                <div className="container">
                    {
                        feeds.map((card, key)=>(
                            <FeedCard key = {key}
                            post = {card.post}
                            name = {card.name}
                            toPost = {card.toPost}
                            time = {card.time}
                            userPhoto = {card.userPhoto}
                            toProfile = {card.toProfile}
                            liked = {card.liked}
                            />
                        ))
                    }
                </div>
            </div>
            <Link>
                <div className="add-image">
                    <Camera color='white' size='40' />
                </div>
            </Link>
        </div>
    )
}

export default Feed;