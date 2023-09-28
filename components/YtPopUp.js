import useIsOpen from '@/hooks/useIsOpen'


export default function YtPopUp({ url }) {
	const [isOpen, handleIsOpen] = useIsOpen();

	const handlePopupClick = e => {
		if (e.target === e.currentTarget) {
			const iframe = document.querySelector('.yt-popup iframe');
			iframe.src = iframe.src;
			handleIsOpen();
		}
	}

	return (
		<>
			<button className="btn" onClick={handleIsOpen}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
				Vai al video
			</button>
		
			<div className={`yt-popup ${isOpen ? 'active' : ''}`} onClick={handlePopupClick}>
				<div className="yt-popup-content">
					<span className="close-yt-popup" onClick={handleIsOpen}>&times;</span>
					<iframe src={url} allowFullScreen />
				</div>
			</div>
		</>
	);
}