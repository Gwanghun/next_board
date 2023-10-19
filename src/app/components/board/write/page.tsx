'use client';
import {FormEvent} from "react";

export default function BoardWrite() {
	async function newPost(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log( event.currentTarget );
		console.log( event.currentTarget.boardTitle.value );

		/*const content = document.querySelector(".boardContent").value;

		let objectWithData: { title: any; content: any };
		objectWithData = {
			content: document.querySelector(".boardContent").value,
			title: document.querySelector(".boardTitle").value,
		};
		fetch('/api/newPost', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(objectWithData),
		}).then(r => r.json()).then(data => {
			console.log(data);
		});*/
	}

	return (
		<>
			<div>
				<p> Board Write Page </p>
			</div>
			<div className="w-full p-5">
				<div className="writeForm">
					<form onSubmit={newPost}>
						<div className="tr">
							<input type="text" className="boardTitle" name="boardTitle" placeholder="제목" minLength={3} required />
						</div>

						<div className="tr">
							<textarea className="boardContent" name="boardContent" placeholder="내용" required></textarea>
						</div>

						<div className="tr text-center">
							<button
								type="submit"
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
							>
								글 등록
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

