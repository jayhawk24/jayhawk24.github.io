import React from "react";
import BlogCardBig from "../components/core/BlogCardBig";
import BlogCardSm from "../components/core/BlogCardSm";
import Layout from "../components/Layout";

export default function Blog() {
    return (
        <Layout>
            <div className="bg-secondary-800 min-h-screen w-screen h-full">
                <div className="max-w-6xl m-auto pl-2 pr-8 sm:px-5 py-5">
                    <h1 className="text-6xl">Latest Articles 🎈</h1>
                    <div className="grid lg:grid-cols-2 gap-6 md:gap-x-8 md:gap-y-14 my-14 pr-8">
                        <BlogCardBig
                            title="Lenovo's smarter devices stoke the fires of the smart home"
                            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aliquam! Quasi omnis quo voluptatem tempora delectus nemo ex doloremque molestiae."
                            imgSrc="/assets/estore.png"
                            tag="Tech"
                            date="May 20, 2021"
                        />
                        <div className="grid gap-6 md:gap-8 pr-4">
                            <BlogCardSm
                                title="How AI and Teams are benefitting the littlest of patients"
                                desc="In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
                                imgSrc={"/assets/crispy.png"}
                                tag="Tech"
                                date="May 20, 2021"
                            />
                            <BlogCardSm
                                title="How AI and Teams are benefitting the littlest of patients"
                                desc="In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
                                imgSrc={"/assets/crispy.png"}
                                tag="Tech"
                                date="May 20, 2021"
                            />
                            <BlogCardSm
                                title="How AI and Teams are benefitting the littlest of patients"
                                desc="In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
                                imgSrc={"/assets/crispy.png"}
                                tag="Tech"
                                date="May 20, 2021"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
