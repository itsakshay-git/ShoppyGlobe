/**
 * @component Spinner
 * @desc A simple loading spinner used as a fallback when content is being lazily loaded.
 * The spinner provides a visual indication to the user that the requested content is still loading.
 * @returns {JSX.Element} A div element with a spinner loader to be displayed during loading states.
 * @example
 * <React.Suspense fallback={<Spinner />}>
 *   <LazyLoadedComponent />
 * </React.Suspense>
 */


import React from 'react'
import "./spinner.css";

const Spinner = () => {
  return (
    <div className='spinner'>
      <div className="loader"></div>
    </div>
  )
}

export default Spinner