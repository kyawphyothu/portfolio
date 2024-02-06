import React from 'react'

export default function SocialMedia() {
	return (
		<>
			<span className='p-2 flex justify-center bg-zinc-600 rounded-full hover:bg-blue-500 transition-all ease-linear duration-300'>
				<a href='https://www.facebook.com/profile.php?id=100025052384163' target='_blank' className='flex items-center'>
					<ion-icon name="logo-facebook" size="large"></ion-icon>
				</a>
			</span>
			<span className='p-2 bg-zinc-600 rounded-full hover:bg-gray-500 transition-all ease-linear duration-300'>
				<a href='https://github.com/kyawphyothu' target='_blank' className="flex items-center">
					<ion-icon name="logo-github" size="large"></ion-icon>
				</a>
			</span>
		</>
	)
}
