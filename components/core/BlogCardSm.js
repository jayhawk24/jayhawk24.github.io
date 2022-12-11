import React from "react";
import Tag from "./Tag";
import Image from "next/image";

const BlogCardSm = ({ title, imgSrc, desc, date, tag }) => {
    return (
        <div className="relative grid grid-cols-3 gap-2">
            <div className="flex flex-col h-full py-2 justify-evenly col-span-2 space-y-2">
                <h1 className="text-lg">{title}</h1>
                <p className="text-sm text-primary-300">{desc}</p>
                <div className="flex space-x-2 ">
                    <Tag title={tag} color="yellow" />
                    <span>·</span>
                    <div className="text-gray-400 font-semibold">{date}</div>
                </div>
            </div>
            <div className="relative object-cover h-full w-full rounded-xl sm:rounded-3xl">
                <Image
                    src={imgSrc}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>
        </div>
    );
};

export default BlogCardSm;
