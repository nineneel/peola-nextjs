import Link from "next/link";
import React, { useState } from "react";
import { MoneyInfo } from "../components/atoms";
import { Footer, Navbar, Sidebar } from "../components/moleculs";

export default function Income() {
    const [isShowPicker, setIsShowPicker] = useState(false);
    return (
        <>
            <Sidebar pageTitle="income" />

            <main className="main">
                {/*<!--========== Header ==========-->*/}
                <Navbar title="Pendapatan" />

                {/*<!--========== Dashboard ==========-->*/}
                <section className="dashboard" id="dashboard">
                    <div className="content__container row w-100">
                        <div className="col-lg-8 mb-4 p-0">
                            {/*<!--========== Money Information ==========-->*/}
                            <MoneyInfo
                                isAlone
                                category="income"
                                price="122.000"
                            />
                            {/* <div className="moneyinfo__container col-lg-6">
                                <div className="moneyinfo__title-wrapper">
                                    <h3 className="title">
                                        Pemasukan,{" "}
                                        <span className="bold__title">
                                            Bulan ini
                                        </span>
                                    </h3>
                                </div>

                                <div className="moneyinfo__wrapper-alone">
                                    <div className="moneyinfo__item">
                                        <i className="uil uil-money-withdraw moneyinfo__icon icon__green"></i>
                                        <h3 className="moneyinfo__total price font__green">
                                            Rp. 520.000
                                        </h3>
                                        <span className="moneyinfo__desc">
                                            Pemasukan
                                        </span>
                                    </div>
                                </div>
                            </div> */}

                            {/*<!--========== Add Button ==========-->*/}
                            <div className="btn__container">
                                <Link href="/add-income">
                                    <a
                                        href="add-income-page.html"
                                        className="btn btn-green"
                                    >
                                        <i className="uil uil-plus btn-icon me-2"></i>
                                        Tambah Pemasukan
                                    </a>
                                </Link>
                            </div>

                            {/*<!--========== Transaction Info ==========-->*/}
                            <div className="transaction__container">
                                <div className="transaction__title-wrapper">
                                    <h3 className="title">
                                        Pemasukan,{" "}
                                        <span className="bold__title">
                                            Bulan ini
                                        </span>
                                    </h3>
                                    <div className="transaction__time">
                                        <button
                                            className="btn btn-green small-btn date-picker__btn"
                                            onClick={() =>
                                                isShowPicker
                                                    ? setIsShowPicker(false)
                                                    : setIsShowPicker(true)
                                            }
                                        >
                                            Bulan ini
                                            <i className="uil uil-angle-down ms-1 btn-icon"></i>
                                        </button>
                                        <div className="transaction__time-wrapper">
                                            <form
                                                action=""
                                                className={
                                                    "transaction__time-date" +
                                                    (isShowPicker
                                                        ? " show__date-picker"
                                                        : "")
                                                }
                                                id="range__date-picker"
                                            >
                                                <div className="list__item">
                                                    <div
                                                        className="input__item"
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                        // style="width: 100%"
                                                    >
                                                        <label className="input__item-label">
                                                            Dari:
                                                        </label>
                                                        <input
                                                            type="date"
                                                            className="form-list list__text"
                                                            name="dari"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="list__item">
                                                    <div
                                                        className="input__item"
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                    >
                                                        <label className="input__item-label">
                                                            Sampai:
                                                        </label>
                                                        <input
                                                            type="date"
                                                            className="form-list list__text"
                                                            name="hingga"
                                                        />
                                                    </div>
                                                </div>
                                                <input
                                                    type="submit"
                                                    className="btn btn-green small-btn"
                                                />
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="transaction__wrapper">
                                    <div className="transaction__perday">
                                        <div className="transaction__perday-header">
                                            <span className="transaction__perday-date">
                                                13 Dec 2020
                                            </span>
                                            <span className="transaction__perday-price price">
                                                Rp.24.000
                                            </span>
                                        </div>
                                        <div className="transaction__item">
                                            <div className="transaction__item-title">
                                                <i className="uil uil-money-withdraw transaction__icon icon__income"></i>
                                                <div>
                                                    <p className="transaction__categories">
                                                        Pemberian
                                                    </p>
                                                    <span className="transaction__desc">
                                                        Bank BRI
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="transaction__item-price price">
                                                Rp.12.000
                                            </span>
                                        </div>
                                        <div className="transaction__item">
                                            <div className="transaction__item-title">
                                                <i className="uil uil-money-withdraw transaction__icon icon__income"></i>
                                                <div>
                                                    <p className="transaction__categories">
                                                        Pemberian
                                                    </p>
                                                    <span className="transaction__desc">
                                                        Tunai
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="transaction__item-price price">
                                                Rp.12.000
                                            </span>
                                        </div>
                                        <div className="transaction__item">
                                            <div className="transaction__item-title">
                                                <i className="uil uil-money-withdraw transaction__icon icon__income"></i>
                                                <div>
                                                    <p className="transaction__categories">
                                                        Gaji
                                                    </p>
                                                    <span className="transaction__desc">
                                                        OVO
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="transaction__item-price price">
                                                Rp.12.000
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="transaction__wrapper">
                                    <div className="transaction__perday">
                                        <div className="transaction__perday-header">
                                            <span className="transaction__perday-date">
                                                13 Dec 2020
                                            </span>
                                            <span className="transaction__perday-price price">
                                                Rp.24.000
                                            </span>
                                        </div>
                                        <div className="transaction__item">
                                            <div className="transaction__item-title">
                                                <i className="uil uil-money-withdraw transaction__icon icon__income"></i>
                                                <div>
                                                    <p className="transaction__categories">
                                                        Pemberian
                                                    </p>
                                                    <span className="transaction__desc">
                                                        Bank BRI
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="transaction__item-price price">
                                                Rp.12.000
                                            </span>
                                        </div>
                                        <div className="transaction__item">
                                            <div className="transaction__item-title">
                                                <i className="uil uil-money-withdraw transaction__icon icon__income"></i>
                                                <div>
                                                    <p className="transaction__categories">
                                                        Pemberian
                                                    </p>
                                                    <span className="transaction__desc">
                                                        Tunai
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="transaction__item-price price">
                                                Rp.12.000
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*<!--========== FOOTER ==========-->*/}
                </section>
                <Footer />
            </main>
        </>
    );
}
