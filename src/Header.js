import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>

            {/*================Header Menu Area =================*/}
            <header className="header_area">
                <div className="top_menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="float-left">
                                    <p>Phone: +01 256 25 235</p>
                                    <p>email: info@eiser.com</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="float-right">
                                    <ul className="right_side">
                                        <li>
                                            <Link to="/Cart">
                                                gift card
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Tracking">
                                                track order
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Contact">
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_menu">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light w-100">
                            {/* Brand and toggle get grouped for better mobile display */}
                            <Link className="navbar-brand logo_h" to="/"/>
                            <Link >
                            <img className='setimage' src="https://iili.io/Hs2cvXs.md.png" alt="Hs2cvXs.md.png" border="0"/>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="collapse navbar-collapse offset w-100" id="navbarSupportedContent">
                                <div className="row w-100 mr-0">
                                    <div className="col-lg-7 pr-0">
                                        <ul className="nav navbar-nav center_nav pull-right">
                                            <li className="nav-item active">
                                                <Link className="nav-link" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item submenu dropdown">
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/Category">Shop Category</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/SingleProduct">Product Details</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/CheckOut">Product Checkout</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/Cart">Shopping Cart</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item submenu dropdown">
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/Blog">Blog</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/SingleBlog">Blog Details</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item submenu dropdown">
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/Tracking">Tracking</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/Elements">Elements</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/Contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-5 pr-0">
                                        <ul className="nav navbar-nav navbar-right right_nav pull-right">
                                            <li className="nav-item">
                                                <Link className="icons">
                                                    <i className="ti-search" aria-hidden="true" />
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="icons">
                                                    <i className="ti-shopping-cart" />
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="icons">
                                                    <i className="ti-user" aria-hidden="true" />
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="icons">
                                                    <i className="ti-heart" aria-hidden="true" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>


        </div>
    )
}

export default Header
