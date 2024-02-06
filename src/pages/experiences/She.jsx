import React from 'react'
import { useNavigate } from 'react-router-dom'
import she_0 from "../../assets/she/she_0.jpg"
import she_1 from "../../assets/she/she_1.jpg"
import she_2 from "../../assets/she/she_2.jpg"

export default function She() {
	const navigate = useNavigate();

	return (
		<div className='h-screen bg-neutral-100'>
			<div className='container py-4 px-3'>
				<div className='flex items-center gap-2 cursor-pointer' onClick={() => navigate(-1)}>
					<ion-icon name="arrow-back-outline"></ion-icon>
					<p>Back</p>
				</div>

				<div className='mt-4 grid gap-2 md:grid-cols-4 grid-cols-1'>
					<img src={she_0} />
					<img src={she_1} />
					<img src={she_2} />
				</div>
			</div>
		</div>
	)
}
