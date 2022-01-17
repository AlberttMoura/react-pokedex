/*import { useState, useEffect } from 'react'
import axios from 'axios'
*/
/*interface Filter {
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
*/
interface PokeBoxProps {
	pokeInfo: Pokemon
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
	//const [pokeInfo, setPokeInfo] = useState<Pokemon>()

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

	return (
		<div className='m-auto bg-gray-700 px-3 py-3 rounded justify-center text-center my-3 w-40 sm:w-56'>
			<p className='text-white'>#{props.pokeInfo?.id}</p>
			<p className='text-white text-md sm:text-2xl font-semibold sm:font-medium font-mono'>
				{props.pokeInfo?.name}
			</p>
			<div className='w-full bg-white rounded mb-3 h-20'>
				<img
					src={props.pokeInfo?.sprites.front_default}
					alt={props.pokeInfo?.name}
					className='bg-white m-auto sm:px-10 rounded h-full sm:w-full'
				/>
			</div>
			<div
				className={
					'flex justify-center grid gap-x-2 ' +
					(props.pokeInfo?.types[1]?.type.name
						? 'grid-cols-2'
						: 'grid-cols-1 px-10')
				}
			>
				<p
					className='text-sm  sm:text-xl font-medium px-1 sm:px-2 py-1 text-gray-800 rounded-xl w-full'
					style={{
						backgroundColor: getColorType(props.pokeInfo.types[0]?.type.name),
					}}
				>
					{props.pokeInfo.types[0]?.type.name}
				</p>
				{props.pokeInfo.types[1]?.type.name ? (
					<p
						className='text-sm  sm:text-xl font-medium px-1 sm:px-2 py-1 text-gray-800 rounded-xl w-full'
						style={{
							backgroundColor: getColorType(props.pokeInfo.types[1]?.type.name),
						}}
					>
						{props.pokeInfo.types[1]?.type.name}
					</p>
				) : (
					''
				)}
			</div>
		</div>
	)
	//} else return <></>
}
