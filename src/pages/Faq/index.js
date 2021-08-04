import React from "react";
import { Row, Col } from "antd";
import "./style.scss";
import { images } from "../../images";
import { useTranslation } from "react-i18next";

const Faq = () => {
    const { t } = useTranslation()
    // DATA
    const question = [
        {
            question: t("what is coin98 wallet?"),
            answer: t('answer1')
        },
        {
            question: t("why should i use coin 98 wallet?"),
            answer: t('answer2')
        },
        {
            question: t("is my funds safe?"),
            answer: t('answer3')
        },
        {
            question: t("where coin98 wallet available?"),
            answer: t('answer4')
        },
        {
            question: t("can i switch from my other decentralized wallet to Coin98 wallet?"),
            answer: t('answer5')
        },
    ];

    // FUNC
    const _renderQuestion = () => {
        return question.map((item, index) => {
            return (
                <div className="faq-item">
                    <div className="faq-item__question">
                        <div className="faq-item__question__left">Q</div>
                        <div className="faq-item__question__right">
                            {item.question}
                        </div>
                    </div>
                    <div></div>
                    <div className="faq-item__answer">
                        <div className="faq-item__answer__inside">
                            <div className="faq-item__answer__inside__item">
                                A
                            </div>
                        </div>
                        <div className="faq-item__answer-content">
                            {item.answer}
                        </div>
                    </div>
                </div>
            );
        });
    };

    // RENDER
    return (
        <div className="faq-container">
            <div className="faq-image">
                <img className="image" src={images.imgFaqQuestion} alt="test" />
            </div>
            <div className="faq-list">{_renderQuestion()}</div>
            <div className="contact-container">
                <div className="contact-content">
                    <div className="title">
                        {t('Cant find what you are looking for')}
                    </div>
                    <div className="divider">
                        <img alt="Bug" src={images.iconFaqDivider} className="underline"/>
                    </div>
                    <Row className="list-icon">
                        <Col className="list-icon__icon" xs={24} lg={8}>
                            <img
                                alt="Bug"
                                className="list-icon__icon__left"
                                src={images.iconFaqPhone}
                            ></img>
                            <div className="list-icon__icon__right">
                                {t('Contact Us')}
                            </div>
                        </Col>
                        <Col className="list-icon__icon" xs={24} lg={8}>
                            <img
                                alt="Bug"
                                className="list-icon__icon__left"
                                src={images.iconFaqMail}
                            ></img>
                            <div className="list-icon__icon__right">
                                {t('Email')}
                            </div>
                        </Col>
                        <Col className="list-icon__icon" xs={24} lg={8}>
                            <img
                                alt="Bug"
                                className="list-icon__icon__left"
                                src={images.iconFaqSupporter}
                            ></img>
                            <div className="list-icon__icon__right">
                                {t('Go to Help Center')}
                            </div>
                        </Col>
                    </Row>
                    {/* <div className="list-icon">
                        <div className="list-icon__icon">
                            <img
                                alt="Bug"
                                className="list-icon__icon__left"
                                src={images.iconFaqPhone}
                            ></img>
                            <div className="list-icon__icon__right">
                                Contact Us!
                            </div>
                        </div>
                        <div className="list-icon__divider"></div>
                        <div className="list-icon__icon">
                            <img
                                alt="Bug"
                                className="list-icon__icon__left"
                                src={images.iconFaqMail}
                            ></img>
                            <div className="list-icon__icon__right">Email</div>
                        </div>
                        <div className="list-icon__divider"></div>
                        <div className="list-icon__icon">
                            <img
                                alt="Bug"
                                className="list-icon__icon__left"
                                src={images.iconFaqSupporter}
                            ></img>
                            <div className="list-icon__icon__right">
                                Go to Help Center
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* <img
                    className="main-color"
                    src={images.imgFaqMainColor}
                    alt="Bug"
                />
                <img
                    className="top-left-color"
                    src={images.imgFaqTopLeftColor}
                    alt="Bug"
                ></img>
                <img
                    className="bottom-right-color"
                    src={images.imgFaqBottomRightColor}
                    alt="Bug"
                /> */}
            </div>
        </div>
    );
};

export default Faq;
