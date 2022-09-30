import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Recyclable Tablet Mode</title>
				<meta
					name="description"
					content="Tablet mode for the recyclable concept"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container">
				<h1 className="text-5xl text-red-500 font-extrabold">Hello world</h1>
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
}
