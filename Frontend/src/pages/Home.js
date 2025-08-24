import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogSlice";
import moment from "moment";
import { getAllProducts } from "../features/products/productSlilce";
import ReactStars from "react-rating-stars-component";
import { addToWishlist } from "../features/products/productSlilce";
import { 
  BsPhone, 
  BsLaptop, 
  BsHeadphones, 
  BsDisplay, 
  BsWifi, 
  BsController,
  BsArrowLeft,
  BsArrowRight,
  BsStarFill,
  BsClock,
  BsHeart
} from "react-icons/bs";

const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state?.product?.product);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getblogs();
    getProducts();
  }, []);

  const getblogs = () => {
    dispatch(getAllBlogs());
  };

  const getProducts = () => {
    dispatch(getAllProducts());
  };

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  // Categories data
  const categories = [
    { icon: <BsPhone />, name: "Phones" },
    { icon: <BsLaptop />, name: "Computers" },
    { icon: <BsHeadphones />, name: "Accessories" },
    { icon: <BsLaptop />, name: "Laptops" },
    { icon: <BsDisplay />, name: "Monitors" },
    { icon: <BsWifi />, name: "Networking" },
    { icon: <BsController />, name: "PC Gaming" },
  ];

  return (
    <>
      {/* Hero Section */}
      <Container class1="home-wrapper-1 py-5">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <div className="main-banner position-relative">
              <div className="hero-content p-4 p-lg-5">
                <div className="new-product-badge mb-3">
                  <span className="badge bg-primary px-3 py-2 rounded-pill">
                    New Product
                  </span>
                </div>
                <h1 className="display-4 fw-bold mb-3">
                  Roco Wireless Headphone
                </h1>
                <p className="lead mb-4">
                  Experience crystal clear sound with our premium wireless headphones
                </p>
                <Link className="button d-inline-flex align-items-center gap-2">
                  <BsController />
                  Shop Now
                </Link>
                <div className="social-proof mt-4 d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center gap-1">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png" 
                      alt="user" 
                      className="rounded-circle"
                      style={{ width: '30px', height: '30px' }}
                    />
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png" 
                      alt="user" 
                      className="rounded-circle"
                      style={{ width: '30px', height: '30px' }}
                    />
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png" 
                      alt="user" 
                      className="rounded-circle"
                      style={{ width: '30px', height: '30px' }}
                    />
                  </div>
                  <div className="d-flex align-items-center gap-1">
                    <BsStarFill className="text-warning" />
                    <BsStarFill className="text-warning" />
                    <BsStarFill className="text-warning" />
                    <BsStarFill className="text-warning" />
                    <BsStarFill className="text-warning" />
                    <span className="ms-1 fw-semibold">100+ Reviews</span>
                  </div>
                </div>
              </div>
              {/* <div className="hero-image position-absolute top-0 end-0 h-100 w-50 d-none d-lg-block">
                <div className="position-relative h-100">
                  <img
                    src="images/headphone.jpg"
                    className="img-fluid position-absolute top-50 end-0 translate-middle-y"
                    alt="headphone"
                    style={{ maxWidth: '80%', zIndex: 2 }}
                  />
                  <div className="price-tag position-absolute top-25 end-25 bg-primary text-white px-3 py-2 rounded-pill">
                    From $48.00
                  </div>
                  <img
                    src="images/watch.jpg"
                    className="img-fluid position-absolute bottom-25 end-25"
                    alt="watch"
                    style={{ maxWidth: '40%', zIndex: 1 }}
                  />
                </div>
              </div> */}
            </div>
          </div>
          
          <div className="col-12 col-lg-6">
            <div className="row g-3">
              <div className="col-6">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="MacBook Pro"
                  />
                  <div className="small-banner-content">
                    <h4>Best Sale</h4>
                    <h5>MacBook Pro</h5>
                    <p>From Rs. 1,29,900.00</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="iPad Air"
                  />
                  <div className="small-banner-content">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy iPad Air</h5>
                    <p>From Rs. 21,625.00</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="iPad"
                  />
                  <div className="small-banner-content">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy iPad</h5>
                    <p>From Rs. 41,900.00</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="Headphone"
                  />
                  <div className="small-banner-content">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Headphone</h5>
                    <p>From Rs. 41,000.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Services Section */}
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between flex-wrap">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-3" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* Categories Section */}
      <Container class1="categories-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center gap-2">
                <div className="category-icon bg-primary text-white p-2 rounded">
                  <BsLaptop />
                </div>
                <h3 className="section-heading mb-0">Browse by Category</h3>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-primary rounded-circle">
                  <BsArrowLeft />
                </button>
                <button className="btn btn-outline-primary rounded-circle">
                  <BsArrowRight />
                </button>
              </div>
            </div>
            <div className="categories-grid d-flex gap-3 overflow-auto">
              {categories.map((category, index) => (
                <div key={index} className="category-card text-center p-3 bg-white rounded-3 shadow-sm border">
                  <div className="category-icon mb-2">
                    <div className="bg-light p-3 rounded-circle d-inline-flex align-items-center justify-content-center">
                      {React.cloneElement(category.icon, { size: 24, className: 'text-primary' })}
                    </div>
                  </div>
                  <h6 className="mb-0 fw-semibold">{category.name}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Special Offer Section */}
      <Container class1="special-offer-wrapper py-5 home-wrapper-2">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <div className="special-offer-content">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="offer-badge bg-primary text-white px-3 py-1 rounded-pill">
                  Don't Miss!
                </div>
              </div>
              <h2 className="display-6 fw-bold mb-3">
                Enhance Your Music Experience
              </h2>
              <div className="countdown-timer d-flex gap-3 mb-4">
                <div className="countdown-item text-center">
                  <div className="bg-primary text-white rounded p-2">
                    <span className="fw-bold">15</span>
                  </div>
                  <small className="text-muted">Day</small>
                </div>
                <div className="countdown-item text-center">
                  <div className="bg-primary text-white rounded p-2">
                    <span className="fw-bold">10</span>
                  </div>
                  <small className="text-muted">Hrs</small>
                </div>
                <div className="countdown-item text-center">
                  <div className="bg-primary text-white rounded p-2">
                    <span className="fw-bold">56</span>
                  </div>
                  <small className="text-muted">Min</small>
                </div>
                <div className="countdown-item text-center">
                  <div className="bg-primary text-white rounded p-2">
                    <span className="fw-bold">54</span>
                  </div>
                  <small className="text-muted">Sec</small>
                </div>
              </div>
              <Link className="button">
                Check it Out!
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="special-offer-image text-center">
              <img
                src="images/headphone.jpg"
                className="img-fluid"
                alt="Special Headphone"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Featured Products Section */}
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center gap-2">
                <div className="category-icon bg-primary text-white p-2 rounded">
                  <BsStarFill />
                </div>
                <h3 className="section-heading mb-0">Explore our Products</h3>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-primary rounded-circle">
                  <BsArrowLeft />
                </button>
                <button className="btn btn-outline-primary rounded-circle">
                  <BsArrowRight />
                </button>
              </div>
            </div>
          </div>
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "featured") {
                return (
                  <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
                    <div className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                          <BsHeart
                            className="text-muted"
                            onClick={(e) => {
                              addToWish(item?._id);
                            }}
                          />
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          src={item?.images[0]?.url}
                          alt="product image"
                          className="img-fluid"
                          onClick={() => navigate("/product/" + item?._id)}
                        />
                        <div className="discount-badge position-absolute top-0 end-0 bg-primary text-white px-2 py-1 rounded">
                          30% Off
                        </div>
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">
                          {item?.title?.substr(0, 70) + "..."}
                        </h5>
                        <div className="d-flex align-items-center gap-1 mb-2">
                          <ReactStars
                            count={5}
                            size={16}
                            value={item?.totalrating.toString()}
                            edit={false}
                            activeColor="#ffc107"
                          />
                          <span className="text-muted small">({item?.totalrating || 0})</span>
                        </div>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <p className="price mb-0">Rs. {item?.price}</p>
                          <p className="text-muted text-decoration-line-through mb-0 small">
                            Rs. {Math.round(item?.price * 1.3)}
                          </p>
                        </div>
                        <div className="color-options d-flex gap-1">
                          <div className="color-option bg-danger rounded-circle" style={{ width: '20px', height: '20px' }}></div>
                          <div className="color-option bg-dark rounded-circle" style={{ width: '20px', height: '20px' }}></div>
                          <div className="color-option bg-light border rounded-circle" style={{ width: '20px', height: '20px' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <Link className="btn btn-outline-primary px-4 py-2">
              View All Products
            </Link>
          </div>
        </div>
      </Container>

      {/* Famous Cards Section */}
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6 col-md-3 mb-4">
            <div className="famous-card position-relative">
              <img
                src="images/famous-1.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From Rs. 399</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="famous-card position-relative">
              <img
                src="images/famous-2.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">smartphones</h5>
                <h6 className="text-dark">Iphone 14 Pro.</h6>
                <p className="text-dark">Now in Green. From Rs. 61,000.00</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="famous-card position-relative">
              <img
                src="images/famous-4.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">home speakers</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">From Rs. 699</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Special Products Section */}
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "special") {
                return (
                  <SpecialProduct
                    key={index}
                    id={item?._id}
                    title={item?.title}
                    brand={item?.brand}
                    totalrating={item?.totalrating.toString()}
                    price={item?.price}
                    img={item?.images[0].url}
                    sold={item?.sold}
                    quantity={item?.quantity}
                  />
                );
              }
            })}
        </div>
      </Container>

      {/* Popular Products Section */}
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "popular") {
                return (
                  <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
                    <div className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                          <BsHeart
                            className="text-muted"
                            onClick={(e) => {
                              addToWish(item?._id);
                            }}
                          />
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          src={item?.images[0].url}
                          alt="product image"
                          className="img-fluid"
                          onClick={() => navigate("/product/" + item?._id)}
                        />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">
                          {item?.title?.substr(0, 70) + "..."}
                        </h5>
                        <div className="d-flex align-items-center gap-1 mb-2">
                          <ReactStars
                            count={5}
                            size={16}
                            value={item?.totalrating.toString()}
                            edit={false}
                            activeColor="#ffc107"
                          />
                          <span className="text-muted small">({item?.totalrating || 0})</span>
                        </div>
                        <p className="price">Rs. {item?.price}</p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>

      {/* Brand Marquee Section */}
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      {/* Blog Section */}
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          {blogState &&
            blogState?.map((item, index) => {
              if (index < 4) {
                return (
                  <div className="col-6 col-md-3 mb-4" key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images[0]?.url}
                      date={moment(item?.createdAt).format(
                        "MMMM Do YYYY, h:mm a"
                      )}
                    />
                  </div>
                );
              }
            })}
        </div>
      </Container>
    </>
  );
};

export default Home;
