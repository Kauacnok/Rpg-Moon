import { gql } from "@apollo/client"
import { client } from "../../lib/apollo"
import { getCharactersById } from '../../graphql/queries/get-character-by-id'

import xss from "xss"
import Link from 'next/link'
import { ArrowLeft } from 'phosphor-react'
import { Header } from '../../components/Header'
import { NavBarMobile } from '../../components/NavBarMobile'
import { LinkNext } from '../../components/LinkNext'

export interface contextProps {
    params: { characterId: string }
}

export interface CharacterListId {
	id: string
}

export interface CharacterCardFullProps {
	data: {
		__typename: 'Query', 
		character: {
			__typename: 'Character', 
			name: string, 
			avatarURL: string, 
			characterDescription: string, 
			player: string, 
			points: number, 
			level: number, 
			xp: number, 
			force: number, 
			agility: number, 
			resistance: number, 
			inteligence: number, 
			perception: number, 
			disposal: number, 
			charisma: number, 
			skills: string, 
			route: string, 
			origin: string, 
			personality: string, 
			motivation: string, 
			connection: string, 
			problem: string, 
			physical: string, 
			psychological: string, 
			inventory: string, 
			money: string, 
			password: string, 
			xpSpent: number 
		}
    }
    id: string
}

export default function CharacterCardFull({ data, id }: CharacterCardFullProps) {

	return (
		<>
			<Header />
			<nav className="flex justify-between items-center bg-gray-700 p-5">
				<div className="rounded-full px-5 py-2 cursor-pointer hover:bg-gray-500 transition"><LinkNext target="/"><ArrowLeft size={40} /></LinkNext></div>
				<div className="rounded px-5 py-2 bg-green-500 cursor-pointer hover:bg-green-700 transition"><Link href={`/character/update/${id}`}>Editar</Link></div>
			</nav>
			<header className="flex flex-col p-5 bg-gray-700 md:flex-row">
				<div>
					<img src={data.character.avatarURL} alt={`Imagem do personagem ${data.character.name}`} className="w-[60px] h-[60px] rounded-full md:w-[150px] md:h-[150px]" />
				</div>
				<div>
					<h2 className="text-[30px]">{data.character.name}</h2>
					<p className="ml-2">{data.character.characterDescription}</p>
					<p className="ml-2 mt-2">Jogador: {data.character.player}</p>
				</div>
			</header>
			<aside className="pl-2 bg-gray-700 border-b border-gray-500">
				<div className="flex justify-around">
					<p>Pontos: {data.character.points}</p>
					<p>XP: {data.character.xp}</p>
					<p>Xp gasto: {data.character.xpSpent}</p>
					<p>Nível: {data.character.level}</p>
				</div>
			</aside>
			<main className="flex flex-col justify-center pl-2 py-5 bg-gray-700 border-b border-gray-500 md:flex-row" >
				<ul className="mb-5 mr-2 p-5 border border-gray-500 rounded-md">
					<li className="mb-2">Atributos:</li>
					<li>Força: {data.character.force}</li>
					<li>Agilidade: {data.character.agility}</li>
					<li>Resistência: {data.character.resistance}</li>
					<li>Inteligência: {data.character.inteligence}</li>
					<li>Percepção: {data.character.perception}</li>
					<li>Vontade: {data.character.disposal}</li>
					<li>Carisma: {data.character.charisma}</li>
				</ul>
				<ul className="p-5 mr-2 border border-gray-500 rounded-md">
					<li className="mb-2">Habilidades:</li>
					<div dangerouslySetInnerHTML={{__html: xss(data.character.skills || '')}} />
				</ul>
			</main>
			<div className="flex flex-col justify-center pl-2 py-5 bg-gray-700 border-b border-gray-500 md:flex-row">
				<ul className="mb-5 mr-2 p-5 border border-gray-500 rounded-md">
					<li>Caminho: {data.character.route}</li>
					<li>Origem: {data.character.origin}</li>
					<li>Personalidade: {data.character.personality}</li>
					<li>Motivação: {data.character.motivation}</li>
					<li>Conexão: {data.character.connection}</li>
					<li>Problema: {data.character.problem}</li>
				</ul>
				<ul className="mb-5 mr-2 p-5 border border-gray-500 rounded-md">
					<li className="mb-2">Desgaste:</li>
					<li>Físico: {data.character.physical}</li>
					<li>Mental: {data.character.psychological}</li>
				</ul>
			</div>
			<div className="flex flex-col justify-center pl-2 py-5 bg-gray-700 border-b border-gray-500 md:flex-row">
				<ul className="mb-5 mr-2 p-5 border border-gray-500 rounded-md">
					<li className="mb-2">Inventário:</li>
					<div dangerouslySetInnerHTML={{__html: xss(data.character.inventory)}} />		
				</ul>
				<ul className="mb-5 mr-2 p-5 border border-gray-500 rounded-md">
					<li className="mb-2">Moedas:</li>
					<div dangerouslySetInnerHTML={{__html: xss(data.character.money)}} />
				</ul>
			</div>
			<footer className="mt-20 md:mt-0">
				
			</footer>
		</>
	)
}

export async function getStaticPaths() {
	const { data } = await client.query({
		query: gql`
			query GetCharactersList {
				characters(where: {}) {
					id
				}
			}
		`
	})

	const paths = data.characters.map((character: CharacterListId) => {
		const characterId = character.id

		return {
            params: { characterId: characterId.toString() },
        }
	})

	return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context: contextProps) {

	const id = context.params.characterId

	const { data } = await client.query({
		query: getCharactersById,
		variables: {
			id
		}
	})

	return {
		props: { data: data, id},
		revalidate: 5
	}
}