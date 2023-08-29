import Head from 'next/head'
import { GraphQLClient } from 'graphql-request'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, FormEvent, SyntheticEvent } from 'react'
import { ArrowLeft, CircleNotch  } from 'phosphor-react'
import { useApolloClient } from '@apollo/client'
import { gql } from "@apollo/client"
import { client } from "../../../lib/apollo"

import { CharacterCardFullProps } from '../../../interfaces/character-card-full'
import { InputForm } from '../../../components/InputForm'
import { Header } from '../../../components/Header'
import { NavBarMobile } from '../../../components/NavBarMobile'
import { contextProps, CharacterListId } from '../[characterId]'
import { mutationUpdateCharacterById } from '../../../graphql/mutations/update-character-mutation'
import { publishUpdateCharacter } from '../../../graphql/mutations/publish-update-character'
import { getCharactersById } from '../../../graphql/queries/get-character-by-id'
import { LinkNext } from '../../../components/LinkNext'
import { InputCheckbox } from '../../../components/InputCheckbox'

interface updateCharacterProps extends CharacterCardFullProps {
	VITE_API_URL: string,
	VITE_API_ACCESS_TOKEN: string
}

function sliceStringToArrays(array: any, str: string) {
	let count = 0
	var result = ""
	let regex = /([0X]+ \/)+/g

	str.replace(regex, (regex_result: string, group1: string, regex_first_search_ocurrency: string, full_string: string ): any => 
		{
			
			result = group1.replace(" /", "")
			for(var i = 0; i < result.length; i++) {
	 
				array[count][i] = result.slice(i, i+1)
			
			}
			count = count + 1
		}
	)

	return array
}

function defragmentArrayToSmallParts(array: any) {
	const arr = []
	let concatStr = ""

	for (var i = 0; i < 4; i++) {
		array[i].map((subArray: any, index: number) => {
			concatStr += subArray
		})
		arr.push(concatStr)
		concatStr = ""
	}

	return arr
}

