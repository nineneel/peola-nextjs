import Link from "next/link";
import React, { useState } from "react";
import { MoneyInfo } from "../components/atoms";
import TransactionItem from "../components/atoms/transactionItem/TransactionItem";
import TransactionPerDay from "../components/atoms/transactionPerDay/TransactionPerDay";
import { Footer, Navbar, Sidebar } from "../components/moleculs";
import Transaction from "../components/moleculs/transaction/Transaction";

export default function Income() {
    const [isShowPicker, setIsShowPicker] = useState(false);
    return (
        <>
            <Sidebar pageTitle="income" />

            <main className="main">
                {/*<!--========== Header ==========-->*/}
                <Navbar title="Pemasukan" />

                {/*<!--========== Dashboard ==========-->*/}
                <section className="dashboard" id="dashboard">
                    <div className="content__container row w-100">
                        <div className="col-lg-8 mb-4 p-0">
                            {/*<!--========== Money Information ==========-->*/}
                            <MoneyInfo
                                isAlone
                                category="income"
                                price="122.000"
                            />

                            {/*<!--========== Add Button ==========-->*/}
                            <div className="btn__container">
                                <Link href="/add-income">
                                    <a
                                        href="add-income-page.html"
                                        className="btn btn-green"
                                    >
                                        <i className="uil uil-plus btn-icon me-2"></i>
                                        Tambah Pemasukan
                                    </a>
                                </Link>
                            </div>

                            {/*<!--========== Transaction Info ==========-->*/}
                            <Transaction
                                title="Pemasukan"
                                desc="Bulan ini"
                                isIncome={true}
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
                                        isIncome
                                    />
                                    <TransactionItem
                                        title="Gaji"
                                        desc="Tunai"
                                        price="15.000"
                                        isIncome
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
                                        title="Gaji"
                                        desc="Tunai"
                                        price="15.000"
                                        isIncome
                                    />
                                </TransactionPerDay>
                            </Transaction>
                        </div>
                    </div>

                    {/*<!--========== FOOTER ==========-->*/}
                </section>
                <Footer />
            </main>
        </>
    );
}
