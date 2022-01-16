import { SearchBar } from '../components/SearchBar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { PokeBox } from '../components/PokeBox'

interface Poke {
	name: string
	url: string
}

export const Home = () => {
	const [data, setData] = useState('')
	const [allPokes, setAllPokes] = useState<Poke[]>([])

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

	const childToParent = (pokesearch: string) => {
		setData(pokesearch)
	}

	return (
		<>
			<SearchBar childToParent={childToParent} />
			<div className='grid grid-cols-2 sm:grid-cols-3 w-full max-w-4xl m-auto bg-white px-10'>
				{allPokes
					.filter((poke) => {
						return data.trim() !== '' ? poke.name.includes(data) : false
					})
					.map((poke, index) => {
						return <PokeBox name={poke.name} url={poke.url} key={poke.name} />
					})}
			</div>
		</>
	)
}
