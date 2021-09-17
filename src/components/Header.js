import { useSelector } from "react-redux";
import styled from "styled-components";

const HeaderBox = styled.div`
	border: solid white 1px;
	background-color: transparent;
	display: flex;
	justify-content: space-between;
	padding: 1.5rem;
	border-radius: 1rem;
	max-width: 600px;
    width: 100%;
	margin-bottom: 2rem;

	.title-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		color: white;
		font-size: 2rem;
	}

	.score-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: white;
		border-radius: 1rem;
		padding: 0rem 4rem;

		.text {
			font-size: 1rem;
		}

		.title {
			font-size: 4rem;
		}
	}
`;

const Header = () => {
	const score = useSelector(state => state.points.points);
	return (
		<HeaderBox>
			<div className="title-container">
				<span className="title">ROCK</span>
				<span className="title">PAPER</span>
				<span className="title">SCISSORS</span>
			</div>
			<div className="score-container">
				<span className="text dark">S C O R E</span>
				<span className="title dark">{score}</span>
			</div>
		</HeaderBox>
	);
};

export default Header;
