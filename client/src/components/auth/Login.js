import React, {useState} from 'react';
import { Link } from 'react-router-dom'


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('SUCCESS');
  };

  return (
    <React.Fragment>
    <br/>
    <br/>
    <br/>
    <br/>
      <section className="center-v vh-100">
        <div className="container px-0 z-depth-1 card p-5 cloud my-5">
          {/*Section: Content*/}
          <form className="my-5 mx-md-5" onSubmit={(e) => onSubmit(e)}>
            <div className="row">
              <div className="col-md-6 mx-auto">
                {/* Material form login */}
                <div className="card center">
                  {/*Card content*/}
                  <img
                    src="/login.svg"
                    alt="login"
                    width="350px"
                    className="-mt-6 animated zoomIn"
                  />
                  <div className="card-body w-75">
                    {/* Form */}
                    <h3 className="display-5 my-4 pb-2 text-center dark-grey-text">
                      Login
                    </h3>
                    {/* Name */}
                    <input
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                      type="email"
                      id="defaultSubscriptionFormPassword"
                      className="form-control mb-4"
                      placeholder="Email"
                    />
                    {/* Email */}
                    <input
                      name="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                      type="password"
                      id="defaultSubscriptionFormEmail"
                      className="form-control"
                      placeholder="Password"
                    />
                    <small
                      id="passwordHelpBlock"
                      className="form-text text-right blue-text"
                    ></small>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-success my-4 waves-effect"
                      >
                        Login &nbsp;
                        <i className="fas fa-arrow-right animated slideOutRight infinite slow"></i>
                      </button>
                      <p className="text-center">
                        Don't have an account?{' '}
                        <strong>
                          <Link to="/register">Sign Up</Link>
                        </strong>
                      </p>
                    </div>
                    {/* Form */}
                  </div>
                </div>
                {/* Material form login */}
              </div>
            </div>
          </form>
          {/*Section: Content*/}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;
