import { createSlice } from "@reduxjs/toolkit";

const selectHousePick = () => {
	let rand = Math.random();
	if (rand < 0.33) {
		return "Rock";
	} else if (rand < 0.66) {
		return "Paper";
	} else {
		return "Scissors";
	}
}

const evaluateWin = (option1, option2) => {
    if (option1 === option2) {
        return "IT'S A TIE!";
    }
    if ((option1 === "Paper" && option2 === "Rock") || (option1 === "Scissors" && option2 === "Paper") || (option1 === "Rock" && option2 === "Scissors")) {
        return "YOU WIN!";
    }
    return "YOU LOSE";
}

const pointsSlice = createSlice({
	name: "points",
	initialState: {
		userPick: null,
		housePick: null,
		points: 0,
        result: null
	},
	reducers: {
		play(state, action) {
            state.userPick = action.payload;
			state.housePick = selectHousePick();
            state.result = evaluateWin(state.userPick, state.housePick);
            if (state.result === 'YOU WIN!') {
                state.points++;
            } else if (state.result === "YOU LOSE") {
                state.points--;
            }
		},
	},
});

export const pointsActions = pointsSlice.actions;

export default pointsSlice;
