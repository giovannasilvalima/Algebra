const botoes = [
    {
        id: "historiadorMuhammad",
        nome: "Muhammad ibn Musa al-Khwarizmi",
        img: "assets/Muhammad_ibn_Musa_al-Khwarizmi-removebg-preview.png",
    },
    {
        id: "historiadorDiofanto",
        nome: "Diofanto de Alexandria",
        img: "assets/Diofanto_de_Alexandria-removebg-preview.png",  
    },
    {
        id: "historiadorIbne",
        nome: "Ibn Al-Banna",
        img: "assets/Ibn_Al-Banna-removebg-preview.png",
    },
    {
        id: "historiadorFrançois",
        nome: "François Viète",
        img: "assets/François_Viète-removebg-preview.png",
    },
    {
        id: "historiadorOmar",
        nome: "Omar Khayyam",
        img: "assets/Omar_Khayyam-removebg-preview.png",
    },
    {
        id: "historiadorRene",
        nome: "René Descartes",
        img: "assets/René_Descartes-removebg-preview.png",  
    },
    {
        id: "historiadorIsaac",
        nome: "Isaac Newton",
        img: "assets/Isaac_Newton-removebg-preview.png",
    },
    {
        id: "historiadorLeo",
        nome: "Leonhard Euler",
        img: "assets/Leonhard_Euler-removebg-preview.png",
    },
]

botoes.forEach((item) => {
    const div = document.createElement("div")

    const botao = document.createElement("button")
    botao.id = item.id
    botao.textContent = item.nome
    botao.img = item.img
    botao.addEventListener("click", () => {
        window.location.href = `pages/historians/${item.nome}.html`
    })

    botao.classList.add("bloco-1")

    div.appendChild(botao)

    document.body.appendChild(div)
})