import Image from "next/image";
import React from "react";
import { Footer, Navbar, Sidebar } from "../components/moleculs";

export default function Profile() {
    return (
        <>
            <Sidebar pageTitle="profile" />
            <main className="main">
                {/*<!--========== Header ==========-->*/}
                <Navbar title="Profile" />

                {/*<!--========== Dashboard ==========-->*/}
                <section className="dashboard" id="dashboard">
                    <div className="content__container-task row w-100">
                        <div className="col-lg-6">
                            {/*<!--========== Todo Information ==========-->*/}
                            <div className="input__container">
                                <h3 className="title small__title">
                                    Tampilkan,{" "}
                                    <span className="bold__title small__title">
                                        Profile
                                    </span>
                                </h3>
                                <div className="profile__img">
                                    <Image
                                        src="/img/profile.png"
                                        alt="profile Image"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="list__items">
                                    <div className="list__item">
                                        <span className="input__item">
                                            <i className="uil uil-user list-icon icon__blue"></i>
                                        </span>
                                        <p className="form-list list__text">
                                            Masbro
                                        </p>
                                    </div>
                                </div>
                                <div className="list__items">
                                    <div className="list__item">
                                        <span className="input__item">
                                            <i className="uil uil-at list-icon icon__blue"></i>
                                        </span>
                                        <p className="form-list list__text">
                                            sujarniel@email.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*<!--========== FOOTER ==========-->*/}
                <Footer />
            </main>
        </>
    );
}
