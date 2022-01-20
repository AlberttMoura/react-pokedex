import linkedinIcon from '../assets/linkedinicon.png'
import githubIcon from '../assets/githubicon.png'

export const Footer = () => {
	return (
		<div className='bottom-0 grid justify-evenly bg-gray-800 sm:flex text-white text-center grid-cols-1 sm:grid-cols-3 gap-x-5 w-full py-5'>
			<div className=''>
				<p className='text-2xl font-semibold'>Pokedex in React</p>
				<p>
					Pokedex developed for learning purposes using React, Tailwind and
					Pokeapi.co
				</p>
			</div>
			<div>
				<p className='text-2xl font-semibold'>Developers</p>
				<p>Alberto Moura</p>
			</div>
			<div>
				<p className='text-2xl font-semibold'>Contact</p>
				<div className='flex justify-center'>
					<a
						href='https://www.linkedin.com/in/alberto-moura-17a825192/'
						className='mx-2'
					>
						<img src={linkedinIcon} alt='' className='w-10' />
					</a>
					<a href='https://github.com/AlberttMoura' className='mx-2'>
						<img src={githubIcon} alt='' className='w-10' />
					</a>
				</div>
			</div>
		</div>
	)
}
