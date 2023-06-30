function calculateTip(event){
    //codigo para nao deixar o formulario recarregar
    event.preventDefault();
   
    // damos o nome da variavel de bill. e buscamos o valor digitado do input html com id bill
    let bill = document.getElementById('bill').value;

    // damos o nome da variavel de serviceQual. e buscamos o valor selecionado no selection option html com id serviceQual
    let serviceQual = document.getElementById('serviceQual').value;

    // damos o nome da variavel de people. e buscamos o valor digitado do input html com id people
    let numPeople = document.getElementById('people').value;
    

    //condicoes se id bill = vazio ou serviceQual = 0 mostra msg
    if(bill === '' | serviceQual === 0){
        alert('Por favor, preencha os valores!')
        return
    }
    //condicoes se numPeople for vazio ou igual a 1, considerar 1 pessoa
    if(numPeople === '' | numPeople <= 1){
        numPeople = 1;
        document.getElementById('each').style.display = "none"
    } else{
        document.getElementById('each').style.display = "block"
    }

    // variavel para fazer a conta da gorgeta (valor X serviço de qualidade dividido pelo num de pessoas)
    let total = (bill * serviceQual) / numPeople;
    // deixamos o resultado da variavel total com 2 casas decimais
    total = total.toFixed(2);
    //mostrando o resultado na tela
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";


}


//  o codigo abaixo faz a parte em que aparece Gorgeta Total
//  desaparecer antes de calcula o resultado da gorgeta
document.getElementById('totalTip').style.display = "none";



//codigo para escutar o evento de click no botao calcular e chamar a função calculateTip
document.getElementById('tipsForm').addEventListener('submit', calculateTip);