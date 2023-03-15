import { useRouter } from 'next/router'
import { useRef, useEffect } from 'react'
import useIsOpen from '@/hooks/useIsOpen'
import Link from 'next/link'
import Image from 'next/image'


function ActiveLink({ href, isBtn=false, children, handleToggle }) {
	const router = useRouter();
	const isActive = router.pathname === href;

	return (
		<Link href={href} className={isActive ? (isBtn ? 'btn active' : 'active') : (isBtn ? 'btn' : '')} onClick={handleToggle}>
			{children}
		</Link>
	)
}


export default function Header() {
	const navbarRef = useRef();
	const [isOpen, handleToggle] = useIsOpen();

	useEffect(() => {
		const handleClick = e => {
			if (isOpen && navbarRef.current && !navbarRef.current.contains(e.target)) {
				handleToggle();
			}
		};
		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick)
	}, [isOpen, handleToggle]);

	return (
		<header>
			<Link href="/">
				<span className="sr-only">ProjetName</span>
				<Image
					src="/logo.svg"
					alt="ProjetName logo"
					width={100}
					height={100}
					priority
				/>
			</Link>

			<button
				className="nav-toggle"
				aria-controls={navbarRef.current?.id}
				aria-expanded={isOpen}
				onClick={handleToggle}
			>
				<div className="bar1" />
				<div className="bar2" />
				<div className="bar3" />
				<span className="sr-only">Menu</span>
			</button>

			<nav id="navbar" ref={navbarRef} data-visible={isOpen}>
				<ul>
					<li><ActiveLink href="/" handleToggle={handleToggle}>Home</ActiveLink></li>
					<li><ActiveLink href="/chi-siamo" handleToggle={handleToggle}>Chi Siamo</ActiveLink></li>
					<li><ActiveLink href="/servizi" handleToggle={handleToggle}>Servizi</ActiveLink></li>
					<li><ActiveLink href="/contatti" isBtn handleToggle={handleToggle}>Contatti</ActiveLink></li>
				</ul>
			</nav>
		</header>
	)
}