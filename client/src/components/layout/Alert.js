import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MDBAlert } from 'mdbreact';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <MDBAlert key={alert.id} color={alert.alertType} dismiss>
      {alert.msg}
    </MDBAlert>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
// alerts -> any = actually alert(reducer) array type. so alerts goes inside state taking one or more alerts  
  alerts: state.alert //state.singleReducer -> rootReducer
});

export default connect(mapStateToProps)(Alert);
