import Link from "next/link";
import React from "react";
import { Footer, Navbar, Sidebar } from "../components/moleculs";

export default function AddTask() {
    return (
        <>
            <Sidebar pageTitle="task" />
            <main className="main">
                {/*<!--========== Header ==========-->*/}
                <Navbar title="Kerjaan" />

                {/*<!--========== Dashboard ==========-->*/}
                <section className="dashboard" id="dashboard">
                    <div className="content__container row w-100">
                        <div className="col-lg-4 mb-4 p-0">
                            {/*<!--========== Add Outcome ==========-->*/}
                            <div className="input__container">
                                <h3 className="title small__title mb-4">
                                    Tambahkan,{" "}
                                    <span className="bold__title small__title">
                                        Kerjaan
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
                                                <i className="uil uil-list-ul list-icon icon__blue"></i>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-list list__text"
                                                id="price-input"
                                                placeholder="Kerjaan"
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
                                                    <i className="uil uil-layer-group list-icon icon__blue"></i>
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
                                                        Pilih Prioritas
                                                    </option>
                                                    <option value="1">
                                                        Do Now
                                                    </option>
                                                    <option value="2">
                                                        Do Next
                                                    </option>
                                                    <option value="3">
                                                        Do Last
                                                    </option>
                                                    <option value="4">
                                                        Do Never
                                                    </option>
                                                </select>
                                            </div>
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

                                        <div className="list__item">
                                            <div
                                                className="input__item"
                                                style={{ width: "100%" }}
                                            >
                                                <label
                                                    // for="date-input"
                                                    className="input__item"
                                                >
                                                    <i className="uil uil-calendar-alt list-icon icon__blue"></i>
                                                </label>
                                                <input
                                                    type="date"
                                                    className="form-list list__text"
                                                    name=""
                                                    id=""
                                                />
                                            </div>
                                        </div>

                                        <div className="list__item text-area">
                                            <label
                                                // for="price-input"
                                                className="input__item"
                                            >
                                                <i className="uil uil-notes list-icon icon__blue"></i>
                                            </label>
                                            <textarea
                                                name="notes"
                                                id=""
                                                cols={10}
                                                rows={1}
                                                className="form-list list__text"
                                                placeholder="Notes"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="list__button-wrapper">
                                        <Link href="/task">
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
