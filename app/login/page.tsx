"use client";

import React from "react";
import Image from "next/image";
import cn from 'classnames';

import styles from "./page.module.css";

import { AddPeople, ArrowRight, Logo, Mail } from "@/shared/icons";

const totalSteps = 3;

const LoginPage = () => {
    const [step, setStep] = React.useState(1);

    return (
        <div className={styles.login}>
            <Image
                src="/img/login-bg.png"
                alt="bg"
                fill
                className={styles.loginBg}
            />

            <div className={styles.loginLogo}>
                <Logo />
                Vibin
            </div>

            <div className={styles.loginBlock}>
                <div className={styles.loginStepInner}>
                    <p className={styles.loginStepText}>Step</p>

                    <div className={styles.loginStepIndicator}>
                        <p>{step}</p>

                        <p>/ {totalSteps}</p>
                    </div>
                </div>

                {step <= 2 && <p className={styles.loginTitle}>
                    Welcome to the Vibin&apos; app
                </p>}

                {step === 3 && <p className={styles.loginTitle}>
                    Connect wallet
                </p>}

                <div className={styles.loginTextBlock}>
                    <p className={styles.loginText}>
                        Spotify doesn&apos;t pay you for your data.
                    </p>

                    <p className={styles.loginTextWeight}>We do</p>
                </div>

                {step === 1 && (
                    <div className={styles.loginInputWrapper}>
                        <p className={styles.loginInputText}>
                            Invitation code access only - Privacy protected
                        </p>

                        <div className={styles.loginInputWrap}>
                            <div className={styles.loginInputBlock}>
                                <AddPeople />

                                <input
                                    placeholder="Invitation code"
                                    className={styles.loginInput}
                                />
                            </div>

                            <button
                                className={styles.loginNextButton}
                                onClick={() => setStep(2)}
                            >
                                Continue
                                <ArrowRight />
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className={styles.loginInputWrapper}>
                        <p className={styles.loginInputText}>
                            Enter your Spotify account email
                        </p>

                        <div className={styles.loginInputWrap}>
                            <div className={styles.loginInputBlock}>
                                <Mail />

                                <input
                                    placeholder="Spotify Email"
                                    className={styles.loginInput}
                                />
                            </div>

                            <button
                                className={styles.loginNextButton}
                                onClick={() => setStep(3)}
                            >
                                Continue
                                <ArrowRight />
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && <div className={styles.loginConnectItems}>
                    <div className={styles.loginConnectItem}>
                        <div className={styles.loginConnectItemNetwork}>
                            <div className={styles.loginConnectItemNetworkImg}>
                                <Image src="/img/metamask.png" alt="metamask" fill />
                            </div>

                            <p>Metamask</p>
                        </div>

                        <button className={styles.loginConnectItemButton}>
                            Connect
                        </button>
                    </div>

                    <div className={styles.loginConnectItem}>
                        <div className={styles.loginConnectItemNetwork}>
                            <div className={styles.loginConnectItemNetworkImg}>
                                <Image src="/img/coinbase.png" alt="coinbase" fill />
                            </div>

                            <p>Coinbase</p>
                        </div>

                        <button className={styles.loginConnectItemButton}>
                            Connect
                        </button>
                    </div>

                    <div className={styles.loginConnectItem}>
                        <div className={styles.loginConnectItemNetwork}>
                            <div className={styles.loginConnectItemNetworkImg}>
                                <Image src="/img/safepal.png" alt="safepal" fill />
                            </div>

                            <p>Safepal</p>
                        </div>

                        <button className={styles.loginConnectItemButton}>
                            Connect
                        </button>
                    </div>
                </div>}

                <div className={cn(styles.loginButtonInner, {
                    [styles.opacity]: step > 1
                })}>
                    <button
                        className={styles.loginButton}
                        onClick={() => setStep(2)}
                    >
                        <ArrowRight />
                        Log In
                    </button>

                    <p className={styles.loginButtonText}>
                        if you already have an account.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
