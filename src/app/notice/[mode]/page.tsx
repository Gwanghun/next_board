import Board from "@/app/components/board/page";

export default function Page(props: any) {
	const mode = props.params.mode;
	console.log(mode);

	return (
		<>
			<div className="flex min-h-screen flex-col items-center justify-between">
				<Board mode={mode} />
			</div>
		</>
	)
}