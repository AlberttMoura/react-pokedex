import { useState, useEffect } from 'react'
import axios from 'axios'

interface PokeBoxProps {
	name: string
	url: string
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

	return (
		<div className='m-auto bg-gray-700 px-3 py-3 rounded w-52 justify-center text-center my-3'>
			<p className='text-white'>#{pokeInfo?.id}</p>
			<p className='text-white text-2xl font-medium font-mono'>
				{pokeInfo?.name}
			</p>
			<img
				src={pokeInfo?.sprites.front_default}
				alt=''
				className='bg-white m-auto px-10 rounded mb-3'
			/>
			<div
				className={
					'flex justify-center grid gap-x-2 ' +
					(pokeInfo?.types[1]?.type.name ? 'grid-cols-2' : 'grid-cols-1 px-10')
				}
			>
				<p
					className='text-xl font-medium px-2 py-1 text-gray-800 rounded-xl w-full'
					style={{
						backgroundColor: getColorType(pokeInfo?.types[0]?.type.name),
					}}
				>
					{pokeInfo?.types[0]?.type.name}
				</p>
				{pokeInfo?.types[1]?.type.name ? (
					<p
						className='text-xl font-medium px-2 py-1 text-gray-800 rounded-xl w-full'
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
}
