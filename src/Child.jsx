import { useState, useEffect } from "react"

export function Child() {
	const [name, setName] = useState("")
	const [age, setAge] = useState(0)

	// console.log "Render" each time the component re-renders
	// useEffect(() => {
	// 	console.log("Render")
	// })

	// // console.log "Mount" when the component mounts
	// useEffect(() => {
	// 	console.log("Mount")
	// }, [])

	// useEffect(() => {
	// 	document.title = name
	// }, [name])

	// useEffect(() => {
	// 	console.log(`My name is ${name} and I am ${age} years old`)
	// }, [name, age])

	// useEffect(() => {
	// 	return () => {
	// 		console.log("unmount")
	// 	}
	// }, [])

	useEffect(() => {
		const timeOut = setTimeout(() => {
			console.log(`hello ${name}`)
		}, 1000)

		return () => {
			clearTimeout(timeOut)
		}
	}, [name])

	return (
		<div>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<br />
			<br />
			<button onClick={() => setAge((currentAge) => currentAge - 1)}>
				-
			</button>
			<span>{age}</span>
			<button onClick={() => setAge((currentAge) => currentAge + 1)}>
				+
			</button>
			<br />
			<br />
			<span>
				My name is {name} and I am {age} years old
			</span>
		</div>
	)
}
