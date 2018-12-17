import { dbURL, apiKey } from './contants'

const headers = new Headers()
headers.append('Content-type', 'application/json')

export const getCatalogsMetadata = async () => {
  return fetch(`${dbURL}/directory/collections/Dictionary?apiKey=${apiKey}`)
    .then(res => res.json())
}

export const getCatalogData = async (catalogName) => {
  return fetch(`${dbURL}/directory/collections/${catalogName}?apiKey=${apiKey}`)
  .then(res => res.json())
}
