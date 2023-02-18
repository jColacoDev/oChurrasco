import React, { useContext } from 'react'
import { 
    ApolloClient, 
    InMemoryCache, 
    split,
    HttpLink
  } from '@apollo/client';
  import { setContext } from '@apollo/client/link/context';
  import { getMainDefinition } from '@apollo/client/utilities';
  import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
  import { createClient } from 'graphql-ws';
  
export default function ApolloClientComponent() {


    const {contextState} = useContext(AuthContext);

    
  const wsLink = new GraphQLWsLink(createClient({
    url: import.meta.env.VITE_GRAPHQL_WS_ENDPOINT,
    options: {
      shouldRetry: true
    }
  }));
  const httpLink = new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_HTTP_ENDPOINT,
  });
  
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authtoken: contextState.user ? contextState.user.token : ''
      }
    }
  });
  const httpAuthLink = authLink.concat(httpLink);
  
  const splitLink = split(({query}) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  }, wsLink, httpAuthLink)   

  const apolloClient = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache({
      addTypename: false
    })
  });

  return apolloClient
}
