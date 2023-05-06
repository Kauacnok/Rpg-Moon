import { GraphQLClient } from 'graphql-request'
import { gql } from "@apollo/client"
import { client } from "../lib/apollo"
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { InputForm } from '../components/InputForm'
import { Header } from '../components/Header'
import { ArrowLeft } from 'phosphor-react'
import { useState, FormEvent } from 'react'
import { NavBarMobile } from '../components/NavBarMobile'
import { createCharacter } from '../graphql/mutations/create-character-mutation'

interface createCharacterProps {
	VITE_API_URL: string,
	VITE_API_ACCESS_TOKEN: string
}

export default function CreateCharacter({ VITE_API_URL, VITE_API_ACCESS_TOKEN }: createCharacterProps) {
	const router = useRouter()

	const graphQLClient = new GraphQLClient((VITE_API_URL), {
		headers: {
			authorization: `Bearer ${VITE_API_ACCESS_TOKEN}`,
		}
	})

	const create_Character = createCharacter

	const [name, setName] = useState("")
	const [avatarURL, setAvatarURL] = useState("")
	const [characterDescription, setCharacterDescription] = useState("")
	const [player, setPlayer] = useState("")
	const [points, setPoints] = useState(0)
	const [level, setLevel] = useState(0)
	const [xp, setXp] = useState(0)
	const [xpSpent, setXpSpent] = useState(0)
	const [force, setForce] = useState(0)
	const [agility, setAgility] = useState(0)
	const [resistance, setResistance] = useState(0)
	const [inteligence, setInteligence] = useState(0)
	const [perception, setPerception] = useState(0)
	const [disposal, setDisposal] = useState(0)
	const [charisma, setCharisma] = useState(0)
	const [skills, setSkills] = useState("")
	const [route, setRoute] = useState("")
	const [origin, setOrigin] = useState("")
	const [personality, setPersonality] = useState("")
	const [motivation, setMotivation] = useState("")
	const [connection, setConnection] = useState("")
	const [problem, setProblem] = useState("")
	const [physical, setPhysical] = useState("")
	const [psychological, setPsychological] = useState("")
	const [inventory, setInventory] = useState("")
	const [money, setMoney] = useState("")
	const [password, setPassword] = useState("")

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()
		let slug = name.toLowerCase().replace(" ", "-")

		await graphQLClient.request(create_Character, {		
			avatarURL,
			characterDescription,
			agility: Number(agility),
			charisma: Number(charisma),
			connection,
			disposal: Number(disposal),
			force: Number(force),
			inteligence: Number(inteligence),
			inventory,
			level: Number(level),
			money,
			motivation,
			name,
			origin,
			password,
			perception: Number(perception),
			personality,
			physical,
			player,
			points: Number(points),
			problem,
			psychological,
			resistance: Number(resistance),
			route,
			skills,
			xp: Number(xp),
			xpSpent: Number(xpSpent),
			slug: slug
		})

		router.push('/')
	}

	return (
		<>
			<Head>
				<title>Rpg Moon | Criar personagem</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="title" content="Rpg Moon | Criar um personagem" />
				<meta name="description" content="Página para criar um novo personagem no Rpg Moon" />i
				<meta name="keywords" content="Rpg Moon, criar de personagem, Rpg Moon criar personagem" />
				<meta name="author" content="Kauã C. N." />
				<meta property="og:image" content="https://i.imgur.com/vaKcNK2.png" />
			</Head>
			<Header />
			<form onSubmit={handleSubmit} className="bg-gray-700 flex flex-col pl-2 pb-2">
				<h2 className="flex items-center pl-2 my-10 text-center">
					<Link href="/" className="rounded-full cursor-pointer hover:bg-gray-500 transition"><ArrowLeft size={40}/></Link>
					<p className="mx-auto">Ficha do personagem</p>
				</h2>
				<InputForm typeInput="text" placeholderInput="Nome do personagem" setValue={setName} />
				<InputForm typeInput="url" placeholderInput="Imagem URL" setValue={setAvatarURL} />
				<InputForm typeInput="text" placeholderInput="Descrição do personagem" setValue={setCharacterDescription} />
				<InputForm typeInput="text" placeholderInput="Jogador" setValue={setPlayer} />
				<InputForm typeInput="number" placeholderInput="XP" setValue={setXp} />
				<InputForm typeInput="number" placeholderInput="XP gasto" setValue={setXpSpent} />
				<InputForm typeInput="number" placeholderInput="Pontos" setValue={setPoints} />
				<InputForm typeInput="number" placeholderInput="Nível" setValue={setLevel} />
				<h2 className="block pl-2 my-10 text-center">Conceitos</h2>
				<InputForm typeInput="text" placeholderInput="Caminho" setValue={setRoute} />
				<InputForm typeInput="text" placeholderInput="Origem" setValue={setOrigin} />
				<InputForm typeInput="text" placeholderInput="Personalidade" setValue={setPersonality} />
				<InputForm typeInput="text" placeholderInput="Motivação" setValue={setMotivation} />
				<InputForm typeInput="text" placeholderInput="Conexão" setValue={setConnection} />
				<InputForm typeInput="text" placeholderInput="Problema" setValue={setProblem} />
				<h2 className="block pl-2 my-10 text-center">Atributos (+2 / +2 / +1 / +1 / 0 / 0 / -1)</h2>
				<InputForm typeInput="number" placeholderInput="Força" setValue={setForce} />
				<InputForm typeInput="number" placeholderInput="Agilidade" setValue={setAgility} />
				<InputForm typeInput="number" placeholderInput="Resistência" setValue={setResistance} />
				<InputForm typeInput="number" placeholderInput="Inteligência" setValue={setInteligence} />
				<InputForm typeInput="number" placeholderInput="Percepção" setValue={setPerception} />
				<InputForm typeInput="number" placeholderInput="Vontade" setValue={setDisposal} />
				<InputForm typeInput="number" placeholderInput="Carisma" setValue={setCharisma} />
				<h2 className="block pl-2 my-10 text-center">Desgaste (0,1) 0000 / (2,3,4) 00 / (5,6) 0 / (7,8) 0 / (9+) X</h2>
				<InputForm typeInput="text" placeholderInput="Mental" setValue={setPsychological} />
				<InputForm typeInput="text" placeholderInput="Físico" setValue={setPhysical} />
				<h2 className="block pl-2 my-10 text-center">Habilidades</h2>
				<textarea className="bg-gray-900 block rounded w-[90%] px-5 h-14 mb-2 focus:outline-none focus:border-b-2 focus:border-purple-600" onChange={event => setSkills(event.target.value)}></textarea>
				<h2 className="block pl-2 my-10 text-center">Inventário</h2>
				<textarea className="bg-gray-900 block rounded w-[90%] px-5 h-14 mb-2 focus:outline-none focus:border-b-2 focus:border-purple-600" onChange={event => setInventory(event.target.value)}></textarea>
				<h2 className="block pl-2 my-10 text-center">Dinheiro</h2>
				<InputForm typeInput="text" placeholderInput="Coloque todos os valores de dinheiro aqui (HL, HO, HP, HC)" setValue={setMoney} />
				<InputForm typeInput="text" placeholderInput="Digite uma senha" setValue={setPassword} />

				<button 
					type="submit" 
					className="w-[80%] mx-auto px-5 py-2 bg-green-500 hover:bg-green-700 disabled:opacity-50"
				>Criar personagem</button>
			</form>
			<footer className="mt-20 md:mt-0">
				<NavBarMobile typeIntImage={1} />
			</footer>
		</>
	)
}

export async function getStaticProps() {
	const VITE_API_URL = process.env.VITE_API_URL
	const VITE_API_ACCESS_TOKEN = process.env.VITE_API_ACCESS_TOKEN

	return {
		props: {
			VITE_API_URL, VITE_API_ACCESS_TOKEN
		}
	}
}