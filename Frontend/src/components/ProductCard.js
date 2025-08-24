import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlilce";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsEye, BsCartPlus } from "react-icons/bs";
import { useState } from "react";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const { grid, data } = props;
  const dispatch = useDispatch();
  const location = useLocation();

  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);

  const [wishlist, setWishlist] = useState(wishlistState || []);

  useEffect(() => {
    setWishlist(wishlistState || []);
  }, [wishlistState]);

  const isProductInWishlist = (productId) => {
    return wishlist?.some((item) => item._id === productId);
  };

  const addToWish = (productId) => {
    if (isProductInWishlist(productId)) {
      dispatch(addToWishlist(productId));
      const updatedWishlist = wishlist.filter((item) => item._id !== productId);
      setWishlist(updatedWishlist);
    } else {
      dispatch(addToWishlist(productId));
      const product = data.find((item) => item._id === productId);
      setWishlist([...wishlist, product]);
    }
  };

  const getGridClass = () => {
    if (location.pathname === "/product") {
      switch (grid) {
        case 12:
          return "col-12";
        case 6:
          return "col-6 col-lg-6";
        case 4:
          return "col-6 col-md-4 col-lg-4";
        case 3:
          return "col-6 col-md-4 col-lg-3";
        default:
          return "col-6 col-md-4 col-lg-3";
      }
    }
    return "col-6 col-md-4 col-lg-3";
  };

  return (
    <>
      {data?.map((item, index) => {
        const isWishlist = isProductInWishlist(item._id);
        return (
          <div key={index} className={`${getGridClass()} mb-4`}>
            <div className="product-card position-relative h-100">
              {/* Wishlist Icon */}
              <div className="wishlist-icon position-absolute">
                <button
                  className="border-0 bg-transparent"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToWish(item?._id);
                  }}
                >
                  {isWishlist ? (
                    <AiFillHeart className="text-danger fs-5" />
                  ) : (
                    <AiOutlineHeart className="text-muted fs-5" />
                  )}
                </button>
              </div>

              {/* Discount Badge */}
              {item?.discount && (
                <div className="discount-badge position-absolute top-0 start-0">
                  <span className="badge bg-danger px-2 py-1">
                    {item.discount}% OFF
                  </span>
                </div>
              )}

              {/* Product Image */}
              <div className="product-image position-relative">
                <img
                  src={item?.images[0]?.url}
                  className="img-fluid"
                  alt={item?.title}
                  onClick={() => navigate("/product/" + item?._id)}
                  style={{ cursor: 'pointer' }}
                />
                
                {/* Action Bar */}
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-2">
                    <button 
                      className="btn btn-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: '35px', height: '35px' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/product/" + item?._id);
                      }}
                      title="View Details"
                    >
                      <BsEye className="text-primary" />
                    </button>
                    <button 
                      className="btn btn-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: '35px', height: '35px' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to cart functionality
                      }}
                      title="Add to Cart"
                    >
                      <BsCartPlus className="text-primary" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="product-details p-3">
                <div className="brand mb-2">
                  <span className="badge bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-pill">
                    {item?.brand}
                  </span>
                </div>
                
                <h5 className="product-title mb-2">
                  {grid === 12 || grid === 6
                    ? item?.title
                    : item?.title?.length > 60
                    ? item?.title?.substring(0, 60) + "..."
                    : item?.title}
                </h5>
                
                <div className="rating mb-2">
                  <div className="d-flex align-items-center gap-2">
                    <ReactStars
                      count={5}
                      size={16}
                      value={item?.totalrating || 0}
                      edit={false}
                      activeColor="#ffc107"
                    />
                    <span className="text-muted small">
                      ({item?.totalrating || 0})
                    </span>
                  </div>
                </div>

                <div className="price-section">
                  {item?.originalPrice && item?.originalPrice > item?.price ? (
                    <div className="d-flex align-items-center gap-2">
                      <p className="price mb-0 fw-bold text-primary">
                        Rs. {item?.price?.toLocaleString()}
                      </p>
                      <p className="text-muted text-decoration-line-through mb-0 small">
                        Rs. {item?.originalPrice?.toLocaleString()}
                      </p>
                    </div>
                  ) : (
                    <p className="price mb-0 fw-bold text-primary">
                      Rs. {item?.price?.toLocaleString()}
                    </p>
                  )}
                </div>

                {/* Color Options */}
                {item?.colors && item?.colors.length > 0 && (
                  <div className="color-options mt-2">
                    <div className="d-flex gap-1">
                      {item.colors.slice(0, 3).map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className="color-option rounded-circle"
                          style={{ 
                            width: '20px', 
                            height: '20px', 
                            backgroundColor: color,
                            border: '2px solid #fff',
                            boxShadow: '0 0 0 1px #dee2e6'
                          }}
                          title={color}
                        ></div>
                      ))}
                      {item.colors.length > 3 && (
                        <div className="color-option rounded-circle d-flex align-items-center justify-content-center text-muted small"
                             style={{ 
                               width: '20px', 
                               height: '20px', 
                               backgroundColor: '#f8f9fa',
                               border: '2px solid #fff',
                               boxShadow: '0 0 0 1px #dee2e6'
                             }}>
                          +{item.colors.length - 3}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Stock Status */}
                {item?.quantity <= 0 && (
                  <div className="stock-status mt-2">
                    <span className="badge bg-danger">Out of Stock</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
