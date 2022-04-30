import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "./detail.module.css";
// import { useCallback } from "react";

function Detail() {
    const { id } = useParams(); // url에 사용한 변수의 값을 반환하는 함수
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);

    // const getMovie = useCallback(async () => { //useCallback 하지 않을 시 의존성 에러
    //     const json = await (
    //         await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    //     ).json();
    //     setMovie(json.data.movie);
    //     setLoading(false); // 로딩을 하지 않으면 데이터를 가져오지 못해서 에러 발생
    // }, [id])

    useEffect(() => {
        const getMovie = async () => {
            const json = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setMovie(json.data.movie);
            setLoading(false); // 로딩을 하지 않으면 데이터를 가져오지 못해서 에러 발생
            console.log(json.data.movie);
        };
        getMovie();
    }, [id]);

    return (
        <div>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : <div className={styles.detail}>{
                <div>
                    <img className={styles.detail__img} src={movie.medium_cover_image} alt={movie} />
                    <div className={styles.detail__info}>
                        <h3>{movie.title_long}</h3>
                        <div>
                            <img className={styles.detail__imdb} src={`${process.env.PUBLIC_URL}/img/IMDB.png`} alt="imdb" />
                            {movie.rating}
                        </div>
                        <ul className={styles.detail__genres}>
                            {movie.genres.map((g) => <li key={g}>{g}</li>)}
                        </ul>
                    </div>

                </div>
            }
            </div>
            }
        </div>
    );
}

export default Detail;