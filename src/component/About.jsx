import React from 'react'
import Navbar from './Navbar';

function About() {
    return (
        <div>
          <Navbar/>
          {/* <a href="#main-content" className="visually-hidden focusable">
            Skip to main content
          </a> */}
          <noscript />
          <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>
            <div className="layout-container">
              
              <main role="main">
                <a id="main-content" tabIndex={-1} />		
                <div className="layout-content">
                  <div className="region region-content">
                    <div data-drupal-messages-fallback className="hidden" />
                    <article role="article" className="node node--type-layout-builder node--promoted node--view-mode-full">
                      <div className="field field--name-field-hero-slide field--type-entity-reference-revisions field--label-hidden field__item">
                        <div className="b-hero__slide b-hero__slide--dark">
                          <div className="b-hero__image">
                            <picture>
                              <img src="images/one.jpg" alt="tourism and hospitality management" />
                            </picture>
                            <div className="section__inner b-hero__inner">
                              <h1 className="b-hero__title">
                                About Us
                              </h1>
                              <div className="card-nav__dots hero-nav__dots" />
                            </div>
                          </div>
                        </div></div>
                    </article></div>
                  <div className="field__item">
                    <section className="section b-image-video-text b-image-video-text--image-left">
                      <div className="section__inner b-image-video-text__inner">
                        <div className="b-image-video-text__image">
                          <picture>
                            <img src="images/one.jpg" width={640} height={580} alt="tourism and hospitality management" />
                          </picture>
                        </div>
                        <div className="b-image-video-text__content">
                          <h2 className="b-image-video-text__title t-title">Who we are</h2>
                          <div className="b-image-video-text__text wysiwyg">
                            <p>The Indian Innovations: Journal of Indian Start-ups is committed to publishing policy and business analysis related to start-ups. The journal encourages new ideas, creative approaches and analytical perspectives on areas such as:
                            </p><ul>
                              <li> Entrepreneurship</li>
                              <li> Business development</li> 
                              <li>Public policy on start-ups and entrepreneurship</li>
                              <li>Leadership</li>
                              <li> Sustainable Development</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section></div>
                  <div className="field__item">
                    <section className="section b-image-video-text b-image-video-text--image-left">
                      <div className="container">
                        <p style={{textAlign: 'center', marginBottom: '40px'}}>Review Issues are published every month. These issues include widely read and widely cited collections of articles,<br /> interviews, case studies and data analysis in the field of start-ups, business, and public policy.</p>
                      </div>
                    </section>
                  </div>
                </div>
              </main></div>
          </div>
          <footer className="section site-footer" role="contentinfo">
            <div className="site-footer__inner section__inner site-footer__upper">
              <a href="#"><img src="images/logo1.png" style={{width: '130px'}} />
              </a>
              <nav className="site-footer__nav footer-nav__link">
                <nav role="navigation" aria-labelledby="block-footer-menu" id="block-footer" className="block block-menu navigation menu--footer">
                  <h2 className="visually-hidden" id="block-footer-menu">Footer</h2>
                  <ul className="footer-menu">
                    <li className="menu-item menu-item--expanded">
                      <ul className="menu">
                        <li className="menu-item">
                          <a href="#" target="_blank">Bookstore</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item--expanded">
                      <a href="#" data-drupal-link-system-path="node/3">About Emerald</a>
                      <ul className="menu">
                        <li className="menu-item">
                          <a href="#" title="Contact Emerald" data-drupal-link-system-path="node/33">Contact us</a>
                        </li>
                        <li className="menu-item">
                          <a href="#">Sitemap</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item--expanded">
                      <a href="#" data-drupal-link-system-path="node/7">Resources</a>
                      <ul className="menu">
                        <li className="menu-item">
                          <a href="#" title="Authors" data-drupal-link-system-path="node/12">Authors</a>
                        </li>
                        <li className="menu-item">
                          <a href="#" title="Editors" data-drupal-link-system-path="node/55">Editors</a>
                        </li>
                        <li className="menu-item">
                          <a href="#" data-drupal-link-system-path="node/8796">Librarians</a>
                        </li>
                        <li className="menu-item">
                          <a href="#" title="Researchers" data-drupal-link-system-path="node/66">Researchers</a>
                        </li>
                        <li className="menu-item">
                          <a href="#" title="Reviewers" data-drupal-link-system-path="node/71">Reviewers</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item--expanded">
                      <a href="#" title="Policies" data-drupal-link-system-path="node/42">Policies &amp; information</a>
                      <ul className="menu">
                        <li className="menu-item">
                          <a href="#" title="Privacy notice" data-drupal-link-system-path="node/8801">Privacy</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </nav>
            </div>
            <div className="site-footer__inner section__inner">
              <div className="site-footer__legal">
                © 2021 What is Lorem Ipsum
              </div>
              <div className="site-footer__social-links footer-social">
                <a href="#" className="footer-social__link" target="_blank">
                  <img src="images/facebook.svg" alt="Facebook logo" /></a>
                <a href="#" className="footer-social__link" target="_blank">
                  <img src="images/instagram.svg" alt="Instagram logo" /></a>
              </div>
            </div>
          </footer>
        </div>
      );
}

export default About
