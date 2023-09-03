import React from 'react'

export default function Footer() {
	return (
		<div className=' h-96 bg-slate-900 text-white '>
			<div className='h-full flex justify-center items-center text-center'>
				<div>
					<h1 className="font-black text-4xl mb-4">Contact Me</h1>
					<div className='flex justify-center space-x-4 mb-3'>
						<a href='https://www.facebook.com/profile.php?id=100025052384163' target='_blank' className='button'>
							<ion-icon name="logo-facebook" size="large"></ion-icon>
						</a>
						<a href='https://github.com/kyawphyothu' target='_blank' className="button">
							<ion-icon name="logo-github" size="large"></ion-icon>
						</a>
					</div>
					<p className="font-semibold text-lg text-gray-400">Live in Yangon, Myanmar</p>
					<p className=" font-medium text-lg">Reach me via &nbsp;
						<a className="font-semibold text-lg text-orange-600 underline decoration-dotted hover:decoration-solid" href='mailto:x@kyawphyothu.com'>x@kyawphyothu.com</a>
					</p>
				</div>
			</div>
		</div>
	)
}
