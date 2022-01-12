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
    </div>
  );
};
