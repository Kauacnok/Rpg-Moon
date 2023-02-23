import Link from 'next/link'

interface LinkNextProps {
	target: string,
	children: any
}

export function LinkNext(props: LinkNextProps) {
	return (
		<Link href={props.target}>{props.children}</Link>
	)
}