import React from 'react'
import JsPng from "../assets/skills/js.png"

export default function SkillBox({ name, image, status }) {
	return (
		<div className=" flex items-center py-2 px-3 rounded-lg border-2 cursor-pointer hover:bg-gray-600 hover:bg-opacity-5 group">
			<img src={image} className="w-10 mr-2" />
			<h1 className="font-bold text-sm">
				{name}
				<h1 className="text-xs text-gray-500 group-hover:block hidden">{status}</h1>
			</h1>
		</div>
	)
}
