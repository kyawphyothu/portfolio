import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Article from "./pages/Article";

export default function App() {
	return (
		<>
			{/* <Nav /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/articles/:id" element={<Article />} />
			</Routes>
		</>
	)
  }