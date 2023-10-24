const canvas = document.getElementById('canvas')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const colorEl = document.getElementById('color')
const ctx = canvas.getContext('2d')
let size = 10
let isPressed = false
let color = 'black'

canvas.addEventListener('mousedown', () => {
	isPressed = true
})
canvas.addEventListener('mouseup', () => {
	isPressed = false
})

canvas.addEventListener('mousemove', e => {
	if (isPressed) {
		const x = e.offsetX
		const y = e.offsetY
		drawCircle(x, y)
	}


})
function drawCircle(x, y) {
	ctx.beginPath()
	ctx.arc(x, y, size, 0, 2 * Math.PI)
	ctx.fillStyle = color
	ctx.fill()
}

increaseBtn.addEventListener('click', () => {
	size += 5
	if (size > 50) return size = 50
})
decreaseBtn.addEventListener('click', () => {
	size -= 5
	if (size < 5) return size = 5
})
colorEl.addEventListener('change', e => {
	color = colorEl.value
})
