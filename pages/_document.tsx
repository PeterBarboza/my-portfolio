import type { NextPage } from "next"
import { Head, Html, Main, NextScript } from "next/document"

import { GA_TRACKING_ID } from "../utils/gtag"

const Document: NextPage = () => {
	return (
		<Html>
			<Head>
				<meta name="description" content="Generated by create next app" />

				{process.env.NODE_ENV === "production" ? (
					<>
						{/* Global Site Tag (gtag.js) - Google Analytics */}
						<script
							async
							src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
						/>
						<script
							dangerouslySetInnerHTML={{
								__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
							}}
						/>
					</>
				) : null}

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
					rel="st</link>ylesheet"
				/>

				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
