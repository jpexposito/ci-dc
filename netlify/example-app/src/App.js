import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					CI/CD Pipeline con Netlify for hosting, GitHub Actions con CI/CD, y cypress test
				</p>
				<a
					className="App-link"
					href="https://github.com/shakarr/ci-cd-integration-netlify"
					target="_blank"
					rel="noopener noreferrer">
					Codigo fuente
				</a>
			</header>
		</div>
	);
}

export default App;
