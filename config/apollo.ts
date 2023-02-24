import { graphqlEndpoint } from './cms';

const isProd = process.env.NETLIFY_ENV === 'production'


import { defineApolloClient } from '@nuxtjs/apollo'
export default defineApolloClient({
  httpEndpoint: graphqlEndpoint,
  httpLinkOptions: {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Include-Drafts': `${!isProd}`
    }
  },
  websocketsOnly: false,
  connectToDevTools: false,
  defaultOptions: {},
  inMemoryCacheOptions: {},
  tokenName: 'apollo:my-app.token',
  tokenStorage: 'cookie',
  authType: 'Bearer',
  authHeader: 'Authorization'
})
