import Link from "next/link";
import React, { useState } from "react";
import { MoneyInfo } from "../components/atoms";
import { Footer, Navbar, Sidebar } from "../components/moleculs";

export default function Outcome() {
    const [isShowPicker, setIsShowPicker] = useState(false);
    return (
        <>
            <Sidebar pageTitle="outcome" />
            <main className="main">
                {/*<!--========== Header ==========-->*/}
                <Navbar title="Pengeluaran" />

                {/*<!--========== Dashboard ==========-->*/}
                <section className="dashboard" id="dashboard">
                    <div className="content__container row w-100">
                        <div className="col-lg-8 mb-4 p-0">
                            {/*<!--========== Money Information ==========-->*/}
                            <MoneyInfo
                                isAlone
                                category="outcome"
                                price="1.000.240"
                            />
                            {/* <div className="moneyinfo__container col-lg-6">
                                <div className="moneyinfo__title-wrapper">
                                    <h3 className="title">
                                        Pengeluaran,{" "}
                                        <span className="bold__title">
                                            Bulan ini
                                        </span>
                                    </h3>
                                </div>

                                <div className="moneyinfo__wrapper-alone">
                                    <div className="moneyinfo__item">
                                        <i className="uil uil-money-insert moneyinfo__icon icon__red"></i>
                                        <h3 className="moneyinfo__total price font__red">
                                            Rp. 520.000
                                        </h3>
                                        <span className="moneyinfo__desc">
                                            Pengeluaran
                                        </span>
                                    </div>
                                </div>
                            </div> */}

                            {/*<!--========== Add Button ==========-->*/}
                            <div className="btn__container">
                                <Link href="/add-outcome">
                                    <a
                                        href="add-outcome-page.html"
                                        className="btn btn-red"
                                    >
                                        <i className="uil uil-plus btn-icon me-2"></i>
                                        Tambah Pengeluaran
                                    </a>
                                </Link>
                            </div>

                            {/*<!--========== Transaction Info ==========-->*/}
                            <div className="transaction__container">
                                <div className="transaction__title-wrapper">
                                    <h3 className="title">
                                        Pengeluaran,{" "}
                                        <span className="bold__title">
                                            Bulan ini
                                        </span>
                                    </h3>
                                    <div className="transaction__time">
                                        <button
                                            className="btn btn-red small-btn date-picker__btn"
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
                                                    className="btn btn-red small-btn"
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
                                                <i className="uil uil-money-insert transaction__icon icon__outcome"></i>
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
                                                <i className="uil uil-money-insert transaction__icon icon__outcome"></i>
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
                                                <i className="uil uil-money-insert transaction__icon icon__outcome"></i>
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
                                                <i className="uil uil-money-insert transaction__icon icon__outcome"></i>
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
                                                <i className="uil uil-money-insert transaction__icon icon__outcome"></i>
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

                    {/*<!-- <div className="modal" id="modal">
                    <div className="modal__content">
                        <div className="modal__title-wrapper">
                            <h3 className="title small__title">
                                Tampilkan,
                                <span className="bold__title small__title"
                                    >Kerjaan</span
                                >
                            </h3>
                        </div>
                        <div className="modal__items">
                            <div className="modal__item">
                                <i
                                    className="uil uil-clipboard-notes modal-icon"
                                ></i>
                                <p className="modal__text">Judul Kerjaan</p>
                            </div>
                            <div className="modal__item">
                                <i className="uil uil-gold modal-icon"></i>
                                <p className="modal__text">Do first</p>
                            </div>
                            <div className="modal__item">
                                <i className="uil uil-calendar-alt modal-icon"></i>
                                <p className="modal__text">20/02/2022</p>
                            </div>
                            <div className="modal__item">
                                <i className="uil uil-layer-group modal-icon"></i>
                                <p className="modal__text">Kampus</p>
                            </div>
                            <div className="modal__item">
                                <i className="uil uil-notes modal-icon"></i>
                                <p className="modal__text">-</p>
                            </div>
                        </div>
                        <div className="modal__button-wrapper">
                            <div href="" className="btn btn-alt-blue modal__close">
                                Keluar
                            </div>
                            <div href="" className="btn btn-blue">Selesaikan</div>
                        </div>
                    </div>
                </div> -->*/}
                </section>

                {/*<!--========== FOOTER ==========-->*/}
                <Footer />
            </main>
        </>
    );
}
