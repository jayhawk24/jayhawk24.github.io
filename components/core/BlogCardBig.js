import React from "react";
import Image from "next/image";
import Tag from "./Tag";

const BlogCardBig = ({ title, imgSrc, desc, date, tag }) => {
    return (
        <div>
            <div className="bg-secondary-800 rounded-lg max-w-md">
                <div className="space-y-6">
                    <div className=" relative h-80 w-64 sm:w-96 ">
                        <Image
                            src={imgSrc}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl"
                        />
                    </div>
                    <h1 className="text-3xl">{title}</h1>
                    <p className="text-md text-primary-300">{desc}</p>

                    <div className="flex items-center space-x-2 ">
                        <Tag title={tag} color="yellow" />
                        <span>·</span>
                        <div className="text-gray-400 font-semibold">
                            {date}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCardBig;
