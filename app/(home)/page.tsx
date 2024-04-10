import { Metadata } from "next";
import Link from "next/link";
import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";
import { API_URL } from "../constants";

export const metadata: Metadata = {
  title: "Home",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((el) => (
        <Movie
          key={el.id}
          id={el.id}
          title={el.title}
          poster_path={el.poster_path}
        />
      ))}
    </div>
  );
}
