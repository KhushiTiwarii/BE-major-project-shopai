import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch, BsHeart, BsCart3, BsPerson, BsTelephone } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { getAProduct } from "../features/products/productSlilce";
import { getUserCart } from "../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const authState = useSelector((state) => state?.auth);
  const [total, setTotal] = useState(null);
  const [paginate, setPaginate] = useState(true);
  const productState = useSelector((state) => state?.product?.product);
  const navigate = useNavigate();

  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  };

  useEffect(() => {
    dispatch(getUserCart(config2));
  }, []);

  const [productOpt, setProductOpt] = useState([]);
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index].quantity) * cartState[index].price;
      setTotal(sum);
    }
  }, [cartState]);

  useEffect(() => {
    let data = [];
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index];
      data.push({ id: index, prod: element?._id, name: element?.title });
    }
    setProductOpt(data);
  }, [productState]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>

      {/* Main Header */}
      <header className="header-upper py-1">
        <div className="container-xxl">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-12 col-lg-2 text-center text-lg-start mb-3 mb-lg-0">
              <h2 className="mb-0">
                <Link to="/" className="d-flex align-items-center justify-content-center justify-content-lg-start">
                  <FaShoppingBag className="me-2" style={{ color: '#4a90e2' }} />
                  <span style={{ 
                    background: 'linear-gradient(135deg, #ff6b9d, #4a90e2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: '700'
                  }}>
                    ShopAI
                  </span>
                </Link>
              </h2>
            </div>

            {/* Search Bar */}
            <div className="col-12 col-lg-5 ">
              <div className="input-group">
                <Typeahead
                  id="pagination-example"
                  onPaginate={() => console.log("Results paginated")}
                  onChange={(selected) => {
                    navigate(`/product/${selected[0]?.prod}`);
                    dispatch(getAProduct(selected[0]?.prod));
                  }}
                  options={productOpt}
                  paginate={paginate}
                  labelKey={"name"}
                  placeholder="Search for Products here"
                  className="form-control"
                />
                <span className="input-group-text">
                  <BsSearch />
                </span>
              </div>
            </div>

            {/* Header Links */}
            <div className="col-12 col-lg-5">
              <div className="header-upper-links d-flex align-items-center justify-content-center justify-content-lg-end flex-wrap gap-3">
                {/* Help */}
                <div className="d-flex align-items-center gap-2">
                  <BsTelephone className="text-primary" />
                  <div className="d-none d-md-block">
                    <p className="mb-0 fw-semibold">Help</p>
                  </div>
                </div>

                {/* Join Us */}
                <div className="d-flex align-items-center gap-2">
                  <BsPerson className="text-primary" />
                  <div className="d-none d-md-block">
                    <p className="mb-0 fw-semibold">Join Us</p>
                  </div>
                </div>

                {/* Sign In */}
                <div className="d-flex align-items-center gap-2">
                  <BsPerson className="text-primary" />
                  <div className="d-none d-md-block">
                    <p className="mb-0 fw-semibold">Sign In</p>
                  </div>
                </div>

                {/* Wishlist */}
                <Link
                  to="/wishlist"
                  className="d-flex align-items-center gap-2 text-decoration-none"
                >
                  <BsHeart className="text-primary" />
                  <div className="d-none d-md-block">
                    <p className="mb-0 fw-semibold">Wishlist</p>
                  </div>
                </Link>

                {/* User Account */}
                <Link
                  to={authState?.user === null ? "/login" : "my-profile"}
                  className="d-flex align-items-center gap-2 text-decoration-none"
                >
                  <BsPerson className="text-primary" />
                  <div className="d-none d-md-block">
                    {authState?.user === null ? (
                      <p className="mb-0 fw-semibold">My Account</p>
                    ) : (
                      <p className="mb-0 fw-semibold">
                        Welcome {authState?.user?.firstname}
                      </p>
                    )}
                  </div>
                </Link>

                {/* Cart */}
                <Link
                  to="/cart"
                  className="d-flex align-items-center gap-2 text-decoration-none position-relative"
                >
                  <BsCart3 className="text-primary" />
                  <div className="d-none d-md-block">
                    <p className="mb-0 fw-semibold">Cart</p>
                    <p className="mb-0 small text-muted">
                      Rs. {!cartState?.length ? 0 : total ? total : 0}
                    </p>
                  </div>
                  {cartState?.length > 0 && (
                    <span className="badge bg-primary position-absolute top-0 start-100 translate-middle">
                      {cartState?.length}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center justify-content-center justify-content-lg-between flex-wrap gap-3">
                {/* Categories Dropdown */}
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-2"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaShoppingBag />
                    <span>Shop Categories</span>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {productState &&
                      productState.map((item, index) => {
                        return (
                          <li key={index}>
                            <Link className="dropdown-item" to="">
                              {item?.category}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>

                {/* Navigation Links */}
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-4 flex-wrap justify-content-center">
                    <NavLink to="/" className="text-decoration-none fw-semibold">
                      Home
                    </NavLink>
                    <NavLink to="/product" className="text-decoration-none fw-semibold">
                      Shop
                    </NavLink>
                    <NavLink to="/blogs" className="text-decoration-none fw-semibold">
                      Blog
                    </NavLink>
                    <NavLink to="/contact" className="text-decoration-none fw-semibold">
                      Contact
                    </NavLink>
                    {authState?.user !== null && (
                      <NavLink to="/my-orders" className="text-decoration-none fw-semibold">
                        My Orders
                      </NavLink>
                    )}
                    {authState?.user !== null ? (
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={handleLogout}
                      >
                        LogOut
                      </button>
                    ) : (
                      <Link to="/login" className="btn btn-primary btn-sm">
                        Sign In
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
