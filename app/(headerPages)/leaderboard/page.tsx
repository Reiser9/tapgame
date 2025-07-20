"use client";

import React from "react";
import cn from 'classnames';

import styles from "./page.module.css";
import base from "@/shared/styles/base.module.css";

const LeaderboardPage = () => {
    return (
        <div className={styles.leaderboard}>
            <div className={base.container}>
                <div className={styles.leaderboardInner}>
                    <div className={styles.leaderboardTitleInner}>
                        <p className={styles.leaderboardTitle}>Leaderboard</p>

                        <p className={styles.leaderboardText}>
                            Identity Revealed
                        </p>
                    </div>

                    <div className={styles.leaderboardTable}>
                        <div className={styles.leaderboardTableHeader}>
                            <p className={styles.leaderboardTableRank}>Rank</p>
                            <p className={styles.leaderboardTableCont}>Contributor</p>
                            <p className={styles.leaderboardTableScore}>Score</p>
                            <p className={styles.leaderboardTableCult}>Cultural Prominence</p>
                            <p className={styles.leaderboardTableTrack}>Track Count</p>
                            <p className={styles.leaderboardTableUniq}>Unique Artist</p>
                            <p className={styles.leaderboardTableHourse}>Total Hourse</p>
                            <p className={styles.leaderboardTableLast}>Last Contribution</p>
                        </div>

                        <div className={styles.leaderboardTableItem}>
                            <div className={styles.leaderboardTableRank}>#1</div>
                            <p className={styles.leaderboardTableCont}>0xasf1da..3123</p>
                            <p className={styles.leaderboardTableScore}>324</p>
                            <div className={styles.leaderboardTableCult}>
                                <div className={styles.leaderboardTableLine}>
                                    <div className={styles.leaderboardTableProgress} style={{width: "45%"}}></div>
                                </div>
                            </div>
                            <p className={styles.leaderboardTableTrack}>213</p>
                            <p className={styles.leaderboardTableUniq}>213</p>
                            <p className={styles.leaderboardTableHourse}>21.3 hrs</p>
                            <p className={styles.leaderboardTableLast}>20.08.2025</p>
                        </div>

                        <div className={styles.leaderboardTableItem}>
                            <div className={styles.leaderboardTableRank}>#2</div>
                            <p className={styles.leaderboardTableCont}>0xasf1da..3123</p>
                            <p className={styles.leaderboardTableScore}>324</p>
                            <div className={styles.leaderboardTableCult}>
                                <div className={styles.leaderboardTableLine}>
                                    <div className={styles.leaderboardTableProgress} style={{width: "55%"}}></div>
                                </div>
                            </div>
                            <p className={styles.leaderboardTableTrack}>213</p>
                            <p className={styles.leaderboardTableUniq}>213</p>
                            <p className={styles.leaderboardTableHourse}>21.3 hrs</p>
                            <p className={styles.leaderboardTableLast}>20.08.2025</p>
                        </div>

                        <div className={styles.leaderboardTableItem}>
                            <div className={styles.leaderboardTableRank}>#3</div>
                            <p className={styles.leaderboardTableCont}>0xasf1da..3123</p>
                            <p className={styles.leaderboardTableScore}>324</p>
                            <div className={styles.leaderboardTableCult}>
                                <div className={styles.leaderboardTableLine}>
                                    <div className={styles.leaderboardTableProgress} style={{width: "25%"}}></div>
                                </div>
                            </div>
                            <p className={styles.leaderboardTableTrack}>213</p>
                            <p className={styles.leaderboardTableUniq}>213</p>
                            <p className={styles.leaderboardTableHourse}>21.3 hrs</p>
                            <p className={styles.leaderboardTableLast}>20.08.2025</p>
                        </div>

                        <div className={styles.leaderboardTableItem}>
                            <div className={styles.leaderboardTableRank}>#4</div>
                            <p className={styles.leaderboardTableCont}>0xasf1da..3123</p>
                            <p className={styles.leaderboardTableScore}>324</p>
                            <div className={styles.leaderboardTableCult}>
                                <div className={styles.leaderboardTableLine}>
                                    <div className={styles.leaderboardTableProgress} style={{width: "10%"}}></div>
                                </div>
                            </div>
                            <p className={styles.leaderboardTableTrack}>213</p>
                            <p className={styles.leaderboardTableUniq}>213</p>
                            <p className={styles.leaderboardTableHourse}>21.3 hrs</p>
                            <p className={styles.leaderboardTableLast}>20.08.2025</p>
                        </div>

                        <div className={styles.leaderboardTableItem}>
                            <div className={styles.leaderboardTableRank}>#5</div>
                            <p className={styles.leaderboardTableCont}>0xasf1da..3123</p>
                            <p className={styles.leaderboardTableScore}>324</p>
                            <div className={styles.leaderboardTableCult}>
                                <div className={styles.leaderboardTableLine}>
                                    <div className={styles.leaderboardTableProgress} style={{width: "45%"}}></div>
                                </div>
                            </div>
                            <p className={styles.leaderboardTableTrack}>213</p>
                            <p className={styles.leaderboardTableUniq}>213</p>
                            <p className={styles.leaderboardTableHourse}>21.3 hrs</p>
                            <p className={styles.leaderboardTableLast}>20.08.2025</p>
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

export default LeaderboardPage;
