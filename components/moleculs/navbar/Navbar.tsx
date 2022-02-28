import Image from "next/image";
import React from "react";

interface NavbarProps {
    title: string;
}

export default function Navbar(props: Partial<NavbarProps>) {
    const { title } = props;
    const isHome = title === "overview" ? true : false;
    const userName = "John Doe";

    const headerHome = isHome ? (
        <h1 className="header__title">
            halo, <span className="header__title__bold">{userName}</span>
        </h1>
    ) : (
        <h1 className="header__title">
            <span className="header__title__bold">{title}</span>
        </h1>
    );

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <div className="title__container">{headerHome}</div>

                    <div className="header__logo">
                        <div className="header__img">
                            <Image
                                src="/img/profile.png"
                                alt="profile Image"
                                width={40}
                                height={40}
                            />
                        </div>
                        <span className="header__logo-name">{userName}</span>
                    </div>

                    <div className="header__toggle">
                        <i className="uil uil-bars" id="header-toggle"></i>
                    </div>
                </div>
            </header>
        </>
    );
}
