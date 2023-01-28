import React from 'react'

export const About = () => {
  return (
    <div className="container">
    <br />
    <div className="row">
      <div className="text-center">
        <img className="rounded-circle"
          src="foto.jpg" width="100px"alt=""/>
      </div>
      <div className="col text-left mt-2">
        Hello everyone! <br /> my name is <b>Rachma Wukir Purwitasari,</b> my college identity number is <b>19104065.</b><br /> I'am from Telkom Institute of
        Technology Purwokerto,<br /> when i build this site i'am a final collage student. <br /> Let author introduction about this site technology :  
          <li className='mt-3'>
            Main REST API Server : <a href="https://indonesia-public-static-api.vercel.app/api/heroes">see here</a>
          </li>
          <li>
            Using Framework With React JS and Bootstrap 4
          </li>
        Thanks!
      </div>
    </div>
  </div>
  )
}
