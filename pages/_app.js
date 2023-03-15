import '@/style.css'
import Head from 'next/head'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}