import React from 'react'
import profile from "../assets/profile_2.png"
import Skill from '../components/Skill'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Experience from '../components/Experience'
import SocialMedia from '../components/SocialMedia'

export default function Home() {
	return (
		<div className='bg-neutral-100'>
			{/* top */}
			<div id='home' className="h-screen bg-gradient-to-tr from-gray-700 to-black text-white flex justify-center items-center text-center">
				<div className='flex flex-col items-center'>
					<img src={profile} className="w-40 h-40 rounded-full outline outline-offset-4 outline-teal-600 mb-10" />
					<h1 className='font-semibold text-4xl mb-3 first-letter:text-transparent first-letter:bg-clip-text first-letter:bg-gradient-to-tr first-letter:from-yellow-300 first-letter:to-red-500'>
						Kyaw Phyo Thu
					</h1>
					<div className='flex items-center mb-3'>
						<FontAwesomeIcon icon={faCode} className='mr-3' />
						<h1 className='text-2xl'>Web Developer</h1>
					</div>
					<p className=' text-neutral-400 mb-3'>
						Full-Stack Developer proficient in Laravel, React, and Express.
					</p>
					<div className='grid grid-cols-2 gap-3'>
						<SocialMedia />
					</div>
				</div>
			</div>

			{/* <body /> */}
			<div className='container min-h-screen py-10 px-3 max-w-screen-lg'>
				<Skill />
				<Experience />
			</div>

			{/* footer */}
			<div className=' h-96 bg-slate-900 text-white '>
				<div className='h-full flex justify-center items-center text-center'>
					<div>
						<h1 className="font-black text-4xl mb-4">Contact Me</h1>
						<div className='flex justify-center space-x-4 mb-3'>
							<SocialMedia />
						</div>
						<p className="font-semibold text-lg text-gray-400">Live in Yangon, Myanmar</p>
						<p className=" font-medium text-lg">Reach me via &nbsp;
							<a className="font-semibold text-lg text-orange-600 underline decoration-dotted hover:decoration-solid" href='mailto:kyawphyothukpt256@gmail.com'>kyawphyothukpt256@gmail.com</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
