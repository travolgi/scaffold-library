import Link from 'next/link'
import Image from 'next/image'


export default function Footer() {
	const yearDate = new Date().getFullYear();
	return (
		<footer>
			<div className="container grid">
				<Link href="/">
					<span className="sr-only">ProjetName</span>
					<Image
						src="/logo.svg"
						alt="ProjetName Logo"
						width={150}
						height={150}
						/>
				</Link>
			</div>

			<div className="container grid items-center">
				<small>&copy; ProjetName {yearDate}. | <a href="#" target="_blank" rel="noopener noreferrer">Privacy</a> | <Link href="/cookie">Cookie</Link>. Developed by <a href="https://travolgi.it" target="_blank" rel="noopener noreferrer">Travolgi</a>.</small>
			</div>
		</footer>
	);
}