import { SearchBar } from '../components/SearchBar'
import { useState } from 'react'

export const Home = () => {
	const [data, setData] = useState('')

	const childToParent = (pokesearch: string) => {
		setData(pokesearch)
	}

	return (
		<>
			<SearchBar childToParent={childToParent} />
			<p>{data}</p>
		</>
	)
}
