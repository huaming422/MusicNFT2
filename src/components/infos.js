/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { AnimationOnScroll } from "./AnimationOnScroll";
import { AppContext } from "../context/AppContext";
import { useState, useContext } from "react";
import { mint, owner } from "../api/nft"
import siteConfig from "../config/site.config";
import { NotificationManager } from "react-notifications";
import ClipLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/react";

const Infos = () => {

    const {
        account,
        getAccBalance,
        setOpenSeaModel
    } = useContext(AppContext);

    let [loading1, setLoading1] = useState(false);
    let [loading2, setLoading2] = useState(false);
    let [loading3, setLoading3] = useState(false);
    let [loading4, setLoading4] = useState(false);
    const onOpenModal = () => setOpenSeaModel(true);
    let [color, setColor] = useState("#ffffff");

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
        `;

    const setFalse = (number) => {
        switch (number) {
            case 1:
                setLoading1(false);
                break;
            case 2:
                setLoading2(false);
                break;
            case 3:
                setLoading3(false);
                break;
            case 4:
                setLoading4(false);
                break;

            default:
                break;
        }
    }

    const handleMint = async (number) => {
        switch (number) {
            case 1:
                setLoading1(true);
                break;
            case 2:
                setLoading2(true);
                break;
            case 3:
                setLoading3(true);
                break;
            case 4:
                setLoading4(true);
                break;

            default:
                break;
        }

        let balance = await getAccBalance();
        owner()
            .then((owner) => {
                let value = 0
                // if (owner !== account)
                value = number * siteConfig.DISPLAY_COST;
                if (value > balance) {
                    NotificationManager.warning('Warning', "Not enough balance", 3000);
                    setFalse(number);
                    return;
                }
                mint(1, account, value)
                    .then((res) => {
                        NotificationManager.success('Success', "Success minted", 3000);
                        onOpenModal();
                        setFalse(number);

                    })
                    .catch((error) => {
                        NotificationManager.warning('Warning', error?.message, 3000);
                        setFalse(number);
                    })
            })
    }

    return (
        <section className="section-padding p-0" id='info' style={{ padding: 0 }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6  pt-5 how-padding"  >
                        <AnimationOnScroll animateIn="animate__fadeInLeft" style={{ height: '100%' }} animateOnce={true}>
                            <div className='info-gold' style={{ height: '100%' }}>
                                <div className='p-3' style={{ height: '100%' }}>
                                    <img src="images/gold.png" className='info-back-img' />
                                    <div className='d-flex justify-content-start' style={{ height: '100%' }}>
                                        <div className='info-price' style={{ position: 'relative' }}>
                                            <img src="images/gold-img.png" className='info-price-value-img' />
                                        </div>
                                        <div className='info-target'>
                                            <div>
                                                <p style={{ fontSize: '15px' }}>0.0015%</p>
                                                <p style={{ fontSize: '10px' }}>Ownership per RPC card</p>
                                                <img src="images/gold-only.svg" className="only" />
                                                <div className='info-goldline d-flex pb-3'><img src="images/goldline.svg" style={{ zIndex: 3 }} /></div>
                                                <p style={{ fontSize: '10px' }}>Access to listen the song</p>
                                                <p style={{ fontSize: '10px' }}>E-autograhed certificate by <br /> Sidhu Moosewala and Afsana Khan</p>

                                            </div>
                                            <div className='info-gold-btn d-flex'>
                                                {
                                                    !loading1 &&
                                                    <button onClick={() => handleMint(1)} className='gold-btn'>
                                                        Buy at 2000INR/25USD
                                                    </button>
                                                }
                                                <ClipLoader color={"#FFCA28"} loading={loading1} css={override} size={10} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col-lg-6  pt-5 how-padding"  >
                        <AnimationOnScroll animateIn="animate__fadeInRight" style={{ height: '100%' }} animateOnce={true}>
                            <div className='info-gold' style={{ height: '100%' }}>
                                <div className='p-3' style={{ height: '100%' }}>
                                    <img src="images/grey.png" className='info-back-img' />
                                    <div className='d-flex justify-content-start' style={{ height: '100%' }}>
                                        <div className='info-price' style={{ position: 'relative' }}>
                                            <img src="images/grey-img.png" className='info-price-value-img' />
                                        </div>
                                        <div className='info-target'>
                                            <div>
                                                <p style={{ fontSize: '15px' }}>0.005%</p>
                                                <p style={{ fontSize: '10px' }}>Ownership per RPC card</p>
                                                <img src="images/grey-only.svg" className="only" />
                                                <div className='info-goldline d-flex pb-3'><img src="images/greyline.svg" style={{ zIndex: 3 }} /></div>
                                                <p style={{ fontSize: '10px' }}>Access to listen the song</p>
                                                <p style={{ fontSize: '10px' }}>E-autograhed certificate by <br /> Sidhu Moosewala and Afsana Khan</p>
                                                <p style={{ fontSize: '10px' }}>Access to kalakaar community and  <br /> VIP access to next drop</p>

                                            </div>
                                            <div className='info-gold-btn d-flex'>
                                                {
                                                    !loading2 &&
                                                    <button onClick={() => handleMint(2)} className='grey-btn'>
                                                        Buy at 6000INR/75USD
                                                    </button>
                                                }
                                                <ClipLoader color={"#CFCFCF"} loading={loading2} css={override} size={10} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6  pt-5 how-padding"  >
                        <AnimationOnScroll animateIn="animate__fadeInLeft" style={{ height: '100%' }} animateOnce={true}>
                            <div className='info-gold' style={{ height: '100%' }}>
                                <div className='p-3' style={{ height: '100%' }}>
                                    <img src="images/blue.png" className='info-back-img' />
                                    <div className='d-flex justify-content-start' style={{ height: '100%' }}>
                                        <div className='info-price' style={{ position: 'relative' }}>
                                            <img src="images/blue-img.png" className='info-price-value-img' />
                                        </div>
                                        <div className='info-target'>
                                            <div>
                                                <p style={{ fontSize: '15px' }}>0.01%</p>
                                                <p style={{ fontSize: '10px' }}>Ownership per RPC card</p>
                                                <img src="images/blue-only.svg" className="only" />
                                                <div className='info-goldline d-flex pb-3'><img src="images/blueline.svg" style={{ zIndex: 3 }} /></div>
                                                <p style={{ fontSize: '10px' }}>Access to listen the song</p>
                                                <p style={{ fontSize: '10px' }}>E-autograhed certificate by <br /> Sidhu Moosewala and Afsana Khan</p>
                                                <p style={{ fontSize: '10px' }}>Access to kalakaar community and  <br /> VIP access to next drop</p>
                                                <p style={{ fontSize: '10px' }}>Moosewala Merchandise</p>

                                            </div>
                                            <div className='info-gold-btn d-flex'>
                                                {
                                                    !loading3 &&
                                                    <button onClick={() => handleMint(3)} className='blue-btn'>
                                                        Buy at 10000INR/125USD
                                                    </button>
                                                }
                                                <ClipLoader color={"#13A5F8"} loading={loading3} css={override} size={10} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="col-lg-6  pt-5 how-padding"  >
                        <AnimationOnScroll animateIn="animate__fadeInRight" style={{ height: '100%' }} animateOnce={true}>
                            <div className='info-gold' style={{ height: '100%' }}>
                                <div className='p-3' style={{ height: '100%' }}>
                                    <img src="images/green.png" className='info-back-img' />
                                    <div className='d-flex justify-content-start' style={{ height: '100%' }}>
                                        <div className='info-price' style={{ position: 'relative' }}>
                                            <img src="images/green-img.png" className='info-price-value-img' />
                                        </div>
                                        <div className='info-target'>
                                            <div>
                                                <img src="images/exclusive.svg" className="exclusive" />
                                                <p style={{ fontSize: '15px' }}>0.03%</p>
                                                <p style={{ fontSize: '10px' }}>Ownership per RPC card</p>
                                                <img src="images/green-only.svg" className="only" />
                                                <div className='info-goldline d-flex pb-3'><img src="images/greenline.svg" style={{ zIndex: 3 }} /></div>
                                                <p style={{ fontSize: '10px' }}>Access to listen the song</p>
                                                <p style={{ fontSize: '10px' }}>E-autograhed certificate by <br /> Sidhu Moosewala and Afsana Khan</p>
                                                <p style={{ fontSize: '10px' }}>Access to kalakaar community and  <br /> VIP access to next drop</p>
                                                <p style={{ fontSize: '10px' }}>Moosewala Merchandise</p>
                                                <p style={{ fontSize: '10px' }}>Meetup and concert access with <br />
                                                    Afsana Khan and Salim and Suleiman</p>

                                            </div>
                                            <div className='info-gold-btn d-flex'>
                                                {
                                                    !loading4 &&
                                                    <button onClick={() => handleMint(4)} className='green-btn'>
                                                        Buy at 23600INR/295USD
                                                    </button>
                                                }
                                                <ClipLoader color={"#00F0FF"} loading={loading4} css={override} size={10} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Infos
