function App() {
	const width = useWindowWidth();
	const height = useWindowHeight();
	return (
		<>
			<header>
				<h1>Responsive App</h1>
			</header>
			<main>
				<p>Window width is {width}</p>
				<p>Window height is {height}</p>
			</main>
			<footer>Made with ❤️ by Daniel Romero</footer>
		</>
	);
}
ReactDOM.render(<App />, document.getElementById('root'));
