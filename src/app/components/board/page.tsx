'use client'

import BoardList from "@/app/components/board/list/page";
import BoardWrite from "@/app/components/board/write/page";
import BoardView from "@/app/components/board/view/page";

import { useSearchParams } from 'next/navigation'

export default function Board() {
	const searchParams = useSearchParams()
	console.log(searchParams)
  const mode = searchParams.get('mode')
  console.log(mode)

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