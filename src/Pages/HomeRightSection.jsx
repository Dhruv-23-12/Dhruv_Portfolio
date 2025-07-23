import React from 'react';
import Lottie from 'lottie-react';
import codingAnimation from '../assets/Coding.json';

function HomeRightSection() {
  return (
    <div className="w-full h-full">
      <Lottie 
        animationData={codingAnimation} 
        loop={true}
        className="w-full h-full"
      />
    </div>
  );
}

export default HomeRightSection; 