import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";;
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
        };
        getMovie();
    }, [id]);

    return (
        <div>
            {loading ? <h1>Loading...</h1> : <div>{
                <div>
                    <h1>{movie.title}</h1>
                    <img src={movie.large_cover_image} alt={movie} />
                    <div>Rating : {movie.rating}</div>
                    <div>Genres :
                        <ul>
                            {movie.genres.map((g) => <li key={g}>{g}</li>)}
                        </ul>
                    </div>
                    <div>Year : {movie.year}</div>
                </div>
            }
            </div>
            }
        </div>
    );
}

export default Detail;