import { useEffect, useState } from "react"
import { Child } from "./Child"

function App() {
	const [show, setShow] = useState(true)

	const childComponent = show ? <Child /> : null



	return (
		<div>
			<button onClick={() => setShow((currentShow) => !currentShow)}>
				Show/Hide
			</button>
			<br />
			{childComponent}
		</div>
	)
}

export default App
