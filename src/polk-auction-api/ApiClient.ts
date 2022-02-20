import { Auction } from './models/Auction';
import { Crowdloan } from './models/Crowdloan';
import { Parachain } from './models/Parachain';
import useAxios from 'axios-hooks';

const endPointUrl = process.env.POLK_AUCTION_ENDPOINT;

const parachainPath = '/parachain';
const crowdloanPath = '/crowdloan';
const auctionPath = '/auction';

export const useParachains = (relaychain: string) => {
  const url = `${parachainPath}/${relaychain.toLowerCase()}`;

  const [{ data, loading }] = useAxios<Parachain[]>(endPointUrl + url);

  return { data, loading };
};

export const useCrowdloans = (relaychain: string) => {
  const url = `${crowdloanPath}/${relaychain.toLowerCase()}`;

  const [{ data, loading }] = useAxios<Crowdloan>(endPointUrl + url);

  return { data, loading };
};

export const useAuctions = (relaychain: string) => {
  const url = `${auctionPath}/${relaychain.toLowerCase()}`;

  const [{ data, loading }] = useAxios<Auction>(endPointUrl + url);

  return { data, loading };
};
