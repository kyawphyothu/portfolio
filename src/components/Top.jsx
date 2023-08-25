import React from 'react'
import profile from "../assets/profile.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default function Top() {
	return (
		<div className="h-screen bg-gradient-to-tr from-gray-700 to-black text-white flex justify-center items-center text-center">
			<div className='flex flex-col items-center'>
				<img src={profile} className="w-40 h-40 rounded-full outline outline-offset-4 outline-teal-600 mb-10" />
				<h1 className='font-semibold text-4xl mb-3'>
					<span className='text-transparent bg-clip-text bg-gradient-to-tr from-yellow-300 to-red-500'>K</span>yaw Phyo Thu
				</h1>
				<p className='flex items-center mb-3'>
					<FontAwesomeIcon icon={faCode} className='mr-3' />
					<h1 className='text-2xl'>Web Developer</h1>
				</p>
				<p className=' text-neutral-400 mb-3'>
					Full-Stack Developer proficient in Laravel, React, and Express.
				</p>
				<div className='grid grid-cols-2 gap-3'>
					<a href='https://www.facebook.com/profile.php?id=100025052384163' target='_blank' className='button'>
						<ion-icon name="logo-facebook" size="large"></ion-icon>
					</a>
					<a href='https://github.com/kyawphyothu' target='_blank' className="button">
						<ion-icon name="logo-github" size="large"></ion-icon>
					</a>
				</div>
			</div>
		</div>
	)
}
