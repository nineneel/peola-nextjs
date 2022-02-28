import React, { useState } from "react";

interface MoneyInfoProps {
    isAlone?: boolean;
    category: string;
    price: any;
}

export default function MoneyInfo(props: Partial<MoneyInfoProps>) {
    const { isAlone, category, price } = props;

    let title;
    let subTitle;
    let desc;
    let icon;
    let color;

    if (category === "balance") {
        title = "Saldo";
        subTitle = "Saat ini";
        desc = "Total Saldo";
        icon = "uil-money-stack";
        color = "blue";
    } else if (category === "income") {
        title = "Pemasukan";
        subTitle = "Bulan ini";
        desc = "Pemasukan";
        icon = "uil-money-withdraw";
        color = "green";
    } else if (category === "outcome") {
        title = "Pengeluaran";
        subTitle = "Bulan ini";
        desc = "Pengeluaran";
        icon = "uil-money-insert";
        color = "red";
    } else if (category === "overview") {
        title = "Bulan";
        subTitle = "February";
        desc = ["Saldo", "Pemasukan", "Pengeluaran"];
    }
    return (
        <>
            {isAlone ? (
                <div className="moneyinfo__container col-lg-6">
                    <div className="moneyinfo__title-wrapper">
                        <h3 className="title">
                            {title},{" "}
                            <span className="bold__title">{subTitle}</span>
                        </h3>
                        <div className="moneyinfo__wrapper-alone">
                            <div className="moneyinfo__item">
                                <i
                                    className={
                                        "uil " +
                                        icon +
                                        " moneyinfo__icon icon__" +
                                        color
                                    }
                                ></i>
                                <h3
                                    className={
                                        "moneyinfo__total price font__" + color
                                    }
                                >
                                    Rp.{price}
                                </h3>
                                <span className="moneyinfo__desc">{desc}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={"moneyinfo__container"}>
                    <div className="moneyinfo__title-wrapper">
                        <h3 className="title">
                            {title},{" "}
                            <span className="bold__title">{subTitle}</span>
                        </h3>
                    </div>
                    <div className="moneyinfo__wrapper">
                        <div className="moneyinfo__item">
                            <i className="uil uil-money-stack moneyinfo__icon icon__blue"></i>
                            <h3 className="moneyinfo__total price font__blue">
                                Rp.{price[0]}
                            </h3>
                            <span className="moneyinfo__desc">Saldo</span>
                        </div>
                        <span className="moneyinfo__line"></span>

                        <div className="moneyinfo__item">
                            <i className="uil uil-money-withdraw moneyinfo__icon icon__green"></i>
                            <h3 className="moneyinfo__total price font__green">
                                Rp.{price[1]}
                            </h3>
                            <span className="moneyinfo__desc">Pemasukan</span>
                        </div>
                        <span className="moneyinfo__line"></span>

                        <div className="moneyinfo__item">
                            <i className="uil uil-money-insert moneyinfo__icon icon__red"></i>
                            <h3 className="moneyinfo__total price font__red">
                                Rp.{price[2]}
                            </h3>
                            <span className="moneyinfo__desc">Pengeluaran</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
