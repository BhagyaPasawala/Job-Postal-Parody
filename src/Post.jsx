import React from 'react';

const Post = ({ name, title, time, content, image, likes }) => {
    return (
        <div className="post-container">
            <div className="post">
                <div className="post-header">
                    <img
                        src="/joker.jpg" 
                        alt="profile"
                        className="profile-pic"
                    />
                    <div className="post-user-info">
                        <h3>{name}</h3>
                        <p>{title}</p>
                        <span>{time}</span>
                    </div>
                </div>

                <div className="post-content">
                    <p>{content}</p>
                    {image && <img src={image} alt="post visual" className="post-image" />}
                </div>

                <div className="post-footer">
                    <div className='likes'>
                        <img src="/happyman.webp" alt="" />
                        <p>{likes}</p>
                    </div>
                    <div className="post-actions">
                        <button>Like</button>
                        <button>Comment</button>
                        <button>Repost</button>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
