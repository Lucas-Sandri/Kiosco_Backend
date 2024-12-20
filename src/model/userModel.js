import db from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// db se encuentra en la carpeta config, se usa para enviar Querys a la Base de Datos


// Crear usuario en la base de datos
export const createUserDB = async (data) => {
  try {
    const { email, password } = data;

    // comprobar si el email ya está en la base de datos
    const find_email = "SELECT email FROM usuario WHERE email = ?";
    const [row] = await db.query(find_email, [email]);
    if (row.length == 1) {
      throw new Error("Email ya está en uso");
    }

    // encripta la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);


    // Inserta el usuario en la base de datos con la contraseña encriptada
    const sentence = "INSERT INTO usuario (email, password) VALUES (?, ?)";
    const [rows] = await db.query(sentence, [email, hashedPassword]);

    return {
      message: `Usuario ${email} insertado con éxito`
    };
  } catch (error) {
    if (error.message != "Email ya está en uso") {
      error.message = "Error inesperado al crear usuario"
    }
    throw new Error(error.message)
  }
};

// Iniciar sesión en la base de datos
export const loginUserDB = async (data) => {
  try {
    const { email, password } = data;

    // Buscar al usuario por email
    const sentence = "SELECT * FROM usuario WHERE email = ?";
    const [rows] = await db.query(sentence, [email]);

    // Verificar si el email existe
    if (rows.length === 0) {
      throw new Error("Email no encontrado");
    }

    const user = rows[0];

    // Verificar la contraseña
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Contraseña incorrecta");
    }

    // Generar el token JWT con email y rango
    const token = jwt.sign(
      { email: user.email, rango: user.rango },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Tiempo de expiración del token
    );

    return {
      message: "Inicio de sesión exitoso",
      token: token,
    };

  } catch (error) {
    if (error.message != "Email no encontrado" && error.message != "Contraseña incorrecta") {
      error.message = "Error inesperado al loguearse"
    }
    throw new Error(error.message);
  }
};

// Iniciar sesión en la base de datos
export const actualizarRangoUserDB = async (data) => {
  try {
    const { email, rango } = data;
    if (rango != 'cliente' && rango != 'empleado' && rango != 'administrador') {
      throw new Error("Rango inválido. Debe ser 'cliente', 'empleado' o 'administrador'");
    }

    // Buscar al usuario por email
    const sentence = "SELECT * FROM usuario WHERE email = ?";
    const [rows] = await db.query(sentence, [email]);

    // Verificar si el email existe
    if (rows.length === 0) {
      throw new Error("Email no encontrado");
    }

    const sentence2 = `UPDATE usuario SET rango = ? WHERE email = ?`
    const [rows2] = await db.query(sentence2, [rango, email]);

    return {
      message: "Rango actualizado con éxito",
      email: email,
      nuevoRango: rango
    };

  } catch (error) {
    if (error.message != "Email no encontrado" && error.message != "Rango inválido. Debe ser 'cliente', 'empleado' o 'administrador'") {
      error.message = "Error inesperado al actualizar el rango"
    }
    throw new Error(error.message);
  }
};