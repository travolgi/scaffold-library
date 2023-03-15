import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoTopBtn from '@/components/GoTopBtn'

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main>
				{children}
			</main>
			<Footer />
			<GoTopBtn />
		</>
	)
}