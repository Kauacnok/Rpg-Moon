import Head from 'next/head'
import { gql } from "@apollo/client"
import { CharactersCardsProps } from '../interfaces/characters'

import { client } from "../lib/apollo"
import { Header } from '../components/Header'
import { CharacterCard } from '../components/CharacterCard'
import Link from 'next/link'
import { useGetCharactersListQuery } from '../graphql/generated'
import { NavBarMobile } from '../components/NavBarMobile'

export default function MainPage({ data }: CharactersCardsProps) {
	return (
		<div>
			<Head>
				<title>Rpg Moon | Lista de personagens</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="title" content="Rpg Moon | Lista de personagens" />
				<meta name="description" content="Página inicial com a lista de personagens do Rpg Moon" />
				<meta name="keywords" content="Rpg Moon, Lista de personagens, Rpg Moon lista de personagens" />
				<meta name="author" content="Kauã C. N." />
				<meta property="og:image" content="https://i.imgur.com/vaKcNK2.png" />
			</Head>
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
								id={character.slug}
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

export async function getServerSideProps() {
	const { data } = await client.query({
		query: gql`
			query GetCharactersList {
				characters(where: {}) {
					id
					name
					avatarURL
					slug
				}
			}

		`
	})

	return {
		props: { data: data }
	}
}