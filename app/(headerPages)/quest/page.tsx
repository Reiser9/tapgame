"use client";

import React from "react";
import Image from "next/image";
import cn from "classnames";

import styles from "./page.module.css";
import base from "@/shared/styles/base.module.css";

import {
    ArrowRightTop,
    Blank,
    Close,
    Link as LinkIcon,
    Logo,
    Peoples,
    Target,
    Telegram,
    Ticket,
    Twitter,
} from "@/shared/icons";
import { TaskItem } from "@/shared/ui/TaskItem";
import { GameTouch } from "@/widgets/GameTouch";
import { Modal } from "@/shared/ui/Modal";

const QuestPage = () => {
    const [accessModal, setAccessModal] = React.useState(false);

    React.useEffect(() => {
        if (window && !window.localStorage.getItem("accessModal")) {
            setAccessModal(true);
        }
    }, []);

    return (
        <>
            <div className={styles.main}>
                <div className={base.container}>
                    <div className={styles.mainInner}>
                        <div className={styles.mainContent}>
                            <div className={styles.mainBanner}>
                                <Image
                                    src="/img/wave.png"
                                    alt="bg"
                                    fill
                                    className={styles.mainBannerImg}
                                />

                                <div className={styles.mainBannerTextInner}>
                                    <p className={styles.mainBannerTitle}>
                                        Quest $ Get rewarded
                                    </p>

                                    <p className={styles.mainBannerText}>
                                        Engage, Share & Earn - Complete Social!
                                    </p>
                                </div>
                            </div>

                            <GameTouch />

                            <TaskItem
                                points={100}
                                logo={<Twitter />}
                                button={
                                    <button className={styles.mainTaskButton}>
                                        Connect
                                    </button>
                                }
                                description="Connect your X to Gon app to get points."
                                done
                            />

                            <TaskItem
                                points={100}
                                logo={<Telegram />}
                                button={
                                    <button className={styles.mainTaskButton}>
                                        Connect
                                    </button>
                                }
                                description="Connect your Telegram to Gon app to get points."
                            />

                            <TaskItem
                                points={100}
                                logo={<Twitter />}
                                button={
                                    <button className={styles.mainTaskButton}>
                                        Connect
                                    </button>
                                }
                                description="Connect your email to the Gon app to get points."
                            />

                            <TaskItem
                                points={100}
                                logo={<Twitter />}
                                button={
                                    <button className={styles.mainTaskButton}>
                                        Follow
                                    </button>
                                }
                                description="Follow us on X to get points"
                            />

                            <TaskItem
                                points={100}
                                logo={<Telegram />}
                                button={
                                    <button className={styles.mainTaskButton}>
                                        Join Us
                                    </button>
                                }
                                description="Connect your Telegram to Gon app to get points."
                            />

                            <TaskItem
                                points={100}
                                logo={<Twitter />}
                                button={
                                    <button className={styles.mainTaskButton}>
                                        Like, repost, comment
                                    </button>
                                }
                                description="Like, repost, comment."
                            />

                            <TaskItem
                                points={100}
                                logo={<Twitter />}
                                button={
                                    <button className={styles.mainTaskButton}>
                                        Make a post
                                    </button>
                                }
                                description="Make a post on X about Gon (daily)"
                            />
                        </div>

                        <div className={styles.mainStatsInner}>
                            <div className={styles.inviteBlock}>
                                <Image
                                    src="/img/invite-bg.png"
                                    alt="bg"
                                    className={styles.inviteBlockBg}
                                    fill
                                />

                                <div className={styles.inviteTextInner}>
                                    <p className={styles.inviteTitle}>
                                        Invite & Earn 200 Rewards!
                                    </p>

                                    <p className={styles.inviteText}>
                                        Invite your friends into ... and earn
                                        extra points!
                                    </p>

                                    <button className={styles.inviteButton}>
                                        <LinkIcon />
                                        Invite a Friend
                                        <span>
                                            <ArrowRightTop />
                                        </span>
                                    </button>
                                </div>

                                <div className={styles.inviteCircle}>
                                    <Image
                                        src="/img/link.svg"
                                        alt="link"
                                        fill
                                    />
                                </div>
                            </div>

                            <div className={styles.statsBlock}>
                                <p className={styles.statsBlockTitle}>
                                    My Stats
                                </p>

                                <div className={styles.statsBlockContent}>
                                    <div className={styles.statsBlockItem}>
                                        <p
                                            className={
                                                styles.statsBlockItemTitle
                                            }
                                        >
                                            <Telegram />
                                            Social Points
                                        </p>

                                        <div
                                            className={
                                                styles.statsBlockItemPoints
                                            }
                                        >
                                            <Logo />
                                            100
                                        </div>
                                    </div>

                                    <div className={styles.statsBlockItem}>
                                        <p
                                            className={
                                                styles.statsBlockItemTitle
                                            }
                                        >
                                            <LinkIcon />
                                            Referal Points
                                        </p>

                                        <div
                                            className={
                                                styles.statsBlockItemPoints
                                            }
                                        >
                                            <Logo />
                                            100
                                        </div>
                                    </div>

                                    <div className={styles.statsBlockItem}>
                                        <p
                                            className={
                                                styles.statsBlockItemTitle
                                            }
                                        >
                                            <Target />
                                            Game Points
                                        </p>

                                        <div
                                            className={
                                                styles.statsBlockItemPoints
                                            }
                                        >
                                            <Logo />
                                            100
                                        </div>
                                    </div>

                                    <div
                                        className={cn(
                                            styles.statsBlockItem,
                                            styles.dark
                                        )}
                                    >
                                        <p
                                            className={
                                                styles.statsBlockItemTitle
                                            }
                                        >
                                            Total Points
                                        </p>

                                        <div
                                            className={
                                                styles.statsBlockItemPoints
                                            }
                                        >
                                            <Logo />
                                            12K
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.ratingTable}>
                            <div className={styles.ratingTableHeader}>
                                <p
                                    className={cn(
                                        styles.ratingTableTitle,
                                        styles.ratingTableRank
                                    )}
                                >
                                    Rank
                                </p>
                                <p
                                    className={cn(
                                        styles.ratingTableTitle,
                                        styles.ratingTableWallet
                                    )}
                                >
                                    Wallet Adress
                                </p>
                                <p
                                    className={cn(
                                        styles.ratingTableTitle,
                                        styles.ratingTablePoints
                                    )}
                                >
                                    Total points
                                </p>
                            </div>

                            <div className={styles.ratingTableItem}>
                                <p
                                    className={cn(
                                        styles.ratingTableText,
                                        styles.ratingTableRank
                                    )}
                                >
                                    1
                                </p>
                                <p
                                    className={cn(
                                        styles.ratingTableText,
                                        styles.ratingTableWallet
                                    )}
                                >
                                    0xx125..13123
                                </p>
                                <p
                                    className={cn(
                                        styles.ratingTableText,
                                        styles.ratingTablePoints
                                    )}
                                >
                                    <Logo />
                                    100 Points
                                </p>
                            </div>

                            <div className={styles.ratingTableItem}>
                                <p
                                    className={cn(
                                        styles.ratingTableText,
                                        styles.ratingTableRank
                                    )}
                                >
                                    1
                                </p>
                                <p
                                    className={cn(
                                        styles.ratingTableText,
                                        styles.ratingTableWallet
                                    )}
                                >
                                    0xx125..13123
                                </p>
                                <p
                                    className={cn(
                                        styles.ratingTableText,
                                        styles.ratingTablePoints
                                    )}
                                >
                                    <Logo />
                                    100 Points
                                </p>
                            </div>

                            <div className={styles.ratingTableItem}>
                                <p
                                    className={cn(
                                        styles.ratingTableText,
                                        styles.ratingTableRank
                                    )}
                                >
                                    1
                                </p>
                                <p
                                    className={cn(
                                        styles.ratingTableText,
                                        styles.ratingTableWallet
                                    )}
                                >
                                    0xx125..13123
                                </p>
                                <p
                                    className={cn(
                                        styles.ratingTableText,
                                        styles.ratingTablePoints
                                    )}
                                >
                                    <Logo />
                                    100 Points
                                </p>
                            </div>

                            <div className={styles.ratingTableItem}>
                                <p
                                    className={cn(
                                        styles.ratingTableText,
                                        styles.ratingTableRank
                                    )}
                                >
                                    1
                                </p>
                                <p
                                    className={cn(
                                        styles.ratingTableText,
                                        styles.ratingTableWallet
                                    )}
                                >
                                    0xx125..13123
                                </p>
                                <p
                                    className={cn(
                                        styles.ratingTableText,
                                        styles.ratingTablePoints
                                    )}
                                >
                                    <Logo />
                                    100 Points
                                </p>
                            </div>

                            <div className={styles.ratingTableItem}>
                                <p
                                    className={cn(
                                        styles.ratingTableText,
                                        styles.ratingTableRank
                                    )}
                                >
                                    1
                                </p>
                                <p
                                    className={cn(
                                        styles.ratingTableText,
                                        styles.ratingTableWallet
                                    )}
                                >
                                    0xx125..13123
                                </p>
                                <p
                                    className={cn(
                                        styles.ratingTableText,
                                        styles.ratingTablePoints
                                    )}
                                >
                                    <Logo />
                                    100 Points
                                </p>
                            </div>

                            <div className={styles.ratingTableItem}>
                                <p
                                    className={cn(
                                        styles.ratingTableText,
                                        styles.ratingTableRank
                                    )}
                                >
                                    1
                                </p>
                                <p
                                    className={cn(
                                        styles.ratingTableText,
                                        styles.ratingTableWallet
                                    )}
                                >
                                    0xx125..13123
                                </p>
                                <p
                                    className={cn(
                                        styles.ratingTableText,
                                        styles.ratingTablePoints
                                    )}
                                >
                                    <Logo />
                                    100 Points
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {accessModal && (
                <Modal value={accessModal}>
                    <div className={styles.accessModalContent}>
                        <button
                            className={styles.accessModalClose}
                            onClick={() => {
                                setAccessModal(false);
                                window.localStorage.setItem(
                                    "accessModal",
                                    "true"
                                );
                            }}
                        >
                            <Close />
                        </button>

                        <div className={styles.accessModalWrap}>
                            <div className={styles.accessModalLinkIcon}>
                                <Image src="/img/link.svg" alt="link" fill />
                            </div>

                            <p className={styles.accessModalTitle}>
                                Exclusive Access Only
                            </p>

                            <p className={styles.accessModalText}>
                                To join the Vibin&rsquo; Network, you&rsquo;ll
                                need an invitation code; no code, no entry.
                            </p>
                        </div>

                        <div className={styles.accessModalPoints}>
                            <div className={styles.accessModalPoint}>
                                <div className={styles.accessModalPointIcon}>
                                    <Ticket />
                                </div>

                                <p className={styles.accessModalPointText}>
                                    Only 100 invite codes will be released at
                                    launch.
                                </p>
                            </div>

                            <div className={styles.accessModalPoint}>
                                <div className={styles.accessModalPointIcon}>
                                    <Peoples />
                                </div>

                                <p className={styles.accessModalPointText}>
                                    After that, new members can join only
                                    through referrals from the initial 100
                                    users.
                                </p>
                            </div>

                            <div className={styles.accessModalPoint}>
                                <div className={styles.accessModalPointIcon}>
                                    <Blank />
                                </div>

                                <p className={styles.accessModalPointText}>
                                    Think of it as a whitelist.
                                </p>
                            </div>
                        </div>

                        <p className={styles.accessModalSubtext}>
                            Once they&rsquo;re gone, the only way in is through
                            someone who already got one.
                        </p>

                        <button className={styles.accessModalLink}>
                            Be one of the first. Start the ripple.
                        </button>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default QuestPage;
