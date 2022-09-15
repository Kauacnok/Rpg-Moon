import { parseISO, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Header } from '../components/Header'
import { useGetHistorySessionByIdQuery } from '../graphql/generated'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'phosphor-react'

export function HistoryCardFull() {

	const { id } = useParams<{ id: string }>()

	const { data, loading, error } = useGetHistorySessionByIdQuery({
   	 	variables: {
       		id
    	},
	});

	const updatedAtDate = parseISO(data?.historySession?.updatedAt || "2022-09-13T01:20:14.680367+00:00")

	const formattedDate = format(updatedAtDate, "'dia' dd 'de' MMMM', às ' HH:mm", {
		locale: ptBR
	})

	return (
		<>
			<Header />
			<nav className="flex justify-between mt-10 items-center bg-gray-700 p-5">
				<Link to="/history" className="rounded-full px-5 py-2 hover:bg-gray-500 transition" > <ArrowLeft size={40} /> </Link>
				<Link to={`/history/session/update/${id}`} className="rounded px-5 py-2 bg-green-500 hover:bg-green-700 transition">Editar</Link>
			</nav>
			<main className="pl-2 py-5 bg-gray-700 border-b border-gray-500" >	
				<h1 className="text-center mb-4">{data?.historySession?.title}</h1>
				<textarea value={data?.historySession?.textHistory} readOnly className="bg-gray-700 w-[90%]"></textarea>
				<p className="my-4">Autor do texto: {data?.historySession?.author}</p>
				<p className="my-4">Atualizado no {formattedDate}</p>
			</main>
		</>
	)
}