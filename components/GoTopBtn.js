import useVisible from '@/hooks/useIsVisible';

export default function GoTopBtn() {
	const visible = useVisible(200);
	const handleGoTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

	return (
		<button className={visible ? 'gotop visible' : 'gotop'} onClick={handleGoTop}>
			<span className="sr-only">Torna su</span>
		</button>
	)
}