import Head from "next/head";
import Button from "../components/button";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Recyclable Tablet Mode</title>
				<meta
					name="description"
					content="Tablet mode for the recyclable concept"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* This would be the first welcome page */}
			<main className="container w-5/6 mx-auto">
				{/* Should have conditional steps here depending on step number */}
				{/* Step 1 */}
				<section className="flex items-center h-90v">
					{/* Left intro section */}
					<section className="w-1/2">
						<h1 className="text-5xl leading-loose">
							Welcome to the
							<div className="text-5xl">
								recyc | <span className="font-bold">ABLE</span>
							</div>
							concept bin.
						</h1>
					</section>

					{/* Right section */}
					<section className="flex w-1/2 justify-center">
						<Button text="Start Disposing" />
					</section>
				</section>
			</main>
		</div>
	);
}
