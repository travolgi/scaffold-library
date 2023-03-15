import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
	return (
		<>
			<Head>
				<title>CreateNextApp</title>
				<meta name="description" content="" />
				<meta name="keywords" content="" />
			</Head>
			
			<section>
				<Image
					src="/logo.svg"
					alt=""
					width={100}
					height={24}
					priority
				/>
			</section>
		</>
	)
}