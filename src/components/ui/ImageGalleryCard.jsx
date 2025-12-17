import React from "react";
import img1 from "../../assets/VenueImages/img1.webp"
import img2 from "../../assets/VenueImages/img2.jpeg"
import img3 from "../../assets/VenueImages/img3.jpeg"
import img4 from "../../assets/VenueImages/img4.jpeg"
import img5 from "../../assets/VenueImages/img5.jpeg"
import img6 from "../../assets/VenueImages/img6.jpeg"
const ImageGalleryCard = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* First row */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
        <img
          src={img1}
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2IFlZc8Z34IS5ktxT-uhhGHruV-IuI0tLQ&s"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-[60%] object-cover rounded-xl"
        />
        <img
          src={img3}
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
      </div>

      {/* Second row */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
        <img
          src="https://ecotuktuk.com/wp-content/uploads/sites/5706/2025/08/Gemini_Generated_Image_gvx1kbgvx1kbgvx1.webp?w=1200&zoom=2"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-[60%] object-cover rounded-xl"
        />
        <img
          src={img5}
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
        <img
          src={img6}
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default ImageGalleryCard;
// Marina Bay Sands
