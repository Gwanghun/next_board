import Board from "@/app/components/board/page";

export default function Page() {
	/*const router = useRouter();
	console.log(router);*/

	return (
		<>
			<div className="flex min-h-screen flex-col items-center justify-between p-24">
				<p>
					Page
				</p>
				<Board />
			</div>
		</>
	)
}