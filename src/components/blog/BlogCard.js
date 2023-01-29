import React from "react";

const BlogCard = ({ image, title, subTitle, category }) => {
  return (
    <div className="py-6 flex flex-col gap-2 items-center justify-center border-b-[1px] border-b-zinc-800 group">
      <div className="w-full h-full mb-2 overflow-hidden relative cursor-pointer">
        <img
          className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 cursor-pointer"
          src={image}
          alt="blogImgOne"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-designColor border-[1px] border-designColor px-2">
          {title}
        </span>
        <h2 className="text-base text-center font-semibold font-titleFont text-[#ccc] group-hover:text-designColor duration-300">
          {subTitle}
        </h2>
        <p className="text-sm -mt-1 text-gray-400">{category}</p>
      </div>
    </div>
  );
};

export default BlogCard;
