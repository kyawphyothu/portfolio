import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Main() {
	const navigate = useNavigate();

	return (
		<div className='container min-h-screen py-10 px-3 max-w-screen-lg'>
			{/* articles */}
			<div>
				<h1 className="text-2xl mb-3 font-bold">Articles</h1>
				<div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
					{[1].map((i) => {
						return (
							<div className="w-100 border-2 rounded-md p-4">
								<h1 className=" text-lg font-semibold mb-2 cursor-pointer" onClick={() => navigate(`/articles/${i}`)}>Ubuntu တွင် conky ထည့်သွင်းခြင်း</h1>
								<p className='line-clamp-3'>ပထမဦးစွာ မိမိ၏စက်တွင် conky ထည့်သွင်းရန် Terminal တွင် sudo apt install conky-all ဟုရိုက်၍ conky ကို install လုပ်ပါ။
					ထို့နောက် touch ~/.conkyrc ကိုရိုက်၍ file အသစ် create လုပ်ပါ။
					ထို့နောက် gedit ~/.conkyrc ကိုရိုက်၍ Text editor ဖွင့်ပါ။ Text editor ပေါ်လာပါက အောက်ပါ Link မှ စာများကို copy ယူ၍ထည့်ပြီး save ပါ။</p>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
