import Option from "../UI/Option";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { pointsActions } from "../store/points-slice";

const Options = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	.upper-options {
		display: flex;
		justify-content: center;
	}

	.lower-options {
		display: flex;
		justify-content: center;
	}
`;

const Main = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const play = (selection) => {
		dispatch(pointsActions.play(selection));
		history.push("/result");
	};

	return (
		<Options>
			<div className="upper-options">
				<Option type="Rock" selectOption={play}></Option>
				<Option type="Scissors" selectOption={play}></Option>
			</div>
			<div className="lower-options">
				<Option type="Paper" selectOption={play}></Option>
			</div>
		</Options>
	);
};

export default Main;
