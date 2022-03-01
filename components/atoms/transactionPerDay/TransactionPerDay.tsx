import React from "react";

interface TransactionPerDayProps {
    date: string;
    totalPrice: string;
    children: React.ReactNode;
}

export default function TransactionPerDay(
    props: Partial<TransactionPerDayProps>
) {
    const { date, totalPrice, children } = props;

    return (
        <div className="transaction__wrapper">
            <div className="transaction__perday">
                <div className="transaction__perday-header">
                    <span className="transaction__perday-date">
                        13 Dec 2020
                    </span>
                    <span className="transaction__perday-price price">
                        Rp.24.000
                    </span>
                </div>
                {children}
            </div>
        </div>
    );
}
