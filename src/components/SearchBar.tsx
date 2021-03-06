import SearchIcon from '../assets/searchicon.png'

interface SearchBarProps {
	childSearchToParent: Function
}

export const SearchBar = (props: SearchBarProps) => {
	return (
		<div className='w-full text-center bg-gray-800 py-6 items-center flex px-2 z-10'>
			<input
				name='pokesearch'
				type='text'
				placeholder='Search Pokemon'
				autoComplete='off'
				onKeyDown={(e) => {
					if (e.key === 'Enter')
						props.childSearchToParent(
							(document.getElementsByName('pokesearch')[0] as HTMLInputElement)
								.value
						)
				}}
				className='border-gray-600 border-4 rounded-full w-full sm:w-1/2 h-12 text-center text-3xl outline-0 ml-auto mr-3 max-w-md'
			/>
			<div className='mr-auto w-12 h-12 items-center flex'>
				<input
					type='image'
					src={SearchIcon}
					alt='search'
					className='w-10 active:w-12 m-auto ease-linear duration-100 outline-0 bg-transparent'
					onClick={() => {
						props.childSearchToParent(
							(
								document.getElementsByName('pokesearch')[0] as HTMLInputElement
							).value
								.toLowerCase()
								.trim()
						)
					}}
				/>
			</div>
		</div>
	)
}
