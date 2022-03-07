import React from 'react'
import AnimeCard from './AnimeCard';

function MainContent(props) {
	return (
		<main>
			<div className="anime-list">
				{props.animeList.map(anime => (
					<AnimeCard
						anime={anime}
						key={anime.mal_id} />
				))}
				
			</div>
		</main>
	)
}

export default MainContent
