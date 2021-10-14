import express from 'express';
const router = express.Router();

import Producto from '../models/producto'
const { verificarAuth, verificaRol } = require("../middlewares/autenticacion")

//AGREGAR PRODUCTO
router.post('/nuevo-producto', [verificarAuth, verificaRol], async (req, res) => {
    const body = req.body;
    try {
        const prod = await Producto.create(body);
        res.status(200).json(prod);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        })
    }
});

// AGREGAR PRODUCTO
router.get('/producto/:id',async(req, res) => {
    const _id = req.params.id
    try {
        const prod = await Producto.findOne({_id});
        res.json(prod);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            err
        });
    }
});

// OBTENER TODOS LOS PRODUCTOS
router.get('/producto', async(req, res) => {

    try {
        const prod = await Producto.find();
        res.json(prod);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        })
    }
});

router.put("/producto/:id", [verificarAuth, verificaRol], async (req, res) => {
    let id = req.params.id;
    let body = req.body;

    try {
      // {new:true} nos devuelve el usuario actualizado
      const prod = await Producto.findByIdAndUpdate(id, body, {
        new: true,
      });
  
      return res.json(prod);
    } catch (error) {
      return res.status(400).json({
        mensaje: "Ocurrio un error",
        error,
      });
    }
  });

router.delete('/producto/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const prod = await Producto.findByIdAndDelete({_id});
        if(!prod) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado', error
            })
        } res.json(prod);
    } catch (error) {
        return res.status(500).json ({
            mensaje: 'Ocurrió un error',
            error
        });
    }
});

module.exports = router;