import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  return (
    <div className="profile bg-light p-5 my-5 center-v">
      <img src={avatar} alt="" className="rounded-circle" />
      <div>
        <h2 className="text-center mt-3">{name}</h2>
        <p className="text-center">
          {status} {company && <span> at {company}</span>}
        </p>
        <p className="my-1 text-center">
          {location && <span>{location}</span>}
        </p>
        <Link
          to={`/profile/${_id}`}
          className="btn btn-primary text-center my-4 center"
        >
          View Profile
        </Link>
      </div>
      <ul className='center list-unstyled'>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary mx-1">
            <p>{skill}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
