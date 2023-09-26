'use client'

import BoardList from "@/app/components/board/list/page";
import BoardWrite from "@/app/components/board/write/page";
import BoardView from "@/app/components/board/view/page";

import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'

export default function Board() {
	const searchParams = useSearchParams()
  let mode = searchParams.get('mode')
	mode = mode === null ? 'list' : mode
	console.log(mode);

	let router = useRouter();
	console.log(router);

	return (
		<>
			<div>
			{
				mode === 'list' ? <BoardList /> : null
			}
			{
				mode === 'write' ? <BoardWrite /> : null
			}
			{
				mode === 'view' ? <BoardView /> : null
			}
			</div>
		</>
	)
}