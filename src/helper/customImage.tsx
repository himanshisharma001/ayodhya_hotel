import React from 'react';

function CustomImage(props:any) {
  const handleError = (event:any) => {
    event.target.src = 'https://www.john-taylor.com/rental-villa-bangalore-east-1278x750-70-L0032BA-73452645.jpg'
  }
  return (
    <>
      <img
        src={props.src}
        alt={props.alt}
        className={props.className}
        onError={handleError}
      />
    </>
  );
}

export default CustomImage;



