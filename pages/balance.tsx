import React from "react";
import { useState } from "react";
import { MoneyInfo } from "../components/atoms";

import { Footer, Navbar, Sidebar } from "../components/moleculs";

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
                            <MoneyInfo
                                isAlone
                                category="balance"
                                price={"800.000"}
                            />

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
