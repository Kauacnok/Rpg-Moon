import type { NextApiRequest, NextApiResponse } from 'next'
import { GraphQLClient } from 'graphql-request'
import { gql } from "@apollo/client"
import { client } from "../../lib/apollo"
import { deleteDices } from '../../graphql/mutations/delete-roll-dice'
import { unpublishDices } from '../../graphql/mutations/unpublish-roll-dice'
import { parseISO, differenceInDays } from 'date-fns'

interface DiceProps {
	id: string,
	createdAt: string
}

declare var process : {
	env: {
		VITE_API_URL: string,
		VITE_API_ACCESS_TOKEN: string
	}
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

	const graphQLClient = new GraphQLClient((process.env.VITE_API_URL), {
		headers: {
			authorization: `Bearer ${process.env.VITE_API_ACCESS_TOKEN}`,
		}
	})

	const { data } = await client.query({
		query: gql`
			query GetDices {
				rollDicess(orderBy: createdAt_DESC) {
					id
					createdAt
				}
			}
		`
	})

	data.rollDicess.map(async (dice: DiceProps) => {
		if (dice.id !== "cl9d7peso125o0blu3y9uwtc5") {
			const createdAtDate = parseISO(dice.createdAt)
			const DateNow = Date.now()

			const differenceInDaysResult = differenceInDays(DateNow, createdAtDate)

			if (differenceInDaysResult >= 2) {
				await graphQLClient.request(unpublishDices, {
					id: dice.id
				})

				await graphQLClient.request(deleteDices, {
					id: dice.id
				})
			}
		}
	})

	return res.status(202).send("data deleted")
}
