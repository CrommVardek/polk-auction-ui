import axios from 'axios';
import { useAxios } from 'use-axios-client';

const endPointUrl = process.env.REACT_APP_POLK_AUCTION_ENDPOINT;

const parachainPath = '/parachain';

const apiClient = () => {
  console.log(endPointUrl);
  return axios.create({
    baseURL: endPointUrl,
  });
};

export const useParachains = (relaychain: string) => {
  const client = apiClient();
  const url = `${parachainPath}/${relaychain.toLowerCase()}`;

  const { data } = useAxios<string>({ axiosInstance: client, url });

  return data;
};
