import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

interface SidebarProps {
    pageTitle: string;
}

export default function Sidebar(props: Partial<SidebarProps>) {
    const { pageTitle } = props;

    return (
        <>
            <aside className="sidenav" id="sidenav">
                <nav className="sidenav__container">
                    <div className="sidenav__header">
                        <Link href="/">
                            <a className="sidenav__header-container">
                                <div className="sidenav__icon-logo">
                                    <Image
                                        src="/img/logo.png"
                                        alt="Logo Picture"
                                        width={45}
                                        height={45}
                                    />
                                </div>
                                <span className="sidenav__name-title">
                                    Peola
                                </span>
                            </a>
                        </Link>
                    </div>

                    <div className="sidenav__main">
                        <ul className="sidenav__list">
                            <li className="sidenav__items">
                                <h3 className="sidenav__subtitle">Utama</h3>

                                <Link href="/">
                                    <a
                                        className={
                                            "sidenav__link " +
                                            (pageTitle === "overview"
                                                ? "sidenav__active"
                                                : "")
                                        }
                                    >
                                        <i className="uil uil-chart-line sidenav__icon"></i>
                                        <span className="sidenav__name">
                                            Overview
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li className="sidenav__items">
                                <h3 className="sidenav__subtitle">Keuangan</h3>

                                <Link href="/balance">
                                    <a
                                        className={
                                            "sidenav__link " +
                                            (pageTitle === "balance"
                                                ? "sidenav__active"
                                                : "")
                                        }
                                    >
                                        <i className="uil uil-money-stack sidenav__icon"></i>
                                        <span className="sidenav__name">
                                            Saldo
                                        </span>
                                    </a>
                                </Link>

                                <Link href="/income">
                                    <a
                                        className={
                                            "sidenav__link " +
                                            (pageTitle === "income"
                                                ? "sidenav__active"
                                                : "")
                                        }
                                    >
                                        <i className="uil uil-money-withdraw sidenav__icon"></i>
                                        <span className="sidenav__name">
                                            Pemasukan
                                        </span>
                                    </a>
                                </Link>

                                <Link href="/outcome">
                                    <a
                                        className={
                                            "sidenav__link " +
                                            (pageTitle === "outcome"
                                                ? "sidenav__active"
                                                : "")
                                        }
                                    >
                                        <i className="uil uil-money-insert sidenav__icon"></i>
                                        <span className="sidenav__name">
                                            Pengeluaran
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li className="sidenav__items">
                                <h3 className="sidenav__subtitle">Tugas</h3>

                                <Link href="/task">
                                    <a
                                        className={
                                            "sidenav__link " +
                                            (pageTitle === "task"
                                                ? "sidenav__active"
                                                : "")
                                        }
                                    >
                                        <i className="uil uil-list-ul sidenav__icon"></i>
                                        <span className="sidenav__name">
                                            Kerjaan
                                        </span>
                                    </a>
                                </Link>

                                <Link href="/link">
                                    <a
                                        className={
                                            "sidenav__link " +
                                            (pageTitle === "link"
                                                ? "sidenav__active"
                                                : "")
                                        }
                                    >
                                        <i className="uil uil-link-h sidenav__icon"></i>
                                        <span className="sidenav__name">
                                            Link
                                        </span>
                                    </a>
                                </Link>

                                <Link href="/notes">
                                    <a
                                        href="/notes"
                                        className={
                                            "sidenav__link " +
                                            (pageTitle === "notes"
                                                ? "sidenav__active"
                                                : "")
                                        }
                                    >
                                        <i className="uil uil-notes sidenav__icon"></i>
                                        <span className="sidenav__name">
                                            Notes
                                        </span>
                                    </a>
                                </Link>
                            </li>

                            <li className="sidenav__items">
                                <h3 className="sidenav__subtitle">Akun</h3>

                                <Link href="/profile">
                                    <a
                                        href="profile"
                                        className={
                                            "sidenav__link " +
                                            (pageTitle === "profile"
                                                ? "sidenav__active"
                                                : "")
                                        }
                                    >
                                        <i className="uil uil-user-circle sidenav__icon"></i>
                                        <span className="sidenav__name">
                                            Profile
                                        </span>
                                    </a>
                                </Link>
                                <a href="#" className={"sidenav__link "}>
                                    <i className="uil uil-sign-out-alt sidenav__icon"></i>
                                    <span className="sidenav__name">
                                        Logout
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>
        </>
    );
}
