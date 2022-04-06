import '../styles/globals.scss'
import 'antd/dist/antd.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <div  className='rootLayout'>
      <Layout>
        <Component {...pageProps} />
      </Layout>        
    </div>
  )
}

export default MyApp
