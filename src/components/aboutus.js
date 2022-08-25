import { AnimationOnScroll } from "./AnimationOnScroll";
const AboutUs = () => {

    return (
        <section className="section-padding" id='about'>
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                    <div className='d-flex align-items-baseline'>
                        <div className='line-grid'>
                            <img src="/images/leftgrid.svg" alt="" />
                        </div>
                        <div className="title">
                            <h2>About&nbsp;us</h2>
                        </div>
                        <div className='line-grid'>
                            <img src="/images/rightgrid.svg" alt="" />
                        </div>
                    </div>
                </AnimationOnScroll>
                <div className='d-flex align-items-center mt-5'>
                    <div className="heythere">
                        <img src="/images/heythere.svg" alt="" />
                    </div>
                    <div className="aboutus">
                        <div>
                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                                <p>We're Kalakaar.io and empower individuals to
                                    <span style={{ color: '#7A04EB' }}>
                                        own a piece of your favorite music
                                    </span>
                                </p>
                            </AnimationOnScroll>

                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                                <p>You know what's really cool? Listening to your favorite music and earning from it.
                                    <br />
                                    You must have heard and danced to the music before, But earning from it:How's <br />that possible?
                                </p>
                            </AnimationOnScroll>

                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                                <p>To make it possible, we created Kalakaar--
                                    <span style={{ color: '#7A04EB' }}>
                                        a platform that allows you to own a <br />piece of the music you love.
                                    </span>
                                    We provide NFTs(non-fungible tokens) that hold a <br /> percentage of streaming royalties, plus other perks
                                    like free access to concert <br /> tickets, merchandise discounts, VIP experiences and more!
                                </p>
                            </AnimationOnScroll>

                            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                                <p>So next time you stream the music, you earn a portion too--so now there's no <br /> reason for you not to stream it again and again! it's a way of
                                    <span style={{ color: '#7A04EB' }}>
                                        supporting your <br /> favorite artist and investing in them
                                    </span>
                                </p>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}

export default AboutUs