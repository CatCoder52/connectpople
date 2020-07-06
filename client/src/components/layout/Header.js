import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className="pt-5">
      <div className="d-flex justify-content-center align-items-center p-5">
        <div className="row">
          <div className="col-md-6  p-5">
            <div className="d-flex flex-column justify-content-center">
              <h1 className="display-4 mb-3">Connect With People!</h1>
              <p className="subheading ">
                World's most popular Social Media app for making friends
              </p>
              <div className="mr-auto my-5">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg  shadow-3"
                >
                  <Link to="/register"> Sign Up</Link>
                </button>
                <Link to="/login">
                  <button
                    type="button"
                    className="btn btn-success btn-lg shadow-2 ml-3 text-white"
                  >
                    Login
                    <i className="fas fa-user ml-3" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="animated slideInRight">
              <img src="/socialp.svg" className="img-fluid" alt="photoheader" />
              <div className="mask flex-center hm-gradient"></div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <img src="/wave.svg" alt="wave" className="mt-5" />
      <div className="bg-dark p-5"></div>
      <style jsx>{`
        body {
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

export default Header
