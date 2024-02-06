import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import She from "./pages/experiences/She";

export default function App() {
	return (
		<>
			{/* <Nav /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/exp/she" element={<She />} />
				{/* <Route path="/articles/:id" element={<Article />} /> */}
			</Routes>
		</>
	)
  }