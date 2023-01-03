import React from "react";
import Image from "next/image";
import Layout from "../Layout";

const BlogContainer = ({ imgSrc, children }) => {
    return (
        <Layout>
            <div className="bg-secondary-800 min-h-screen w-screen h-full">
                <div className="max-w-6xl m-auto pl-2 pr-8 sm:px-5 py-5">
                    <div className=" relative h-80 w-64 sm:w-96 ">
                        <Image
                            src={imgSrc}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl"
                        />
                    </div>
                    {children}
                </div>
            </div>
        </Layout>
    );
};

export default BlogContainer;
