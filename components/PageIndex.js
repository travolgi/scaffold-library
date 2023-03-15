import { urlFromString } from '@/helper/helperFunction'


export default function PageIndex({ contentSections }) {
	const handleOffset = e => {
		e.preventDefault();
		const targetId = e.currentTarget.hash.slice(1),
				target = document.getElementById(targetId);
		if (target) {
			const yOffset = -100;
			const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
			window.scrollTo({ top: y, behavior: 'smooth' });
		}
	};
	return (
		<div>
			<h2>Contents</h2>
			<ul className="list">
				{contentSections &&
					contentSections.map((section, idx) =>
					<li key={idx}>
						<a href={`#${urlFromString(section)}`} onClick={handleOffset}>{section}</a>
					</li>
				)}
			</ul>
		</div>
	)
}