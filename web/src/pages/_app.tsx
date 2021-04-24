import { createClient, Provider } from 'urql';

import 'tailwindcss/tailwind.css'

const client = createClient({
  url: 'http://localhost:4000/graphql',
});

function MyApp({ Component, pageProps }: any) {
  return (<Provider value={client}><Component {...pageProps} /></Provider>)
}

export default MyApp
