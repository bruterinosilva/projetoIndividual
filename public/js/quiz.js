var sailor1 = 0
var sailor2 = 0
var sailor3 = 0
var sailor4 = 0
var sailor5 = 0
var contador = 1

function startQuiz() {
    var initQuiz = document.getElementById("initQuiz")    
    var pergunta1 = document.getElementById("pergunta1")
    
    pergunta1.classList.add("active")    
    initQuiz.remove()
}


function addSailor1() {
    sailor1++
    responder()
}
function addSailor2() {
    sailor2++
    responder()
}
function addSailor3() {
    sailor3++
    responder()
}
function addSailor4() {
    sailor4++
    responder()
}
function addSailor5() {
    sailor5++
    responder()
}


function responder() {
    var quiz = document.getElementById("quiz")
    var perguntas = document.querySelectorAll(".pergunta")
    var qtdPerguntas = quiz.children.length
    var n = 0

    if (contador < qtdPerguntas) {

        
        while (n < perguntas.length) {
            perguntas[n].classList.remove("active")
            n++
        }
        
        quiz.children[contador].classList.add("active")
        contador++
    }else{
        quiz.innerHTML = 
        `
            <div class="quizResult">
                <h2 class="final">Teste finalizado</h2>
                <p>Clique no botão abaixo para exibir os resultados</p>
                <button class="finalizar" onclick="results()">Mostrar resultados</button>
            </div>
        `
    }




}

function results() {
    quiz.innerHTML = 
        `
            <div class="resultsBox">
                <h2 class="resultado">Resultado</h2>
                <div class="metricasBox">
                    <button value="${sailor1}" id="sailor1" class="metricas moon">Sailor Moon: <br> ${sailor1}</button>
                    <button value="${sailor2}" id="sailor2" class="metricas mercury">Sailor Mercury: <br>${sailor2}</button>
                    <button value="${sailor3}" id="sailor3" class="metricas marte">Sailor Marte: <br>${sailor3}</button>
                    <button value="${sailor4}" id="sailor4" class="metricas jupiter">Sailor Júpiter: <br>${sailor4}</button>
                    <button value="${sailor5}" id="sailor5" class="metricas venus">Sailor Vênus: <br>${sailor5}</button>
        
                </div>
            </div>
        
        
        `
        var grafico = document.getElementById("grafico")

        grafico.classList.remove("inactive")

        fetch("/usuarios/inserirQuiz", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                sailor1: sailor1,
                sailor2: sailor2,
                sailor3: sailor3,
                sailor4: sailor4,
                sailor5: sailor5,
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta.body);

            if (resposta.ok) {
        
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        const labels = [
            'Sailor Moon',
            'Sailor Mercury',
            'Sailor Mars',
            'Sailor Jupiter',
            'Sailor Venus',
    
        ];
    
        const data = {
            labels: labels,
            datasets: [{
                label: 'Pontos',
                backgroundColor: [
                'rgb(255, 74, 158)',
                'rgb(85, 85, 255)',
                'rgb(199, 0, 0)',
                'rgb(5, 194, 5)',
                'rgb(255, 117, 37)',
            ],
                borderColor: 'rgb(255, 99, 132)',
                data: [sailor1, sailor2, sailor3, sailor4, sailor5],
            },
        ]
        };
    
        const config = {
            type: 'bar',
            data: data,
            options: {}
        };
    
        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
        
       


}

