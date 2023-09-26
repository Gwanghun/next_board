import BoardList from "@/app/components/board/list/page";
import BoardWrite from "@/app/components/board/write/page";
import BoardView from "@/app/components/board/view/page";

import "@/asset/css/nextBoard.css";
// export default function Board({mode}: {mode:string}) {
export default function Board(props: any) {
	const mode = props.mode;
	return (
		<>
			<div className="flex flex-col items-center justify-between w-full">
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