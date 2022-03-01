import React, { Children, useState } from "react";

interface TransactionProps {
    title: string;
    desc: string;
    children: React.ReactNode;
    btnOn?: boolean;
    isIncome?: boolean;
}

export default function Transaction(props: Partial<TransactionProps>) {
    const { title, desc, children, btnOn, isIncome } = props;
    const [isShowPicker, setIsShowPicker] = useState(false);

    return (
        <>
            <div className="transaction__container">
                <div className="transaction__title-wrapper">
                    <h3 className="title">
                        {title}, <span className="bold__title">{desc}</span>
                    </h3>
                    {btnOn ? (
                        <div className="transaction__time">
                            <button
                                className={
                                    isIncome
                                        ? "btn btn-green small-btn date-picker__btn"
                                        : "btn small-btn date-picker__btn btn-red"
                                }
                                onClick={() =>
                                    isShowPicker
                                        ? setIsShowPicker(false)
                                        : setIsShowPicker(true)
                                }
                            >
                                Pilih range
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
                                            <label className="input__item-label">
                                                Dari:
                                            </label>
                                            <input
                                                type="date"
                                                className="form-list list__text"
                                                name="dari"
                                            />
                                        </div>
                                    </div>
                                    <div className="list__item">
                                        <div
                                            className="input__item"
                                            style={{
                                                width: "100%",
                                            }}
                                        >
                                            <label className="input__item-label">
                                                Sampai:
                                            </label>
                                            <input
                                                type="date"
                                                className="form-list list__text"
                                                name="hingga"
                                            />
                                        </div>
                                    </div>
                                    <input
                                        type="submit"
                                        className={
                                            isIncome
                                                ? "btn small-btn btn-green"
                                                : "btn small-btn btn-red"
                                        }
                                    />
                                </form>
                            </div>
                        </div>
                    ) : null}
                </div>
                {children}
            </div>
        </>
    );
}
