// imports without {} can be any name and are just the default export from a js file
// imports with the {} must be the same name as they are in the js file
import React, {useContext} from 'react'
import '../App.scss';
import {HomeContext} from '../providers/home-provider'

const HomeApp = (props) => {
	const global = useContext(HomeContext)
	const state = global.state
	const dispatch = global.dispatch
	const btnUsed = state.btnUsed ? state.btnUsed : false
	const textUsed = state.mainText ? state.mainText : ""

	let btnText = btnUsed ? "It has been pressed" : "It is unpressed"

	const useBtn = () => {
		dispatch({type: "toggle_btn_used"})
	}

	const updateText = (event) => {
		dispatch({type: "update_main_text",
			payload: {
				text: event.target.value
		}})
	}

	return (
		<div className="AppBacking">
			<div className="Card">
				<h1>State Management Test</h1>
				<div className="Content">
					<div className="Example">
						<button onClick={useBtn}>Press me!</button>
						<h2>{btnText}</h2>
					</div>
					<div className="Example">
						<input type="text" id="theText" name="theText" value={textUsed} onChange={updateText}></input>
						<h2>{textUsed}</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeApp