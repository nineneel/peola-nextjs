import React from "react";

interface TransactionItemProps {
    isIncome?: boolean;
    title: string;
    desc: string;
    price: string;
}

export default function TransactionItem(props: Partial<TransactionItemProps>) {
    const { isIncome, title, desc, price } = props;

    return (
        <>
            <div className="transaction__item">
                <div className="transaction__item-title">
                    <i
                        className={
                            isIncome
                                ? "uil uil-money-withdraw icon__green transaction__icon"
                                : "uil uil-money-insert icon__red transaction__icon"
                        }
                    ></i>
                    <div>
                        <p className="transaction__categories">{title}</p>
                        <span className="transaction__desc">{desc}</span>
                    </div>
                </div>
                <span className="transaction__item-price price">
                    Rp.{price}
                </span>
            </div>
        </>
    );
}
