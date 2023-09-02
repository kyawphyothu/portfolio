import React from 'react'
import SkillBox from './SkillBox'
import htmlPng from "../assets/skills/html.png";
import cssPng from "../assets/skills/css.png";
import jsPng from "../assets/skills/js.png";
import phpPng from "../assets/skills/php.png";
import laravelPng from "../assets/skills/laravel.png";
import reactPng from "../assets/skills/react.png";
import reactnativePng from "../assets/skills/reactnative.png";
import nodePng from "../assets/skills/node.png";
import tailwindcssPng from "../assets/skills/tailwindcss.png";
import bootstrapPng from "../assets/skills/bootstrap.png";
import mysqlPng from "../assets/skills/mysql.png";
import mongodbPng from "../assets/skills/mongodb.png";

export default function Skill() {
	const skills = [
		{
			name: "HTML",
			image: htmlPng,
			status: "Expert",
		},
		{
			name: "CSS",
			image: cssPng,
			status: "Expert",
		},
		{
			name: "JavaScript",
			image: jsPng,
			status: "Advanced",
		},
		{
			name: "PHP",
			image: phpPng,
			status: "Intermediate",
		},
		{
			name: "Laravel",
			image: laravelPng,
			status: "Intermediate",
		},
		{
			name: "ReactJS",
			image: reactPng,
			status: "Advanced",
		},
		{
			name: "React Native",
			image: reactnativePng,
			status: "Beginner",
		},
		{
			name: "NodeJS",
			image: nodePng,
			status: "Advanced",
		},
		{
			name: "TailwindCSS",
			image: tailwindcssPng,
			status: "Intermediate",
		},
		{
			name: "Bootstrap",
			image: bootstrapPng,
			status: "Advanced",
		},
		{
			name: "MySQL",
			image: mysqlPng,
			status: "Intermediate",
		},
		{
			name: "MongoDB",
			image: mongodbPng,
			status: "Intermediate",
		},
	]

	return (
		<div className="mb-5">
			<div className="flex items-baseline mb-3">
				<h1 className="font-extrabold text-3xl text-slate-400">My Skills</h1>
				<hr className="flex-grow" />
			</div>
			<div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{
					skills.map((s) => {
						return <SkillBox name={s.name} image={s.image} status={s.status} />;
					})
				}
			</div>
		</div>
	)
}
