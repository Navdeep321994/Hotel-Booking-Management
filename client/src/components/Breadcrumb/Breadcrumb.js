// Breadcrumb.js

import React from 'react';

const Breadcrumb = ({ backgroundImg, title, subheading }) => {
  const breadcrumbStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    height: '400px', // Adjust the height based on your design
    padding: '20px',
  };
  const textStyle = {
    textAlign: 'left',
    maxWidth: '100%', // Ensures the text doesn't overflow the container
  };
  return (
   
    <div className="breadcrumbs-banner bg-overlay" style={breadcrumbStyle}>
     <div className='container'>
     <div className='innerbnr'>
      <h1>{title}</h1>
       {/* <p>{subheading}</p> */}
      </div>
    </div>
    </div>
  
  );
};

export default Breadcrumb;
