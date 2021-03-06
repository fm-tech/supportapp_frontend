import '../styles/globals.css'
import {ApolloProvider} from '@apollo/client'

import client from '../utils/apollo-client'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return  <ApolloProvider client={client }>
      <section 
      data-theme='corporate'
        className='min-w-fit min-h-screen bg-zinc-50  mx-auto'>
        <NavBar />
        <div id='page' className='p-8'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </section>
    </ApolloProvider>
 
}

export default MyApp
