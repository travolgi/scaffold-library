import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="it">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/logo192.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
