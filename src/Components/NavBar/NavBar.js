import React, { useEffect, useState } from 'react'
import "./NavBar.css"

function NavBar() {

    const [show, handleShow] = useState(false);
    const [toggle, setToggle] = useState(false);

    const checkToggle = () => {
        if (toggle) {
            setToggle(false);
        } else {
            setToggle(true)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`navbar ${show && "nav__black"}`}>
            <div className="right">
                <img className="navbar__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="" />

                <nav className="browse_nav" onClick={checkToggle}>
                    <ul>
                        <li className="browse"><a>Browse</a></li>
                        <li className="browse">{toggle ? <i class="fas fa-sort-up"></i> : <i class="fas fa-caret-down"></i>}</li>
                    </ul>
                </nav>

                <div className="right__nav">
                    <nav className={toggle ? "nav_active" : "nav_notactive"}>
                        <ul>
                            <li className="active hide__right_navlinks"><a href="">Home</a></li>
                            <li className="hide__right_navlinks"><a href="">TV Shows</a></li>
                            <li className="hide__right_navlinks"><a href="">Movies</a></li>
                            <li className="hide__right_navlinks"><a href="">New & Popular</a></li>
                            <li className="hide__right_navlinks"><a href="">My List</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="left">
                <div className="left__nav">
                    <nav>
                        <ul>
                            <li className="hide__left_navlinks" ><a href=""><i class="fas fa-search"></i></a></li>
                            <li className="hide__left_navlinks" ><a href="">CHILDREN</a></li>
                            <li><a href=""><i class="fas fa-gift"></i></a></li>
                            <li><a href=""><i class="fas fa-bell"></i></a></li>
                            <li>
                                <a href=""><img className="navbar__avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" /></a>
                            </li>
                            <li className="hide__left_navlinks"><i class="fas fa-caret-down"></i></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar
