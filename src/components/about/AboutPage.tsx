import React from 'react';
import './AboutPage.css';

export const AboutPage = () => {
  return (
    <div className='about-page'>
      <h3>What is PolkAuction ?</h3>
      <div className='about-page-content'>
        <p>
          Polk-Auction is a website that allows you to have a concise, simple an easy to understand view of the
          parachain, auction and crowdloan state of the Dotsama's ecosystem. We focus on on-chain data with some useful
          and relevant off-chain information surrounding the state of Polkadot / Kusama.
        </p>
      </div>
      <br />
      <h3>
        What is <i>not</i> PolkAuction ?
      </h3>
      <div className='about-page-content'>
        <p>
          Polk-Auction is <i>not</i> an information page about the parachain's projects. Aside from a few references to
          official's parachain websites, we believe that it is important for you to do your own research (DYOR).
        </p>
      </div>
      <br />
      <h3>Have a suggestion, idea or found a bug ?</h3>
      <div className='about-page-content'>
        <p>
          Suggestion from our users is important, you can share your ideas by creating an issue on our{' '}
          <a href='https://github.com/CrommVardek/polk-auction-ui'>github repository</a>. If you find a bug, you can
          report it <a href='https://github.com/CrommVardek/polk-auction-ui/issues/new'>here</a>.
        </p>
      </div>
      <br />
      <h3>FAQ</h3>
      <div className='faq-content'>
        <p>
          <b>How can I contribute to crowdloans?</b> Currently this website does not support contributing to crowdloans.
          You can contribute through the <a href='https://polkadot.js.org/'>polakdot-js UI</a>, via the candidate's
          website or through a wallet that supports crowdloan (however we strongly suggest you to DYOR before using any
          third-party tool to contribute to any crowdloan)
        </p>
      </div>
    </div>
  );
};
