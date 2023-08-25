import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Article() {
	const { id } = useParams();
	const navigate = useNavigate();

	return (
		<div className='container mt-6 max-w-screen-lg p-3'>
			<button className='mb-3 cursor-pointer' onClick={() => {
				navigate("/")
			}}>
				<ion-icon name="arrow-back-outline"></ion-icon>
			</button>
			<h1 className='text-xl font-semibold mb-6'>Ubuntu တွင် conky ထည့်သွင်းခြင်း</h1>
			<div>
				<p className="leading-relaxed">
					ပထမဦးစွာ မိမိ၏စက်တွင် conky ထည့်သွင်းရန် Terminal တွင် sudo apt install conky-all ဟုရိုက်၍ conky ကို install လုပ်ပါ။
					ထို့နောက် touch ~/.conkyrc ကိုရိုက်၍ file အသစ် create လုပ်ပါ။
					ထို့နောက် gedit ~/.conkyrc ကိုရိုက်၍ Text editor ဖွင့်ပါ။ Text editor ပေါ်လာပါက အောက်ပါ Link မှ စာများကို copy ယူ၍ထည့်ပြီး save ပါ။
				</p>
				<button className="p-3 bg-orange-500 rounded-lg my-3">
					<a href='https://github.com/kyawphyothu/conkyrc/blob/main/.conkyrc1' target='_blank'>Link</a>
				</button>
				<p className='leading-relaxed'>
					save ပြီးလျှင် Startup Applications ကို ရှာ၍ဖွင့်ပါ။ Add ကိုနှိပ်ပါ။ Name တွင်မိမိလိုသလိုပေးပါ။ Command တွင် sh -c "sleep 10; conky;" ကိုရိုက်ထည့်ပါ။ မိမိစက်အား restart ပြန်လုပ်ကြည့်ပါ။
				</p>
			</div>
		</div>
	)
}
