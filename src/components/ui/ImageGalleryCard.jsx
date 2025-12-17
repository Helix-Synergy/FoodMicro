import React from "react";

const ImageGalleryCard = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* First row */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcSBus1PJHJcJLkkclMKgIAz_wmmerR-pWw&s"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20220718/pngtree-buildings-in-universal-citywalk-located-at-universal-studios-japan-in-osaka-photo-image_32768450.jpg"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-[60%] object-cover rounded-xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiISDtx6XXepQiwq53YYO1wSrqycsczKdviA&s"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
      </div>

      {/* Second row */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZvHHlUDqokkD8g7YrTc1MOLMq9FxFC17cA&s"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-[60%] object-cover rounded-xl"
        />
        <img
          src="https://www.gov-online.go.jp/en/assets/hj_2024_09_05_00.webp"
          alt=""
          loading="lazy"
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2003K-WAG-yg6L1FYw8axTq3u6YH1M7K1g&s"
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
