import { Fund } from '../src/polk-auction-api/models/Crowdloan';

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
