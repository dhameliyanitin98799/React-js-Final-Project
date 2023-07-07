import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <div>

            <div>
                {/*================Home Banner Area =================*/}
                <section className="banner_area">
                    <div className="banner_inner d-flex align-items-center">
                        <div className="container">
                            <div className="banner_content d-md-flex justify-content-between align-items-center">
                                <div className="mb-3 mb-md-0">
                                    <h2>Blog</h2>
                                    <p>Very us move be blessed multiply night</p>
                                </div>
                                <div className="page_Link">
                                    <Link to="index.html">Home</Link>
                                    <Link to="blog.html">Blog </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================End Home Banner Area =================*/}
                {/*================Blog Area =================*/}
                <section className="blog_area section_gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mb-5 mb-lg-0">
                                <div className="blog_left_sidebar">
                                    <article className="blog_item">
                                        <div className="blog_item_img">
                                            <img className="card-img rounded-0" src="asset/img/blog/main-blog/m-blog-1.jpg" alt />
                                            <Link to="#" className="blog_item_date">
                                                <h3>15</h3>
                                                <p>Jan</p>
                                            </Link>
                                        </div>
                                        <div className="blog_details">
                                            <Link className="d-inline-block" to="single-blog.html">
                                                <h2>Google inks pact for new 35-storey office</h2>
                                            </Link>
                                            <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                            <ul className="blog-info-Link">
                                                <li><Link to="#"><i className="ti-user" /> Travel, Lifestyle</Link></li>
                                                <li><Link to="#"><i className="ti-comments" /> 03 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </article>
                                    <article className="blog_item">
                                        <div className="blog_item_img">
                                            <img className="card-img rounded-0" src="asset/img/blog/main-blog/m-blog-2.jpg" alt />
                                            <Link to="#" className="blog_item_date">
                                                <h3>15</h3>
                                                <p>Jan</p>
                                            </Link>
                                        </div>
                                        <div className="blog_details">
                                            <Link className="d-inline-block" to="single-blog.html">
                                                <h2>Google inks pact for new 35-storey office</h2>
                                            </Link>
                                            <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                            <ul className="blog-info-Link">
                                                <li><Link to="#"><i className="ti-user" /> Travel, Lifestyle</Link></li>
                                                <li><Link to="#"><i className="ti-comments" /> 03 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </article>
                                    <article className="blog_item">
                                        <div className="blog_item_img">
                                            <img className="card-img rounded-0" src="asset/img/blog/main-blog/m-blog-3.jpg" alt />
                                            <Link to="#" className="blog_item_date">
                                                <h3>15</h3>
                                                <p>Jan</p>
                                            </Link>
                                        </div>
                                        <div className="blog_details">
                                            <Link className="d-inline-block" to="single-blog.html">
                                                <h2>Google inks pact for new 35-storey office</h2>
                                            </Link>
                                            <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                            <ul className="blog-info-Link">
                                                <li><Link to="#"><i className="ti-user" /> Travel, Lifestyle</Link></li>
                                                <li><Link to="#"><i className="ti-comments" /> 03 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </article>
                                    <article className="blog_item">
                                        <div className="blog_item_img">
                                            <img className="card-img rounded-0" src="asset/img/blog/main-blog/m-blog-4.jpg" alt />
                                            <Link to="#" className="blog_item_date">
                                                <h3>15</h3>
                                                <p>Jan</p>
                                            </Link>
                                        </div>
                                        <div className="blog_details">
                                            <Link className="d-inline-block" to="single-blog.html">
                                                <h2>Google inks pact for new 35-storey office</h2>
                                            </Link>
                                            <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                            <ul className="blog-info-Link">
                                                <li><Link to="#"><i className="ti-user" /> Travel, Lifestyle</Link></li>
                                                <li><Link to="#"><i className="ti-comments" /> 03 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </article>
                                    <article className="blog_item">
                                        <div className="blog_item_img">
                                            <img className="card-img rounded-0" src="asset/img/blog/main-blog/m-blog-5.jpg" alt />
                                            <Link to="#" className="blog_item_date">
                                                <h3>15</h3>
                                                <p>Jan</p>
                                            </Link>
                                        </div>
                                        <div className="blog_details">
                                            <Link className="d-inline-block" to="single-blog.html">
                                                <h2>Google inks pact for new 35-storey office</h2>
                                            </Link>
                                            <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                                            <ul className="blog-info-Link">
                                                <li><Link to="#"><i className="ti-user" /> Travel, Lifestyle</Link></li>
                                                <li><Link to="#"><i className="ti-comments" /> 03 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </article>
                                    <nav className="blog-pagination justify-content-center d-flex">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <Link to="#" className="page-Link" aria-label="Previous">
                                                    <span aria-hidden="true">
                                                        <span className="ti-arrow-left" />
                                                    </span>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link to="#" className="page-Link">1</Link>
                                            </li>
                                            <li className="page-item active">
                                                <Link to="#" className="page-Link">2</Link>
                                            </li>
                                            <li className="page-item">
                                                <Link to="#" className="page-Link" aria-label="Next">
                                                    <span aria-hidden="true">
                                                        <span className="ti-arrow-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="blog_right_sidebar">
                                    <aside className="single_sidebar_widget search_widget">
                                        <form action="#">
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Search Keyword" />
                                                    <div className="input-group-append">
                                                        <button className="btn" type="button"><i className="ti-search" /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="main_btn rounded-0 w-100" type="submit">Search</button>
                                        </form>
                                    </aside>
                                    <aside className="single_sidebar_widget post_category_widget">
                                        <h4 className="widget_title">Category</h4>
                                        <ul className="list cat-list">
                                            <li>
                                                <Link to="#" className="d-flex">
                                                    <p>Resaurant food</p>
                                                    <p>(37)</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="d-flex">
                                                    <p>Travel news</p>
                                                    <p>(10)</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="d-flex">
                                                    <p>Modern technology</p>
                                                    <p>(03)</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="d-flex">
                                                    <p>Product</p>
                                                    <p>(11)</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="d-flex">
                                                    <p>Inspiration</p>
                                                    <p>21</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="d-flex">
                                                    <p>Health Care (21)</p>
                                                    <p>09</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </aside>
                                    <aside className="single_sidebar_widget popular_post_widget">
                                        <h3 className="widget_title">Recent Post</h3>
                                        <div className="media post_item">
                                            <img src="asset/img/blog/popular-post/post1.jpg" alt="post" />
                                            <div className="media-body">
                                                <Link to="single-blog.html">
                                                    <h3>From life was you fish...</h3>
                                                </Link>
                                                <p>January 12, 2019</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="asset/img/blog/popular-post/post2.jpg" alt="post" />
                                            <div className="media-body">
                                                <Link to="single-blog.html">
                                                    <h3>The Amazing Hubble</h3>
                                                </Link>
                                                <p>02 Hours ago</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="asset/img/blog/popular-post/post3.jpg" alt="post" />
                                            <div className="media-body">
                                                <Link to="single-blog.html">
                                                    <h3>Astronomy Or Astrology</h3>
                                                </Link>
                                                <p>03 Hours ago</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="asset/img/blog/popular-post/post4.jpg" alt="post" />
                                            <div className="media-body">
                                                <Link to="single-blog.html">
                                                    <h3>Asteroids telescope</h3>
                                                </Link>
                                                <p>01 Hours ago</p>
                                            </div>
                                        </div>
                                    </aside>
                                    <aside className="single_sidebar_widget tag_cloud_widget">
                                        <h4 className="widget_title">Tag Clouds</h4>
                                        <ul className="list">
                                            <li>
                                                <Link to="#">project</Link>
                                            </li>
                                            <li>
                                                <Link to="#">love</Link>
                                            </li>
                                            <li>
                                                <Link to="#">technology</Link>
                                            </li>
                                            <li>
                                                <Link to="#">travel</Link>
                                            </li>
                                            <li>
                                                <Link to="#">restaurant</Link>
                                            </li>
                                            <li>
                                                <Link to="#">life style</Link>
                                            </li>
                                            <li>
                                                <Link to="#">design</Link>
                                            </li>
                                            <li>
                                                <Link to="#">illustration</Link>
                                            </li>
                                        </ul>
                                    </aside>
                                    <aside className="single_sidebar_widget instagram_feeds">
                                        <h4 className="widget_title">Instagram Feeds</h4>
                                        <ul className="instagram_row flex-wrap">
                                            <li>
                                                <Link to="#">
                                                    <img className="img-fluid" src="asset/img/instagram/widget-i1.png" alt />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img className="img-fluid" src="asset/img/instagram/widget-i2.png" alt />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img className="img-fluid" src="asset/img/instagram/widget-i3.png" alt />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img className="img-fluid" src="asset/img/instagram/widget-i4.png" alt />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img className="img-fluid" src="asset/img/instagram/widget-i5.png" alt />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img className="img-fluid" src="asset/img/instagram/widget-i6.png" alt />
                                                </Link>
                                            </li>
                                        </ul>
                                    </aside>
                                    <aside className="single_sidebar_widget newsletter_widget">
                                        <h4 className="widget_title">Newsletter</h4>
                                        <form action="#">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Enter email" required />
                                            </div>
                                            <button className="main_btn rounded-0 w-100" type="submit">Subscribe</button>
                                        </form>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================Blog Area =================*/}
            </div>


        </div>
    )
}

export default Blog
