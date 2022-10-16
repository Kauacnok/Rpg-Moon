import { useState, FormEvent } from 'react'
import { useGetHistorySessionByIdQuery, useUpdateHistoryMutation, usePublishUpdateHistoryMutation} from '../graphql/generated'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, CircleNotch } from 'phosphor-react'
import { Header } from '../components/Header'
import { InputForm } from '../components/InputForm'

export function UpdateHistory() {
	const navigate = useNavigate()

	const { id } = useParams<{ id: string }>()

	const { data, loading, error } = useGetHistorySessionByIdQuery({
   	 	variables: {
       		id
    	},
	})

	const [updateHistoryMutation] = useUpdateHistoryMutation({
    	variables: {
       		id
		}
	})

	const [publishUpdateHistoryMutation] = usePublishUpdateHistoryMutation({
		variables: {
    		id
		},
	})

	const [isDataSent, setIsDataSent] = useState(false)

	const [title, setTitle] = useState(data?.historySession?.title)
	const [text, setText] = useState(data?.historySession?.textHistory)
	const [author, setAuthor] = useState(data?.historySession?.author)
	const [password, setPassword] = useState("")

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		setIsDataSent(true)

		await updateHistoryMutation({
  			variables: {
  				title,
  				author,
  				id,
  				textHistory: text,	
  			}
  		})

		await publishUpdateHistoryMutation({
			variables: {
				id
			}
		})	

		setIsDataSent(false)	

  		navigate(`/history/session/${id}`)
	}

	function addDataOnTextArea(event: any, value: any, defaultValue: any) {
  		event.target.value == "" ? value(defaultValue) : value(event.target.value)
  	}

	return (
		<>
			<Header />
			<nav className="flex justify-between mt-10 items-center bg-gray-700 p-5">
				<Link to={`/history/session/${id}`} className="rounded-full px-5 py-2 hover:bg-gray-500 transition" > <ArrowLeft size={40} /> </Link>
			</nav>
			<main className="pl-2 py-5 bg-gray-700 border-b border-gray-500" >
				<form onSubmit={handleSubmit}>
					<InputForm key="1" typeInput="text" placeholderInput="Digite o titulo" setValue={setTitle} isUpdateCharacter={true} dataDefaultValue={data?.historySession?.title}  />
					<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { title == "" ? data?.historySession?.title : title}</p>
					<textarea key="2" className="bg-gray-900 block rounded w-[90%] px-5 h-14 mb-2" onChange={event => addDataOnTextArea(event, setText, data?.historySession?.textHistory)} ></textarea>
					<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { text == "" ? data?.historySession?.textHistory : text}</p>
					<InputForm key="3" typeInput="text" placeholderInput="Nome do autor" setValue={setAuthor} isUpdateCharacter={true} dataDefaultValue={data?.historySession?.author}  />
					<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { author == "" ? data?.historySession?.author : author}</p>
					<InputForm key="4" typeInput="text" placeholderInput="Digite a senha dos mestres para confirmar as alterações" setValue={setPassword}/>
					{ isDataSent == false ? ( 
						<button 
							type="submit" 
							className="w-[100%] mx-auto px-5 py-2 bg-green-500 hover:bg-green-700 disabled:opacity-50"
							disabled={password != "mestre8595"} 
						>Atualizar sessão</button>
					) : (
						<button 
							type="submit" 
							className="w-[100%] mx-auto px-5 py-2 bg-green-500 hover:bg-green-700 disabled:opacity-50"
							disabled
						><CircleNotch weight="bold" className="mx-auto w-4 h-4 animate-spin" /></button>)}
				</form>
			</main>
		</>
	)
}