import { Routes, Route } from 'react-router-dom'
import { Home } from './views/Home'
import { Navbar } from './components/Navbar'
import BackgroundImg from './assets/background.png'

export const App = () => {
	return (
		<div
			className='min-h-screen'
			style={{ backgroundImage: `url(${BackgroundImg})` }}
		>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	)
}
