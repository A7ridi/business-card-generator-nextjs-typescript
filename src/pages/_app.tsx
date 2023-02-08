import { type AppType } from "next/dist/shared/lib/utils";
import { SessionProvider } from "next-auth/react";

import "../components/shared/BusinessCard/BusinessCard.css";
import "../styles/globals.css";
import Navbar from "../components/shared/Navbar";

const MyApp: AppType = ({
	Component,
	pageProps: { session, ...pageProps },
}) => {
	return (
		<SessionProvider session={session}>
			<Navbar />
			<Component {...pageProps} />
		</SessionProvider>
	);
};

export default MyApp;
