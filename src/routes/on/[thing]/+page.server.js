import { error } from '@sveltejs/kit'

/** @type { import('./$types').PageServerLoad } */
export async function load(req) {
  // {
  // cookies: {},
  // locals: {},
  // params: {
  //   thing: 'foo',
  // },
  // request: {},
  // route: {
  //   id: '/on/[thing]',
  // },
  // url: 'http://localhost:5173/on/foo',
  // isDataRequest: false,
  // }

  const { thing } = req.params

  if (req) {
    const session = await getSession(thing)
    return { session }
  }

  throw error(404, 'Not found')
}

/** @type {(thing: string) => Promise<string>} */
async function getSession(thing) {
  // this needs to get some socket information based on thing.
  // I guess thing would be the key used for ws handshake?
  // what about multiple clients? does it matter?

  return thing.toUpperCase()
}
