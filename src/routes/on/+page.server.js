/** @type { import('./$types').PageServerLoad } */
export function load({ params }) {
  // {
  // route: {
  //   id: '/on',
  // },
  // params: {},
  // data: null,
  // url: 'http://localhost:5173/on?t=breathing',
  // }
  return params
  // return { foo: JSON.stringify(req) }
}
