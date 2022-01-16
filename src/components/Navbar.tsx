import { Link } from 'react-router-dom'
import PokedexLogo from '../assets/pokedexlogo.png'

export const Navbar = () => {
	return (
		<div
			className='px-4 flex py-2 items-center sm:px-20 sm:py-3 lg:px-32'
			style={{ backgroundColor: '#ff2f2f' }}
		>
			<Link to='/'>
				<img src={PokedexLogo} alt='Logo' className='w-14 mr-3' />
			</Link>
			<Link to='/' className='text-white text-4xl font-medium'>
				React-Pokedex
			</Link>
		</div>
	)
}
