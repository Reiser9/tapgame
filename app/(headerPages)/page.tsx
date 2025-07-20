"use client";

import React from "react";
import cn from "classnames";

import styles from "./page.module.css";
import base from "@/shared/styles/base.module.css";

import {
    Close,
    Group,
    Headphone,
    History,
    Info,
    Link2,
    Logo2,
    Mask,
    Note,
    Play,
    Share,
    Share2,
    Star,
    Timer,
    Trophy,
    User,
    Volume,
} from "@/shared/icons";
import Image from "next/image";
import { Modal } from "@/shared/ui/Modal";

export default function Home() {
    const [shareModal, setShareModal] = React.useState(false);
    const [claimModal, setClaimModal] = React.useState(false);

    return (
        <>
            <div className={styles.dashboard}>
                <div className={base.container}>
                    <div className={styles.dashboardInner}>
                        <div className={styles.dashboardOverlay}>
                            <div className={styles.dashboardTitleInner}>
                                <p className={styles.dashboardTitle}>
                                    Your Musical
                                </p>

                                <p className={styles.dashboardText}>
                                    Identity Revealed
                                </p>
                            </div>

                            <div className={styles.dashboardScreens}>
                                <Image
                                    src="/img/claim-bg.png"
                                    alt="bg"
                                    fill
                                    className={styles.dashboardScreenBg}
                                />

                                <div className={styles.dashboardScreenTop}>
                                    <div
                                        className={styles.dashboardScreenClaim}
                                    >
                                        <div
                                            className={
                                                styles.dashboardScreenClaimIcon
                                            }
                                        >
                                            <Timer />
                                        </div>

                                        <div
                                            className={
                                                styles.dashboardScreenClaimTextBlock
                                            }
                                        >
                                            <p>Next claim:</p>
                                            <p>23:02:13</p>
                                        </div>
                                    </div>

                                    <button
                                        className={
                                            styles.dashboardScreenTopShare
                                        }
                                        onClick={() => setShareModal(true)}
                                    >
                                        <Share />
                                        Share Insights
                                    </button>
                                </div>

                                <div className={styles.dashboardScreenReward}>
                                    <div
                                        className={
                                            styles.dashboardScreenRewardWrap
                                        }
                                    >
                                        <p
                                            className={
                                                styles.dashboardScreenRewardText
                                            }
                                        >
                                            Contribute Reward:
                                        </p>

                                        <div
                                            className={
                                                styles.dashboardScreenRewardValue
                                            }
                                        >
                                            123.02
                                            <Logo2 />
                                        </div>
                                    </div>

                                    <div
                                        className={
                                            styles.dashboardScreenRewardClaim
                                        }
                                    >
                                        <button
                                            className={
                                                styles.dashboardScreenRewardClaimButton
                                            }
                                        >
                                            Claim reward
                                        </button>

                                        <button
                                            className={
                                                styles.dashboardScreenRewardClaimInfo
                                            }
                                            onClick={() => setClaimModal(true)}
                                        >
                                            Eligibility to Claim
                                            <Info />
                                        </button>
                                    </div>

                                    <div
                                        className={
                                            styles.dashboardScreenLvlInner
                                        }
                                    >
                                        <div
                                            className={
                                                styles.dashboardScreenLvl
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.dashboardScreenLvlText
                                                }
                                            >
                                                your LVL:
                                            </p>

                                            <p
                                                className={
                                                    styles.dashboardScreenLvlValue
                                                }
                                            >
                                                23
                                            </p>

                                            <div
                                                className={
                                                    styles.dashboardScreenLvlChart
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.dashboardScreenLvlChartProgress
                                                    }
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.dashboardTables}>
                            <div
                                className={cn(
                                    styles.dashboardTable,
                                    styles.dashboardTableBlock
                                )}
                            >
                                <Image
                                    src="/img/track-bg.png"
                                    alt="bg"
                                    fill
                                    className={styles.dashboardTableBlockBg}
                                />

                                <div className={styles.statsBlockTitle}>
                                    <span>
                                        <Note />
                                    </span>
                                    Top Tracks
                                </div>

                                <div className={styles.dashboardTableItems}>
                                    <div className={styles.dashboardTableItem}>
                                        <div
                                            className={
                                                styles.dashboardTableItemWrap
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.dashboardTableItemPlace
                                                }
                                            >
                                                #1
                                            </p>

                                            <div
                                                className={
                                                    styles.dashboardTableItemImg
                                                }
                                            ></div>

                                            <div
                                                className={
                                                    styles.dashboardTableItemTextBlock
                                                }
                                            >
                                                <p
                                                    className={
                                                        styles.dashboardTableItemTitle
                                                    }
                                                >
                                                    Name of Song
                                                </p>

                                                <p
                                                    className={
                                                        styles.dashboardTableItemText
                                                    }
                                                >
                                                    Artist name
                                                </p>
                                            </div>
                                        </div>

                                        <a
                                            href="https://google.com"
                                            target="_blank"
                                            className={
                                                styles.dashboardTableItemLink
                                            }
                                        >
                                            <Link2 />
                                        </a>
                                    </div>

                                    <div className={styles.dashboardTableItem}>
                                        <div
                                            className={
                                                styles.dashboardTableItemWrap
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.dashboardTableItemPlace
                                                }
                                            >
                                                #2
                                            </p>

                                            <div
                                                className={
                                                    styles.dashboardTableItemImg
                                                }
                                            ></div>

                                            <div
                                                className={
                                                    styles.dashboardTableItemTextBlock
                                                }
                                            >
                                                <p
                                                    className={
                                                        styles.dashboardTableItemTitle
                                                    }
                                                >
                                                    Name of Song
                                                </p>

                                                <p
                                                    className={
                                                        styles.dashboardTableItemText
                                                    }
                                                >
                                                    Artist name
                                                </p>
                                            </div>
                                        </div>

                                        <a
                                            href="https://google.com"
                                            target="_blank"
                                            className={
                                                styles.dashboardTableItemLink
                                            }
                                        >
                                            <Link2 />
                                        </a>
                                    </div>

                                    <div className={styles.dashboardTableItem}>
                                        <div
                                            className={
                                                styles.dashboardTableItemWrap
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.dashboardTableItemPlace
                                                }
                                            >
                                                #3
                                            </p>

                                            <div
                                                className={
                                                    styles.dashboardTableItemImg
                                                }
                                            ></div>

                                            <div
                                                className={
                                                    styles.dashboardTableItemTextBlock
                                                }
                                            >
                                                <p
                                                    className={
                                                        styles.dashboardTableItemTitle
                                                    }
                                                >
                                                    Name of Song
                                                </p>

                                                <p
                                                    className={
                                                        styles.dashboardTableItemText
                                                    }
                                                >
                                                    Artist name
                                                </p>
                                            </div>
                                        </div>

                                        <a
                                            href="https://google.com"
                                            target="_blank"
                                            className={
                                                styles.dashboardTableItemLink
                                            }
                                        >
                                            <Link2 />
                                        </a>
                                    </div>

                                    <div className={styles.dashboardTableItem}>
                                        <div
                                            className={
                                                styles.dashboardTableItemWrap
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.dashboardTableItemPlace
                                                }
                                            >
                                                #4
                                            </p>

                                            <div
                                                className={
                                                    styles.dashboardTableItemImg
                                                }
                                            ></div>

                                            <div
                                                className={
                                                    styles.dashboardTableItemTextBlock
                                                }
                                            >
                                                <p
                                                    className={
                                                        styles.dashboardTableItemTitle
                                                    }
                                                >
                                                    Name of Song
                                                </p>

                                                <p
                                                    className={
                                                        styles.dashboardTableItemText
                                                    }
                                                >
                                                    Artist name
                                                </p>
                                            </div>
                                        </div>

                                        <a
                                            href="https://google.com"
                                            target="_blank"
                                            className={
                                                styles.dashboardTableItemLink
                                            }
                                        >
                                            <Link2 />
                                        </a>
                                    </div>

                                    <div className={styles.dashboardTableItem}>
                                        <div
                                            className={
                                                styles.dashboardTableItemWrap
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.dashboardTableItemPlace
                                                }
                                            >
                                                #5
                                            </p>

                                            <div
                                                className={
                                                    styles.dashboardTableItemImg
                                                }
                                            ></div>

                                            <div
                                                className={
                                                    styles.dashboardTableItemTextBlock
                                                }
                                            >
                                                <p
                                                    className={
                                                        styles.dashboardTableItemTitle
                                                    }
                                                >
                                                    Name of Song
                                                </p>

                                                <p
                                                    className={
                                                        styles.dashboardTableItemText
                                                    }
                                                >
                                                    Artist name
                                                </p>
                                            </div>
                                        </div>

                                        <a
                                            href="https://google.com"
                                            target="_blank"
                                            className={
                                                styles.dashboardTableItemLink
                                            }
                                        >
                                            <Link2 />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={cn(
                                    styles.dashboardTable,
                                    styles.dashboardTableBlock
                                )}
                            >
                                <Image
                                    src="/img/artist-bg.png"
                                    alt="bg"
                                    fill
                                    className={styles.dashboardTableBlockBg}
                                />

                                <div className={styles.statsBlockTitle}>
                                    <span>
                                        <Play />
                                    </span>
                                    Top Artist
                                </div>

                                <div className={styles.dashboardTableItems}>
                                    <div className={styles.dashboardTableItem}>
                                        <div
                                            className={
                                                styles.dashboardTableItemWrap
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.dashboardTableItemPlace
                                                }
                                            >
                                                #1
                                            </p>

                                            <div
                                                className={
                                                    styles.dashboardTableItemImg
                                                }
                                            ></div>

                                            <div
                                                className={
                                                    styles.dashboardTableItemTextBlock
                                                }
                                            >
                                                <p
                                                    className={
                                                        styles.dashboardTableItemTitle
                                                    }
                                                >
                                                    Artist name
                                                </p>
                                            </div>
                                        </div>

                                        <a
                                            href="https://google.com"
                                            target="_blank"
                                            className={
                                                styles.dashboardTableItemLink
                                            }
                                        >
                                            <Link2 />
                                        </a>
                                    </div>

                                    <div className={styles.dashboardTableItem}>
                                        <div
                                            className={
                                                styles.dashboardTableItemWrap
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.dashboardTableItemPlace
                                                }
                                            >
                                                #2
                                            </p>

                                            <div
                                                className={
                                                    styles.dashboardTableItemImg
                                                }
                                            ></div>

                                            <div
                                                className={
                                                    styles.dashboardTableItemTextBlock
                                                }
                                            >
                                                <p
                                                    className={
                                                        styles.dashboardTableItemTitle
                                                    }
                                                >
                                                    Artist name
                                                </p>
                                            </div>
                                        </div>

                                        <a
                                            href="https://google.com"
                                            target="_blank"
                                            className={
                                                styles.dashboardTableItemLink
                                            }
                                        >
                                            <Link2 />
                                        </a>
                                    </div>

                                    <div className={styles.dashboardTableItem}>
                                        <div
                                            className={
                                                styles.dashboardTableItemWrap
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.dashboardTableItemPlace
                                                }
                                            >
                                                #3
                                            </p>

                                            <div
                                                className={
                                                    styles.dashboardTableItemImg
                                                }
                                            ></div>

                                            <div
                                                className={
                                                    styles.dashboardTableItemTextBlock
                                                }
                                            >
                                                <p
                                                    className={
                                                        styles.dashboardTableItemTitle
                                                    }
                                                >
                                                    Artist name
                                                </p>
                                            </div>
                                        </div>

                                        <a
                                            href="https://google.com"
                                            target="_blank"
                                            className={
                                                styles.dashboardTableItemLink
                                            }
                                        >
                                            <Link2 />
                                        </a>
                                    </div>

                                    <div className={styles.dashboardTableItem}>
                                        <div
                                            className={
                                                styles.dashboardTableItemWrap
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.dashboardTableItemPlace
                                                }
                                            >
                                                #4
                                            </p>

                                            <div
                                                className={
                                                    styles.dashboardTableItemImg
                                                }
                                            ></div>

                                            <div
                                                className={
                                                    styles.dashboardTableItemTextBlock
                                                }
                                            >
                                                <p
                                                    className={
                                                        styles.dashboardTableItemTitle
                                                    }
                                                >
                                                    Artist name
                                                </p>
                                            </div>
                                        </div>

                                        <a
                                            href="https://google.com"
                                            target="_blank"
                                            className={
                                                styles.dashboardTableItemLink
                                            }
                                        >
                                            <Link2 />
                                        </a>
                                    </div>

                                    <div className={styles.dashboardTableItem}>
                                        <div
                                            className={
                                                styles.dashboardTableItemWrap
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.dashboardTableItemPlace
                                                }
                                            >
                                                #5
                                            </p>

                                            <div
                                                className={
                                                    styles.dashboardTableItemImg
                                                }
                                            ></div>

                                            <div
                                                className={
                                                    styles.dashboardTableItemTextBlock
                                                }
                                            >
                                                <p
                                                    className={
                                                        styles.dashboardTableItemTitle
                                                    }
                                                >
                                                    Artist name
                                                </p>
                                            </div>
                                        </div>

                                        <a
                                            href="https://google.com"
                                            target="_blank"
                                            className={
                                                styles.dashboardTableItemLink
                                            }
                                        >
                                            <Link2 />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={cn(
                                    styles.dashboardTable,
                                    styles.dashboardTableScore
                                )}
                            >
                                <div
                                    className={cn(
                                        styles.statsBlockTitle,
                                        styles.dashboardTableScoreTitle
                                    )}
                                >
                                    <span>
                                        <Star />
                                    </span>
                                    Score Breakdown
                                </div>

                                <div className={styles.statsBlockWrap}>
                                    <div className={styles.statsBlockElems}>
                                        <div className={styles.statsBlockElem}>
                                            <div
                                                className={
                                                    styles.statsBlockElemWrap
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.statsBlockElemTitle
                                                    }
                                                >
                                                    <Volume />
                                                    Volume Score
                                                </div>

                                                <p
                                                    className={
                                                        styles.statsBlockElemText
                                                    }
                                                >
                                                    0 (&lt;30 minutes)
                                                </p>
                                            </div>

                                            <p
                                                className={
                                                    styles.statsBlockElemValue
                                                }
                                            >
                                                125
                                            </p>
                                        </div>

                                        <div className={styles.statsBlockElem}>
                                            <div
                                                className={
                                                    styles.statsBlockElemWrap
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.statsBlockElemTitle
                                                    }
                                                >
                                                    <Group />
                                                    Diversity Score
                                                </div>

                                                <p
                                                    className={
                                                        styles.statsBlockElemText
                                                    }
                                                >
                                                    0 (&lt;30 artist)
                                                </p>
                                            </div>

                                            <p
                                                className={
                                                    styles.statsBlockElemValue
                                                }
                                            >
                                                125
                                            </p>
                                        </div>

                                        <div className={styles.statsBlockElem}>
                                            <div
                                                className={
                                                    styles.statsBlockElemWrap
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.statsBlockElemTitle
                                                    }
                                                >
                                                    <History />
                                                    History Score
                                                </div>

                                                <p
                                                    className={
                                                        styles.statsBlockElemText
                                                    }
                                                >
                                                    0 (&lt;7 days)
                                                </p>
                                            </div>

                                            <p
                                                className={
                                                    styles.statsBlockElemValue
                                                }
                                            >
                                                125
                                            </p>
                                        </div>

                                        <div className={styles.statsBlockElem}>
                                            <div
                                                className={
                                                    styles.statsBlockElemWrap
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.statsBlockElemTitle
                                                    }
                                                >
                                                    <Share2 />
                                                    Referal Score
                                                </div>

                                                <p
                                                    className={
                                                        styles.statsBlockElemText
                                                    }
                                                >
                                                    0 (&lt;10 referalls)
                                                </p>
                                            </div>

                                            <p
                                                className={
                                                    styles.statsBlockElemValue
                                                }
                                            >
                                                125
                                            </p>
                                        </div>

                                        <div className={styles.statsBlockElem}>
                                            <div
                                                className={
                                                    styles.statsBlockElemWrap
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.statsBlockElemTitle
                                                    }
                                                >
                                                    <Trophy />
                                                    Total Base Points
                                                </div>
                                            </div>

                                            <p
                                                className={
                                                    styles.statsBlockElemValue
                                                }
                                            >
                                                789
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.statsBlock}>
                            <div className={styles.statsBlockTitle}>
                                <span>
                                    <Play />
                                </span>
                                Your Listening Stats
                            </div>

                            <div className={styles.statsItems}>
                                <div className={styles.statsItem}>
                                    <Image
                                        src="/img/stat1-bg.png"
                                        alt="bg"
                                        fill
                                        className={styles.statsItemBg}
                                    />

                                    <div className={styles.statsItemIcon}>
                                        <Note />
                                    </div>

                                    <p className={styles.statsItemValue}>125</p>

                                    <p className={styles.statsItemText}>
                                        Tracks Played
                                    </p>
                                </div>

                                <div className={styles.statsItem}>
                                    <Image
                                        src="/img/stat2-bg.png"
                                        alt="bg"
                                        fill
                                        className={styles.statsItemBg}
                                    />

                                    <div className={styles.statsItemIcon}>
                                        <User />
                                    </div>

                                    <p className={styles.statsItemValue}>125</p>

                                    <p className={styles.statsItemText}>
                                        Unique Artists
                                    </p>
                                </div>

                                <div className={styles.statsItem}>
                                    <Image
                                        src="/img/stat3-bg.png"
                                        alt="bg"
                                        fill
                                        className={styles.statsItemBg}
                                    />

                                    <div className={styles.statsItemIcon}>
                                        <Headphone />
                                    </div>

                                    <p className={styles.statsItemValue}>
                                        12 hrs
                                    </p>

                                    <p className={styles.statsItemText}>
                                        Listening Time
                                    </p>
                                </div>

                                <div className={styles.statsItem}>
                                    <Image
                                        src="/img/stat4-bg.png"
                                        alt="bg"
                                        fill
                                        className={styles.statsItemBg}
                                    />

                                    <div className={styles.statsItemIcon}>
                                        <Mask />
                                    </div>

                                    <p className={styles.statsItemValue}>125</p>

                                    <p className={styles.statsItemText}>
                                        Tracks Played
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.techBlock}>
                            <p className={styles.techBlockTitle}>
                                Technical Details
                            </p>

                            <div className={styles.techBlockInfo}>
                                <div className={styles.techBlockItem}>
                                    <p className={styles.techBlockItemText}>
                                        Contributor:
                                    </p>

                                    <p className={styles.techBlockItemValue}>
                                        0xasf1da..3123
                                    </p>
                                </div>

                                <div className={styles.techBlockItem}>
                                    <p className={styles.techBlockItemText}>
                                        Account Hash:
                                    </p>

                                    <p className={styles.techBlockItemValue}>
                                        0xasf1da..3123
                                    </p>
                                </div>

                                <div className={styles.techBlockItem}>
                                    <p className={styles.techBlockItemText}>
                                        Version:
                                    </p>

                                    <p className={styles.techBlockItemValue}>
                                        1.1.1.1
                                    </p>
                                </div>

                                <div className={styles.techBlockItem}>
                                    <p className={styles.techBlockItemText}>
                                        Data Source:
                                    </p>

                                    <p className={styles.techBlockItemValue}>
                                        IPFS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal value={claimModal}>
                <div className={styles.claimModal}>
                    <button onClick={() => setClaimModal(false)} className={styles.claimModalClose}>
                        <Close />
                    </button>

                    <div className={styles.claimModalTextBlock}>
                        <p className={styles.claimModalTitle}>
                            Eligibility to Claim
                        </p>

                        <p className={styles.claimModalText}>
                            Lorem ipsum, or lipsum as it is sometimes known, is
                            dummy text used in laying out print, graphic or web
                            designs.
                        </p>

                        <p className={styles.claimModalText}>
                            The passage is attributed to an unknown typesetter
                            in the 15th century who is thought to have scrambled
                            parts of Cicero&apos;s De Finibus Bonorum et Malorum
                            for use in a type specimen book. It usually begins
                            with:
                        </p>
                    </div>
                </div>
            </Modal>

            <Modal value={shareModal}>
                <div className={styles.shareModal}>
                    <button onClick={() => setShareModal(false)} className={styles.claimModalClose}>
                        <Close />
                    </button>

                    <div className={styles.shareModalContent}>
                        <div className={styles.shareModalTitleInner}>
                            <div className={styles.shareModalImg}>
                                <Image src="/img/share.svg" alt="Share" fill />
                            </div>

                            <p className={styles.shareModalTitle}>
                                Share Your Insights!
                            </p>

                            <p className={styles.shareModalText}>
                                Proud Of Your musical taste? Share it
                            </p>
                        </div>

                        <div className={styles.shareModalBanner}>
                            <Image src="/img/banner-bg.png" alt="banner" fill className={styles.shareModalBannerBg} />

                            <div className={styles.shareModalBannerTop}>
                                <p className={styles.shareModalBannerTitle}>
                                    My Musical DNA
                                </p>

                                <div className={styles.shareModalBannerLogo}>
                                    <Logo2 />

                                    Vibin
                                </div>
                            </div>

                            <div className={styles.shareModalBannerStats}>
                                <div className={styles.shareModalBannerStatsWrap}>
                                    <div className={styles.shareModalBannerStatsBlock}>
                                        <p>
                                            My Spotify listening data
                                        </p>

                                        <div className={styles.shareModalBannerStatsEarn}>
                                            <p>
                                                Earned:
                                            </p>

                                            <div className={styles.shareModalBannerStatsEarnValue}>
                                                123.02

                                                <Logo2 />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.shareModalBannerStatsItem}>
                                        <div className={styles.shareModalBannerStatsItemIcon}>
                                            <Headphone />
                                        </div>

                                        <p className={styles.shareModalBannerStatsItemTitle}>
                                            Listening Time
                                        </p>

                                        <p className={styles.shareModalBannerStatsItemValue}>
                                            12 hrs
                                        </p>
                                    </div>

                                    <div className={styles.shareModalBannerStatsItem}>
                                        <div className={styles.shareModalBannerStatsItemIcon}>
                                            <Note />
                                        </div>

                                        <p className={styles.shareModalBannerStatsItemTitle}>
                                            Discover
                                        </p>

                                        <p className={styles.shareModalBannerStatsItemValue}>
                                            656 artist
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.shareModalBannerArtist}>
                                    <p className={styles.shareModalBannerArtistText}>
                                        Top Artist:
                                    </p>

                                    <div className={styles.shareModalBannerArtistItem}>
                                        <div className={styles.shareModalBannerArtistItemImg}></div>

                                        <p className={styles.shareModalBannerArtistItemName}>
                                            Artist name
                                        </p>
                                    </div>

                                    <div className={styles.shareModalBannerArtistItem}>
                                        <div className={styles.shareModalBannerArtistItemImg}></div>

                                        <p className={styles.shareModalBannerArtistItemName}>
                                            Artist name
                                        </p>
                                    </div>

                                    <div className={styles.shareModalBannerArtistItem}>
                                        <div className={styles.shareModalBannerArtistItemImg}></div>

                                        <p className={styles.shareModalBannerArtistItemName}>
                                            Artist name
                                        </p>
                                    </div>
                                </div>

                                <p className={styles.shareModalBannerStatsText}>
                                    vibin.io
                                </p>
                            </div>
                        </div>

                        <button className={styles.shareModalLink}>
                            Share on X
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
