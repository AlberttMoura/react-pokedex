import { SearchBar } from '../components/SearchBar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { PokeBox } from '../components/PokeBox'
import { FilterBar } from '../components/FilterBar'
import { Footer } from '../components/Footer'

interface Poke {
	name: string
	url: string
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

const defaultFilter = {
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
}

interface Pokemon {
	id: number
	name: string
	types: [
		{
			type: {
				name: string
			}
		},
		{
			type: {
				name: string
			}
		}
	]
	sprites: {
		front_default: string
	}
}

const INDEXJUMP = 12

export const Home = () => {
	const [allPokes, setAllPokes] = useState<Poke[]>([])
	const [filters, setFilters] = useState<Filter>(defaultFilter)
	const [pokesInfo, setPokesInfo] = useState<Pokemon[]>([])
	const [pokeIndex, setPokeIndex] = useState(INDEXJUMP)

	useEffect(() => {
		axios
			.get('https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0')
			.then((res) => {
				setAllPokes(res.data.results)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	const checkFilters = (pokeInfo: Pokemon) => {
		return filters.intersection
			? filters.bug &&
			  pokeInfo?.types[0]?.type.name !== 'bug' &&
			  pokeInfo?.types[1]?.type.name !== 'bug'
				? false
				: filters.dark &&
				  pokeInfo?.types[0]?.type.name !== 'dark' &&
				  pokeInfo?.types[1]?.type.name !== 'dark'
				? false
				: filters.dragon &&
				  pokeInfo?.types[0]?.type.name !== 'dragon' &&
				  pokeInfo?.types[1]?.type.name !== 'dragon'
				? false
				: filters.electric &&
				  pokeInfo?.types[0]?.type.name !== 'electric' &&
				  pokeInfo?.types[1]?.type.name !== 'electric'
				? false
				: filters.fairy &&
				  pokeInfo?.types[0]?.type.name !== 'fairy' &&
				  pokeInfo?.types[1]?.type.name !== 'fairy'
				? false
				: filters.fighting &&
				  pokeInfo?.types[0]?.type.name !== 'fighting' &&
				  pokeInfo?.types[1]?.type.name !== 'fighting'
				? false
				: filters.fighting &&
				  pokeInfo?.types[0]?.type.name !== 'fighting' &&
				  pokeInfo?.types[1]?.type.name !== 'fighting'
				? false
				: filters.fire &&
				  pokeInfo?.types[0]?.type.name !== 'fire' &&
				  pokeInfo?.types[1]?.type.name !== 'fire'
				? false
				: filters.flying &&
				  pokeInfo?.types[0]?.type.name !== 'flying' &&
				  pokeInfo?.types[1]?.type.name !== 'flying'
				? false
				: filters.ghost &&
				  pokeInfo?.types[0]?.type.name !== 'ghost' &&
				  pokeInfo?.types[1]?.type.name !== 'ghost'
				? false
				: filters.grass &&
				  pokeInfo?.types[0]?.type.name !== 'grass' &&
				  pokeInfo?.types[1]?.type.name !== 'grass'
				? false
				: filters.ground &&
				  pokeInfo?.types[0]?.type.name !== 'ground' &&
				  pokeInfo?.types[1]?.type.name !== 'ground'
				? false
				: filters.ice &&
				  pokeInfo?.types[0]?.type.name !== 'ice' &&
				  pokeInfo?.types[1]?.type.name !== 'ice'
				? false
				: filters.normal &&
				  pokeInfo?.types[0]?.type.name !== 'normal' &&
				  pokeInfo?.types[1]?.type.name !== 'normal'
				? false
				: filters.poison &&
				  pokeInfo?.types[0]?.type.name !== 'poison' &&
				  pokeInfo?.types[1]?.type.name !== 'poison'
				? false
				: filters.psychic &&
				  pokeInfo?.types[0]?.type.name !== 'psychic' &&
				  pokeInfo?.types[1]?.type.name !== 'psychic'
				? false
				: filters.rock &&
				  pokeInfo?.types[0]?.type.name !== 'rock' &&
				  pokeInfo?.types[1]?.type.name !== 'rock'
				? false
				: filters.steel &&
				  pokeInfo?.types[0]?.type.name !== 'steel' &&
				  pokeInfo?.types[1]?.type.name !== 'steel'
				? false
				: filters.water &&
				  pokeInfo?.types[0]?.type.name !== 'water' &&
				  pokeInfo?.types[1]?.type.name !== 'water'
				? false
				: true
			: filters.bug &&
			  (pokeInfo?.types[0]?.type.name === 'bug' ||
					pokeInfo?.types[1]?.type.name === 'bug')
			? true
			: filters.dark &&
			  (pokeInfo?.types[0]?.type.name === 'dark' ||
					pokeInfo?.types[1]?.type.name === 'dark')
			? true
			: filters.dragon &&
			  (pokeInfo?.types[0]?.type.name === 'dragon' ||
					pokeInfo?.types[1]?.type.name === 'dragon')
			? true
			: filters.electric &&
			  (pokeInfo?.types[0]?.type.name === 'electric' ||
					pokeInfo?.types[1]?.type.name === 'electric')
			? true
			: filters.fairy &&
			  (pokeInfo?.types[0]?.type.name === 'fairy' ||
					pokeInfo?.types[1]?.type.name === 'fairy')
			? true
			: filters.fighting &&
			  (pokeInfo?.types[0]?.type.name === 'fighting' ||
					pokeInfo?.types[1]?.type.name === 'fighting')
			? true
			: filters.fighting &&
			  (pokeInfo?.types[0]?.type.name === 'fighting' ||
					pokeInfo?.types[1]?.type.name === 'fighting')
			? true
			: filters.fire &&
			  (pokeInfo?.types[0]?.type.name === 'fire' ||
					pokeInfo?.types[1]?.type.name === 'fire')
			? true
			: filters.flying &&
			  (pokeInfo?.types[0]?.type.name === 'flying' ||
					pokeInfo?.types[1]?.type.name === 'flying')
			? true
			: filters.ghost &&
			  (pokeInfo?.types[0]?.type.name === 'ghost' ||
					pokeInfo?.types[1]?.type.name === 'ghost')
			? true
			: filters.grass &&
			  (pokeInfo?.types[0]?.type.name === 'grass' ||
					pokeInfo?.types[1]?.type.name === 'grass')
			? true
			: filters.ground &&
			  (pokeInfo?.types[0]?.type.name === 'ground' ||
					pokeInfo?.types[1]?.type.name === 'ground')
			? true
			: filters.ice &&
			  (pokeInfo?.types[0]?.type.name === 'ice' ||
					pokeInfo?.types[1]?.type.name === 'ice')
			? true
			: filters.normal &&
			  (pokeInfo?.types[0]?.type.name === 'normal' ||
					pokeInfo?.types[1]?.type.name === 'normal')
			? true
			: filters.poison &&
			  (pokeInfo?.types[0]?.type.name === 'poison' ||
					pokeInfo?.types[1]?.type.name === 'poison')
			? true
			: filters.psychic &&
			  (pokeInfo?.types[0]?.type.name === 'psychic' ||
					pokeInfo?.types[1]?.type.name === 'psychic')
			? true
			: filters.rock &&
			  (pokeInfo?.types[0]?.type.name === 'rock' ||
					pokeInfo?.types[1]?.type.name === 'rock')
			? true
			: filters.steel &&
			  (pokeInfo?.types[0]?.type.name === 'steel' ||
					pokeInfo?.types[1]?.type.name === 'steel')
			? true
			: filters.water &&
			  (pokeInfo?.types[0]?.type.name === 'water' ||
					pokeInfo?.types[1]?.type.name === 'water')
			? true
			: !filters.bug &&
			  !filters.dark &&
			  !filters.dragon &&
			  !filters.electric &&
			  !filters.fairy &&
			  !filters.fighting &&
			  !filters.fire &&
			  !filters.flying &&
			  !filters.ghost &&
			  !filters.grass &&
			  !filters.ground &&
			  !filters.ice &&
			  !filters.normal &&
			  !filters.poison &&
			  !filters.psychic &&
			  !filters.rock &&
			  !filters.steel &&
			  !filters.water
			? true
			: false
	}

	const childSearchToParent = (pokesearch: string) => {
		setPokesInfo([])
		setPokeIndex(INDEXJUMP)
		const namesPokes = allPokes.filter((poke) => {
			return poke.name.includes(pokesearch)
		})
		loadPokes(namesPokes)
	}

	const loadPokes = (pokes: Poke[]) => {
		pokes.map(async (poke) => {
			const res = await axios.get(poke.url)
			if (checkFilters(res.data)) {
				setPokesInfo((pokesInfo) => [...pokesInfo, res.data])
			}
		})
		setPokesInfo((pokesInfo) =>
			pokesInfo.sort((a, b) => (a.id > b.id ? 1 : -1))
		)
	}

	const childFilterToParent = (childFilters: Filter): void => {
		setFilters(childFilters)
	}
	return (
		<div className='grid grid-cols-1 min-h-screen'>
			<SearchBar childSearchToParent={childSearchToParent} />
			<FilterBar childFilterToParent={childFilterToParent} />
			<div className='bg-white m-auto w-full max-w-4xl py-5 h-full' style={{height: 100}}>
				<div className='grid grid-cols-2 md:grid-cols-3 w-full m-auto px-0 sm:px-4 md:px-10'>
					{pokesInfo
						.sort((a, b) => (a.id > b.id ? 1 : -1))
						.map((poke, index) => {
							return index < pokeIndex ? (
								<PokeBox key={poke.id} pokeInfo={poke} />
							) : (
								''
							)
						})}
				</div>
				{pokesInfo.length > pokeIndex ? (
					<div className='flex mt-8'>
						<input
							type='button'
							value='More'
							onClick={() => {
								setPokeIndex((pokeIndex) => pokeIndex + INDEXJUMP)
							}}
							className='m-auto focus cursor-pointer bg-green-600 text-2xl text-white font-semibold px-4 py-1 rounded'
						/>
					</div>
				) : (
					''
				)}
			</div>
			<Footer />
		</div>
	)
}
