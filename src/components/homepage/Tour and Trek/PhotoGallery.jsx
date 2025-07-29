import React from 'react'


function PhotoGallery({ images }) {
  return (
    <>
      <div className="flex flex-col mt-20 w-full px-4">
      <h2 className="text-4xl font-bold text-[#14205c] mb-10 tracking-wide">
          Photo Gallery
          <div className="flex justify-center w-full mt-2">
            <span className="h-1 bg-green-500 transition-all duration-300 w-0 group-hover:w-2/4"></span>
          </div>
        </h2>
      <ul className="grid grid-cols-2 gap-4">
        {images?.slice(0, 6).map((item, index) => (
          <li
            key={index}
            className="bg-white shadow-xl rounded overflow-hidden h-[240px]"
          >
            <img
              src={item}
              alt="Gallery"
              className="h-full w-full object-cover"
            />
          </li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default PhotoGallery
