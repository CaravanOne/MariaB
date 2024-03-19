const db = require("../src/database/models")

module.exports = {
  index: (req, res) => {
    res.render("index");
  },
  form: (req,res) => {
 
    res.render("entradas")
 
},
formCompleted: async (req, res)  => {
  try {
    const { name, surname, numberOne, numDorso, dataTime, dni, email, phone } = req.body;

    // Crea un nuevo registro de usuario con los datos proporcionados
    const newUser = await db.User.create({
      name: name,
      surname: surname,
      numberOne: numberOne,
      numDorso: numDorso,
      dataTime: dataTime,
      dni: dni,
      email: email,
      phone: phone
    });
    // Redirecciona o responde de acuerdo a tu lógica de aplicación
    res.redirect('/index');
    } catch (error) {
      console.log(error);
    }
  }
};
