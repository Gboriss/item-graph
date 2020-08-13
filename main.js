

let canvas = document.getElementById('canvas') 
let ctx = canvas.getContext('2d')

let vertices = [
	{x: 90,  y: 380},
	{x: 140, y: 360},
	{x: 180, y: 380},
	{x: 200, y: 330},
	{x: 260, y: 340},
	{x: 280, y: 380},
	{x: 340, y: 360},
	{x: 390, y: 400},
	{x: 450, y: 380},	
]

function drawVertices(data) {
	for(let i = 0; i < data.length; i++) {
		let nextX = data[i].x
		let nextY = data[i].y

		ctx.beginPath()
		ctx.arc(nextX, nextY, 5, 0, Math.PI * 2, true)
		ctx.fillStyle = "white"
		ctx.strokeStyle = "black"
		ctx.fill()
		ctx.stroke()		
	}
}

function drawGraph(data) {
	ctx.clearRect(0, 0, 500, 500)

	for(let i = 0; i < data.length; i++) {
		if (i != data.length - 1) {
			let currentX = data[i].x
			let currentY = data[i].y
			let nextX = data[i + 1].x
			let nextY = data[i + 1].y

			ctx.beginPath()
			ctx.moveTo(currentX, currentY)
			ctx.lineTo(nextX, nextY)
			ctx.strokeStyle = "black"
			ctx.stroke()	
		}
	}
}

drawGraph(vertices)
drawVertices(vertices)