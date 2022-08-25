/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
const Footer = () => {
  return (
    <section className="main-section p-0" id="contact">
      <div className="container">
        <div className="row align-items-center gy-5">
          <img src="images/footer-top.svg"/>
          <div className="col-lg-12 order-xs-2 mt-1">
            <div className="main-box">
              <div className="title">
                <img src="images/topLogo.svg" style={{ width: '200px' }} />
              </div>
              <div className="footer-des">
                <p className='pt-3 pb-3 mb-0'>Powered By © 2021 Cloud King Digital Art Pvt Ltd, And all rights reserved. </p>
                <p className='pt-3 pb-3 mb-0'>Support: info@clouddigitalart.com</p>
              </div>
              <div className="social-btn">
                <ul>
                  <li>
                    <a href="https://google.com" target="_blank">
                      <img src="images/facebook.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://google.com" target="_blank">
                      <img src="images/instagram.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="https://google.com" target="_blank">
                      <img src="images/twitter.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;
