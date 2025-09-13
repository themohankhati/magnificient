import React from 'react'


function PhotoGallery({ images }) {
  return (
    <>
      <div className="flex flex-col mt-12 sm:mt-16 md:mt-20 w-full px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#14205c] mb-6 sm:mb-8 md:mb-10 tracking-wide">
          Photo Gallery
          <div className="flex justify-center w-full mt-2">
            <span className="h-1 bg-green-500 transition-all duration-300 w-0 group-hover:w-2/4"></span>
          </div>
        </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {images?.slice(0, 6).map((item, index) => (
          <li
            key={index}
            className="bg-white shadow-xl rounded overflow-hidden h-[200px] sm:h-[220px] md:h-[240px]"
          >
            <img
              src={item}
              alt="Gallery"
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default PhotoGallery
