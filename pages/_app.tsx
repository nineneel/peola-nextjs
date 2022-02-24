import "../styles/styles.css";
import "../styles/balance-style.css";
import "../styles/income.css";
import "../styles/outcome.css";
import "../styles/link.css";
import "../styles/notes.css";

import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                {/* <!--========== Unicons ==========--> */}
                <link
                    rel="stylesheet"
                    href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
                />

                {/* <!--========== BOOTSTRAP 5 ==========--> */}
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                />
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
