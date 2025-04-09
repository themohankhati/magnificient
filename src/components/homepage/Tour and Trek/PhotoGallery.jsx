import React from 'react'


function PhotoGallery({ images }) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
      <ul className="grid grid-cols-2 gap-4">
        {images?.map((item, index) => (
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
    </>
  )
}

export default PhotoGallery
