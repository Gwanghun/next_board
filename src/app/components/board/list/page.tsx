'use client';
import Link from "next/link";
import {useRouter, usePathname} from "next/navigation";


export default function BoardList() {
	const thisPathname: string = usePathname();
	let thisPage: string;
	thisPage = (thisPathname.split('/'))[1];

	return (
		<>
			<div className="flex flex-col items-center justify-between p-24">
				Board List Page

				<Link href={"/"+thisPage+"/write"}>
					글쓰기
				</Link>
			</div>
		</>
	)
}