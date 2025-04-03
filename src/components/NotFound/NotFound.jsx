/**
 * @component NotFound
 * @desc Displays a 404 error page when the user navigates to a non-existent route.
 * Shows an error icon, the status code, and a message explaining the error. 
 * Also provides a link to navigate back to the home page.
 * @uses React Router (Link, useLocation, useRouteError) to handle routing and error information.
 */


import React from 'react'
import { Link, useLocation, useRouteError } from 'react-router';
import errorIcon from '../../assets/icons/404.png';
import './notfound.css'

const NotFound = () => {
  const err = useRouteError();
  const location = useLocation();
  return (
    <>
    <div className='error-container'>
      <div className='error-info-container'>
        <div className='img-container'>
          <img src={errorIcon} alt="error-image" />
        </div>
        <div className='status-container'>
        <h1 className='status-code'>
          Oops!
        </h1>
        </div>
        <div className='error-info'>
          <h2 className="status-text">{err.statusText}</h2>
          <p className="error-msg">
            <span className="opps">{err.status} : </span> {err.data}
          </p>
          <p className="location-path">URL: {location.pathname}</p>
          <Link
            to="/"
            className="home-btn"
          >
           Go Back to Home
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default NotFound