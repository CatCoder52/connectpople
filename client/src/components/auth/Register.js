import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
const initialState = {
    name: '',
    email: '',
    password: '',
    password2: ''
}
  const [formData, setFormData] = useState(initialState);

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
      setFormData(initialState);
    }
  };

  
// Redirect if logged in or wait for onSubmit action
  if (isAuthenticated) {
    return <Redirect to='/dashboard'/>
  }

  return (
    <div className="container my-5 px-0 z-depth-1">
      {/*Section: Content*/}
      <section className="my-md-5 text-center card">
        <form className="my-5 mx-md-5" onSubmit={(e) => onSubmit(e)}>
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
                          <button
                            type="submit"
                            className="btn btn-block btn-primary btn-lg mt-4"
                          >
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
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated 
  //state.singleReducerName -> rootReducer | auth reducer contains initialState property(isAuthenticated)
});

export default connect(mapStateToProps, { setAlert, register })(Register);
