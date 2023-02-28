import { gql } from "@apollo/client"
import { client } from "../../lib/apollo"
import { getDices } from '../../graphql/queries/get-dices'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

	const { data } = await client.query({
		query: getDices
	})

	return res.status(200).send(data)
}