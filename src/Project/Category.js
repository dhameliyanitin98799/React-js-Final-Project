import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <div>

            <div>
                {/*================Home Banner Area =================*/}
                <section className="banner_area">
                    <div className="banner_inner d-flex align-items-center">
                        <div className="container">
                            <div className="banner_content d-md-flex justify-content-between align-items-center">
                                <div className="mb-3 mb-md-0">
                                    <h2>Shop Category</h2>
                                    <p>Very us move be blessed multiply night</p>
                                </div>
                                <div className="page_link">
                                    <Link to="index.html">Home</Link>
                                    <Link to="category.html">Shop</Link>
                                    <Link to="category.html">Women Fashion</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================End Home Banner Area =================*/}
                {/*================Category Product Area =================*/}
                <section className="cat_product_area section_gap">
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9">
                                <div className="product_top_bar">
                                    <div className="left_dorp">
                                        <select className="sorting">
                                            <option value={1}>Default sorting</option>
                                            <option value={2}>Default sorting 01</option>
                                            <option value={4}>Default sorting 02</option>
                                        </select>
                                        <select className="show">
                                            <option value={1}>Show 12</option>
                                            <option value={2}>Show 14</option>
                                            <option value={4}>Show 16</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="latest_product_inner">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <img className="card-img" src="asset/img/product/inspired-product/i1.jpg" alt />
                                                    <div className="p_icon">
                                                        <Link to="#">
                                                            <i className="ti-eye" />
                                                        </Link>
                                                        <Link to="#">
                                                            <i className="ti-heart" />
                                                        </Link>
                                                        <Link to="#">
                                                            <i className="ti-shopping-cart" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product-btm">
                                                    <Link to="#" className="d-block">
                                                        <h4>Latest men’s sneaker</h4>
                                                    </Link>
                                                    <div className="mt-3">
                                                        <span className="mr-4">$25.00</span>
                                                        <del>$35.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <img className="card-img" src="asset/img/product/inspired-product/i2.jpg" alt />
                                                    <div className="p_icon">
                                                        <Link to="#">
                                                            <i className="ti-eye" />
                                                        </Link>
                                                        <Link to="#">
                                                            <i className="ti-heart" />
                                                        </Link>
                                                        <Link to="#">
                                                            <i className="ti-shopping-cart" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product-btm">
                                                    <Link to="#" className="d-block">
                                                        <h4>Latest men’s sneaker</h4>
                                                    </Link>
                                                    <div className="mt-3">
                                                        <span className="mr-4">$25.00</span>
                                                        <del>$35.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <img className="card-img" src="asset/img/product/inspired-product/i3.jpg" alt />
                                                    <div className="p_icon">
                                                        <Link to="#">
                                                            <i className="ti-eye" />
                                                        </Link>
                                                        <Link to="#">
                                                            <i className="ti-heart" />
                                                        </Link>
                                                        <Link to="#">
                                                            <i className="ti-shopping-cart" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product-btm">
                                                    <Link to="#" className="d-block">
                                                        <h4>Latest men’s sneaker</h4>
                                                    </Link>
                                                    <div className="mt-3">
                                                        <span className="mr-4">$25.00</span>
                                                        <del>$35.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <img className="card-img" src="asset/img/product/inspired-product/i4.jpg" alt />
                                                    <div className="p_icon">
                                                        <Link to="#">
                                                            <i className="ti-eye" />
                                                        </Link>
                                                        <Link to="#">
                                                            <i className="ti-heart" />
                                                        </Link>
                                                        <Link to="#">
                                                            <i className="ti-shopping-cart" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product-btm">
                                                    <Link to="#" className="d-block">
                                                        <h4>Latest men’s sneaker</h4>
                                                    </Link>
                                                    <div className="mt-3">
                                                        <span className="mr-4">$25.00</span>
                                                        <del>$35.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <img className="card-img" src="asset/img/product/inspired-product/i5.jpg" alt />
                                                    <div className="p_icon">
                                                        <Link to="#">
                                                            <i className="ti-eye" />
                                                        </Link>
                                                        <Link to="#">
                                                            <i className="ti-heart" />
                                                        </Link>
                                                        <Link to="#">
                                                            <i className="ti-shopping-cart" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product-btm">
                                                    <Link to="#" className="d-block">
                                                        <h4>Latest men’s sneaker</h4>
                                                    </Link>
                                                    <div className="mt-3">
                                                        <span className="mr-4">$25.00</span>
                                                        <del>$35.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <img className="card-img" src="asset/img/product/inspired-product/i6.jpg" alt />
                                                    <div className="p_icon">
                                                        <Link to="#">
                                                            <i className="ti-eye" />
                                                        </Link>
                                                        <Link to="#">
                                                            <i className="ti-heart" />
                                                        </Link>
                                                        <Link to="#">
                                                            <i className="ti-shopping-cart" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product-btm">
                                                    <Link to="#" className="d-block">
                                                        <h4>Latest men’s sneaker</h4>
                                                    </Link>
                                                    <div className="mt-3">
                                                        <span className="mr-4">$25.00</span>
                                                        <del>$35.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <img className="card-img" src="asset/img/product/inspired-product/i7.jpg" alt />
                                                    <div className="p_icon">
                                                        <Link to="#">
                                                            <i className="ti-eye" />
                                                        </Link>
                                                        <Link to="#">
                                                            <i className="ti-heart" />
                                                        </Link>
                                                        <Link to="#">
                                                            <i className="ti-shopping-cart" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product-btm">
                                                    <Link to="#" className="d-block">
                                                        <h4>Latest men’s sneaker</h4>
                                                    </Link>
                                                    <div className="mt-3">
                                                        <span className="mr-4">$25.00</span>
                                                        <del>$35.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <img className="card-img" src="asset/img/product/inspired-product/i8.jpg" alt />
                                                    <div className="p_icon">
                                                        <Link to="#">
                                                            <i className="ti-eye" />
                                                        </Link>
                                                        <Link to="#">
                                                            <i className="ti-heart" />
                                                        </Link>
                                                        <Link to="#">
                                                            <i className="ti-shopping-cart" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product-btm">
                                                    <Link to="#" className="d-block">
                                                        <h4>Latest men’s sneaker</h4>
                                                    </Link>
                                                    <div className="mt-3">
                                                        <span className="mr-4">$25.00</span>
                                                        <del>$35.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="single-product">
                                                <div className="product-img">
                                                    <img className="card-img" src="asset/img/product/inspired-product/i2.jpg" alt />
                                                    <div className="p_icon">
                                                        <Link to="#">
                                                            <i className="ti-eye" />
                                                        </Link>
                                                        <Link to="#">
                                                            <i className="ti-heart" />
                                                        </Link>
                                                        <Link to="#">
                                                            <i className="ti-shopping-cart" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="product-btm">
                                                    <Link to="#" className="d-block">
                                                        <h4>Latest men’s sneaker</h4>
                                                    </Link>
                                                    <div className="mt-3">
                                                        <span className="mr-4">$25.00</span>
                                                        <del>$35.00</del>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="left_sidebar_area">
                                    <aside className="left_widgets p_filter_widgets">
                                        <div className="l_w_title">
                                            <h3>Browse Categories</h3>
                                        </div>
                                        <div className="widgets_inner">
                                            <ul className="list">
                                                <li>
                                                    <Link to="#">Frozen Fish</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Dried Fish</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Fresh Fish</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Meat Alternatives</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Fresh Fish</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Meat Alternatives</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Meat</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </aside>
                                    <aside className="left_widgets p_filter_widgets">
                                        <div className="l_w_title">
                                            <h3>Product Brand</h3>
                                        </div>
                                        <div className="widgets_inner">
                                            <ul className="list">
                                                <li>
                                                    <Link to="#">Apple</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Asus</Link>
                                                </li>
                                                <li className="active">
                                                    <Link to="#">Gionee</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Micromax</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Samsung</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </aside>
                                    <aside className="left_widgets p_filter_widgets">
                                        <div className="l_w_title">
                                            <h3>Color Filter</h3>
                                        </div>
                                        <div className="widgets_inner">
                                            <ul className="list">
                                                <li>
                                                    <Link to="#">Black</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Black Leather</Link>
                                                </li>
                                                <li className="active">
                                                    <Link to="#">Black with red</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Gold</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Spacegrey</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </aside>
                                    <aside className="left_widgets p_filter_widgets">
                                        <div className="l_w_title">
                                            <h3>Price Filter</h3>
                                        </div>
                                        <div className="widgets_inner">
                                            <div className="range_item">
                                                <div id="slider-range" />
                                                <div className>
                                                    <label htmlFor="amount">Price : </label>
                                                    <input type="text" id="amount" readOnly />
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================End Category Product Area =================*/}
            </div>


        </div>
    )
}

export default Category
