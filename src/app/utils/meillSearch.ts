import MeiliSearch from 'meilisearch';
import config from '../config';

export const meiliClient = new MeiliSearch({
  host: config.meilisearch_host as string,
  apiKey: config.meilisearch_master_key,
});
meiliClient;
