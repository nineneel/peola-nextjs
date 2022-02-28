import Link from "next/link";
import React from "react";
import { Footer, Navbar, Sidebar } from "../components/moleculs";

export default function AddLink() {
    return (
        <>
            <Sidebar pageTitle="link" />
            <main className="main">
                {/*<!--========== Header ==========-->*/}
                <Navbar title="Link" />

                {/*<!--========== Dashboard ==========-->*/}
                <section className="dashboard" id="dashboard">
                    <div className="content__container row w-100">
                        <div className="col-lg-4 mb-4 p-0">
                            {/*<!--========== Add Outcome ==========-->*/}
                            <div className="input__container">
                                <h3 className="title small__title mb-4">
                                    Tambahkan,{" "}
                                    <span className="bold__title small__title">
                                        Link
                                    </span>
                                </h3>
                                <form action="">
                                    {/*<!-- create input for email and password -->*/}
                                    <div className="list__items">
                                        <div className="list__item">
                                            <label
                                                // for="price-input"
                                                className="input__item"
                                            >
                                                <i className="uil uil-letter-english-a list-icon icon__blue"></i>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-list list__text"
                                                id="price-input"
                                                placeholder="Judul Link"
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
                                                    <i className="uil uil-gold list-icon icon__blue"></i>
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
                                                        Pilih Grup
                                                    </option>
                                                    <option value="Kampus">
                                                        Kampus
                                                    </option>
                                                    <option value="Tugas Harian">
                                                        Tugas Harian
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="list__item text-area">
                                            <label
                                                // for="price-input"
                                                className="input__item"
                                            >
                                                <i className="uil uil-link-h list-icon icon__blue"></i>
                                            </label>
                                            <input
                                                name="notes"
                                                id=""
                                                className="form-list list__text"
                                                placeholder="Link"
                                            />
                                        </div>
                                    </div>
                                    <div className="list__button-wrapper">
                                        <Link href="/link">
                                            <a className="btn btn-alt-blue me-2">
                                                Kembali
                                            </a>
                                        </Link>
                                        <input
                                            type="submit"
                                            className="btn btn-blue"
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
