import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import PropTypes from 'prop-types';

const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange= e => setFormData({...formData, [e.target.name]: e.target.value})

  const onSubmit = async e => {
    e.preventDefault()
    if (password !== password2) return setAlert('Passwords do not match', 'danger')
    console.log('SUCCESS');
  }

  return (
    <div className="container my-5 px-0 z-depth-1">
      {/*Section: Content*/}
      <section className="my-md-5 text-center card">
        <form className="my-5 mx-md-5" onSubmit={e => onSubmit(e)}>
          <div className="row">
            <div className="col-md-4 mx-auto text-center center-v paper">
              <h3>Already have an account?</h3>
              <br />
              <p>Click on Signin button to login!</p>
              <Link to="/login">
                <button className="btn btn-block btn-outline-info text-muted mb-5 bg-white">
                  Login
                </button>
              </Link>
            </div>
            <div className="col-md-8 mx-auto">
              {/* Material form login */}
              <div className="card">
                {/*Card content*/}
                <div className="card-body">
                  {/* Form */}
                  <div className="my-5">
                    {/* Section */}
                    <section>
                      <h6 className="display-5 text-center grey-text text-uppercase small mb-2">
                        <i className="fas fa-user xl"></i> Sign Up
                      </h6>
                      <p className="text-center dark-grey-text pb-2">
                        A few steps away from new friends!
                      </p>
                      <hr className="w-header my-4" />
                      {/*First row*/}
                      <div className="row d-flex justify-content-center">
                        {/*First column*/}
                        <div className="col-6">
                          {/* Material outline input */}
                          <div className="md-form md-outline form-lg text-muted text-left">
                            <label className="my-3" htmlFor="form1">
                              Name
                            </label>
                            <input
                              name="name"
                              value={name}
                              onChange={(e) => onChange(e)}
                              type="text"
                              id="form1"
                              className="form-control form-control-lg"
                            />
                          </div>
                          {/* Material outline input */}
                          <div className="md-form md-outline form-lg text-muted text-left">
                            <label className="my-3" htmlFor="form2">
                              Email
                            </label>
                            <input
                              name="email"
                              value={email}
                              onChange={(e) => onChange(e)}
                              type="text"
                              id="form2"
                              className="form-control form-control-lg"
                            />
                          </div>
                          {/* Material outline input */}
                          <div className="md-form md-outline form-lg text-muted text-left">
                            <label className="my-3" htmlFor="form3">
                              Password
                            </label>
                            <input
                              name="password"
                              value={password}
                              onChange={(e) => onChange(e)}
                              type="text"
                              id="form3"
                              className="form-control form-control-lg"
                            />
                          </div>
                          <div className="md-form md-outline form-lg text-muted text-left">
                            <label className="my-3" htmlFor="form3">
                              Confirm Password
                            </label>
                            <input
                              name="password2"
                              value={password2}
                              onChange={(e) => onChange(e)}
                              type="text"
                              id="form3"
                              className="form-control form-control-lg"
                            />
                          </div>
                          <button type='submit' className="btn btn-block btn-primary btn-lg mt-4">
                            Sign up
                          </button>
                        </div>
                        {/*First column*/}
                      </div>
                      {/*First row*/}
                    </section>
                    {/* Section */}
                  </div>
                  {/* Form */}
                </div>
              </div>
              {/* Material form login */}
            </div>
          </div>
        </form>
      </section>
      {/*Section: Content*/}
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
}

export default connect(null, { setAlert })(Register);
