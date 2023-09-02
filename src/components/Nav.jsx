import React, { useEffect, useState } from 'react'

export default function Nav() {
	const [isScroll, setIsScroll] = useState(false);

	useEffect(() => {
		const userScroll = () => {
			if(scrollY > 64){
				setIsScroll(true);
				console.log("yes")
			} else {
				setIsScroll(false);
				console.log("no")
			}
		}

		window.addEventListener("scroll", userScroll);

		return () => {
			window.removeEventListener('scroll', userScroll);
		};
	}, [])


	return (
		<nav className={"fixed top-0 p-4 w-screen " + (isScroll ? "bg-[#800020] bg-opacity-90": "")}>
		<div className="container mx-auto flex justify-between">
			<h1 className="text-white text-2xl">Portfolio</h1>
		</div>
		</nav>
	)
}
