import { Header } from '../components/Header'
import { CharacterCard } from '../components/CharacterCard'
import { CreateCharacter } from './CreateCharacter'
import { Link } from 'react-router-dom'
import { useGetCharactersListQuery } from '../graphql/generated'

export function MainPage() {
	const { data } = useGetCharactersListQuery()

	return (
		<div>
			<Header />
			<main className="flex flex-col mt-10 justify-center bg-gray-700 border border-gray-500 rounded">
				<p className="flex items-center gap-5 mx-auto">
					Lista de personagens
					<Link to="/create" className="flex items-center mr-5 my-5 px-5 h-10 bg-green-500 hover:bg-green-700 rounded transition">Criar personagem</Link>
				</p>
				<div className="flex mx-10 flex-col md:flex-row md:flex-wrap">
					{data?.characters.map(character => {
						return (
							<CharacterCard 
								key={character.id}
								id={character.id}
								name={character.name}
								avatarURL={character.avatarURL}
							/>
						)
					})}
				</div>
			</main>
		</div>
	)
}