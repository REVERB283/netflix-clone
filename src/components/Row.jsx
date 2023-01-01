import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import { BANNER_BASEURL } from "../utils/requests";

function Row({ title, fetchUrl, isLargeRow = false }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetchMovies();
	}, [fetchUrl]);

	const fetchMovies = async () => {
		try {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		} catch (e) {
			console.warn(e);
		}
	};

	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">
				{movies.map(
					(movie) =>
						((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
							<img
								className={`row__poster ${isLargeRow && "row__poster--large"}`}
								key={movie.id}
								src={`${BANNER_BASEURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
								alt={movie.title}
							/>
						)
				)}
			</div>
		</div>
	);
}

export default Row;
