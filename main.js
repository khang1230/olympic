var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var color = "grey"




ctx.beginPath()
ctx.strokeStyle = "blue"
ctx.lineWidth = 5
ctx.arc(330,210,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "black"
ctx.lineWidth = 5
ctx.arc(240,210,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "red"
ctx.lineWidth = 5
ctx.arc(420,210,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "yellow"
ctx.lineWidth = 5
ctx.arc(285,260,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "green"
ctx.lineWidth = 5
ctx.arc(375,260,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "grey"
ctx.lineWidth = 5
ctx.rect(150,143,430,200,)
ctx.stroke()