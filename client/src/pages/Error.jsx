import React from 'react'
import {Link,useRouteError} from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'


function Error() {
  const error = useRouteError();
  console.log(error);
  if(error.status==404){
    return(
      <Wrapper>
        <div>
          <img src={img} alt='not found'></img>
          <h3>Ohh! page not found</h3>
          <p>We can't seem to find te page you are looking for</p>
          <Link to='/dashboard'>back home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  )
}

export default Error
