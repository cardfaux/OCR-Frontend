// import React, { useEffect, useState } from 'react';
// import { createWorker } from 'tesseract.js';
// import './index.css';
import React from 'react';
import {
	Route,
	BrowserRouter as Router,
	Switch,
	Redirect
} from 'react-router-dom';

import UploadPage from './pages/UploadPage/UploadPage';
import HomePage from './pages/HomePage/HomePage';
import MainNavigation from './shared/Navigation/MainNavigation';

import { Main, GlobalStyle } from './App.styles';

const App = () => {
	let Routes;

	Routes = (
		<Switch>
			<Route path='/' exact component={HomePage} />
			<Route path='/buyer' exact component={UploadPage} />
			<Redirect to='/' />
		</Switch>
	);

	return (
		<Router>
			<MainNavigation />
			<Main>{Routes}</Main>
			<GlobalStyle />
		</Router>
	);
};

export default App;
// function App() {
// 	const worker = createWorker({
// 		logger: (m) => console.log(m)
// 	});
// 	const doOCR = async () => {
// 		await worker.load();
// 		await worker.loadLanguage('eng');
// 		await worker.initialize('eng');
// 		const {
// 			data: { text }
// 		} = await worker.recognize(
// 			'https://tesseract.projectnaptha.com/img/eng_bw.png'
// 		);
// 		setOcr(text);
// 	};
// 	const [ocr, setOcr] = useState('Recognizing...');
// 	useEffect(() => {
// 		doOCR();
// 	});
// 	return (
// 		<div className='App'>
// 			<p>{ocr}</p>
// 		</div>
// 	);
// }

// export default App;
