import { useState, useEffect } from 'react'

const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(0),
			resizeWindow = () => setWindowWidth(window.innerWidth);

	useEffect(() => {
		resizeWindow();
		window.addEventListener('resize', resizeWindow);
		return () => window.removeEventListener('resize', resizeWindow);
	}, []);

	return windowWidth;
}

export default useWindowWidth;