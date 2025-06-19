const ImageGallery = ({ images }) => {
    return (
      <div className="grid grid-cols-7 gap-4 px-4 mb-10">
        <div className="col-span-2 flex flex-col gap-4">
          {images.slice(0, 2).map((src, idx) => (
            <img key={idx} src={src} alt={`Gallery Image ${idx + 1}`} className="w-full h-[250px] object-cover rounded-lg shadow-md" />
          ))}
        </div>
        <div className="col-span-3">
          <img src={images[2]} alt="Main Tour" className="w-full h-[517px] object-cover rounded-lg shadow-md" />
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          {images.slice(3, 5).map((src, idx) => (
            <img key={idx + 3} src={src} alt={`Gallery Image ${idx + 3}`} className="w-full h-[250px] object-cover rounded-lg shadow-md" />
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageGallery;
  