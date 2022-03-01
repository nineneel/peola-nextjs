import Link from "next/link";
import React, { useState } from "react";
import {
    MoneyInfo,
    TransactionItem,
    TransactionPerDay,
} from "../components/atoms";
import { Footer, Navbar, Sidebar, Transaction } from "../components/moleculs";

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
                            <Transaction
                                title="Pengeluaran"
                                desc="Bulan ini"
                                btnOn={true}
                            >
                                <TransactionPerDay
                                    date="13 Dec 2020"
                                    totalPrice="Rp.24.000"
                                >
                                    <TransactionItem
                                        title="Gaji"
                                        desc="Tunai"
                                        price="15.000"
                                    />
                                    <TransactionItem
                                        title="Gaji"
                                        desc="Tunai"
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
                                    />
                                    <TransactionItem
                                        title="Gaji"
                                        desc="Tunai"
                                        price="15.000"
                                    />
                                </TransactionPerDay>
                            </Transaction>
                        </div>
                    </div>
                </section>

                {/*<!--========== FOOTER ==========-->*/}
                <Footer />
            </main>
        </>
    );
}
