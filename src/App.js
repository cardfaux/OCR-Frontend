// import React, { useEffect, useState } from 'react';
// import { createWorker } from 'tesseract.js';
// import './index.css';
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Upload from './Upload';
import MainNavigation from './shared/Navigation/MainNavigation';

import { Main } from './App.styles';

const App = () => {
	return (
		<BrowserRouter>
			<MainNavigation />
			<Switch>
				<Main>
					<Route path='/' exact component={Upload} />
				</Main>
			</Switch>
		</BrowserRouter>
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
