import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Snowfall from 'react-snowfall'
import Opening from './components/Opening'
import Event from './components/Event'
import Story from './components/Story'
import Footer from './components/Footer'
import Head from './components/Head'
import Gallery from './components/Gallery'
import Wishes from './components/Wishes'

function App() {
  return (
    <>
		<div className="fh5co-loader"></div>
		<Snowfall
			color="#00bcd4"
			snowflakeCount={100}
			style={{
				position: 'fixed',
				width: '100vw',
				height: '100vh',
				zIndex : '100'
			}}
		/>
		<div id="page">
			<Head />
			<Opening />      
			<Event />
			<Story />
			<Gallery />
			<Wishes />
			<Footer />
		</div>

		<div className="gototop js-top">
			<a href="#" className="js-gotop"><i className="icon-arrow-up"></i></a>
		</div>
    </>
  );
}

export default App;
