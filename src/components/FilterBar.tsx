import { useState, useEffect } from 'react'

interface FilterBarProps {
	childFilterToParent: Function
}

interface Filter {
	bug: boolean
	dark: boolean
	dragon: boolean
	electric: boolean
	fairy: boolean
	fighting: boolean
	fire: boolean
	flying: boolean
	ghost: boolean
	grass: boolean
	ground: boolean
	ice: boolean
	normal: boolean
	poison: boolean
	psychic: boolean
	rock: boolean
	steel: boolean
	water: boolean
	intersection: boolean
}

export const FilterBar = (props: FilterBarProps) => {
	const [filters, setFilters] = useState<Filter>({
		bug: false,
		dark: false,
		dragon: false,
		electric: false,
		fairy: false,
		fighting: false,
		fire: false,
		flying: false,
		ghost: false,
		grass: false,
		ground: false,
		ice: false,
		normal: false,
		poison: false,
		psychic: false,
		rock: false,
		steel: false,
		water: false,
		intersection: false,
	})

	useEffect(() => {
		props.childFilterToParent(filters)
	}, [filters, props])

	return (
		<div className='w-full bg-gray-600 py-2'>
			<div className='grid grid-cols-3 w-full max-w-sm md:max-w-2xl lg:max-w-4xl m-auto gap-x-12 gap-y-2 md:grid-cols-4 md:gap-x-3 lg:grid-cols-6 lg:gap-x-8'>
				<div
					onClick={() => setFilters({ ...filters, bug: !filters.bug })}
					className='flex items-center cursor-pointer w-max'
				>
					<input
						name='bugcheckbox'
						type='checkbox'
						checked={filters.bug}
						onChange={() => setFilters({ ...filters, bug: !filters.bug })}
						className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
					/>
					<p className='text-white font-mono font-medium text-2xl'>Bug</p>
				</div>
				<div
					onClick={() => setFilters({ ...filters, dark: !filters.dark })}
					className='flex items-center cursor-pointer w-max'
				>
					<input
						name='darkcheckbox'
						type='checkbox'
						checked={filters.dark}
						onChange={() => setFilters({ ...filters, dark: !filters.dark })}
						className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
					/>
					<p className='text-white font-mono font-medium text-2xl'>Dark</p>
				</div>
				<div
					onClick={() => setFilters({ ...filters, dragon: !filters.dragon })}
					className='flex items-center cursor-pointer w-max'
				>
					<input
						name='dragoncheckbox'
						type='checkbox'
						checked={filters.dragon}
						onChange={() => setFilters({ ...filters, dragon: !filters.dragon })}
						className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
					/>
					<p className='text-white font-mono font-medium text-2xl'>Dragon</p>
				</div>
				<div
					onClick={() =>
						setFilters({ ...filters, electric: !filters.electric })
					}
					className='flex items-center cursor-pointer w-max'
				>
					<input
						name='electriccheckbox'
						type='checkbox'
						checked={filters.electric}
						onChange={() =>
							setFilters({ ...filters, electric: !filters.electric })
						}
						className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
					/>
					<p className='text-white font-mono font-medium text-2xl'>Electric</p>
				</div>
				<div
					onClick={() => setFilters({ ...filters, fairy: !filters.fairy })}
					className='flex items-center cursor-pointer w-max'
				>
					<input
						name='fairycheckbox'
						type='checkbox'
						checked={filters.fairy}
						onChange={() => setFilters({ ...filters, fairy: !filters.fairy })}
						className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
					/>
					<p className='text-white font-mono font-medium text-2xl'>Fairy</p>
				</div>
				<div
					onClick={() =>
						setFilters({ ...filters, fighting: !filters.fighting })
					}
					className='flex items-center cursor-pointer w-max'
				>
					<input
						name='fightingcheckbox'
						type='checkbox'
						checked={filters.fighting}
						onChange={() =>
							setFilters({ ...filters, fighting: !filters.fighting })
						}
						className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
					/>
					<p className='text-white font-mono font-medium text-2xl'>Fighting</p>
				</div>
				<div
					onClick={() => setFilters({ ...filters, fire: !filters.fire })}
					className='flex items-center cursor-pointer w-max'
				>
					<input
						name='firecheckbox'
						type='checkbox'
						checked={filters.fire}
						onChange={() => setFilters({ ...filters, fire: !filters.fire })}
						className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
					/>
					<p className='text-white font-mono font-medium text-2xl'>Fire</p>
				</div>
				<div
					onClick={() => setFilters({ ...filters, flying: !filters.flying })}
					className='flex items-center cursor-pointer w-max'
				>
					<input
						name='flyingcheckbox'
						type='checkbox'
						checked={filters.flying}
						onChange={() => setFilters({ ...filters, flying: !filters.flying })}
						className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
					/>
					<p className='text-white font-mono font-medium text-2xl'>Flying</p>
				</div>
				<div
					onClick={() => setFilters({ ...filters, ghost: !filters.ghost })}
					className='flex items-center cursor-pointer w-max'
				>
					<input
						name='ghostcheckbox'
						type='checkbox'
						checked={filters.ghost}
						onChange={() => setFilters({ ...filters, ghost: !filters.ghost })}
						className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
					/>
					<p className='text-white font-mono font-medium text-2xl'>Ghost</p>
				</div>
				<div
					onClick={() => setFilters({ ...filters, grass: !filters.grass })}
					className='flex items-center cursor-pointer w-max'
				>
					<input
						name='grasscheckbox'
						type='checkbox'
						checked={filters.grass}
						onChange={() => setFilters({ ...filters, grass: !filters.grass })}
						className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
					/>
					<p className='text-white font-mono font-medium text-2xl'>Grass</p>
				</div>
				<div
					onClick={() => setFilters({ ...filters, ground: !filters.ground })}
					className='flex items-center cursor-pointer w-max'
				>
					<input
						name='groundcheckbox'
						type='checkbox'
						checked={filters.ground}
						onChange={() => setFilters({ ...filters, ground: !filters.ground })}
						className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
					/>
					<p className='text-white font-mono font-medium text-2xl'>Ground</p>
				</div>
				<div
					onClick={() => setFilters({ ...filters, ice: !filters.ice })}
					className='flex items-center cursor-pointer w-max'
				>
					<input
						name='icecheckbox'
						type='checkbox'
						checked={filters.ice}
						onChange={() => setFilters({ ...filters, ice: !filters.ice })}
						className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
					/>
					<p className='text-white font-mono font-medium text-2xl'>Ice</p>
				</div>
				<div
					onClick={() => setFilters({ ...filters, normal: !filters.normal })}
					className='flex items-center cursor-pointer w-max'
				>
					<input
						name='normalcheckbox'
						type='checkbox'
						checked={filters.normal}
						onChange={() => setFilters({ ...filters, normal: !filters.normal })}
						className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
					/>
					<p className='text-white font-mono font-medium text-2xl'>Normal</p>
				</div>
				<div
					onClick={() => setFilters({ ...filters, poison: !filters.poison })}
					className='flex items-center cursor-pointer w-max'
				>
					<input
						name='poisoncheckbox'
						type='checkbox'
						checked={filters.poison}
						onChange={() => setFilters({ ...filters, poison: !filters.poison })}
						className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
					/>
					<p className='text-white font-mono font-medium text-2xl'>Poison</p>
				</div>
				<div
					onClick={() => setFilters({ ...filters, psychic: !filters.psychic })}
					className='flex items-center cursor-pointer w-max'
				>
					<input
						name='psychiccheckbox'
						type='checkbox'
						checked={filters.psychic}
						onChange={() =>
							setFilters({ ...filters, psychic: !filters.psychic })
						}
						className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
					/>
					<p className='text-white font-mono font-medium text-2xl'>Psychic</p>
				</div>
				<div
					onClick={() => setFilters({ ...filters, rock: !filters.rock })}
					className='flex items-center cursor-pointer w-max'
				>
					<input
						name='rockcheckbox'
						type='checkbox'
						checked={filters.rock}
						onChange={() => setFilters({ ...filters, rock: !filters.rock })}
						className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
					/>
					<p className='text-white font-mono font-medium text-2xl'>Rock</p>
				</div>
				<div
					onClick={() => setFilters({ ...filters, steel: !filters.steel })}
					className='flex items-center cursor-pointer w-max'
				>
					<input
						name='steelcheckbox'
						type='checkbox'
						checked={filters.steel}
						onChange={() => setFilters({ ...filters, steel: !filters.steel })}
						className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
					/>
					<p className='text-white font-mono font-medium text-2xl'>Steel</p>
				</div>
				<div
					onClick={() => setFilters({ ...filters, water: !filters.water })}
					className='flex items-center cursor-pointer w-max'
				>
					<input
						name='watercheckbox'
						type='checkbox'
						checked={filters.water}
						onChange={() => setFilters({ ...filters, water: !filters.water })}
						className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
					/>
					<p className='text-white font-mono font-medium text-2xl'>Water</p>
				</div>
			</div>
			<div
				onClick={() =>
					setFilters({ ...filters, intersection: !filters.intersection })
				}
				className='mt-4 mb-1 flex items-center cursor-pointer w-max m-auto bg-gray-800 px-3 py-1 rounded-full'
			>
				<input
					name='intersectioncheckbox'
					type='checkbox'
					checked={filters.intersection}
					onChange={() =>
						setFilters({ ...filters, intersection: !filters.intersection })
					}
					className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
				/>
				<p className='text-white font-mono font-medium text-2xl'>
					Intersection of Types
				</p>
			</div>
		</div>
	)
}
