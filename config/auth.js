module.exports = {
    secret: process.env.AUTH_SECRET || "ohyeah", //KEY USADA PARA ENCRIPTAR
    expires: process.env.AUTH_EXPIRES || "24h", //DURACIÓN DEL TOKEN
    rounds: process.env.AUTH_ROUNDS || 6 //VECES QUE SE ENCRIPTA LA CONTRASEÑA
}