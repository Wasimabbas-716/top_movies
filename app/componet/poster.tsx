import React from 'react'
import Image from 'next/image';
import img from"../images/best-poster-designers.jpg"
const poster = () => {
  return (<>
    <Image
      src={img}
      alt="Poster for the movie 'The Godfather'"
      width={500}
      height={500}
      className="w-full"
    />




  </>);
};

export default poster;