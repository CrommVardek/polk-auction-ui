import axios from 'axios';
import { useAxios } from 'use-axios-client';
import { CrowdloanExtended } from './models/Crowdloan';
import { ParachainExtended } from './models/Parachain';

const endPointUrl = process.env.POLK_AUCTION_ENDPOINT;

const parachainPath = '/parachain';
const crowdloanPath = '/crowdloan';

const apiClient = () => {
  return axios.create({
    baseURL: endPointUrl,
  });
};

export const useParachains = (relaychain: string) => {
  const client = apiClient();
  const url = `${parachainPath}/${relaychain.toLowerCase()}`;

  const { data, loading } = useAxios<ParachainExtended[]>({ axiosInstance: client, url });

  return { data, loading };
};

export const useCrowdloans = (relaychain: string) => {
  const client = apiClient();
  const url = `${crowdloanPath}/${relaychain.toLowerCase()}`;

  const { data, loading } = useAxios<CrowdloanExtended>({ axiosInstance: client, url });

  return { data, loading };
};
