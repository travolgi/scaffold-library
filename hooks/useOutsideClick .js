import { useEffect } from 'react'

const useOutsideClick = ({ val, ref, handler }) => {
	const handleClick = e => {
		if (val && ref.current && !ref.current.contains(e.target)) {
			handler();
		}
	};
	
	useEffect(() => {
		document.addEventListener('click', handleClick);
		return () => document.removeEventListener('click', handleClick)
	}, [val, ref, handler]);
}

export default useOutsideClick;

// This hook only works if you specify entry parameters:
// useOutsideClick({ val: isOpen, ref: navbarRef, handler: handleToggle });