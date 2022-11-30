import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, FormEvent } from 'react'
import { ArrowLeft, CircleNotch  } from 'phosphor-react'
import { useApolloClient } from '@apollo/client'
import { useGetCharacterInfooQuery, useUpdateCharacterByIdMutation, usePublishUpdateCharacterMutation } from '../graphql/generated'
import { InputForm } from '../components/InputForm'
import { Header } from '../components/Header'
import { NavBarMobile } from '../components/NavBarMobile'

export function UpdateCharacter() {
	const navigate = useNavigate()

	const { id } = useParams<{ id: string }>()

	const client = useApolloClient()

	const { data } = useGetCharacterInfooQuery({
		variables: {
			id
		}
	})

	const [updateCharacterByIdMutation, { loading, error }] = useUpdateCharacterByIdMutation({
		variables: {
		    id
		},
	})

  	const [publishUpdateCharacterMutation] = usePublishUpdateCharacterMutation({
 		variables: {
 	    	id: id || 'ops'
 		},
 	})

 	const [isDataSent, setIsDataSent] = useState(false)

	const [name, setName] = useState(data?.character?.name)
	const [avatarURL, setAvatarURL] = useState(data?.character?.avatarURL)
	const [characterDescription, setCharacterDescription] = useState(data?.character?.characterDescription)
	const [player, setPlayer] = useState(data?.character?.player)
	const [points, setPoints] = useState(data?.character?.points)
	const [level, setLevel] = useState(data?.character?.level)
	const [xp, setXp] = useState(data?.character?.xp)
	const [xpSpent, setXpSpent] = useState(data?.character?.xpSpent)
	const [force, setForce] = useState(data?.character?.force)
	const [agility, setAgility] = useState(data?.character?.agility)
	const [resistance, setResistance] = useState(data?.character?.resistance)
	const [inteligence, setInteligence] = useState(data?.character?.inteligence)
	const [perception, setPerception] = useState(data?.character?.perception)
	const [disposal, setDisposal] = useState(data?.character?.disposal)
	const [charisma, setCharisma] = useState(data?.character?.charisma)
	const [skills, setSkills] = useState(data?.character?.skills)
	const [route, setRoute] = useState(data?.character?.route)
	const [origin, setOrigin] = useState(data?.character?.origin)
	const [personality, setPersonality] = useState(data?.character?.personality)
	const [motivation, setMotivation] = useState(data?.character?.motivation)
	const [connection, setConnection] = useState(data?.character?.connection)
	const [problem, setProblem] = useState(data?.character?.problem)
	const [physical, setPhysical] = useState(data?.character?.physical)
	const [psychological, setPsychological] = useState(data?.character?.psychological)
	const [inventory, setInventory] = useState(data?.character?.inventory)
	const [money, setMoney] = useState(data?.character?.money)
	const [password, setPassword] = useState("")

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		setIsDataSent(true)

  		await updateCharacterByIdMutation({
  			variables: {
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
				xpSpent: Number(xpSpent)
			}
  		})

  		await publishUpdateCharacterMutation({
  			variables: {
  				id: id || 'ops'
  			}
  		})

  		setIsDataSent(false)
  		client.resetStore()

  		navigate(`/character/${id}`)
  	}

  	function addDataOnTextArea(event: any, value: any, defaultValue: any) {
  		event.target.value == "" ? value(defaultValue) : value(event.target.value)
  	}

	return (
		<>
			<Header />
			<form onSubmit={handleSubmit} className="bg-gray-700 flex flex-col pl-2 pb-2">
				<h2 className="flex items-center pl-2 my-10 text-center">
					<Link to={`/character/${id}`} className="rounded-full cursor-pointer hover:bg-gray-500 transition"><ArrowLeft size={40}/></Link>
					<p className="mx-auto">Ficha do personagem</p>
				</h2>
				<InputForm key="1" typeInput="text" placeholderInput="Nome do personagem" setValue={setName} isUpdateCharacter={true} dataDefaultValue={data?.character?.name}  />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { name == "" ? data?.character?.name : name}</p>
				<InputForm key="2" typeInput="url" placeholderInput="Imagem URL" setValue={setAvatarURL} isUpdateCharacter={true} dataDefaultValue={data?.character?.avatarURL} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { avatarURL == "" ? data?.character?.avatarURL : avatarURL}</p>
				<InputForm key="3" typeInput="text" placeholderInput="Descrição do personagem" setValue={setCharacterDescription} isUpdateCharacter={true} dataDefaultValue={data?.character?.characterDescription} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { characterDescription == "" ? data?.character?.characterDescription : characterDescription}</p>
				<InputForm key="4" typeInput="text" placeholderInput="Jogador" setValue={setPlayer} isUpdateCharacter={true} dataDefaultValue={data?.character?.player} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { player == "" ? data?.character?.player : player}</p>
				<InputForm key="98" typeInput="number" placeholderInput="XP" setValue={setXp} isUpdateCharacter={true} dataDefaultValue={data?.character?.xp} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { xp == undefined ? data?.character?.xp : xp}</p>
				<InputForm key="5" typeInput="number" placeholderInput="XP gasto" setValue={setXpSpent} isUpdateCharacter={true} dataDefaultValue={data?.character?.xpSpent} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { xpSpent == undefined ? data?.character?.xpSpent : xpSpent}</p>
				<InputForm key="6" typeInput="number" placeholderInput="Pontos" setValue={setPoints} isUpdateCharacter={true}  dataDefaultValue={data?.character?.points} />
				<p className="bg-gray-700 px-5 py- my-5">Dado atual: { points == undefined ? data?.character?.points : points}</p>
				<InputForm key="7" typeInput="number" placeholderInput="Nível" setValue={setLevel} isUpdateCharacter={true}  dataDefaultValue={data?.character?.level} />
				<p className="bg-gray-700 px-5 py-2">Dado atual: { level == undefined ? data?.character?.level : level}</p>
				<h2 className="block pl-2 my-10 text-center">Conceitos</h2>
				<InputForm key="8" typeInput="text" placeholderInput="Caminho" setValue={setRoute} isUpdateCharacter={true} dataDefaultValue={data?.character?.route} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { route == "" ? data?.character?.route : route}</p>
				<InputForm key="9" typeInput="text" placeholderInput="Origem" setValue={setOrigin} isUpdateCharacter={true} dataDefaultValue={data?.character?.origin} />
				<p className="bg-gray-700 px-5 py-2">Dado atual: { origin == "" ? data?.character?.origin : origin}</p>
				<InputForm key="10" typeInput="text" placeholderInput="Personalidade" setValue={setPersonality} isUpdateCharacter={true} dataDefaultValue={data?.character?.personality} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { personality == "" ? data?.character?.personality : personality}</p>
				<InputForm key="11" typeInput="text" placeholderInput="Motivação" setValue={setMotivation} isUpdateCharacter={true} dataDefaultValue={data?.character?.motivation} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { motivation == "" ? data?.character?.motivation : motivation}</p>
				<InputForm key="12" typeInput="text" placeholderInput="Conexão" setValue={setConnection} isUpdateCharacter={true} dataDefaultValue={data?.character?.connection} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { connection == "" ? data?.character?.connection : connection}</p>
				<InputForm key="13" typeInput="text" placeholderInput="Problema" setValue={setProblem} isUpdateCharacter={true} dataDefaultValue={data?.character?.problem} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { problem == "" ? data?.character?.problem : problem}</p>
				<h2 className="block pl-2 my-10 text-center">Atributos (+2 / +2 / +1 / +1 / 0 / 0 / -1)</h2>
				<InputForm key="14" typeInput="number" placeholderInput="Força" setValue={setForce} isUpdateCharacter={true} dataDefaultValue={data?.character?.force} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { force == undefined ? data?.character?.force : force}</p>
				<InputForm key="15" typeInput="number" placeholderInput="Agilidade" setValue={setAgility} isUpdateCharacter={true} dataDefaultValue={data?.character?.agility} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { agility == undefined ? data?.character?.agility : agility}</p>
				<InputForm key="16" typeInput="number" placeholderInput="Resistência" setValue={setResistance} isUpdateCharacter={true} dataDefaultValue={data?.character?.resistance} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { resistance == undefined ? data?.character?.resistance : resistance}</p>
				<InputForm key="17" typeInput="number" placeholderInput="Inteligência" setValue={setInteligence} isUpdateCharacter={true} dataDefaultValue={data?.character?.inteligence} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { inteligence == undefined ? data?.character?.inteligence : inteligence}</p>
				<InputForm key="18"  typeInput="number" placeholderInput="Percepção" setValue={setPerception} isUpdateCharacter={true} dataDefaultValue={data?.character?.perception} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { perception == undefined ? data?.character?.perception : perception}</p>
				<InputForm key="19" typeInput="number" placeholderInput="Vontade" setValue={setDisposal} isUpdateCharacter={true} dataDefaultValue={data?.character?.disposal} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { disposal == undefined ? data?.character?.disposal : disposal}</p>
				<InputForm key="20" typeInput="number" placeholderInput="Carisma" setValue={setCharisma}isUpdateCharacter={true} dataDefaultValue={data?.character?.charisma} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { charisma == undefined ? data?.character?.charisma : charisma}</p>
				<h2 className="block pl-2 my-10 text-center">Desgaste (0,1) 0000 / (2,3,4) 00 / (5,6) 0 / (7,8) 0 / (9+) X</h2>
				<InputForm key="21" typeInput="text" placeholderInput="Mental" setValue={setPsychological}isUpdateCharacter={true} dataDefaultValue={data?.character?.psychological} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { psychological == "" ? data?.character?.psychological : psychological}</p>
				<InputForm key="22" typeInput="text" placeholderInput="Físico" setValue={setPhysical} isUpdateCharacter={true} dataDefaultValue={data?.character?.physical} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { physical == "" ? data?.character?.physical : physical}</p>
				<h2 className="block pl-2 my-10 text-center">Habilidades</h2>
				<textarea key="23" className="bg-gray-900 block rounded w-[90%] px-5 h-14 mb-2" onChange={event => addDataOnTextArea(event, setSkills, data?.character?.skills)} ></textarea>
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { skills == "" ? data?.character?.skills : skills}</p>
				<h2 className="block pl-2 my-10 text-center">Inventário</h2>
				<textarea key="24" className="bg-gray-900 block rounded w-[90%] px-5 h-14 mb-2" onChange={event =>  addDataOnTextArea(event, setInventory, data?.character?.inventory)} ></textarea>
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { inventory == "" ? data?.character?.inventory : inventory}</p>
				<h2 className="block pl-2 my-10 text-center">Dinheiro</h2>
				<InputForm key="25" typeInput="text" placeholderInput="Coloque todos os valores de dinheiro aqui (HL, HO, HP, HC)" setValue={setMoney} isUpdateCharacter={true} dataDefaultValue={data?.character?.money} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { money == "" ? data?.character?.money : money}</p>
				<InputForm key="26" typeInput="text" placeholderInput="Digite a senha do personagem para confirmar as alterações" setValue={setPassword} />


				{ isDataSent == false ? (
					<button 
						type="submit" 
						className="w-[80%] mx-auto px-5 py-2 bg-green-500 hover:bg-green-700 disabled:opacity-50"
						disabled={password != data?.character?.password}
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
		</>
	)
}