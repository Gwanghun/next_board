'use client';
export default function BoardList() {
	function clickTest() {
		fetch('/api/newPost', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ message: 'Hello from Next.js!' })
		}).then((res) => {
			console.log(res);
			if (res.ok) {

				return res.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
	}

	return (
		<>
			<div className="flex flex-col items-center justify-between p-24">
				Board List Page

				<button type={"button"} onClick={clickTest}>
					글쓰기
				</button>
			</div>
		</>
	)
}