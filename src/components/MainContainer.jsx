import React from "react";

const MainContainer = () => {
    return(
        <div className="main">
            <div className="main-left">
                <div className="left-profile">
                    <img src="/profilephoto.jpeg" alt="" />
                    <h1> Bhagya Pasawala</h1>
                    <h2>
                    Self-taught coder and on a mission. Currently unemployed. I’d love you to death if you give me an interview! :)
                    </h2>
                    <p>Toronto, Ontario</p>
                </div>
                <div className="left-viewers">
                    <div className="left-viewers-content">
                    <div className="viewers">
                        <h1>
                            Profile stalkers
                        </h1>
                        <h1>
                            69
                        </h1>
                    </div>
                    <div className="impressions">
                        <h1>
                            Post impressions
                        </h1>
                        <h1>
                            169
                        </h1>
                    </div>
                    </div>
                </div>
                <div className="left-viewers">
                    <div className="left-viewers-content">
                    <div className="viewers">
                        <h1>
                        ‣ Saved items
                        </h1>
                    </div>
                    <div className="impressions">
                        <h1>
                        ‣ Groups
                        </h1>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default MainContainer