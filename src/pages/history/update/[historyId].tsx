import { useState, FormEvent, SyntheticEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ArrowLeft, CircleNotch } from 'phosphor-react'
import { useApolloClient } from '@apollo/client'
import { GraphQLClient } from 'graphql-request'
import { gql } from "@apollo/client"
import { client } from "../../../lib/apollo"
import { updateHistoryMutationById } from '../../../graphql/mutations/updateHistory'
import { publishUpdateHistory } from '../../../graphql/mutations/publish-update-history'
import { getHistorySession } from '../../../graphql/queries/get-history-session-by-id'
import { Header } from '../../../components/Header'
import { InputForm } from '../../../components/InputForm'
import { NavBarMobile } from '../../../components/NavBarMobile'
import { historyProps } from '../[historyId]'
import { LinkNext } from '../../../components/LinkNext'

interface HistoryId {
	id: string
}

interface updateHistoryProps extends historyProps {
	VITE_API_URL: string,
	VITE_API_ACCESS_TOKEN: string,
	VITE_PASSWORD_UPDATE_HISTORY: string
}


interface contextProps {
    params: { historyId: string }
}

export default function UpdateHistory({ data, id, VITE_API_URL, VITE_API_ACCESS_TOKEN, VITE_PASSWORD_UPDATE_HISTORY }: updateHistoryProps) {
	const router = useRouter()
	
	const client = useApolloClient()

	const graphQLClient = new GraphQLClient((VITE_API_URL), {
		headers: {
			authorization: `Bearer ${VITE_API_ACCESS_TOKEN}`,
		}
	})
	
	const [isDataSent, setIsDataSent] = useState(false)

	const [title, setTitle] = useState(data.historySession.title)
	const [text, setText] = useState(data.historySession.textHistory)
	const [author, setAuthor] = useState(data.historySession.author)
	const [password, setPassword] = useState("")

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		setIsDataSent(true)

		await graphQLClient.request(updateHistoryMutationById, {
			title,
			textHistory: text,
			author,
			id
		})

		await graphQLClient.request(publishUpdateHistory, {
			id
		})

		setIsDataSent(false)	
		client.resetStore()

  		router.push(`/history/${id}`)
	}

	function addDataOnTextArea(event: SyntheticEvent, value: Function, defaultValue: string | number | undefined) {
  		let target = event.target as HTMLInputElement
  		target.value == "" ? value(defaultValue) : value(target.value)
  	}

	return (
		<>
			<Header />
			<nav className="flex justify-between mt-10 items-center bg-gray-700 p-5">
				<p className="rounded-full px-5 py-2 cursor-pointer hover:bg-gray-500 transition"><LinkNext target={`/history/session/${id}`}><ArrowLeft size={40} /></LinkNext></p>
			</nav>
			<main className="pl-2 py-5 bg-gray-700 border-b border-gray-500" >
				<form onSubmit={handleSubmit}>
					<InputForm key="1" typeInput="text" placeholderInput="Digite o titulo" setValue={setTitle} isUpdateCharacter={true} dataDefaultValue={data.historySession.title}  />
					<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { title == "" ? data.historySession.title : title}</p>
					<textarea key="2" className="bg-gray-900 block rounded w-[90%] px-5 h-14 mb-2 focus:outline-none" value={text} onChange={event => addDataOnTextArea(event, setText, data.historySession.textHistory)} ></textarea>	
					<InputForm key="3" typeInput="text" placeholderInput="Nome do autor" setValue={setAuthor} isUpdateCharacter={true} dataDefaultValue={data.historySession.author}  />
					<p className="bg-gray-700 px-5 py-2 my-5">Dado atual: { author == "" ? data.historySession.author : author}</p>
					<InputForm key="4" typeInput="text" placeholderInput="Digite a senha dos mestres para confirmar as alterações" setValue={setPassword}/>
					{ isDataSent == false ? ( 
						<button 
							type="submit" 
							className="w-[100%] mx-auto px-5 py-2 bg-green-500 hover:bg-green-700 disabled:opacity-50"
							disabled={password != VITE_PASSWORD_UPDATE_HISTORY } 
						>Atualizar sessão</button>
					) : (
						<button 
							type="submit" 
							className="w-[100%] mx-auto px-5 py-2 bg-green-500 hover:bg-green-700 disabled:opacity-50"
							disabled
						><CircleNotch weight="bold" className="mx-auto w-4 h-4 animate-spin" /></button>)}
				</form>
			</main>
			<footer className="mt-20 md:mt-0">
				<NavBarMobile typeIntImage={2} />
			</footer>
		</>
	)
}

export async function getServerSideProps(context: contextProps) {
	const id = context.params.historyId

	const VITE_API_URL = process.env.VITE_API_URL
	const VITE_API_ACCESS_TOKEN = process.env.VITE_API_ACCESS_TOKEN
	const VITE_PASSWORD_UPDATE_HISTORY = process.env.VITE_PASSWORD_UPDATE_HISTORY

	const { data } = await client.query({
		query: getHistorySession,
		variables: {
			id
		}
	})

	return {
		props: { data: data, id, VITE_API_URL, VITE_API_ACCESS_TOKEN, VITE_PASSWORD_UPDATE_HISTORY},
	}
}