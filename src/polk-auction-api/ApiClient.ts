import axios from 'axios';
import { useAxios } from 'use-axios-client';
import { ParachainExtended } from './models/Parachain';

const endPointUrl = process.env.POLK_AUCTION_ENDPOINT;

const parachainPath = '/parachain';

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
