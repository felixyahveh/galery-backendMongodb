import exp from 'express';

const rutas = exp.Router();

rutas.get('/', (req,res) => {
	res.send('<h1>Hello World</h1>')
})


rutas.post('/image', (req,res) => {
	console.log(req.body.img);
	let x = {
		"message": 'Sended'
	}
	res.json(x);
})

export default rutas;