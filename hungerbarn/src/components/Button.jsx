import React from 'react';
function Button({ title }) {
  return (
    <div>
      <a 
        href="#" 
        className="bg-orange-400 md:mt-3 mt-2 md:text-xl rounded-lg shadow-xl md:w-[150px] md:h-[50px] h-[27px] w-[77px] flex items-center justify-center hover:bg-orange-800 text-wrap text-xs"
      >
        {title}
      </a>
    </div>
  );
}

export default Button;
