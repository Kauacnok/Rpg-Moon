import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, FormEvent } from 'react'
import { ArrowLeft } from 'phosphor-react'
import { useGetCharacterInfooQuery, useUpdateCharacterByIdMutation, usePublishCharacterMutation } from '../graphql/generated'
import { InputForm } from '../components/InputForm'
import { Header } from '../components/Header'

export function UpdateCharacter() {
	const navigate = useNavigate()

	const { id } = useParams<{ id: string }>()

	const { data } = useGetCharacterInfooQuery({
		variables: {
			id
		}
	})

	const [updateCharacterByIdMutation, { loading, error }] = useUpdateCharacterByIdMutation({
		variables: {
		    id
		},
	});

	const [publishCharacterMutation, {}] = usePublishCharacterMutation({
		variables: {
       		id
    	},
  	});

	const [name, setName] = useState(data?.character?.name)
	const [avatarURL, setAvatarURL] = useState(data?.character?.avatarURL)
	const [characterDescription, setCharacterDescription] = useState(data?.character?.characterDescription)
	const [player, setPlayer] = useState(data?.character?.player)
	const [points, setPoints] = useState(data?.character?.points)
	const [level, setLevel] = useState(data?.character?.level)
	const [xp, setXp] = useState(data?.character?.xp)
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
			}
  		})

  		navigate(`/character/${id}`)
  	}

	return (
		<>
			<Header />
			<form onSubmit={handleSubmit} className="bg-gray-700 flex flex-col pl-2 pb-2">
				<h2 className="flex items-center pl-2 my-10 text-center">
					<Link to={`/character/${id}`} className="rounded-full cursor-pointer hover:bg-gray-500 transition"><ArrowLeft size={40}/></Link>
					<p className="mx-auto">Ficha do personagem</p>
				</h2>
				<InputForm key="1" typeInput="text" placeholderInput="Nome do personagem" setValue={setName}  />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.name}</p>
				<InputForm key="2" typeInput="url" placeholderInput="Imagem URL" setValue={setAvatarURL}  />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.avatarURL}</p>
				<InputForm key="3" typeInput="text" placeholderInput="Descrição do personagem" setValue={setCharacterDescription} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.characterDescription}</p>
				<InputForm key="4" typeInput="text" placeholderInput="Jogador" setValue={setPlayer} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.player}</p>
				<InputForm key="5" typeInput="number" placeholderInput="XP" setValue={setXp} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.xp}</p>
				<InputForm key="6" typeInput="number" placeholderInput="Pontos" setValue={setPoints} />
				<p className="bg-gray-700 px-5 py- my-5">Dado atual: {data?.character?.points}</p>
				<InputForm key="7" typeInput="number" placeholderInput="Nível" setValue={setLevel} />
				<p className="bg-gray-700 px-5 py-2">Dado atual: {data?.character?.level}</p>
				<h2 className="block pl-2 my-10 text-center">Conceitos</h2>
				<InputForm key="8" typeInput="text" placeholderInput="Caminho" setValue={setRoute} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.route}</p>
				<InputForm key="9" typeInput="text" placeholderInput="Origem" setValue={setOrigin} />
				<p className="bg-gray-700 px-5 py-2">Dado atual: {data?.character?.origin}</p>
				<InputForm key="10" typeInput="text" placeholderInput="Personalidade" setValue={setPersonality} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.personality}</p>
				<InputForm key="11" typeInput="text" placeholderInput="Motivação" setValue={setMotivation} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.motivation}</p>
				<InputForm key="12" typeInput="text" placeholderInput="Conexão" setValue={setConnection} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.connection}</p>
				<InputForm key="13" typeInput="text" placeholderInput="Problema" setValue={setProblem} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.problem}</p>
				<h2 className="block pl-2 my-10 text-center">Atributos (+2 / +2 / +1 / +1 / 0 / 0 / -1)</h2>
				<InputForm key="14" typeInput="number" placeholderInput="Força" setValue={setForce} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.force}</p>
				<InputForm key="15" typeInput="number" placeholderInput="Agilidade" setValue={setAgility} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.agility}</p>
				<InputForm key="16" typeInput="number" placeholderInput="Resistência" setValue={setResistance} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.resistance}</p>
				<InputForm key="17" typeInput="number" placeholderInput="Inteligência" setValue={setInteligence} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.inteligence}</p>
				<InputForm key="18"  typeInput="number" placeholderInput="Percepção" setValue={setPerception} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.perception}</p>
				<InputForm key="19" typeInput="number" placeholderInput="Vontade" setValue={setDisposal} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.disposal}</p>
				<InputForm key="20" typeInput="number" placeholderInput="Carisma" setValue={setCharisma} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.charisma}</p>
				<h2 className="block pl-2 my-10 text-center">Desgaste (0,1) 0000 / (2,3,4) 00 / (5,6) 0 / (7,8) 0 / (9+) X</h2>
				<InputForm key="21" typeInput="text" placeholderInput="Mental" setValue={setPsychological} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.psychological}</p>
				<InputForm key="22" typeInput="text" placeholderInput="Físico" setValue={setPhysical} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.physical}</p>
				<h2 className="block pl-2 my-10 text-center">Habilidades</h2>
				<textarea key="23" className="bg-gray-900 block rounded w-[90%] px-5 h-14 mb-2" onChange={event => setSkills(event.target.value)} ></textarea>
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.skills}</p>
				<h2 className="block pl-2 my-10 text-center">Inventário</h2>
				<textarea key="24" className="bg-gray-900 block rounded w-[90%] px-5 h-14 mb-2" onChange={event => setInventory(event.target.value)} ></textarea>
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.inventory}</p>
				<h2 className="block pl-2 my-10 text-center">Dinheiro</h2>
				<InputForm key="25" typeInput="text" placeholderInput="Coloque todos os valores de dinheiro aqui (HL, HO, HP, HC)" setValue={setMoney} />
				<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: {data?.character?.money}</p>
				<InputForm key="26" typeInput="text" placeholderInput="Digite a senha do personagem para confirmar as alterações" setValue={setPassword} />

				<button 
					type="submit" 
					className="w-[80%] mx-auto px-5 py-2 bg-green-500 hover:bg-green-700 disabled:opacity-50"
					disabled={password != data?.character?.password}
				>Criar personagem</button>
			</form>
		</>
	)
}