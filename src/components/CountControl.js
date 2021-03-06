import './CountControlStyles.scss';

function CountControl({ decrementor, incrementor, children }) {
	const updateCount = e => {
		e.preventDefault?.();

		e.target.textContent === '+'
			? incrementor()
			: children > 1 && decrementor();
	};

	const disabledStyles = {
		pointerEvents: 'none',
		opacity: 0.5,
	};

	return (
		<div className="count-control">
			<button className="add" onClick={updateCount}>
				+
			</button>
			<p className="count-display">{children}</p>
			<button
				className="subtract"
				onClick={updateCount}
				style={+children === 1 ? disabledStyles : {}}
			>
				-
			</button>
		</div>
	);
}

export default CountControl;
