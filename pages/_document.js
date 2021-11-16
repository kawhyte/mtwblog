import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel='manifest' href='/manifest.json' />
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='true'
					/>
					<link
						rel='preload'
						as='style'
						href='https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap'
					/>
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap'
						media='print'
						onLoad="this.media='all'"
					/>
					<noscript>
						<link
							rel='stylesheet'
							href='https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap'
						/>
					</noscript>

					<link
						rel='preload'
						as='image'
						href='/_next/image?url=%2Fhero.webp&w=3840&q=75'
						imagesizes='100vw'
						imagesrcset='/_next/image?url=%2Fhero.webp&w=640&q=75 640w, /_next/image?url=%2Fhero.webp&w=750&q=75 750w, /_next/image?url=%2Fhero.webp&w=828&q=75 828w, /_next/image?url=%2Fhero.webp&w=1080&q=75 1080w, /_next/image?url=%2Fhero.webp&w=1200&q=75 1200w, /_next/image?url=%2Fhero.webp&w=1920&q=75 1920w, /_next/image?url=%2Fhero.webp&w=2048&q=75 2048w, /_next/image?url=%2Fhero.webp&w=3840&q=75 3840w'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
