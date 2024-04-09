import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((el) => (
        <li key={el.id}>
          <Link href={`/movies/${el.id}`}>{el.title}</Link>
        </li>
      ))}
    </div>
  );
}
