import { useRef } from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";

export default function AnimateIn({ from, to, children }) {
	const ref = useRef(null);
	const onScreen = useElementOnScreen(ref);
	const defaultStyles = { transition: '1s ease-in-out', transitionDelay: '.5s' };
	
	return (
		<div ref={ref}
			style={
				onScreen ?
					{ ...defaultStyles, ...to } :
					{ ...defaultStyles, ...from }
			}>
			{children}
		</div>
	);
};