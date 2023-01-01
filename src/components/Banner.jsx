import React, { useEffect, useState } from "react";
import "./Banner.css";
import { BANNER_BASEURL, REQUESTS } from "../utils/requests";
import axios from "../utils/axios";

function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		fetchBannerMovie();
	}, []);

	const fetchBannerMovie = async () => {
		const request = await axios.get(REQUESTS.fetchNetflixOriginals);
		setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
		return request;
	};

	const truncate = (str, n) => {
		const words = str.split(" ");
		return words.length > n ? words.slice(0, n).join(" ") + "..." : words.join(" ");
	};

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("${BANNER_BASEURL}/${movie?.backdrop_path}")`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">{movie?.name || movie?.original_name}</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">{movie?.overview && truncate(movie?.overview, 30)}</h1>
			</div>

			<div className="banner--fadeBottom" />
		</header>
	);
}

export default Banner;
