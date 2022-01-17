import { useState, useEffect } from 'react'
import axios from 'axios'

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

interface PokeBoxProps {
	name: string
	url: string
	filters: Filter
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

export const PokeBox = (props: PokeBoxProps) => {
	const [pokeInfo, setPokeInfo] = useState<Pokemon>()

	const getColorType = (type?: string) => {
		return type === 'grass'
			? 'green'
			: type === 'ghost'
			? 'rebeccapurple'
			: type === 'fire'
			? 'orange'
			: type === 'bug'
			? 'greenyellow'
			: type === 'dark'
			? 'brown'
			: type === 'normal'
			? 'white'
			: type === 'dragon'
			? 'cyan'
			: type === 'electric'
			? 'yellow'
			: type === 'fairy'
			? 'pink'
			: type === 'fighting'
			? 'crimson'
			: type === 'flying'
			? 'darkgrey'
			: type === 'ground'
			? 'goldenrod'
			: type === 'ice'
			? 'lightcyan'
			: type === 'poison'
			? 'purple'
			: type === 'psychic'
			? 'magenta'
			: type === 'rock'
			? 'peru'
			: type === 'steel'
			? 'silver'
			: type === 'water'
			? 'steelblue'
			: 'white'
	}

	useEffect(() => {
		axios
			.get(props.url)
			.then((res) => {
				setPokeInfo(res.data)
			})
			.catch((err) => {
				console.error(err)
			})
	}, [props.url])

	const checkFilters = () => {
		return props.filters.intersection
			? props.filters.bug &&
			  pokeInfo?.types[0]?.type.name !== 'bug' &&
			  pokeInfo?.types[1]?.type.name !== 'bug'
				? false
				: props.filters.dark &&
				  pokeInfo?.types[0]?.type.name !== 'dark' &&
				  pokeInfo?.types[1]?.type.name !== 'dark'
				? false
				: props.filters.dragon &&
				  pokeInfo?.types[0]?.type.name !== 'dragon' &&
				  pokeInfo?.types[1]?.type.name !== 'dragon'
				? false
				: props.filters.electric &&
				  pokeInfo?.types[0]?.type.name !== 'electric' &&
				  pokeInfo?.types[1]?.type.name !== 'electric'
				? false
				: props.filters.fairy &&
				  pokeInfo?.types[0]?.type.name !== 'fairy' &&
				  pokeInfo?.types[1]?.type.name !== 'fairy'
				? false
				: props.filters.fighting &&
				  pokeInfo?.types[0]?.type.name !== 'fighting' &&
				  pokeInfo?.types[1]?.type.name !== 'fighting'
				? false
				: props.filters.fighting &&
				  pokeInfo?.types[0]?.type.name !== 'fighting' &&
				  pokeInfo?.types[1]?.type.name !== 'fighting'
				? false
				: props.filters.fire &&
				  pokeInfo?.types[0]?.type.name !== 'fire' &&
				  pokeInfo?.types[1]?.type.name !== 'fire'
				? false
				: props.filters.flying &&
				  pokeInfo?.types[0]?.type.name !== 'flying' &&
				  pokeInfo?.types[1]?.type.name !== 'flying'
				? false
				: props.filters.ghost &&
				  pokeInfo?.types[0]?.type.name !== 'ghost' &&
				  pokeInfo?.types[1]?.type.name !== 'ghost'
				? false
				: props.filters.grass &&
				  pokeInfo?.types[0]?.type.name !== 'grass' &&
				  pokeInfo?.types[1]?.type.name !== 'grass'
				? false
				: props.filters.ground &&
				  pokeInfo?.types[0]?.type.name !== 'ground' &&
				  pokeInfo?.types[1]?.type.name !== 'ground'
				? false
				: props.filters.ice &&
				  pokeInfo?.types[0]?.type.name !== 'ice' &&
				  pokeInfo?.types[1]?.type.name !== 'ice'
				? false
				: props.filters.normal &&
				  pokeInfo?.types[0]?.type.name !== 'normal' &&
				  pokeInfo?.types[1]?.type.name !== 'normal'
				? false
				: props.filters.poison &&
				  pokeInfo?.types[0]?.type.name !== 'poison' &&
				  pokeInfo?.types[1]?.type.name !== 'poison'
				? false
				: props.filters.psychic &&
				  pokeInfo?.types[0]?.type.name !== 'psychic' &&
				  pokeInfo?.types[1]?.type.name !== 'psychic'
				? false
				: props.filters.rock &&
				  pokeInfo?.types[0]?.type.name !== 'rock' &&
				  pokeInfo?.types[1]?.type.name !== 'rock'
				? false
				: props.filters.steel &&
				  pokeInfo?.types[0]?.type.name !== 'steel' &&
				  pokeInfo?.types[1]?.type.name !== 'steel'
				? false
				: props.filters.water &&
				  pokeInfo?.types[0]?.type.name !== 'water' &&
				  pokeInfo?.types[1]?.type.name !== 'water'
				? false
				: true
			: props.filters.bug &&
			  (pokeInfo?.types[0]?.type.name === 'bug' ||
					pokeInfo?.types[1]?.type.name === 'bug')
			? true
			: props.filters.dark &&
			  (pokeInfo?.types[0]?.type.name === 'dark' ||
					pokeInfo?.types[1]?.type.name === 'dark')
			? true
			: props.filters.dragon &&
			  (pokeInfo?.types[0]?.type.name === 'dragon' ||
					pokeInfo?.types[1]?.type.name === 'dragon')
			? true
			: props.filters.electric &&
			  (pokeInfo?.types[0]?.type.name === 'electric' ||
					pokeInfo?.types[1]?.type.name === 'electric')
			? true
			: props.filters.fairy &&
			  (pokeInfo?.types[0]?.type.name === 'fairy' ||
					pokeInfo?.types[1]?.type.name === 'fairy')
			? true
			: props.filters.fighting &&
			  (pokeInfo?.types[0]?.type.name === 'fighting' ||
					pokeInfo?.types[1]?.type.name === 'fighting')
			? true
			: props.filters.fighting &&
			  (pokeInfo?.types[0]?.type.name === 'fighting' ||
					pokeInfo?.types[1]?.type.name === 'fighting')
			? true
			: props.filters.fire &&
			  (pokeInfo?.types[0]?.type.name === 'fire' ||
					pokeInfo?.types[1]?.type.name === 'fire')
			? true
			: props.filters.flying &&
			  (pokeInfo?.types[0]?.type.name === 'flying' ||
					pokeInfo?.types[1]?.type.name === 'flying')
			? true
			: props.filters.ghost &&
			  (pokeInfo?.types[0]?.type.name === 'ghost' ||
					pokeInfo?.types[1]?.type.name === 'ghost')
			? true
			: props.filters.grass &&
			  (pokeInfo?.types[0]?.type.name === 'grass' ||
					pokeInfo?.types[1]?.type.name === 'grass')
			? true
			: props.filters.ground &&
			  (pokeInfo?.types[0]?.type.name === 'ground' ||
					pokeInfo?.types[1]?.type.name === 'ground')
			? true
			: props.filters.ice &&
			  (pokeInfo?.types[0]?.type.name === 'ice' ||
					pokeInfo?.types[1]?.type.name === 'ice')
			? true
			: props.filters.normal &&
			  (pokeInfo?.types[0]?.type.name === 'normal' ||
					pokeInfo?.types[1]?.type.name === 'normal')
			? true
			: props.filters.poison &&
			  (pokeInfo?.types[0]?.type.name === 'poison' ||
					pokeInfo?.types[1]?.type.name === 'poison')
			? true
			: props.filters.psychic &&
			  (pokeInfo?.types[0]?.type.name === 'psychic' ||
					pokeInfo?.types[1]?.type.name === 'psychic')
			? true
			: props.filters.rock &&
			  (pokeInfo?.types[0]?.type.name === 'rock' ||
					pokeInfo?.types[1]?.type.name === 'rock')
			? true
			: props.filters.steel &&
			  (pokeInfo?.types[0]?.type.name === 'steel' ||
					pokeInfo?.types[1]?.type.name === 'steel')
			? true
			: props.filters.water &&
			  (pokeInfo?.types[0]?.type.name === 'water' ||
					pokeInfo?.types[1]?.type.name === 'water')
			? true
			: !props.filters.bug &&
			  !props.filters.dark &&
			  !props.filters.dragon &&
			  !props.filters.electric &&
			  !props.filters.fairy &&
			  !props.filters.fighting &&
			  !props.filters.fire &&
			  !props.filters.flying &&
			  !props.filters.ghost &&
			  !props.filters.grass &&
			  !props.filters.ground &&
			  !props.filters.ice &&
			  !props.filters.normal &&
			  !props.filters.poison &&
			  !props.filters.psychic &&
			  !props.filters.rock &&
			  !props.filters.steel &&
			  !props.filters.water
			? true
			: false

		/*return props.filters.bug &&
			pokeInfo?.types[0]?.type.name !== 'bug' &&
			pokeInfo?.types[1]?.type.name !== 'bug'
			? false
			: props.filters.dark &&
			  pokeInfo?.types[0]?.type.name !== 'dark' &&
			  pokeInfo?.types[1]?.type.name !== 'dark'
			? false
			: props.filters.dragon &&
			  pokeInfo?.types[0]?.type.name !== 'dragon' &&
			  pokeInfo?.types[1]?.type.name !== 'dragon'
			? false
			: props.filters.electric &&
			  pokeInfo?.types[0]?.type.name !== 'electric' &&
			  pokeInfo?.types[1]?.type.name !== 'electric'
			? false
			: props.filters.fairy &&
			  pokeInfo?.types[0]?.type.name !== 'fairy' &&
			  pokeInfo?.types[1]?.type.name !== 'fairy'
			? false
			: props.filters.fighting &&
			  pokeInfo?.types[0]?.type.name !== 'fighting' &&
			  pokeInfo?.types[1]?.type.name !== 'fighting'
			? false
			: props.filters.fighting &&
			  pokeInfo?.types[0]?.type.name !== 'fighting' &&
			  pokeInfo?.types[1]?.type.name !== 'fighting'
			? false
			: props.filters.fire &&
			  pokeInfo?.types[0]?.type.name !== 'fire' &&
			  pokeInfo?.types[1]?.type.name !== 'fire'
			? false
			: props.filters.flying &&
			  pokeInfo?.types[0]?.type.name !== 'flying' &&
			  pokeInfo?.types[1]?.type.name !== 'flying'
			? false
			: props.filters.ghost &&
			  pokeInfo?.types[0]?.type.name !== 'ghost' &&
			  pokeInfo?.types[1]?.type.name !== 'ghost'
			? false
			: props.filters.grass &&
			  pokeInfo?.types[0]?.type.name !== 'grass' &&
			  pokeInfo?.types[1]?.type.name !== 'grass'
			? false
			: props.filters.ground &&
			  pokeInfo?.types[0]?.type.name !== 'ground' &&
			  pokeInfo?.types[1]?.type.name !== 'ground'
			? false
			: props.filters.ice &&
			  pokeInfo?.types[0]?.type.name !== 'ice' &&
			  pokeInfo?.types[1]?.type.name !== 'ice'
			? false
			: props.filters.normal &&
			  pokeInfo?.types[0]?.type.name !== 'normal' &&
			  pokeInfo?.types[1]?.type.name !== 'normal'
			? false
			: props.filters.poison &&
			  pokeInfo?.types[0]?.type.name !== 'poison' &&
			  pokeInfo?.types[1]?.type.name !== 'poison'
			? false
			: props.filters.psychic &&
			  pokeInfo?.types[0]?.type.name !== 'psychic' &&
			  pokeInfo?.types[1]?.type.name !== 'psychic'
			? false
			: props.filters.rock &&
			  pokeInfo?.types[0]?.type.name !== 'rock' &&
			  pokeInfo?.types[1]?.type.name !== 'rock'
			? false
			: props.filters.steel &&
			  pokeInfo?.types[0]?.type.name !== 'steel' &&
			  pokeInfo?.types[1]?.type.name !== 'steel'
			? false
			: props.filters.water &&
			  pokeInfo?.types[0]?.type.name !== 'water' &&
			  pokeInfo?.types[1]?.type.name !== 'water'
			? false
			: true*/
	}

	if (checkFilters()) {
		return (
			<div className='m-auto bg-gray-700 px-3 py-3 rounded justify-center text-center my-3 w-40 sm:w-56'>
				<p className='text-white'>#{pokeInfo?.id}</p>
				<p className='text-white text-md sm:text-2xl font-semibold sm:font-medium font-mono'>
					{pokeInfo?.name}
				</p>
				<img
					src={pokeInfo?.sprites.front_default}
					alt=''
					className='bg-white m-auto px-2 sm:px-10 rounded mb-3 h-20 sm:w-full'
				/>
				<div
					className={
						'flex justify-center grid gap-x-2 ' +
						(pokeInfo?.types[1]?.type.name
							? 'grid-cols-2'
							: 'grid-cols-1 px-10')
					}
				>
					<p
						className='text-sm  sm:text-xl font-medium px-1 sm:px-2 py-1 text-gray-800 rounded-xl w-full'
						style={{
							backgroundColor: getColorType(pokeInfo?.types[0]?.type.name),
						}}
					>
						{pokeInfo?.types[0]?.type.name}
					</p>
					{pokeInfo?.types[1]?.type.name ? (
						<p
							className='text-sm  sm:text-xl font-medium px-1 sm:px-2 py-1 text-gray-800 rounded-xl w-full'
							style={{
								backgroundColor: getColorType(pokeInfo?.types[1]?.type.name),
							}}
						>
							{pokeInfo?.types[1]?.type.name}
						</p>
					) : (
						''
					)}
				</div>
			</div>
		)
	} else return <></>
}
