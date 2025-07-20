"use client";

import React from "react";
import cn from 'classnames';

import styles from "./page.module.css";
import base from "@/shared/styles/base.module.css";

import { Logo2 } from "@/shared/icons";

const ReferalPage = () => {
    return (
        <div className={styles.leaderboard}>
            <div className={base.container}>
                <div className={styles.leaderboardInner}>
                    <div className={styles.leaderboardTitleInner}>
                        <p className={styles.leaderboardTitle}>Referral page</p>

                        <p className={styles.leaderboardText}>
                            Identity Revealed
                        </p>
                    </div>

                    <div className={styles.leaderboardTable}>
                        <div className={styles.leaderboardTableHeader}>
                            <p className={styles.leaderboardTableWallet}>Wallet/email</p>
                            <p className={styles.leaderboardTableDate}>Date of connection</p>
                            <p className={styles.leaderboardTableToday}>Points generated <span>Today</span></p>
                            <p className={styles.leaderboardTableAll}>Points generated <span>All Time</span></p>
                        </div>

                        <div className={styles.leaderboardTableItem}>
                            <div className={styles.leaderboardTableWallet}>0xasf1da..3123</div>
                            <p className={styles.leaderboardTableDate}>10.01.2025</p>
                            <p className={styles.leaderboardTableToday}>
                                1250
                                <Logo2 />
                            </p>
                            <p className={styles.leaderboardTableAll}>
                                1250
                                <Logo2 />
                            </p>
                        </div>

                        <div className={styles.leaderboardTableItem}>
                            <div className={styles.leaderboardTableWallet}>0xasf1da..3123</div>
                            <p className={styles.leaderboardTableDate}>10.01.2025</p>
                            <p className={styles.leaderboardTableToday}>
                                1250
                                <Logo2 />
                            </p>
                            <p className={styles.leaderboardTableAll}>
                                1250
                                <Logo2 />
                            </p>
                        </div>

                        <div className={styles.leaderboardTableItem}>
                            <div className={styles.leaderboardTableWallet}>0xasf1da..3123</div>
                            <p className={styles.leaderboardTableDate}>10.01.2025</p>
                            <p className={styles.leaderboardTableToday}>
                                1250
                                <Logo2 />
                            </p>
                            <p className={styles.leaderboardTableAll}>
                                1250
                                <Logo2 />
                            </p>
                        </div>

                        <div className={styles.leaderboardTableItem}>
                            <div className={styles.leaderboardTableWallet}>0xasf1da..3123</div>
                            <p className={styles.leaderboardTableDate}>10.01.2025</p>
                            <p className={styles.leaderboardTableToday}>
                                1250
                                <Logo2 />
                            </p>
                            <p className={styles.leaderboardTableAll}>
                                1250
                                <Logo2 />
                            </p>
                        </div>

                        <div className={styles.leaderboardTableItem}>
                            <div className={styles.leaderboardTableWallet}>0xasf1da..3123</div>
                            <p className={styles.leaderboardTableDate}>10.01.2025</p>
                            <p className={styles.leaderboardTableToday}>
                                1250
                                <Logo2 />
                            </p>
                            <p className={styles.leaderboardTableAll}>
                                1250
                                <Logo2 />
                            </p>
                        </div>

                        <div className={styles.leaderboardTableItem}>
                            <div className={styles.leaderboardTableWallet}>0xasf1da..3123</div>
                            <p className={styles.leaderboardTableDate}>10.01.2025</p>
                            <p className={styles.leaderboardTableToday}>
                                1250
                                <Logo2 />
                            </p>
                            <p className={styles.leaderboardTableAll}>
                                1250
                                <Logo2 />
                            </p>
                        </div>
                    </div>

                    <div className={styles.leaderboardPagin}>
                        <button className={styles.leaderboardPaginButton}>
                            Prev
                        </button>

                        <button className={cn(styles.leaderboardPaginNumber, styles.active)}>
                            1
                        </button>

                        <button className={styles.leaderboardPaginNumber}>
                            2
                        </button>

                        <button className={styles.leaderboardPaginNumber}>
                            3
                        </button>

                        <p className={styles.leaderboardPaginDots}>...</p>

                        <button className={styles.leaderboardPaginNumber}>
                            45
                        </button>

                        <button className={styles.leaderboardPaginButton}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferalPage;
