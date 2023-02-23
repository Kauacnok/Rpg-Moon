import { gql } from "@apollo/client"
import { client } from "../lib/apollo"
import { Header } from '../components/Header'
import { CharacterCard } from '../components/CharacterCard'
import Link from 'next/link'
import { useGetCharactersListQuery } from '../graphql/generated'
import { NavBarMobile } from '../components/NavBarMobile'

interface MainPageProps {
	data: {
	    __typename?: "Query" | undefined;
	    characters: Array<{
	        __typename?: 'Character';
	        id: string;
	        name: string;
	        avatarURL: string;
	    }>;
	}
}

export default function MainPage({ data }: MainPageProps) {
	return (
		<div>
			<Header />
			<main className="flex flex-col mt-10 justify-center bg-gray-700 border border-gray-500 rounded">
				<div className="flex items-center gap-5 mx-auto">
					Lista de personagens
					<p className="flex items-center mr-5 my-5 px-5 h-10 bg-green-500 hover:bg-green-700 rounded transition"><Link href="/create">Criar personagem</Link></p>
				</div>
				<div className="flex mx-10 flex-col md:flex-row md:flex-wrap">
					{data.characters.map(character => {
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
			<footer className="mt-20">
				<NavBarMobile typeIntImage={1} />	
			</footer>
		</div>
	)
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query GetCharactersList {
				characters(where: {}) {
					id
					name
					avatarURL
				}
			}

		`
	})

	return {
		props: { data: data }
	}
}