"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { usePathname } from "next/navigation";

import styles from "./index.module.css";
import base from "@/shared/styles/base.module.css";

import {
    Dashboard,
    Link as LinkIcon,
    Wallet,
    Notify,
    Logo2,
    Star,
    Staking,
    Chart,
    Burn,
} from "@/shared/icons";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className={styles.header}>
            <Image
                src="/img/header-blur.png"
                alt="circles"
                fill
                className={styles.headerBlur}
            />

            <div className={base.container}>
                <div className={styles.headerInner}>
                    <Link href="/" className={styles.headerLogo}>
                        <Logo2 />
                        Vibin&apos;
                    </Link>

                    <nav className={styles.headerNav}>
                        <Link
                            href="/"
                            className={cn(styles.headerNavLink, {
                                [styles.active]: pathname === "/",
                            })}
                        >
                            <Dashboard />

                            <span className={styles.headerNavLinkWrap}>
                                <span className={styles.headerNavLinkText}>
                                    Dashboard
                                </span>
                            </span>
                        </Link>

                        <Link
                            href="/quest"
                            className={cn(styles.headerNavLink, {
                                [styles.active]: pathname === "/quest",
                            })}
                        >
                            <Star />

                            <span className={styles.headerNavLinkWrap}>
                                <span className={styles.headerNavLinkText}>
                                    Quest
                                </span>
                            </span>
                        </Link>

                        <Link
                            href="/staking"
                            className={cn(styles.headerNavLink, {
                                [styles.active]: pathname === "/staking",
                            })}
                        >
                            <Staking />

                            <span className={styles.headerNavLinkWrap}>
                                <span className={styles.headerNavLinkText}>
                                    Staking
                                </span>
                            </span>
                        </Link>

                        <Link
                            href="/referal"
                            className={cn(styles.headerNavLink, {
                                [styles.active]: pathname === "/referal",
                            })}
                        >
                            <LinkIcon />

                            <span className={styles.headerNavLinkWrap}>
                                <span className={styles.headerNavLinkText}>
                                    Referal
                                </span>
                            </span>
                        </Link>

                        <Link
                            href="/leaderboard"
                            className={cn(styles.headerNavLink, {
                                [styles.active]: pathname === "/leaderboard",
                            })}
                        >
                            <Chart />

                            <span className={styles.headerNavLinkWrap}>
                                <span className={styles.headerNavLinkText}>
                                    Leaderboard
                                </span>
                            </span>
                        </Link>

                        <Link
                            href="/referal"
                            className={cn(
                                styles.headerNavLink,
                                styles.disabled
                            )}
                        >
                            <Burn />

                            <span className={styles.headerNavLinkWrap}>
                                <span className={styles.headerNavLinkText}>
                                    Burn
                                </span>
                                <span className={styles.headerNavLinkTextSoon}>
                                    Coming soon
                                </span>
                            </span>
                        </Link>
                    </nav>

                    <div className={styles.headerWrap}>
                        <button className={styles.headerNotify}>
                            <Notify />

                            <span>1</span>
                        </button>

                        <Link href="/login" className={styles.headerConnect}>
                            <Wallet />
                            Connect Wallet
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
