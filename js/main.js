class Imagem {
    constructor(array, imagemAtual, containerInputs, imgAnterior, proximaImg, descImgs, caixaDescImgs) {
        this.imgsProjeto = array
        this.divRadios = containerInputs
        this.imagemAtual = imagemAtual
        this.imgAnterior = imgAnterior
        this.proximaImg = proximaImg
        this.descImgs = descImgs
        this.caixaDesc = caixaDescImgs
        this.createRadios()
        this.mostrarImg()
    }

    createRadios() {
        let i = 0
        while (i < this.imgsProjeto.length) {
            this.inputRadio = document.createElement("input")
            this.inputRadio.type = 'radio'
            if (this.divRadios.id == 'divRadiosPublicacao') {
                this.inputRadio.name = 'radioImgsPubli'
                this.radios = document.getElementsByName("radioImgsPubli")
                this.radiosm = [...document.getElementsByName("radioImgsPubli")]
            } else {
                this.inputRadio.name = 'radioImgsPadaria'
                this.radios = document.getElementsByName("radioImgsPadaria")
                this.radiosm = [...document.getElementsByName("radioImgsPadaria")]
            }
            this.inputRadio.classList.add("IptsRadios")
            this.divRadios.appendChild(this.inputRadio)
            i++
        }
    }

    mostrarImg() {
        this.imagemAtual.src = this.imgsProjeto[0]
        this.caixaDesc.innerHTML = this.descImgs[0]
        this.radioCheck = this.radios[0].checked = true
        const update = (indice) => {
            setTimeout(() => {
                this.radioCheck = this.radios[indice].checked = true    // define o input marcado na mesma ordem da imagem
                this.imagemAtual.src = this.imgsProjeto[indice]
                this.caixaDesc.innerHTML = this.descImgs[indice]
            }, 0)
        }

        let i = 0
        setInterval(() => {
            for (let j = 0; j < this.radios.length; j++) {
                if (this.radios[j].checked) {
                    i = j
                    break
                }
            }
        }, 0)
        this.imgAnterior.addEventListener("click", () => {
            i--
            if (i < 0) {
                i = this.imgsProjeto.length - 1
            }
            update(i)
        })
        this.proximaImg.addEventListener("click", () => {
            i++
            if (i > this.imgsProjeto.length - 1) {
                i = 0
            }
            update(i)
        })

        // seleciona a imagem pelos radios
        this.radiosm.map((ele, indice) => {
            ele.addEventListener("click", () => {
                this.imagemAtual.src = this.imgsProjeto[indice]
                this.caixaDesc.innerHTML = this.descImgs[indice]
            })
        })
    }
}

// Projeto publicação
const imgsProjetoPubli = [
    '../imagens/imagens_projeto_publi/index.png',
    '../imagens/imagens_projeto_publi/login.png',
    '../imagens/imagens_projeto_publi/cadastro.png',
    '../imagens/imagens_projeto_publi/pagina_principal.png',
    '../imagens/imagens_projeto_publi/nova_publi.png',
    '../imagens/imagens_projeto_publi/confirm_logout.png',
    '../imagens/imagens_projeto_publi/pesquisa_nao_encontrada.png'
]
const descImgsPubli = [
    'Página inicial',
    'Página de login',
    'Página de cadastro',
    'Página principal, onde o usuário só tem acesso depois de logar ou criar uma conta',
    'Página do usuário selecionar um título, descrição e a imagem que ele deseja enviar',
    'Caixa de mensagem que o usuário confirma se quer sair da conta ou não',
    'Mensagem exibida quando a pesquisa feita não corresponde ao título ou descrição de nenhuma publicação'
]
const divRadiosPubli = document.getElementById("divRadiosPublicacao")
const imgPubli = document.getElementById("imagemProjetoPublicacao")
const imgAnteriorPubli = document.getElementById("imgAnteriorPubli")
const proximaImgPubli = document.getElementById("imgSeguintePubli")
const descricaoImgPubli = document.getElementById("descricaoImgPubli")

// Projeto Padaria
const imgsProjetoPadaria = [
    '../imagens/imagens_projeto_padaria/apresentacao.png',
    '../imagens/imagens_projeto_padaria/selecionando_produtos.png',
    '../imagens/imagens_projeto_padaria/selecionando_mais_quantidades.jpg',
    '../imagens/imagens_projeto_padaria/mudanca_no_estoque.jpg',
    '../imagens/imagens_projeto_padaria/quantidade_produto_maior_que_estoque.png',
    '../imagens/imagens_projeto_padaria/limite_estoque.png'
]
const descImgsPadaria = [
    'Página inicial',
    'Selecionando alguns produtos',
    'Selecionando uma quantidade maior de produtos, percebe-se que o preço vária de acordo com o produto e a quantidade. Repare na quantidade dos produtos selecionados e olhe a próxima imagem',
    'Como pode ver a quantidade é alterada de acordo com a quantidade de produtos comprados',
    'Se selecionarmos uma quantidade maior que a do estoque...',
    'A compra não é efetuada.'
]
const divRadiosPadaria = document.getElementById("divRadiosPadaria")
const imgPadaria = document.getElementById("imagemProjetoPadaria")
const imgAnteriorPadaria = document.getElementById("imgAnteriorPadaria")
const proximaImgPadaria = document.getElementById("imgSeguintePadaria")
const descricaoImgPadaria = document.getElementById("descricaoImgPadaria")

let Publicacao = new Imagem(
    imgsProjetoPubli, imgPubli, divRadiosPubli, imgAnteriorPubli, proximaImgPubli, descImgsPubli, descricaoImgPubli
)

let Padaria = new Imagem(
    imgsProjetoPadaria, imgPadaria, divRadiosPadaria, imgAnteriorPadaria, proximaImgPadaria, descImgsPadaria, descricaoImgPadaria
)

Publicacao
Padaria

