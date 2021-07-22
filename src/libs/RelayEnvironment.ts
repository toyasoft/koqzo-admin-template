
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { useMemo } from 'react'
import fetchGraphQL from './fetchGraphQL';

let relayEnvironment

async function fetchRelay(params, variables) {
  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);
  return fetchGraphQL(params.text, variables);
}

function createEnvironment() {
  return new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource()),
  });
}

export function initEnvironment(initialRecords) {
  const environment = relayEnvironment ?? createEnvironment()

  if (initialRecords) {
    environment.getStore().publish(new RecordSource(initialRecords))
  }
  if (typeof window === 'undefined') return environment
  if (!relayEnvironment) relayEnvironment = environment

  return relayEnvironment
}

export function useEnvironment(initialRecords) {
  const store = useMemo(() => initEnvironment(initialRecords), [initialRecords])
  return store
}