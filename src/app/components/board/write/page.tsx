export default function BoardWrite() {
	return (
		<>
			<div>
				<p> Board Write Page </p>
			</div>
			<div className="w-full p-5">
				<form>
					<div className="writeForm">
						<div className="tr">
							<input type="text" className="boardTitle" placeholder="제목" />
						</div>

						<div className="tr">
							<textarea className="boardContent" placeholder="내용"></textarea>
						</div>

						<div className="tr text-center">
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
								글 등록
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}