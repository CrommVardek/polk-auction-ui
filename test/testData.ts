import { Fund } from '../src/polk-auction-api/models/Crowdloan';
import { Parachain } from '../src/polk-auction-api/models/Parachain';

export const funds = [
  {
    parachainId: 1000,
    parachainName: 'Statemine',
    fundInfo: { depositor: '', firstPeriod: '13', lastPeriod: '21', state: 'ENDED' },
  } as Fund,
  {
    parachainId: 3000,
    parachainName: 'FutureParachain',
    fundInfo: { depositor: '', firstPeriod: '42', lastPeriod: '50', state: 'CURRENT' },
  } as Fund,
] as Fund[];

export const parachains = [
  {
    parachainId: 1000,
    parachainName: 'Statemint',
    currentLeases: [
      { leaseIndexPeriod: '13', account: '', deposit: 1 },
      { leaseIndexPeriod: '14', account: '', deposit: 1 },
    ],
    parachainLifeCycle: 'PARACHAIN',
    website: 'https://wiki.polkadot.network/docs/learn-common-goods#statemint',
  } as Parachain,
  {
    parachainId: 2000,
    parachainName: 'Acala',
    currentLeases: [
      { leaseIndexPeriod: '13', account: '', deposit: 1 },
      { leaseIndexPeriod: '14', account: '', deposit: 1 },
    ],
    parachainLifeCycle: 'PARACHAIN',
    website: 'https://acala.network/"',
  } as Parachain,
  {
    parachainId: 2004,
    currentLeases: [
      { leaseIndexPeriod: '13', account: '', deposit: 1 },
      { leaseIndexPeriod: '14', account: '', deposit: 1 },
    ],
    parachainName: 'MoonBeam',
    parachainLifeCycle: 'PARACHAIN',
    website: 'https://moonbeam.network/',
  } as Parachain,
  {
    parachainId: 9999,
    currentLeases: [
      { leaseIndexPeriod: '13', account: '', deposit: 1 },
      { leaseIndexPeriod: '14', account: '', deposit: 1 },
    ],
    parachainLifeCycle: 'PARACHAIN',
    parachainName: 'AWeirdParachain',
  } as Parachain,
];

export const parachainsWithParaThreads = parachains.concat([
  {
    parachainId: 4242,
    parachainName: 'RandomParathread',
    parachainLifeCycle: 'PARATHREAD',
  } as Parachain,
  {
    parachainId: 2345,
    parachainName: 'AnotherRandomParathread',
    parachainLifeCycle: 'PARATHREAD',
    website: 'https://another-rdm-para.network/',
  } as Parachain,
]);