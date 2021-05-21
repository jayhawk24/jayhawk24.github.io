import React from 'react';
import './projects.css';
import BgContainer from '../../main/BgContainer';

export default function Projects() {
    return (
        <BgContainer className="projects row">
            <div className="container w-50 text-center mt-3 mb-0">
                <h1 className="text-white text-xxl-center">
                    My Recent <span>Works</span>
                </h1>
                <p className="text-white">
                    Here are a few projects I've worked on recently...
                </p>
            </div>
            <div className="container w-75 cards-container mx-5">
                <div className="row justify-content-around">
                    <div className="col-lg-4 col-md-5 col-sm-10 mb-3">
                        <div className="card text-white bg-dark">
                            <img
                                className="card-img-top"
                                src="assets/donation.jpg"
                                alt="Card Project head cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Blood Bank</h5>
                                <p className="card-text">
                                    Web application for hospitals to manage
                                    their blood bank and users who need blood.
                                    Made with PHP and MySQL.
                                </p>
                                <a
                                    href="https://github.com/jayhawk24/blood_bank"
                                    className="btn btn-primary"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-10 mb-3">
                        <div className="card text-white bg-dark">
                            <img
                                className="card-img-top"
                                src="assets/zensocial.png"
                                alt="Card Project head cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Zen Social</h5>
                                <p className="card-text">
                                    Social App made with django. You can post
                                    your thoughts and ideas anonymously and also
                                    create groups and post there.
                                </p>
                                <a
                                    href="https://github.com/jayhawk24/zensocial"
                                    className="btn btn-primary"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-10 mb-3">
                        <div className="card text-white bg-dark">
                            <img
                                className="card-img-top"
                                src="assets/takeTurns.png"
                                alt="Card Project head cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Take Turns</h5>
                                <p className="card-text">
                                    Easy Friendy Management, register your
                                    roommates, and it will simply show who's
                                    turn it is to carry out a task job.
                                </p>
                                <a
                                    href="https://github.com/jayhawk24/take-turns"
                                    className="btn btn-primary"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-10 mb-3">
                        <div className="card text-white bg-dark">
                            <img
                                className="card-img-top"
                                src="assets/orastudio.png"
                                alt="Card Project head cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Ora Studio</h5>
                                <p className="card-text">
                                    Architect Organisation Website. It is a
                                    static website but with a great user
                                    interface and you can check it out.
                                </p>
                                <a
                                    href="https://github.com/jayhawk24/orastudio"
                                    className="btn btn-primary"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BgContainer>
    );
}
