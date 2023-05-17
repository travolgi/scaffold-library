import AnimateIn from './AnimateIn';

const FadeIn = ({ children }) => (
	<AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }}>
		{children}
	</AnimateIn>
);

const FadeUp = ({ children }) => (
	<AnimateIn
		from={{ opacity: 0, translate: '0 6rem' }}
		to={{ opacity: 1, translate: 'none' }}
	>
		{children}
	</AnimateIn>
);

const FadeDown = ({ children }) => (
	<AnimateIn
		from={{ opacity: 0, translate: '0 -6rem' }}
		to={{ opacity: 1, translate: 'none' }}
	>
		{children}
	</AnimateIn>
);

const FadeRight = ({ children }) => (
	<AnimateIn
		from={{ opacity: 0, translate: '-6rem 0' }}
		to={{ opacity: 1, translate: 'none' }}
	>
		{children}
	</AnimateIn>
);

const FadeLeft = ({ children }) => (
	<AnimateIn
		from={{ opacity: 0, translate: '6rem 0' }}
		to={{ opacity: 1, translate: 'none' }}
	>
		{children}
	</AnimateIn>
);

const ScaleIn = ({ children }) => (
	<AnimateIn from={{ scale: '0' }} to={{ scale: '1' }}>
		{children}
	</AnimateIn>
);

const ScaleOut = ({ children }) => (
	<AnimateIn
		from={{ opacity: 0, scale: '2' }}
		to={{ opacity: 1, scale: '1' }}
	>
		{children}
	</AnimateIn>
);


export const Animate = {
	FadeIn,
	FadeUp,
	FadeRight,
	FadeLeft,
	FadeDown,
	ScaleIn,
	ScaleOut
};