import Link from "next/link";
import React, { useState } from "react";
import { Footer, Navbar, Sidebar, Modal } from "../components/moleculs";

export default function Task() {
    const [isOpen, setIsOpen] = useState(false);
    const [isShowPicker, setIsShowPicker] = useState(false);
    return (
        <>
            <Sidebar pageTitle="task" />
            <main className="main">
                {/*<!--========== Header ==========-->*/}
                <Navbar title="Kerjaan" />

                {/*<!--========== Dashboard ==========-->*/}
                <section className="dashboard" id="dashboard">
                    <div className="content__container-task row w-100">
                        <div className="col-lg-10">
                            {/*<!--========== Add Button ==========-->*/}
                            <div className="btn__container">
                                <Link href="/add-task">
                                    <a className="btn btn-blue">
                                        <i className="uil uil-plus btn-icon me-2"></i>
                                        Tambah Kerjaan
                                    </a>
                                </Link>
                            </div>
                            {/*<!--========== Todo Information ==========-->*/}
                            <div className="task__container">
                                <div className="task__title-wrapper">
                                    <h3 className="title">
                                        Tugas,{" "}
                                        <span className="bold__title">
                                            Yang ada
                                        </span>
                                    </h3>
                                    <div className="transaction__time">
                                        <button
                                            className="btn btn-blue small-btn date-picker__btn"
                                            onClick={() =>
                                                isShowPicker
                                                    ? setIsShowPicker(false)
                                                    : setIsShowPicker(true)
                                            }
                                        >
                                            Prioritas
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
                                                        {/*<!-- <label
                                                        for="date-input"
                                                        className="input__item-label"
                                                    >
                                                        Prioritas
                                                    </label> -->*/}
                                                        <select
                                                            className="form-list list__text select-form"
                                                            style={{
                                                                minWidth:
                                                                    "200px",
                                                            }}
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

                                                <input
                                                    type="submit"
                                                    className="btn btn-blue small-btn"
                                                />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="task-page__container">
                                    <div
                                        className="task__item clickable"
                                        onClick={() => setIsOpen(true)}
                                    >
                                        <div className="task__left">
                                            <p className="task__name">
                                                Melakukan Sesuatu
                                            </p>
                                            <div className="task__date-wrapper">
                                                <i className="uil uil-calender task__icon"></i>
                                                <span className="task__date">
                                                    12/02/2022
                                                </span>
                                            </div>
                                            <div className="task__categories-wrapper">
                                                <span className="task__categories do-first">
                                                    Do first
                                                </span>
                                                <span className="task__categories group__name">
                                                    Kampus
                                                </span>
                                            </div>
                                        </div>

                                        <div className="task__right">
                                            <i className="uil uil-check-circle task__check"></i>
                                        </div>
                                    </div>
                                    <div className="task__item clickable">
                                        <div className="task__left">
                                            <p className="task__name">
                                                Melakukan Sesuatu yang sangat
                                                ber
                                            </p>
                                            <div className="task__date-wrapper">
                                                <i className="uil uil-calender task__icon"></i>
                                                <span className="task__date">
                                                    12/02/2022
                                                </span>
                                            </div>
                                            <div className="task__categories-wrapper">
                                                <span className="task__categories do-leter">
                                                    Do Later
                                                </span>
                                                <span className="task__categories group__name">
                                                    Kampus
                                                </span>
                                            </div>
                                        </div>

                                        <div className="task__right">
                                            <i className="uil uil-check-circle task__check"></i>
                                        </div>
                                    </div>
                                    <div className="task__item clickable">
                                        <div className="task__left">
                                            <p className="task__name">
                                                Melakukan Sesuatu yang sangat
                                                ber
                                            </p>
                                            <div className="task__date-wrapper">
                                                <i className="uil uil-calender task__icon"></i>
                                                <span className="task__date">
                                                    12/02/2022
                                                </span>
                                            </div>
                                            <div className="task__categories-wrapper">
                                                <span className="task__categories do-leter">
                                                    Do Later
                                                </span>
                                                <span className="task__categories group__name">
                                                    Kampus
                                                </span>
                                            </div>
                                        </div>

                                        <div className="task__right">
                                            <i className="uil uil-check-circle task__check"></i>
                                        </div>
                                    </div>
                                    <div className="task__item clickable">
                                        <div className="task__left">
                                            <p className="task__name">
                                                Melakukan Sesuatu yang sangat
                                                ber
                                            </p>
                                            <div className="task__date-wrapper">
                                                <i className="uil uil-calender task__icon"></i>
                                                <span className="task__date">
                                                    12/02/2022
                                                </span>
                                            </div>
                                            <div className="task__categories-wrapper">
                                                <span className="task__categories do-leter">
                                                    Do Later
                                                </span>
                                                <span className="task__categories group__name">
                                                    Kampus
                                                </span>
                                            </div>
                                        </div>

                                        <div className="task__right">
                                            <i className="uil uil-check-circle task__check"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Modal show={isOpen} onClose={() => setIsOpen(false)}>
                        <div className="modal__title-wrapper">
                            <h3 className="title small__title">
                                Tampilkan,
                                <span className="bold__title small__title">
                                    Kerjaan
                                </span>
                            </h3>
                        </div>
                        <div className="list__items">
                            <div className="list__item">
                                <i className="uil uil-clipboard-notes list-icon"></i>
                                <p className="list__desc">Judul Kerjaan</p>
                            </div>
                            <div className="list__item">
                                <i className="uil uil-gold list-icon"></i>
                                <p className="list__desc">Do first</p>
                            </div>
                            <div className="list__item">
                                <i className="uil uil-calendar-alt list-icon"></i>
                                <p className="list__desc">20/02/2022</p>
                            </div>
                            <div className="list__item">
                                <i className="uil uil-layer-group list-icon"></i>
                                <p className="list__desc">Kampus</p>
                            </div>
                            <div className="list__item">
                                <i className="uil uil-notes list-icon"></i>
                                <p className="list__desc">-</p>
                            </div>
                        </div>
                        <div className="list__button-wrapper">
                            <div
                                className="btn btn-alt-blue list__close me-2 mb-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Sipp
                            </div>
                            <div className="btn btn-blue mb-2">Selesaikan</div>
                        </div>
                    </Modal>
                </section>

                {/*<!--========== FOOTER ==========-->*/}
                <Footer />
            </main>
        </>
    );
}
