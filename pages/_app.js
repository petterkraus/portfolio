import '../styles/global.css'
import Layout from '../components/layout'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <ToastContainer />
        </>
    )
}