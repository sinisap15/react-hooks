import React, { useState, useEffect } from 'react';

const App = () => {
	const [count, setCount] = useState(0);

	// Instead of componentDidMount and componentDidUpdate:
	useEffect(() => {
		document.title = `Clicked ${count} times`;
	})

	const increment = () => {
		setCount(count + 1);
	}

	return (
		<div>
			<h2>Counter app</h2>
			<button onClick={increment}>
				Clicked {count} times
			</button>
		</div>
	)
}

export default App;
