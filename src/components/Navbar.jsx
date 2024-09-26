import { FaSearch } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { FaSuitcase } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import React from "react";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="left">
                <div className="logo">
                    <img className="logoimg" src="/smalllogo.png" alt="" />
                </div>
                <div className="search">
                    <FaSearch />
                    <h1> Search (as if this works)</h1>
                </div>
            </div>
            <div className="right">
                <div className="nav-right">
                    <div className="nav-home">
                        <TiHome style={{ fontSize: '28px' }} />
                        <h1>
                            Home
                        </h1>
                    </div>
                    <div className="nav-jobs">
                        <FaSuitcase style={{ fontSize: '25px', color:'gray', marginBottom: '2px' }} />
                        <h1>
                            Jobs
                        </h1>
                    </div>
                    <div className="nav-messages">
                        <BiSolidMessageRoundedDetail style={{ fontSize: '28px', color:'gray' }} />
                        <h1>
                            Messaging
                        </h1>
                    </div>
                    <div className="nav-profile">
                        <img src="profilephoto.jpeg" alt="" />
                        <h1>
                            Me
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar