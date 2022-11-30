import { InputForm } from '../components/InputForm'
import { Header } from '../components/Header'
import { ArrowLeft } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, FormEvent } from 'react'
import { useCreateNewCharacterMutation } from '../graphql/generated'
import { NavBarMobile } from '../components/NavBarMobile'

export function CreateCharacter() {
	const navigate = useNavigate()

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

	const [createNewCharacter, {data, loading }] = useCreateNewCharacterMutation()

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		await createNewCharacter({
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

		navigate(`/`)
	}

	return (
		<>
			<Header />
			<form onSubmit={handleSubmit} className="bg-gray-700 flex flex-col pl-2 pb-2">
				<h2 className="flex items-center pl-2 my-10 text-center">
					<Link to="/" className="rounded-full cursor-pointer hover:bg-gray-500 transition"><ArrowLeft size={40}/></Link>
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
				<textarea className="bg-gray-900 block rounded w-[90%] px-5 h-14 mb-2" onChange={event => setSkills(event.target.value)}></textarea>
				<h2 className="block pl-2 my-10 text-center">Inventário</h2>
				<textarea className="bg-gray-900 block rounded w-[90%] px-5 h-14 mb-2" onChange={event => setInventory(event.target.value)}></textarea>
				<h2 className="block pl-2 my-10 text-center">Dinheiro</h2>
				<InputForm typeInput="text" placeholderInput="Coloque todos os valores de dinheiro aqui (HL, HO, HP, HC)" setValue={setMoney} />
				<InputForm typeInput="text" placeholderInput="Digite uma senha" setValue={setPassword} />

				<button 
					type="submit" 
					className="w-[80%] mx-auto px-5 py-2 bg-green-500 hover:bg-green-700 disabled:opacity-50"
					disabled={loading}
				>Criar personagem</button>
			</form>
			<footer className="mt-20 md:mt-0">
				<NavBarMobile typeIntImage={1} />
			</footer>
		</>
	)
}