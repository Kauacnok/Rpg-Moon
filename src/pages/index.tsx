import Head from 'next/head'
import { gql } from "@apollo/client"
import Link from 'next/link'
import Image from 'next/image'
import { Copyright } from 'phosphor-react'

import { CharactersCardsProps } from '../interfaces/characters'
import { client } from "../lib/apollo"
import { Header } from '../components/Header'
import { CharacterCard } from '../components/CharacterCard'
import { useGetCharactersListQuery } from '../graphql/generated'
import { NavBarMobile } from '../components/NavBarMobile'
import { Logo } from '../components/Logo'
import PurpleBlur from '../assets/purple-blur.svg'
import CharactersImage from '../assets/charactersImage.svg'
import BgStars from '../assets/bg-stars.svg'

export default function MainPage({ data }: CharactersCardsProps) {
	return (
		<div className="px-8">
			<Head>
				<title>Rpg Moon | Página Inicial</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="title" content="Rpg Moon | Página Inicial" />
				<meta name="description" content="Página inicial com a lista de personagens do Rpg Moon" />
				<meta name="keywords" content="Rpg Moon, Lista de personagens, Rpg Moon lista de personagens" />
				<meta name="author" content="Kauã C. N." />
				<meta property="og:image" content="https://i.imgur.com/vaKcNK2.png" />
			</Head>
			<Header />
			<main className="flex flex-col mt-10 justify-center rounded mt-[90px]">
				<div className="flex flex-col justify-center items-center mb-[90px] md:flex-row">
					<div className="relative">
						<h3 className="relative text-xl text-center mb-5 z-40 md:text-2xl">Conheça o universo vasto do <strong className="font-sans text-3xl md:text-4xl">Rpg Moon</strong></h3>
						<p className="relative text-xl text-center z-40 md:text-2xl">Conheça as histórias, crie os personagens, construa a sua história</p>
						<div className="relative flex justify-end z-40">
							<p className="inline-block flex items-center self-center font-bold mr-5 my-5 px-5 h-10 bg-green-500 hover:bg-green-700 rounded transition md:self-end"><Link href="/create">CRIAR PERSONAGEM</Link></p>	
						</div>
						<Image src={PurpleBlur} alt="purple blur" width={750} height={750} className="absolute right-0 top-1/2 -translate-y-1/2 opacity-50 z-0" />
					</div>
					<img src="https://i.imgur.com/f5fsN0d.png" className="md:w-3/4 lg:w-1/2" />
				</div>
				<div className="relative overflow-hidden flex flex-col justify-center items-center gap-5 mx-auto">
					<h3 className="relative text-xl text-center mb-5 z-40 md:text-2xl">Conheça os personagens já registrados no <strong className="font-sans text-3xl md:text-4xl">Rpg Moon</strong></h3>
					<div className="relative flex justify-end z-40">
						<p className="inline-block flex items-center self-center font-bold mr-5 my-5 px-5 h-10 bg-green-500 hover:bg-green-700 rounded transition md:self-end"><Link href="/create">CRIAR PERSONAGEM</Link></p>	
					</div>
					<Image src={CharactersImage} alt="Characters image" width={510} height={331} className="w-3/4 md:w-[510px]" />
					<Image src={BgStars} alt="Background Stars" width={668} height={900} className="w-1/2 md:w-[668px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mb-5" />
				</div>
				<div className="flex justify-center items-center mx-10 my-[90px] flex-col md:flex-row md:flex-wrap">
					{data.characters.map(character => {
						return (
							<CharacterCard 
								key={character.id}
								id={character.slug}
								name={character.name}
								avatarURL={character.avatarURL}
								level={character.level}
								xp={character.xp}
								xpSpent={character.xpSpent}
								points={character.points}
							/>
						)
					})}
				</div>
			</main>
			<footer className="mt-20 relative border-t border-zinc-800">
				<div className="h-80 flex flex-col gap-1 justify-center items-center">
					<Logo />
					<p className="flex justify-center items-center gap-3">Rpg Moon todos os direitos reservados <Copyright /></p>
				</div>
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
					level
					xp
					xpSpent
					points
				}
			}

		`
	})

	return {
		props: { data: data }
	}
}