import mongoose from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');

// Roles
const roles = {
    values: ['ADMIN', 'USER'],
    message: '{VALUE} no es un rol válido'
}

const Schema = mongoose.Schema;
const userSchema = new Schema({
    nombreCompleto: { type: String, required: [true, 'El nombre es necesario'] },
    email: { type: String, unique: true, required: [true, 'Email es necesario'] },
    pass: { type: String, required: [true, 'Pass es necesario'] },
    phone: { type: String, unique: true, default: '0', },
    date: { type: Date, default: Date.now },
    role: { type: String, default: 'USER', enum: roles },
    activo: { type: Boolean, default: true }
});

// Eliminar pass de respuesta JSON
userSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.pass;
    return obj;
  };
  // Validator
  userSchema.plugin(uniqueValidator, {
    message: "Error, esperaba {PATH} único.",
  });
  
  // Convertir a modelo
  const User = mongoose.model("User", userSchema);
  
export default User;