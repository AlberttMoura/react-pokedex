import { SearchBar } from '../components/SearchBar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { PokeBox } from '../components/PokeBox'
import { FilterBar } from '../components/FilterBar'

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

export const Home = () => {
	const [data, setData] = useState('')
	const [allPokes, setAllPokes] = useState<Poke[]>([])
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
		axios
			.get('https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0')
			.then((res) => {
				setAllPokes(res.data.results)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	const childSearchToParent = (pokesearch: string): void => {
		setData(pokesearch)
	}

	const childFilterToParent = (childFilters: Filter): void => {
		setFilters(childFilters)
	}
	return (
		<>
			<SearchBar childSearchToParent={childSearchToParent} />
			<FilterBar childFilterToParent={childFilterToParent} />
			<div className='grid grid-cols-2 md:grid-cols-3 w-full max-w-4xl m-auto bg-white px-0 sm:px-4 md:px-10'>
				{allPokes
					.filter((poke) => {
						return data.trim() !== '' ? poke.name.includes(data) : false
					})
					.map((poke, index) => {
						return (
							<PokeBox
								name={poke.name}
								url={poke.url}
								filters={filters}
								key={poke.name}
							/>
						)
					})}
			</div>
		</>
	)
}
