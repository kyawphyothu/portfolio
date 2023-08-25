import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Top from "./components/Top";
import Home from "./pages/Home";
import Article from "./pages/Article";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/articles/:id" element={<Article />} />
		</Routes>
	)
  }