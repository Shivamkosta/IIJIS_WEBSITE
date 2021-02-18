import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
          <Navbar/>
          {/* <a href="#main-content" className="visually-hidden focusable">
            Skip to main content
          </a> */}
          {/* <noscript /> */}
          <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>
            <div className="layout-container">
              
              <main role="main">
                <a id="main-content" tabIndex={-1} />		
                <div className="layout-content">
                  <div className="region region-content">
                    <div data-drupal-messages-fallback className="hidden" />
                    <section className="section b-hero b-hero__bg">
                      <div className="b-hero__slider-container">
                        <div className="b-hero__slider-wrapper">
                          <div className="b-hero__slide b-hero__slide--dark">
                            <div className="b-hero__image">
                              <picture>
                                <img src="images/one.jpg" alt="tourism and hospitality management" />
                              </picture>
                              <div className="section__inner b-hero__inner journal-header">
                                <nav className="breadcrumb" role="navigation" aria-labelledby="system-breadcrumb">
                                  <ol>
                                    <li>
                                      <Link to="/">HOME</Link>
                                    </li>
                                  </ol>
                                </nav>
                                <div className="journal-header__image">
                                  <div data-blazy className="blazy blazy--field blazy--field-image field field--name-field-image field--type-image field--label-hidden field__item">
                                    <div className="media media--bundle--single-journal media--blazy media--loading media--image">
                                      <img alt="" className="media__image media__element b-lazy" loading="lazy" src="images/1.jpg" width={240} height={320} />
                                    </div>
                                  </div>
                                  <div className="open-access__wrapper">
                                    <img src="images/ao-lock.png" alt="icon" className="open-access" />
                                    <div className="open-access__popout">
                                      <p>You can publish an
                                        <strong>open access</strong>
                                        article in this journal</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="banner-contents-wrapper">
                                  <h1 className="journal-header__title">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                  </h1>
                                  <div className="journal-header__logo-wrapper">
                                    <div className="journal-header__logos">
                                    </div>
                                  </div>
                                  <div className="journal-header__ctas">
                                    <a href="#" className="btn" target="_blank">
                                      Submit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="b-journal-info__useful-links">
                      <ul className="b-journal-info__useful-links-inner" id="journal_nav">
                        <li>Useful links:</li>
                        <li>
                          <a href="#" id="tbc" target="_blank">Table of contents</a>
                        </li>
                      </ul>
                    </div>
                    <div className="journal-cols">
                      {/*<aside class="journal-cols__nav">
  <h3 class="journal-cols__nav-header"> ON THIS PAGE</h3>
  <div class="journal-cols__nav-links">
  <a href="#journal-description" class="journal-cols__nav-link">
  Journal description</a>
  <a href="#aims-and-scope" class="journal-cols__nav-link">
      What is Lorem</a>
  <a href="#editorial-team" class="journal-cols__nav-link">
      What is Lorem</a>
  <a href="#author-guidelines" class="journal-cols__nav-link">
      What is Lorem</a>
  <a href="#indexing-and-rankings" class="journal-cols__nav-link">
      What is Lorem</a>
  <a href="#related-journals" class="journal-cols__nav-link">
      What is Lorem</a>
  </div>
  </aside>*/}
                      <div className="journal-cols__content">
                        <section className="section" id="journal-description">
                          <div className="section__inner">
                            <h2>Journal description</h2>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. When an unknown printer took a
                              galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but 
                              also the leap into electronic typesetting. Remaining essentially unchanged. </p>
                          </div>
                        </section>
                        <section className="journal-trust-logos">
                          <div className="journal-trust-logos__logo">
                            <img src="images/logo.png" alt="" />
                          </div>
                        </section>
                        <section className="section b-full-width-accordion">
                          <div className="section__inner b-full-width-accordion__inner">
                            <div className="b-accordion drop-shadow" id="aims-and-scope">
                              <div className="b-accordion__header">
                                <button className="b-accordion__trigger">What is Lorem</button>
                              </div>
                              <div className="b-accordion__body wysiwyg" aria-expanded="false">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                                  containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                              </div>
                            </div>
                            <div className="b-accordion drop-shadow" id="editorial-team">
                              <div className="b-accordion__header">
                                <button className="b-accordion__trigger">What is Lorem</button>
                              </div>
                              <div className="b-accordion__body wysiwyg " aria-expanded="false">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                                  containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                              </div>
                            </div>
                            <div className="b-accordion drop-shadow" id="author-guidelines">
                              <div className="b-accordion__header">
                                <button className="b-accordion__trigger">What is Lorem</button>
                              </div>
                              <div className="b-accordion__body wysiwyg" aria-expanded="false">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                                  containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                              </div>
                            </div>
                            <div className="b-accordion drop-shadow" id="indexing-and-rankings">
                              <div className="b-accordion__header">
                                <button className="b-accordion__trigger">What is Lorem</button>
                              </div>
                              <div className="b-accordion__body wysiwyg" aria-expanded="false">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                                  containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                    {/*
  <section class="section b-card-list b-card-list--title-left b-card-list--slider" id="related-journals">
  <div class="section__inner b-card-list__inner">
  
  
  
  <div class="b-card-list__body">
  
  <div class="views-element-container">
  <div class="b-card-list__cards">
  <div class="b-card-list__cards-inner">
  
  
  <article class="b-card-list__card b-card b-card--journal">
  <div class="b-card__image">
  <img src="images/1.jpg" width="1024" height="1418" alt="" />
  
  
  </div>
  <div class="b-card__content">
  <h4 class="b-card__title"><a href="#" hreflang="en">Where does it come from?</a></h4>
  </div>
  <a href="#" class="b-card__link">
  Find out more</a>
  <a href="#" class="b-card__link-overlay"></a>
  </article>
  
  
  
  <article class="b-card-list__card b-card b-card--journal">
  <div class="b-card__image">
  <img src="images/1.jpg" width="2056" height="3132" alt="" />
  
  
  </div>
  <div class="b-card__content">
  <h4 class="b-card__title"><a href="#" hreflang="en">Where does it come from?</a></h4>
  </div>
  <a href="#" class="b-card__link">
  Find out more</a>
  <a href="#" class="b-card__link-overlay"></a>
  </article>
  
  
  
  <article class="b-card-list__card b-card b-card--journal">
  <div class="b-card__image">
  <img src="images/1.jpg" width="2053" height="2835" alt="" />
  
  
  </div>
  <div class="b-card__content">
  <h4 class="b-card__title"><a href="#" hreflang="en">Where does it come from?</a></h4>
  </div>
  <a href="#" class="b-card__link">
  Find out more</a>
  <a href="#" class="b-card__link-overlay"></a>
  </article>
  
  
  
  <article class="b-card-list__card b-card b-card--journal">
  <div class="b-card__image">
  <img src="images/1.jpg" width="1026" height="1417" alt="" />
  
  
  </div>
  <div class="b-card__content">
  <h4 class="b-card__title"><a href="#" hreflang="en">Where does it come from?</a></h4>
  </div>
  <a href="#" class="b-card__link">
  Find out more</a>
  <a href="#" class="b-card__link-overlay"></a>
  </article>
  
  
  
  <article class="b-card-list__card b-card b-card--journal">
  <div class="b-card__image">
  <img src="images/1.jpg" width="240" height="320" alt="" />
  
  
  </div>
  <div class="b-card__content">
  <h4 class="b-card__title"><a href="#" hreflang="en">Where does it come from?</a></h4>
  </div>
  <a href="#" class="b-card__link">
  Find out more</a>
  <a href="#" class="b-card__link-overlay"></a>
  </article>
  
  
  
  <article class="b-card-list__card b-card b-card--journal">
  <div class="b-card__image">
  <img src="images/1.jpg" width="240" height="320" alt="" />
  
  
  </div>
  <div class="b-card__content">
  <h4 class="b-card__title"><a href="#" hreflang="en">Where does it come from?</a></h4>
  </div>
  <a href="#" class="b-card__link">
  Find out more</a>
  <a href="#" class="b-card__link-overlay"></a>
  </article>
  
  
  
  <article class="b-card-list__card b-card b-card--journal">
  <div class="b-card__image">
  <img src="images/1.jpg" width="240" height="320" alt="" />
  
  
  </div>
  <div class="b-card__content">
  <h4 class="b-card__title"><a href="#" hreflang="en">Where does it come from?</a></h4>
  </div>
  <a href="#" class="b-card__link">
  Find out more</a>
  <a href="#" class="b-card__link-overlay"></a>
  </article>
  
  
  
  <article class="b-card-list__card b-card b-card--journal">
  <div class="b-card__image">
  <img src="images/1.jpg" width="240" height="330" alt="" />
  
  
  </div>
  <div class="b-card__content">
  <h4 class="b-card__title"><a href="#" hreflang="en">Where does it come from?</a></h4>
  </div>
  <a href="#" class="b-card__link">
  Find out more</a>
  <a href="#" class="b-card__link-overlay"></a>
  </article>
  
  
  
  <article class="b-card-list__card b-card b-card--journal">
  <div class="b-card__image">
  <img src="images/1.jpg" width="240" height="320" alt="" />
  
  
  </div>
  <div class="b-card__content">
  <h4 class="b-card__title"><a href="#" hreflang="en">Where does it come from?</a></h4>
  </div>
  <a href="#" class="b-card__link">
  Find out more</a>
  <a href="#" class="b-card__link-overlay"></a>
  </article>
  
  
  
  <article class="b-card-list__card b-card b-card--journal">
  <div class="b-card__image">
  <img src="images/1.jpg" width="2055" height="2835" alt="" />
  
  
  </div>
  <div class="b-card__content">
  <h4 class="b-card__title"><a href="#" hreflang="en">Where does it come from?</a></h4>
  </div>
  <a href="#" class="b-card__link">
  Find out more</a>
  <a href="#" class="b-card__link-overlay"></a>
  </article>
  
  
  
  <article class="b-card-list__card b-card b-card--journal">
  <div class="b-card__image">
  <img src="images/1.jpg" width="240" height="320" alt="" />
  
  
  </div>
  <div class="b-card__content">
  <h4 class="b-card__title"><a href="#" hreflang="en">Where does it come from?</a></h4>
  </div>
  <a href="#" class="b-card__link">
  Find out more</a>
  <a href="#" class="b-card__link-overlay"></a>
  </article>
  
  
  
  
  </div>
  </div></div>
  
  
  <div class="b-card-list__nav slider-nav wd"style="width:308px">
  <button class="slider-nav__prev">
  Prev
  </button>
  <div class="slider-nav__dots"></div>
  <button class="slider-nav__next">
  Next
  </button>
  </div>
  </div>
  
  </div>
  </section>
  
  
  */}
                  </div>
                </div>
              </main>
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
                          <a href="#" data-drupal-link-system-path="node/3">About</a>
                          <ul className="menu">
                            <li className="menu-item">
                              <a href="#" title="Contact " data-drupal-link-system-path="node/33">Contact us</a>
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
          </div>
        </div>
      );
}

export default Home
