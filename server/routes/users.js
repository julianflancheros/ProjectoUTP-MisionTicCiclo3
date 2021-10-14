var express = require("express");
var router = express.Router();

// Importamos modelo Tarea
import User from "../models/user";

// Hash Contraseña
const bcrypt = require("bcrypt");
const saltRounds = 10;

const { verificarAuth, verificaRol } = require("../middlewares/autenticacion");

/* Create new user */
router.post("/nuevo-usuario", async (req, res) => {
  const body = {
    nombreCompleto: req.body.nombreCompleto,
    email: req.body.email,
    phone: req.body.phone,
  };
  body.pass = bcrypt.hashSync(req.body.pass, saltRounds);
  //console.log(body);
  try {
    const userDB = await User.create(body);

    return res.json(userDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

/* Listar todos los usuarios */
router.get("/usuario", [verificarAuth, verificaRol], async (req, res) => {
  try {
    const usuarios = await User.find();
    res.json(usuarios);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error al encontrar todos los usuarios",
      error,
    });
  }
});

/* Listar usuario por id */
router.get("/usuario/:id", [verificarAuth, verificaRol], async (req, res) => {
  const _id = req.params.id;
  try {
    const usuario = await User.findOne({ _id });
    res.json(usuario);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error al encontrar el usuario",
      error,
    });
  }
});

const _ = require("underscore");
/* PUT user */
router.put("/usuario/:id", [verificarAuth, verificaRol], async (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ["nombreCompleto", "email","phone","pass"]);
  console.log(body);
  if (body.pass) {
    body.pass = bcrypt.hashSync(req.body.pass, saltRounds);
  }

  try {
    // {new:true} nos devuelve el usuario actualizado
    const usuarioDB = await User.findByIdAndUpdate(id, body, {
      new: true,
    });

    return res.json(usuarioDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.delete("/usuario/:id", [verificarAuth, verificaRol], async (req, res) => {
    let id = req.params.id;

    try {
      const usuarioDelete = await User.findByIdAndRemove(id);

      if (!usuarioDelete) {
        return res.status(400).json({
          mensaje: "Usuario no encontrado",
        });
      }

      return res.json(usuarioDelete);
    } catch (error) {
      return res.status(400).json({
        mensaje: "Ocurrio un error",
        error,
      });
    }
  }
);
module.exports = router;