export default function UpdateCharacter({ data, id, VITE_API_URL, VITE_API_ACCESS_TOKEN }: updateCharacterProps) {
	const router = useRouter()

	const client = useApolloClient()

	const graphQLClient = new GraphQLClient((VITE_API_URL), {
		headers: {
			authorization: `Bearer ${VITE_API_ACCESS_TOKEN}`,
		}
	})

	const mutationUpdateCharacter = mutationUpdateCharacterById

 	const [isDataSent, setIsDataSent] = useState(false)

 	let str = data.character.psychological
	
	var result = ""

	let psychologicalArray: any = [
	    [],
	    [],
	    [],
	    []
	]

	let physicalArray: any = [
	    [],
	    [],
	    [],
	    []
	]

	const [name, setName] = useState(data.character.name)
	const [avatarURL, setAvatarURL] = useState(data.character.avatarURL)
	const [characterDescription, setCharacterDescription] = useState(data.character.characterDescription)
	const [player, setPlayer] = useState(data.character.player)
	const [points, setPoints] = useState(data.character.points)
	const [level, setLevel] = useState(data.character.level)
	const [xp, setXp] = useState(data.character.xp)
	const [xpSpent, setXpSpent] = useState(data.character.xpSpent)
	const [force, setForce] = useState(data.character.force)
	const [agility, setAgility] = useState(data.character.agility)
	const [resistance, setResistance] = useState(data.character.resistance)
	const [inteligence, setInteligence] = useState(data.character.inteligence)
	const [perception, setPerception] = useState(data.character.perception)
	const [disposal, setDisposal] = useState(data.character.disposal)
	const [charisma, setCharisma] = useState(data.character.charisma)
	const [skills, setSkills] = useState(data.character.skills)
	const [route, setRoute] = useState(data.character.route)
	const [origin, setOrigin] = useState(data.character.origin)
	const [personality, setPersonality] = useState(data.character.personality)
	const [motivation, setMotivation] = useState(data.character.motivation)
	const [connection, setConnection] = useState(data.character.connection)
	const [problem, setProblem] = useState(data.character.problem)
	const [physical, setPhysical] = useState(sliceStringToArrays(physicalArray, data.character.physical))
	const [psychological, setPsychological] = useState(sliceStringToArrays(psychologicalArray, data.character.psychological))
	const [inventory, setInventory] = useState(data.character.inventory)
	const [money, setMoney] = useState(data.character.money)
	const [password, setPassword] = useState("")

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		const physicalArrayDefragment = defragmentArrayToSmallParts(physical)
		const psychologicalArrayDefragment = defragmentArrayToSmallParts(psychological)
		const psychologicalString = `(0,1) ${psychologicalArrayDefragment[0]} / (2,3,4) ${psychologicalArrayDefragment[1]} / (5,6) ${psychologicalArrayDefragment[2]} / (7,8) ${psychologicalArrayDefragment[3]} / (9+) X`
		const physicalString = `(0,1) ${physicalArrayDefragment[0]} / (2,3,4) ${physicalArrayDefragment[1]} / (5,6) ${physicalArrayDefragment[2]} / (7,8) ${physicalArrayDefragment[3]} / (9+) X`

		setIsDataSent(true)

		await graphQLClient.request(mutationUpdateCharacter, {	
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
			physical: physicalString,
			player,
			points: Number(points),
			problem,
			psychological: psychologicalString,
			resistance: Number(resistance),
			route,
			skills,
			xp: Number(xp),
			xpSpent: Number(xpSpent),
			slug: id
		})

		await graphQLClient.request(publishUpdateCharacter, {
			slug: id
		})
	

  		setIsDataSent(false)
  		client.resetStore()

  		router.push(`/character/${id}`)

  	}

  	function addDataOnTextArea(event: SyntheticEvent, value: Function, defaultValue: string | number | undefined) {
  		let target = event.target as HTMLInputElement
  		target.value == "" ? value(defaultValue) : value(target.value)
  	}

	return (
		<div className="px-8">
			<Head>
				<title>Rpg Moon | Personagem - {data.character.name}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="title" content={`Rpg Moon | Atualizar personagem - ${data.character.name}`} />
				<meta name="description" content={`${data.character.characterDescription}\n\nPontos: ${data.character.points} | XP: ${data.character.xp} | XP gasto: ${data.character.xpSpent} | Nível: ${data.character.level}`} />
				<meta name="keywords" content={`Rpg Moon, ${data.character.name}, Rpg Moon atualizar personagem ${data.character.name}`} />
				<meta name="author" content="Kauã C. N." />
				<meta property="og:image" content={data.character.avatarURL} />
			</Head>
			<Header />
			<form onSubmit={handleSubmit} className="bg-gray-700 flex flex-col pl-2 pb-2">
				<h2 className="flex items-center pl-2 my-10 text-center">
					<p className="rounded-full px-5 py-2 cursor-pointer hover:bg-gray-500 transition"><LinkNext target={`/character/${id}`}><ArrowLeft size={40} /></LinkNext></p>
					<p className="mx-auto">Ficha do personagem</p> 
				</h2>
				<InputForm typeInput="text" placeholderInput="Nome do personagem" setValue={setName} isUpdateCharacter={true} dataDefaultValue={data.character.name} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { name == "" ? data.character.name : name}</p>
				<InputForm typeInput="url" placeholderInput="Imagem URL" setValue={setAvatarURL} isUpdateCharacter={true} dataDefaultValue={data.character.avatarURL} />
				<p className="bg-gray-700 px-5 py-2 my-5 break-words">Dado atual: { avatarURL == "" ? data.character.avatarURL : avatarURL}</p>
				<InputForm typeInput="text" placeholderInput="Descrição do personagem" setValue={setCharacterDescription} isUpdateCharacter={true} dataDefaultValue={data.character.characterDescription} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { characterDescription == "" ? data.character.characterDescription : characterDescription}</p>
				<InputForm typeInput="text" placeholderInput="Jogador" setValue={setPlayer} isUpdateCharacter={true} dataDefaultValue={data.character.player} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { player == "" ? data.character.player : player}</p>
				<InputForm typeInput="number" placeholderInput="XP" setValue={setXp} isUpdateCharacter={true} dataDefaultValue={data.character.xp} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { xp == undefined ? data.character.xp : xp}</p>
				<InputForm typeInput="number" placeholderInput="XP gasto" setValue={setXpSpent} isUpdateCharacter={true} dataDefaultValue={data.character.xpSpent} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { xpSpent == undefined ? data.character.xpSpent : xpSpent}</p>
				<InputForm typeInput="number" placeholderInput="Pontos" setValue={setPoints} isUpdateCharacter={true}  dataDefaultValue={data.character.points} />
				<p className="bg-gray-700 px-5 py- my-5">Dado atual: { points == undefined ? data.character.points : points}</p>
				<InputForm typeInput="number" placeholderInput="Nível" setValue={setLevel} isUpdateCharacter={true}  dataDefaultValue={data.character.level} />
				<p className="bg-gray-700 px-5 py-2">Dado atual: { level == undefined ? data.character.level : level}</p>
				<h2 className="block pl-2 my-10 text-center">Conceitos</h2>
				<InputForm typeInput="text" placeholderInput="Caminho" setValue={setRoute} isUpdateCharacter={true} dataDefaultValue={data.character.route} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { route == "" ? data.character.route : route}</p>
				<InputForm typeInput="text" placeholderInput="Origem" setValue={setOrigin} isUpdateCharacter={true} dataDefaultValue={data.character.origin} />
				<p className="bg-gray-700 px-5 py-2">Dado atual: { origin == "" ? data.character.origin : origin}</p>
				<InputForm typeInput="text" placeholderInput="Personalidade" setValue={setPersonality} isUpdateCharacter={true} dataDefaultValue={data.character.personality} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { personality == "" ? data.character.personality : personality}</p>
				<InputForm typeInput="text" placeholderInput="Motivação" setValue={setMotivation} isUpdateCharacter={true} dataDefaultValue={data.character.motivation} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { motivation == "" ? data.character.motivation : motivation}</p>
				<InputForm typeInput="text" placeholderInput="Conexão" setValue={setConnection} isUpdateCharacter={true} dataDefaultValue={data.character.connection} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { connection == "" ? data.character.connection : connection}</p>
				<InputForm typeInput="text" placeholderInput="Problema" setValue={setProblem} isUpdateCharacter={true} dataDefaultValue={data.character.problem} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { problem == "" ? data.character.problem : problem}</p>
				<h2 className="block pl-2 my-10 text-center">Atributos (+2 / +2 / +1 / +1 / 0 / 0 / -1)</h2>
				<InputForm typeInput="number" placeholderInput="Força" setValue={setForce} isUpdateCharacter={true} dataDefaultValue={data.character.force} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { force == undefined ? data.character.force : force}</p>
				<InputForm typeInput="number" placeholderInput="Agilidade" setValue={setAgility} isUpdateCharacter={true} dataDefaultValue={data.character.agility} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { agility == undefined ? data.character.agility : agility}</p>
				<InputForm typeInput="number" placeholderInput="Resistência" setValue={setResistance} isUpdateCharacter={true} dataDefaultValue={data.character.resistance} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { resistance == undefined ? data.character.resistance : resistance}</p>
				<InputForm typeInput="number" placeholderInput="Inteligência" setValue={setInteligence} isUpdateCharacter={true} dataDefaultValue={data.character.inteligence} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { inteligence == undefined ? data.character.inteligence : inteligence}</p>
				<InputForm  typeInput="number" placeholderInput="Percepção" setValue={setPerception} isUpdateCharacter={true} dataDefaultValue={data.character.perception} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { perception == undefined ? data.character.perception : perception}</p>
				<InputForm typeInput="number" placeholderInput="Vontade" setValue={setDisposal} isUpdateCharacter={true} dataDefaultValue={data.character.disposal} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { disposal == undefined ? data.character.disposal : disposal}</p>
				<InputForm typeInput="number" placeholderInput="Carisma" setValue={setCharisma} isUpdateCharacter={true} dataDefaultValue={data.character.charisma} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { charisma == undefined ? data.character.charisma : charisma}</p>
				<h2 className="block pl-2 my-10 text-center">Desgaste (0,1) 0000 / (2,3,4) 00 / (5,6) 0 / (7,8) 0 / (9+) X</h2>
				<h2 className="block bt-2">Mental</h2>
				<InputCheckbox type="psychological" array={psychological} setArray={setPsychological} />
				<h2 className="block bt-2">Físico</h2>
				<InputCheckbox type="physical" array={physical} setArray={setPhysical} />
				<h2 className="block pl-2 my-10 text-center">Habilidades</h2>
				<textarea className="bg-gray-900 block rounded w-[90%] px-5 h-14 mb-2 focus:outline-none focus:border-b-2 focus:border-purple-600" onChange={event => addDataOnTextArea(event, setSkills, data.character.skills)} value={skills} ></textarea>
				<h2 className="block pl-2 my-10 text-center">Inventário</h2>
				<textarea className="bg-gray-900 block rounded w-[90%] px-5 h-14 mb-2 focus:outline-none focus:border-b-2 focus:border-purple-600" onChange={event =>  addDataOnTextArea(event, setInventory, data.character.inventory)} value={inventory}></textarea>
				<h2 className="block pl-2 my-10 text-center">Dinheiro</h2>
				<InputForm typeInput="text" placeholderInput="Coloque todos os valores de dinheiro aqui (HL, HO, HP, HC)" setValue={setMoney} valueOnState={money} isUpdateCharacter={true} dataDefaultValue={data.character.money} />
				<InputForm typeInput="password" placeholderInput="Digite a senha do personagem para confirmar as alterações" setValue={setPassword} />


				{ isDataSent == false ? (
					<button 
						type="submit" 
						className="w-[80%] mx-auto px-5 py-2 bg-green-500 hover:bg-green-700 disabled:opacity-50"
						disabled={password != data.character.password}
					>Atualizar personagem</button>
					) : (
						<button 
							type="submit" 
							className="w-[80%] mx-auto px-5 py-2 bg-green-500 hover:bg-green-700 disabled:opacity-50"
							disabled
						><CircleNotch weight="bold" className="mx-auto w-4 h-4 animate-spin" /></button>)}
				
			</form>
			<footer className="mt-20 md:mt-0">
				<NavBarMobile typeIntImage={1} />	
			</footer>
		</div>
	)
}

export async function getServerSideProps(context: contextProps) {

	const id = context.params.characterId

	const VITE_API_URL = process.env.VITE_API_URL
	const VITE_API_ACCESS_TOKEN = process.env.VITE_API_ACCESS_TOKEN

	const { data } = await client.query({
		query: getCharactersById,
		variables: {
			slug: id
		}
	})

	return {
		props: { data: data, id, VITE_API_URL, VITE_API_ACCESS_TOKEN},
	}
}
