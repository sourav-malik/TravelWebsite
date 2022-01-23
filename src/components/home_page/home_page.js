import React from "react";
import icon_1 from "../../assets/landing/assets/img/category/icon1.png";
import icon_2 from "../../assets/landing/assets/img/category/icon2.png";
import icon_3 from "../../assets/landing/assets/img/category/icon3.png";
import icon_4 from "../../assets/landing/assets/img/category/icon4.png";
import shape_img from "../../assets/landing/assets/img/category/shape.svg";
import hero_img from "../../assets/landing/assets/img/hero/hero-img.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function HomePage(props) {
  require("../../assets/landing/assets/css/theme.css");
  const [isActive, setActive] = React.useState(false);

  const facebook_icon = <FontAwesomeIcon icon={faFacebookF} />;
  const instagram_icon = <FontAwesomeIcon icon={faInstagram} />;
  const twitter_icon = <FontAwesomeIcon icon={faTwitter} />;
  const header_disable =
    "navbar navbar-expand-lg navbar-light fixed-top py-5 d-block";
  const header_enable =
    "navbar navbar-expand-lg navbar-light fixed-top py-5 d-block bg-light";

  const mobile_header =
    "navbar-collapse border-top border-lg-0 mt-4 mt-lg-0 collapse";
  const mobile_header_enable =
    "navbar-collapse border-top border-lg-0 mt-4 mt-lg-0";
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <main className="main" id="top">
        <nav
          className={isActive ? header_enable : header_disable}
          data-navbar-on-scroll="data-navbar-on-scroll"
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img
                src={require("../../assets/landing/assets/img/logo.svg")}
                height="34"
                alt="logo"
              />
            </a>
            <button
              onClick={toggleClass}
              className={
                isActive ? "navbar-toggler" : "navbar-toggler collapsed"
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"> </span>
            </button>
            <div
              className={isActive ? mobile_header_enable : mobile_header}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base align-items-lg-center align-items-start">
                <li className="nav-item px-3 px-xl-4">
                  <a
                    className="nav-link fw-medium"
                    aria-current="page"
                    href="#destination"
                  >
                    Destinations
                  </a>
                </li>
                <li className="nav-item px-3 px-xl-4">
                  <a
                    className="nav-link fw-medium"
                    aria-current="page"
                    href="#destination"
                  >
                    Hotels
                  </a>
                </li>
                <li className="nav-item px-3 px-xl-4">
                  <a
                    className="nav-link fw-medium"
                    aria-current="page"
                    href="#service"
                  >
                    Flights
                  </a>
                </li>
                <li className="nav-item px-3 px-xl-4">
                  <a
                    className="nav-link fw-medium"
                    aria-current="page"
                    href="#booking"
                  >
                    Booking
                  </a>
                </li>
                <li className="nav-item px-3 px-xl-4">
                  <a
                    className="nav-link fw-medium"
                    aria-current="page"
                    href="/login"
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item px-3 px-xl-4">
                  <a
                    className="btn btn-outline-dark order-1 order-lg-0 fw-medium"
                    href="/signup"
                  >
                    Sign Up
                  </a>
                </li>
                <li className="nav-item dropdown px-3 px-lg-0">
                  {" "}
                  <a
                    href="/#"
                    className="d-inline-block ps-0 py-2 pe-3 text-decoration-none dropdown-toggle fw-medium"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    EN
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end border-0 shadow-lg"
                    style={{ borderRadius: "0.3rem" }}
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#!">
                        EN
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        BN
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section style={{ paddingTop: "7rem" }}>
          <div
            className="bg-holder"
            style={{
              backgroundImage:
                "url(" +
                require("../../assets/landing/assets/img/hero/hero-bg.svg") +
                ")",
            }}
          ></div>

          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 col-lg-6 order-0 order-md-1 text-end">
                <img
                  className="pt-7 pt-md-0 hero-img"
                  src={hero_img}
                  alt="hero-header"
                />
              </div>
              <div className="col-md-7 col-lg-6 text-md-start text-center py-6">
                <h4 className="fw-bold text-danger mb-3">
                  Best Destinations around the world
                </h4>
                <h1 className="hero-title">
                  Travel, enjoy and live a new and full life
                </h1>
                <p className="mb-4 fw-medium">
                  Built Wicket longer admire do barton vanity itself do in it.
                  <br className="d-none d-xl-block" />
                  Preferred to sportsmen it engrossed listening. Park gate
                  <br className="d-none d-xl-block" />
                  sell they west hard for the.
                </p>
                <div className="text-center text-md-start">
                  {" "}
                  <a
                    className="btn btn-primary btn-lg me-md-4 mb-3 mb-md-0 border-0 primary-btn-shadow"
                    href="#!"
                    role="button"
                  >
                    Find out more
                  </a>
                  <div className="w-100 d-block d-md-none"></div>
                  <a
                    href="#!"
                    role="button"
                    data-bs-toggle="modal"
                    data-bs-target="#popupVideo"
                  >
                    <span className="btn btn-danger round-btn-lg rounded-circle me-3 danger-btn-shadow">
                      {" "}
                      <img
                        src={require("../../assets/landing/assets/img/hero/play.svg")}
                        width="15"
                        alt="paly"
                      />
                    </span>
                  </a>
                  <span className="fw-medium">Play Demo</span>
                  <div
                    className="modal fade"
                    id="popupVideo"
                    tabIndex="-1"
                    aria-labelledby="popupVideo"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                      <div className="modal-content">
                        <iframe
                          className="rounded"
                          style={{ width: "100%", maxHeight: 500 }}
                          height="500px"
                          src="https://www.youtube.com/embed/_lhdhL4UDIo"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen="allowfullscreen"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5 pt-md-9" id="service">
          <div className="container">
            <div className="position-absolute2 z-index--1 end-0 d-none d-lg-block">
              <img
                src={shape_img}
                style={{ maxWidth: "200px" }}
                alt="service"
              />
            </div>
            <div className="mb-7 text-center">
              <h5 className="text-secondary">CATEGORY </h5>
              <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">
                We Offer Best Services
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6 mb-6">
                <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                  <div className="card-body p-xxl-5 p-4">
                    {" "}
                    <img src={icon_1} width="75" alt="Service" />
                    <h4 className="mb-3">Calculated Weather</h4>
                    <p className="mb-0 fw-medium">
                      Built Wicket longer admire do barton vanity itself do in
                      it.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-6">
                <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                  <div className="card-body p-xxl-5 p-4">
                    {" "}
                    <img src={icon_2} width="75" alt="Service" />
                    <h4 className="mb-3">Best Flights</h4>
                    <p className="mb-0 fw-medium">
                      Engrossed listening. Park gate sell they west hard for
                      the.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-6">
                <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                  <div className="card-body p-xxl-5 p-4">
                    {" "}
                    <img src={icon_3} width="75" alt="Service" />
                    <h4 className="mb-3">Local Events</h4>
                    <p className="mb-0 fw-medium">
                      Barton vanity itself do in it. Preferd to men it engrossed
                      listening.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-6">
                <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                  <div className="card-body p-xxl-5 p-4">
                    {" "}
                    <img src={icon_4} width="75" alt="Service" />
                    <h4 className="mb-3">Customization</h4>
                    <p className="mb-0 fw-medium">
                      We deliver outsourced aviation services for military
                      customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5" id="destination">
          <div className="container">
            <div className="position-absolute start-100 bottom-0 translate-middle-x d-none d-xl-block ms-xl-n4">
              <img
                src={require("../../assets/landing/assets/img/dest/shape.svg")}
                alt="destination"
              />
            </div>
            <div className="mb-7 text-center">
              <h5 className="text-secondary">Top Selling </h5>
              <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">
                Top Destinations
              </h3>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card overflow-hidden shadow">
                  {" "}
                  <img
                    className="card-img-top"
                    src={require("../../assets/landing/assets/img/dest/dest1.jpg")}
                    alt="Rome, Italty"
                  />
                  <div className="card-body py-4 px-3">
                    <div className="d-flex flex-column flex-lg-row justify-content-between mb-3">
                      <h4 className="text-secondary fw-medium">
                        <a
                          className="link-900 text-decoration-none stretched-link"
                          href="#!"
                        >
                          Rome, Italty
                        </a>
                      </h4>
                      <span className="fs-1 fw-medium">$5,42k</span>
                    </div>
                    <div className="d-flex align-items-center">
                      {" "}
                      <img
                        src={require("../../assets/landing/assets/img/dest/navigation.svg")}
                        style={{ marginRight: "14px" }}
                        width="20"
                        alt="navigation"
                      />
                      <span className="fs-0 fw-medium">10 Days Trip</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card overflow-hidden shadow">
                  {" "}
                  <img
                    className="card-img-top"
                    src={require("../../assets/landing/assets/img/dest/dest2.jpg")}
                    alt="London, UK"
                  />
                  <div className="card-body py-4 px-3">
                    <div className="d-flex flex-column flex-lg-row justify-content-between mb-3">
                      <h4 className="text-secondary fw-medium">
                        <a
                          className="link-900 text-decoration-none stretched-link"
                          href="#!"
                        >
                          London, UK
                        </a>
                      </h4>
                      <span className="fs-1 fw-medium">$4.2k</span>
                    </div>
                    <div className="d-flex align-items-center">
                      {" "}
                      <img
                        src={require("../../assets/landing/assets/img/dest/navigation.svg")}
                        style={{ marginRight: "14px" }}
                        width="20"
                        alt="navigation"
                      />
                      <span className="fs-0 fw-medium">12 Days Trip</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card overflow-hidden shadow">
                  {" "}
                  <img
                    className="card-img-top"
                    src={require("../../assets/landing/assets/img/dest/dest3.jpg")}
                    alt="Full Europe"
                  />
                  <div className="card-body py-4 px-3">
                    <div className="d-flex flex-column flex-lg-row justify-content-between mb-3">
                      <h4 className="text-secondary fw-medium">
                        <a
                          className="link-900 text-decoration-none stretched-link"
                          href="#!"
                        >
                          Full Europe
                        </a>
                      </h4>
                      <span className="fs-1 fw-medium">$15k</span>
                    </div>
                    <div className="d-flex align-items-center">
                      {" "}
                      <img
                        src={require("../../assets/landing/assets/img/dest/navigation.svg")}
                        style={{ marginRight: "14px" }}
                        width="20"
                        alt="navigation"
                      />
                      <span className="fs-0 fw-medium">28 Days Trip</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="booking">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="mb-4 text-start">
                  <h5 className="text-secondary">Easy and Fast </h5>
                  <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">
                    Book your next trip in 3 easy steps
                  </h3>
                </div>
                <div className="d-flex align-items-start mb-5">
                  <div
                    className="bg-primary me-sm-4 me-3 p-3"
                    style={{ borderRadius: "13px" }}
                  >
                    {" "}
                    <img
                      src={require("../../assets/landing/assets/img/steps/selection.svg")}
                      width="22"
                      alt="steps"
                    />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-secondary fw-bold fs-0">
                      Choose Destination
                    </h5>
                    <p>
                      Choose your favourite place. No matter{" "}
                      <br className="d-none d-sm-block" /> where you travel
                      inside the World.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-5">
                  <div
                    className="bg-danger me-sm-4 me-3 p-3"
                    style={{ borderRadius: "13px" }}
                  >
                    {" "}
                    <img
                      src={require("../../assets/landing/assets/img/steps/water-sport.svg")}
                      width="22"
                      alt="steps"
                    />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-secondary fw-bold fs-0">
                      Make Payment
                    </h5>
                    <p>
                      After find your perfect spot, make your{" "}
                      <br className="d-none d-sm-block" /> payment and get ready
                      to travel.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-5">
                  <div
                    className="bg-info me-sm-4 me-3 p-3"
                    style={{ borderRadius: "13px" }}
                  >
                    {" "}
                    <img
                      src={require("../../assets/landing/assets/img/steps/taxi.svg")}
                      width="22"
                      alt="steps"
                    />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-secondary fw-bold fs-0">
                      Reach Airport on Selected Date
                    </h5>
                    <p>
                      Lastly, you have to arrive at the airport{" "}
                      <br className="d-none d-sm-block" /> on time and enjoy the
                      vacation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center align-items-start">
                <div
                  className="card position-relative shadow"
                  style={{ maxWidth: "370px" }}
                >
                  <div
                    className="position-absolute z-index--1 me-10 me-xxl-0"
                    style={{ right: "-160px", top: "-210px" }}
                  >
                    {" "}
                    <img
                      src={require("../../assets/landing/assets/img/steps/bg.png")}
                      style={{ maxWidth: "550px" }}
                      alt="shape"
                    />
                  </div>
                  <div className="card-body p-3">
                    {" "}
                    <img
                      className="mb-4 mt-2 rounded-2 w-100"
                      src={require("../../assets/landing/assets/img/steps/booking-img.jpg")}
                      alt="booking"
                    />
                    <div>
                      <h5 className="fw-medium">Trip To Greece</h5>
                      <p className="fs--1 mb-3 fw-medium">
                        14-29 June | by Robbin joseph
                      </p>
                      <div className="icon-group mb-4">
                        {" "}
                        <span className="btn icon-item">
                          {" "}
                          <img
                            src={require("../../assets/landing/assets/img/steps/leaf.svg")}
                            alt=""
                          />
                        </span>
                        <span className="btn icon-item">
                          {" "}
                          <img
                            src={require("../../assets/landing/assets/img/steps/map.svg")}
                            alt=""
                          />
                        </span>
                        <span className="btn icon-item">
                          {" "}
                          <img
                            src={require("../../assets/landing/assets/img/steps/send.svg")}
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center mt-n1">
                          <img
                            className="me-3"
                            src={require("../../assets/landing/assets/img/steps/building.svg")}
                            width="18"
                            alt="building"
                          />
                          <span className="fs--1 fw-medium">
                            24 people going
                          </span>
                        </div>
                        <div className="show-onhover position-relative">
                          <div
                            className="card hideEl shadow position-absolute end-0 start-xl-50 bottom-100 translate-xl-middle-x ms-3"
                            style={{ width: 260, borderRadius: 18 }}
                          >
                            <div className="card-body py-3">
                              <div className="d-flex">
                                <div style={{ marginRight: 10 }}>
                                  {" "}
                                  <img
                                    className="rounded-circle"
                                    src={require("../../assets/landing/assets/img/steps/favorite-placeholder.png")}
                                    width="50"
                                    alt="favorite"
                                  />
                                </div>
                                <div>
                                  <p className="fs--1 mb-1 fw-medium">
                                    Ongoing{" "}
                                  </p>
                                  <h5 className="fw-medium mb-3">
                                    Trip to rome
                                  </h5>
                                  <h6 className="fs--1 fw-medium mb-2">
                                    <span>40%</span> completed
                                  </h6>
                                  <div
                                    className="progress"
                                    style={{ height: 6 }}
                                  >
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "40%" }}
                                      aria-valuenow="25"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button className="btn">
                            {" "}
                            <img
                              src={require("../../assets/landing/assets/img/steps/heart.svg")}
                              width="20"
                              alt="step"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-6">
          <div className="container">
            <div className="position-absolute1 z-index--1 end-0 d-none d-lg-block">
              <img
                src={shape_img}
                style={{ maxWidth: "200px" }}
                alt="service"
              />
            </div>
            <div
              className="py-8 px-5 position-relative text-center"
              style={{
                backgroundColor: "rgba(223, 215, 249, 0.199)",
                borderRadius: "129px 20px 20px 20",
              }}
            >
              <div className="position-absolute start-100 top-0 translate-middle ms-md-n3 ms-n4 mt-3">
                {" "}
                <img
                  src={require("../../assets/landing/assets/img/cta/send.png")}
                  style={{ maxWidth: 70 }}
                  alt="send icon"
                />
              </div>
              <div className="position-absolute end-0 top-0 z-index--1">
                {" "}
                <img
                  src={require("../../assets/landing/assets/img/cta/shape-bg2.png")}
                  width="264"
                  alt="cta shape"
                />
              </div>
              <div className="position-absolute start-0 bottom-0 ms-3 z-index--1 d-none d-sm-block">
                {" "}
                <img
                  src={require("../../assets/landing/assets/img/cta/shape-bg1.png")}
                  style={{ maxWidth: 340 }}
                  alt="cta shape"
                />
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                  <h2 className="text-secondary lh-1-7 mb-7">
                    Subscribe to get information, latest news and other
                    interesting offers about Cobham
                  </h2>
                  <form className="row g-3 align-items-center w-lg-75 mx-auto">
                    <div className="col-sm">
                      <div className="input-group-icon">
                        <input
                          className="form-control form-little-squirrel-control"
                          type="email"
                          placeholder="Your email "
                          aria-label="email"
                        />
                        <img
                          className="input-box-icon"
                          src={require("../../assets/landing/assets/img/cta/mail.svg")}
                          width="17"
                          alt="mail"
                        />
                      </div>
                    </div>
                    <div className="col-sm-auto">
                      <button className="btn btn-danger orange-gradient-btn fs--1">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-0 pb-lg-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-7 col-12 mb-4 mb-md-6 mb-lg-0 order-0">
                {" "}
                <img
                  className="mb-4"
                  src={require("../../assets/landing/assets/img/logo2.svg")}
                  width="150"
                  alt="jadoo"
                />
                <p className="fs--1 text-secondary mb-0 fw-medium">
                  Book your trip in minute, get full Control for much longer.
                </p>
              </div>
              <div className="col-lg-2 col-md-4 mb-4 mb-lg-0 order-lg-1 order-md-2">
                <h4 className="footer-heading-color fw-bold font-sans-serif mb-3 mb-lg-4">
                  Company
                </h4>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a
                      className="link-900 fs-1 fw-medium text-decoration-none"
                      href="#!"
                    >
                      About
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="link-900 fs-1 fw-medium text-decoration-none"
                      href="#!"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="link-900 fs-1 fw-medium text-decoration-none"
                      href="#!"
                    >
                      Mobile
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 mb-4 mb-lg-0 order-lg-2 order-md-3">
                <h4 className="footer-heading-color fw-bold font-sans-serif mb-3 mb-lg-4">
                  Contact
                </h4>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a
                      className="link-900 fs-1 fw-medium text-decoration-none"
                      href="#!"
                    >
                      Help/FAQ
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="link-900 fs-1 fw-medium text-decoration-none"
                      href="#!"
                    >
                      Press
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="link-900 fs-1 fw-medium text-decoration-none"
                      href="#!"
                    >
                      Affiliate
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 mb-4 mb-lg-0 order-lg-3 order-md-4">
                <h4 className="footer-heading-color fw-bold font-sans-serif mb-3 mb-lg-4">
                  More
                </h4>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a
                      className="link-900 fs-1 fw-medium text-decoration-none"
                      href="#!"
                    >
                      Airlinefees
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="link-900 fs-1 fw-medium text-decoration-none"
                      href="#!"
                    >
                      Airline
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="link-900 fs-1 fw-medium text-decoration-none"
                      href="#!"
                    >
                      Low fare tips
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-5 col-12 mb-4 mb-md-6 mb-lg-0 order-lg-4 order-md-1">
                <div className="icon-group mb-4">
                  {" "}
                  <a
                    className="text-decoration-none icon-item shadow-social"
                    id="facebook"
                    href="#!"
                  >
                    {facebook_icon}
                  </a>
                  <a
                    className="text-decoration-none icon-item shadow-social"
                    id="instagram"
                    href="#!"
                  >
                    {instagram_icon}
                  </a>
                  <a
                    className="text-decoration-none icon-item shadow-social"
                    id="twitter"
                    href="#!"
                  >
                    {twitter_icon}
                  </a>
                </div>
                <h4 className="fw-medium font-sans-serif text-secondary mb-3">
                  Discover our app
                </h4>
                <div className="d-flex align-items-center">
                  {" "}
                  <a href="#!">
                    {" "}
                    <img
                      className="me-2"
                      src={require("../../assets/landing/assets/img/play-store.png")}
                      alt="play store"
                    />
                  </a>
                  <a href="#!">
                    {" "}
                    <img
                      src={require("../../assets/landing/assets/img/apple-store.png")}
                      alt="apple store"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="py-5 text-center">
          <p className="mb-0 text-secondary fs--1 fw-medium">
            All rights reserved@jadoo.co{" "}
          </p>
        </div>
      </main>
    </>
  );
}

export default HomePage;
