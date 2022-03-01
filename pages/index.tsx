import type { NextPage } from "next";
import { useState } from "react";
import { MoneyInfo } from "../components/atoms";
import TransactionItem from "../components/atoms/transactionItem/TransactionItem";
import TransactionPerDay from "../components/atoms/transactionPerDay/TransactionPerDay";
import { Footer, Navbar, Sidebar, Modal } from "../components/moleculs";
import Transaction from "../components/moleculs/transaction/Transaction";

const Home: NextPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const price = ["124.245", "353.235", "300.993"];
    return (
        <>
            <Sidebar pageTitle="overview" />

            <main className="main">
                <Navbar title="overview" />

                {/* <!--========== Dashboard ==========--> */}
                <section className="dashboard" id="dashboard">
                    <div className="content__container row w-100">
                        <div className="col-lg-7 mb-4 p-0">
                            {/* <!--========== Money Information ==========--> */}
                            <MoneyInfo category="overview" price={price} />

                            {/* <!--========== Transaction Information ==========--> */}
                            <Transaction
                                title="Transaksi"
                                desc="7 hari terakhir"
                            >
                                <TransactionPerDay
                                    date="13 Dec 2020"
                                    totalPrice="Rp.24.000"
                                >
                                    <TransactionItem
                                        title="Gaji"
                                        desc="Tunai"
                                        price="15.000"
                                        isIncome
                                    />
                                    <TransactionItem
                                        title="Makanan"
                                        desc="Bitter Sweet"
                                        price="15.000"
                                    />
                                </TransactionPerDay>
                                <TransactionPerDay
                                    date="13 Dec 2020"
                                    totalPrice="Rp.24.000"
                                >
                                    <TransactionItem
                                        title="Gaji"
                                        desc="Tunai"
                                        price="15.000"
                                        isIncome
                                    />
                                    <TransactionItem
                                        title="Makanan"
                                        desc="Bitter Sweet"
                                        price="15.000"
                                    />
                                </TransactionPerDay>
                            </Transaction>
                        </div>
                        <div className="col-lg-5 px-4">
                            {/* <!--========== Todo Information ==========--> */}
                            <div className="task__container">
                                <div className="task__title-wrapper">
                                    <h3 className="title">
                                        Tugas,{" "}
                                        <span className="bold__title">
                                            Yang ada
                                        </span>
                                    </h3>
                                </div>

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
                                            Melakukan Sesuatu yang sangat ber
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

                            {/* <!--========== Link Information ==========--> */}
                            <div className="task__container">
                                <div className="task__title-wrapper">
                                    <h3 className="title">
                                        Link,{" "}
                                        <span className="bold__title">
                                            Yang disimpan
                                        </span>
                                    </h3>
                                </div>

                                <div className="task__item">
                                    <div className="task__left">
                                        <p className="task__name">
                                            Link Folder AAP
                                        </p>
                                        <span className="task__categories group__name">
                                            Kampus
                                        </span>
                                    </div>

                                    <div className="task__right">
                                        <i className="uil uil-check-circle task__check"></i>
                                    </div>
                                </div>

                                <div className="task__item">
                                    <div className="task__left">
                                        <p className="task__name">
                                            Link Folder AAP
                                        </p>
                                        <span className="task__categories group__name">
                                            Kampus
                                        </span>
                                    </div>

                                    <div className="task__right">
                                        <i className="uil uil-check-circle task__check"></i>
                                    </div>
                                </div>
                            </div>

                            {/* <!--========== Notes Information ==========--> */}
                            <div className="task__container">
                                <div className="task__title-wrapper">
                                    <h3 className="title">
                                        Notes,{" "}
                                        <span className="bold__title">
                                            Yang disimpan
                                        </span>
                                    </h3>
                                </div>

                                <div className="task__item">
                                    <div className="task__left">
                                        <p className="task__name">
                                            Link Folder AAP
                                        </p>
                                        <span className="task__categories group__name">
                                            Kampus
                                        </span>
                                    </div>

                                    <div className="task__right">
                                        <i className="uil uil-check-circle task__check"></i>
                                    </div>
                                </div>

                                <div className="task__item">
                                    <div className="task__left">
                                        <p className="task__name">
                                            Link Folder AAP
                                        </p>
                                        <span className="task__categories group__name">
                                            Kampus
                                        </span>
                                    </div>

                                    <div className="task__right">
                                        <i className="uil uil-check-circle task__check"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!--========== Modal ==========--> */}
                    {/* <div className="modal-root"></div> */}
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

                {/* <!--========== FOOTER ==========--> */}
                <Footer />
            </main>
        </>
    );
};

export default Home;
