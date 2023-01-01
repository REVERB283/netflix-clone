import React from "react";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Row from "../components/Row";
import "./HomeScreen.css";
import { REQUESTS } from "../utils/requests";

function HomeScreen() {
	return (
		<div className="homescreen">
			<Nav />
			<Banner />
			<Row title="Netflix Originals" fetchUrl={REQUESTS.fetchNetflixOriginals} isLargeRow={true} />
			<Row title="Trending Now" fetchUrl={REQUESTS.fetchTrending} />
			<Row title="Top Rated" fetchUrl={REQUESTS.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={REQUESTS.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={REQUESTS.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={REQUESTS.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={REQUESTS.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={REQUESTS.fetchDocumentaries} />
		</div>
	);
}

export default HomeScreen;
