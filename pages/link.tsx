import Link from "next/link";
import React from "react";
import { Footer, Navbar, Sidebar } from "../components/moleculs";

export default function Links() {
    return (
        <>
            <Sidebar pageTitle="link" />
            <main className="main">
                {/*<!--========== Header ==========-->*/}
                <Navbar title="Link" />

                {/*<!--========== Dashboard ==========-->*/}
                <section className="dashboard" id="dashboard">
                    <div className="content__container-task row w-100">
                        <div className="col-lg-10">
                            {/*<!--========== Add Button ==========-->*/}
                            <div className="btn__container">
                                <Link href="/add-link">
                                    <a
                                        href="add-link-page.html"
                                        className="btn btn-blue"
                                    >
                                        <i className="uil uil-plus btn-icon me-2"></i>
                                        Tambah Link
                                    </a>
                                </Link>
                            </div>
                            {/*<!--========== Todo Information ==========-->*/}
                            <div className="task__container">
                                <div className="task__title-wrapper">
                                    <h3 className="title">
                                        Link,{" "}
                                        <span className="bold__title">
                                            Yang tersimpan
                                        </span>
                                    </h3>
                                </div>
                                <div className="task-page__container">
                                    <Link href="https://www.instagram.com/niel_pasae/">
                                        <a
                                            target="_blank"
                                            className="task__item link__item"
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
                                        </a>
                                    </Link>
                                    <Link href="https://learn.uph.edu/">
                                        <a
                                            target="_blank"
                                            className="task__item link__item"
                                        >
                                            <div className="task__left">
                                                <p className="task__name">
                                                    Moodel
                                                </p>
                                                <span className="task__categories group__name">
                                                    Kampus
                                                </span>
                                            </div>

                                            <div className="task__right">
                                                <i className="uil uil-check-circle task__check"></i>
                                            </div>
                                        </a>
                                    </Link>
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
