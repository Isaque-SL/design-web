var contatos = [
    //  Variável de lista de objetos
    {
        nome : "Ludimila",
        cel : "8786576478",
        foto : "lud.png",
        favorito : true
    },
    {
        nome : "Joção",
        cel : "8002892223",
        foto : "francisco.jfif",
        favorito : false
    },
    {
        nome : "Francisco",
        cel : "8782947478",
        foto : "francisco.jfif",
        favorito : true
    },
    {
        nome : "Davi",
        cel : "8786463464",
        foto : "francisco.jfif",
        favorito : false
    },
    {
        nome : "Danila",
        cel : "8786573478",
        foto : "lud.png",
        favorito : false
    }
]


const agenda = {
    data(){
        return {
            titulo: "Agenda de contatos",
            contatos: window.contatos
        }
    }
}

Vue.createApp(agenda).mount("#app");