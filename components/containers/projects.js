import React from "react";
import BgContainer from "../core/BgContainer";
import Card from "../core/Card";
import Carousel from "react-elastic-carousel";
import useWindowSize from "../useWindowSize";

export default function Projects() {
    const { width } = useWindowSize();
    const isWide = width > 750 ? true : false;
    return (
        <div className="projects row bg-container">
            <div className="container w-50 text-center mt-3 mb-0">
                <h1 className="text-white text-xxl-center">
                    My Recent <span>Works</span>
                </h1>
                <p className="text-white">
                    Here are a few projects I've worked on recently...
                </p>
            </div>
            <Carousel
                itemsToShow={isWide ? 3 : 1}
                itemPadding={[20, 20, 20, 20]}
                style={{ padding: "0px 50px 0px 0px" }}
                showArrows={isWide}
            >
                <Card
                    title={"V80 Stocks"}
                    imgSrc={"assets/v80.jpg"}
                    desc={
                        "List of stocks below 200 DMA which are in Vivek Singhal's v40 and v40 next stocks list."
                    }
                    link={"https://github.com/jayhawk24/v80"}
                />
                <Card
                    title={"E Store 24"}
                    imgSrc={"assets/estore.png"}
                    desc={
                        "The website resembles a real store and you can add products to your cart and pay for them."
                    }
                    link={"https://github.com/jayhawk24/E-store"}
                />
                <Card
                    title={"Blood Bank"}
                    imgSrc={"assets/donation.jpg"}
                    desc={
                        "Web application for hospitals to manage their blood bank and users who need blood. Made with PHP and MySQL."
                    }
                    link={"https://github.com/jayhawk24/blood_bank"}
                />
                <Card
                    title={"Zen Social"}
                    imgSrc={"assets/zensocial.png"}
                    desc={
                        "Social App made with django. You can post your thoughts and ideas anonymously and also create groups and post there."
                    }
                    link={"https://github.com/jayhawk24/zensocial"}
                />
                <Card
                    title={"Take Turns"}
                    imgSrc={"assets/takeTurns.png"}
                    desc={
                        "Easy Friendy Management, register your roommates, and it will simply show who's turn it is to carry out a task job."
                    }
                    link={"https://github.com/jayhawk24/take-turns"}
                />
                <Card
                    title={"Ora Studio"}
                    imgSrc={"assets/orastudio.png"}
                    desc={
                        "Architect Organisation Website. It is astatic website but with a great userinterface and you can check it out."
                    }
                    link={"https://github.com/jayhawk24/orastudio"}
                />
            </Carousel>
        </div>
    );
}
