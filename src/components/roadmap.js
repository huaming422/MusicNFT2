import { AnimationOnScroll } from "./AnimationOnScroll";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";


const Roadmap = () => {
    const {
        setOpenModal
    } = useContext(AppContext);

    const onOpenModal = () => setOpenModal(true);
    return (
        <section className="section-padding top-padding" id='roadmap'>
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeInUp" className="pb-3" animateOnce={true}>
                    <div  className="home-center">
                        {/* <img src="/images/main.png" alt="" /> */}
                    </div>
                </AnimationOnScroll>

                <div className="roadmap">
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} className='pb-5'>
                        <h2 className="text-center">Creating magic for your ears</h2>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" className="" animateOnce={true}>
                        <p className="text-center">This track is <span style={{ color: '#7A04EB' }}>memory of the Legend himself</span> and you get to
                        </p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <p className="text-center">support and hear it before anyone else in the world.</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <p className="text-center">FT.<span style={{ color: '#7A04EB' }}>Afsana khan</span> and produced by the stat duo <span style={{ color: '#7A04EB' }}>Salim&Sulaiman</span>.</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <p className="text-center">This is your chance to be part of history.</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <p className="text-center">Join our waitlist now, so you don't miss out on this opportunity.</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                        <div onClick={onOpenModal} className='waitlist-btn'>
                            <img src="/images/button.png" alt="" />
                        </div>
                    </AnimationOnScroll>

                </div>
            </div>
        </section>
    );
}

export default Roadmap