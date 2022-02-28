import Link from "next/link";
import React, { useState } from "react";
import { Footer, Navbar, Sidebar, Modal } from "../components/moleculs";

export default function Notes() {
    const [isOpen, setIsOpen] = useState(false);
    const [isShowPicker, setIsShowPicker] = useState(false);
    return (
        <>
            <Sidebar pageTitle="notes" />
            <main className="main">
                {/*<!--========== Header ==========-->*/}
                <Navbar title="Notes" />

                {/*<!--========== Dashboard ==========-->*/}
                <section className="dashboard" id="dashboard">
                    <div className="content__container-task row w-100">
                        <div className="col-lg-10">
                            {/*<!--========== Add Button ==========-->*/}
                            <div className="btn__container">
                                <Link href="/add-notes">
                                    <a
                                        href="add-notes-page.html"
                                        className="btn btn-blue"
                                    >
                                        <i className="uil uil-plus btn-icon me-2"></i>
                                        Tambah Note
                                    </a>
                                </Link>
                            </div>
                            {/*<!--========== Todo Information ==========-->*/}
                            <div className="task__container">
                                <div className="task__title-wrapper">
                                    <h3 className="title">
                                        Notes,{" "}
                                        <span className="bold__title">
                                            Yang tersimpan
                                        </span>
                                    </h3>
                                </div>
                                <div className="task-page__container">
                                    <div
                                        className="task__item"
                                        onClick={() => setIsOpen(true)}
                                    >
                                        <div className="task__left">
                                            <p className="task__name">
                                                Instagram GW
                                            </p>
                                            <span className="task__categories group__name">
                                                Other
                                            </span>
                                        </div>

                                        <div className="task__right">
                                            <i className="uil uil-check-circle task__check"></i>
                                        </div>
                                    </div>

                                    <div className="task__item">
                                        <div className="task__left">
                                            <p className="task__name">Moodel</p>
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
                    </div>

                    {/*<!--========== Modal ==========-->*/}
                    <Modal show={isOpen} onClose={() => setIsOpen(false)}>
                        <div className="modal__title-wrapper">
                            <h3 className="title small__title">
                                Tampilkan,{" "}
                                <span className="bold__title small__title">
                                    Note
                                </span>
                            </h3>
                        </div>
                        <div className="list__items">
                            <div className="list__item">
                                <i className="uil uil-clipboard-notes list-icon"></i>
                                <p className="list__desc">Judul Note</p>
                            </div>
                            <div className="list__item">
                                <i className="uil uil-layer-group list-icon"></i>
                                <p className="list__desc">Kampus</p>
                            </div>
                            <div className="list__item">
                                <i className="uil uil-notes list-icon"></i>
                                <p className="list__desc notes-desc">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Commodi laboriosam tenetur
                                    debitis quidem at deleniti vel! Consectetur
                                    voluptate ab pariatur maxime porro eos autem
                                    labore blanditiis, voluptatem quas alias
                                    repellat.
                                </p>
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
