import { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import {Link } from 'react-router-dom';

function App() {
	const [animeList, SetAnimeList] = useState([]);

	const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/favorite`)
			.then(res => res.json());

		SetAnimeList(temp.top.slice(0, 15));
	}

	

	useEffect(() => {
		GetTopAnime();
	}, []);
	
	return (
		<div className="App">
			<Header />
			<div className="content-wrap">

				<MainContent
					animeList={animeList} />

				
			</div>
		</div>
	);
}

export default App;
