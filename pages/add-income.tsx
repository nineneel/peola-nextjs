import Link from "next/link";
import React from "react";
import { Footer, Navbar, Sidebar } from "../components/moleculs";

export default function AddIncome() {
    return (
        <>
            <Sidebar pageTitle="income" />
            <main className="main">
                {/*<!--========== Header ==========-->*/}
                <Navbar title="Pendapatan" />

                {/*<!--========== Dashboard ==========-->*/}
                <section className="dashboard" id="dashboard">
                    <div className="content__container row w-100">
                        <div className="col-lg-4 mb-4 p-0">
                            {/*<!--========== Add Income ==========-->*/}
                            <div className="input__container">
                                <h3 className="title small__title mb-4">
                                    Tambahkan,{" "}
                                    <span className="bold__title small__title">
                                        Pemasukan
                                    </span>
                                </h3>
                                <form action="">
                                    {/* <!-- create input for email and password --> */}
                                    <div className="list__items">
                                        <div className="list__item">
                                            <label
                                                // for="price-input"
                                                className="input__item"
                                            >
                                                <i className="uil uil-money-withdraw list-icon icon__income"></i>
                                                Rp.
                                            </label>
                                            <input
                                                type="text"
                                                className="form-list list__text"
                                                id="price-input"
                                                placeholder="100.000"
                                            />
                                        </div>
                                        <div className="list__item">
                                            <div
                                                className="input__item dropdown"
                                                style={{ width: "100%" }}
                                            >
                                                <label
                                                    // for="price-input"
                                                    className="input__item"
                                                >
                                                    <i className="uil uil-money-stack list-icon icon__income"></i>
                                                </label>
                                                <select
                                                    id="price-input"
                                                    name="price-input"
                                                    className="form-list list__text select-form"
                                                >
                                                    <option
                                                        value=""
                                                        selected
                                                        disabled
                                                        hidden
                                                    >
                                                        Pilih Saldo
                                                    </option>
                                                    <option value="Tunai">
                                                        Tunai
                                                    </option>
                                                    <option value="Bank BRI">
                                                        Bank BRI
                                                    </option>
                                                    <option value="OVO">
                                                        OVO
                                                    </option>
                                                    <option value="Gopay">
                                                        Gopay
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="list__item">
                                            <div
                                                className="input__item"
                                                style={{ width: "100%" }}
                                            >
                                                <label className="input__item">
                                                    <i className="uil uil-calendar-alt list-icon icon__income icon__income"></i>
                                                </label>
                                                <input
                                                    type="datetime-local"
                                                    className="form-list list__text"
                                                    name=""
                                                    id=""
                                                />
                                            </div>
                                        </div>
                                        <div className="list__item text-area">
                                            <label className="input__item">
                                                <i className="uil uil-notes list-icon icon__income"></i>
                                            </label>
                                            <textarea
                                                name="notes"
                                                cols={10}
                                                rows={1}
                                                className="form-list list__text"
                                                placeholder="Notes"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="list__button-wrapper">
                                        <Link href="/income">
                                            <a className="btn btn-alt-green me-2">
                                                Kembali
                                            </a>
                                        </Link>
                                        <input
                                            type="submit"
                                            className="btn btn-green"
                                        />
                                    </div>
                                </form>
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
