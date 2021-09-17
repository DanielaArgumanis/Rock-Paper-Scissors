import styled from "styled-components";

const handleColor = (type) => {
	switch (type) {
		case "Rock":
			return "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
		case "Paper":
			return "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
		case "Scissors":
			return "linear-gradient(hsl(39, 89%, 49%),hsl(40, 84%, 53%))";
	}
};

const OptionCircle = styled.figure`
	cursor: pointer;
	text-align: center;
	.option-label {
		margin-bottom: 2rem;
		font-size: 18px;
	}
	.outer-circle {
		background: ${(props) => handleColor(props.type)};
		border-radius: 100%;
		width: 200px;
		height: 200px;
		display: flex;
		justify-content: center;
		align-items: center;

		.inner-circle {
			background-color: white;
			border-radius: 100%;
			width: 160px;
			height: 160px;
			display: flex;
			justify-content: center;
			align-items: center;
			img {
				height: 70px;
				width: 70px;
			}
		}
	}
`;

const Option = (props) => {
	let image = "";
	let label = "";
	if (props.type === "Rock") {
		image = <img src="img/icon-rock.svg"></img>;
	} else if (props.type === "Scissors") {
		image = <img src="img/icon-scissors.svg"></img>;
	} else if (props.type === "Paper") {
		image = <img src="img/icon-paper.svg"></img>;
	}

	if (props.label) {
		label = (
			<div className="option-label">
				<span className="text">{props.label}</span>;
			</div>
		);
	}

	return (
		<OptionCircle type={props.type}>
			{label}
			<div
				className="outer-circle"
				onClick={
					props.selectOption ? props.selectOption.bind(null, props.type) : ""
				}
			>
				<div className="inner-circle">{image}</div>
			</div>
		</OptionCircle>
	);
};

export default Option;
