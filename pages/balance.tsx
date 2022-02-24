import React from "react";
import { useState } from "react";

import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

export default function Balance() {
    return (
        <>
            <Sidebar pageTitle="balance" />
            <main className="main">
                {/*<!--========== Header ==========-->*/}
                <Navbar title="Saldo" />

                {/*<!--========== Dashboard ==========-->*/}
                <section className="dashboard" id="dashboard">
                    <div className="content__container row w-100">
                        <div className="col-lg-8 mb-4 p-0">
                            {/*<!--========== Money Information ==========-->*/}
                            <div className="moneyinfo__container col-lg-6">
                                <div className="moneyinfo__title-wrapper">
                                    <h3 className="title">
                                        Saldo,{" "}
                                        <span className="bold__title">
                                            Saat ini
                                        </span>
                                    </h3>
                                </div>

                                <div className="moneyinfo__wrapper-alone">
                                    <div className="moneyinfo__item">
                                        <i className="uil uil-money-stack moneyinfo__icon icon__blue"></i>
                                        <h3 className="moneyinfo__total price font__blue">
                                            Rp. 900.000
                                        </h3>
                                        <span className="moneyinfo__desc">
                                            Total Saldo
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/*<!--========== Saldo ==========-->*/}
                            <div className="balance__container">
                                <div className="balance__item font__red">
                                    <div>
                                        <h3 className="balance__title">
                                            Tunai
                                        </h3>
                                        <span className="price">
                                            Rp. 10.000
                                        </span>
                                    </div>
                                    <i className="uil uil-money-stack moneyinfo__icon icon__red"></i>
                                </div>
                                <div className="balance__item font__blue">
                                    <div>
                                        <h3 className="balance__title">
                                            Bank BRI
                                        </h3>
                                        <span className="price">
                                            Rp. 10.000
                                        </span>
                                    </div>
                                    <i className="uil uil-money-stack moneyinfo__icon icon__blue"></i>
                                </div>
                                <div className="balance__item font__purple">
                                    <div>
                                        <h3 className="balance__title">OVO</h3>
                                        <span className="price">
                                            Rp. 10.000
                                        </span>
                                    </div>
                                    <i className="uil uil-money-stack moneyinfo__icon icon__purple"></i>
                                </div>
                                <div className="balance__item font__green">
                                    <div>
                                        <h3 className="balance__title">
                                            Gopay
                                        </h3>
                                        <span className="price">
                                            Rp. 10.000
                                        </span>
                                    </div>
                                    <i className="uil uil-money-stack moneyinfo__icon icon__green"></i>
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
