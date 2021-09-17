import Option from "../UI/Option";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ResultContainer = styled.div`
	display: flex;
	align-items: center;

	.game-result {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 4rem;

		.title {
			font-size: 3rem;
		}

		.play-again {
			margin: 1rem 0rem;
			border: none;
			background-color: white;
			border-radius: 0.5rem;
			padding: 0.5rem 0rem;
			font-size: 18px;
			width: 100%;
			cursor: pointer;
		}
	}
`;

const Result = () => {	
	const {userPick, housePick, result} = useSelector(state => state.points);

	return (
		<ResultContainer>
			<Option type={userPick} label="YOU PICKED"></Option>
			<div className="game-result">
				<span className="title">{result}</span>
				<Link to="/">
					<button className="play-again">
						<span className="text dark">PLAY  AGAIN</span>
					</button>
				</Link>
			</div>
			<Option type={housePick} label="THE HOUSE PICKED"></Option>
		</ResultContainer>
	);
};

export default Result;
