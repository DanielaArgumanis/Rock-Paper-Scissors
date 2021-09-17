import React from "react";
import "./App.css";
import Main from "./pages/Main";
import Header from "./components/Header";
import { Route } from "react-router";
import Result from "./pages/Result";
import styled from "styled-components";

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 4rem;
`;

function App() {
	return (
		<Content>
			<Header />
			<Route path="/" exact>
				<Main />
			</Route>
			<Route path="/result">
				<Result />
			</Route>
		</Content>
	);
}

export default App;
