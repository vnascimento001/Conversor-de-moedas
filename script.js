function converter(){

function Get(url){
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText
}

function multiplica(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}

function main() {
  //console.log(Get("https://economia.awesomeapi.com.br/all/USD-BRL"))
  valor = Get("https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL")
  moeda = JSON.parse(valor);

  //eur para usd
  valor1 = Get("https://economia.awesomeapi.com.br/all/EUR-USD")
  moeda1 = JSON.parse(valor1); 
  //console.log(moeda)

  let valorFinal = document.getElementById("valorfinal");
  let valorInput = parseInt(document.getElementById("numeric").value);
  let de = document.getElementById("de");
  let para = document.getElementById("para");

  // valor moeda em relação ao real
  let eur = parseFloat(moeda.EUR.ask);
  let usd = parseFloat(moeda.USD.ask);
  let eurusd = parseFloat(moeda1.EUR.ask);

  //condicionais
  if (de.value == "EUR" && para.value == "BRL" && valorInput != null ){
      valorFinal.innerHTML = "R$" + multiplica(valorInput,eur).toFixed(2);
  }else if (de.value == "USD" && para.value == "BRL" && valorInput != null){
    valorFinal.innerHTML = "R$" + multiplica(valorInput, usd).toFixed(2);
  }else if (de.value == "BRL" && para.value == "EUR" && valorInput != null){
    valorFinal.innerHTML = "€" + divide(valorInput, eur).toFixed(2);
  }else if (de.value == "BRL" && para.value == "USD" && valorInput != null){
    valorFinal.innerHTML = "US$" + divide(valorInput, usd).toFixed(2);
  }else if (de.value == "USD" && para.value == "EUR" && valorInput != null){
    valorFinal.innerHTML = "€" + divide(valorInput, eurusd).toFixed(2);
  }else if (de.value == "EUR" && para.value == "USD" && valorInput != null){
    valorFinal.innerHTML = "US$" + multiplica(valorInput, eurusd).toFixed(2);
  }else if (de.value == "BRL" && para.value == "BRL" && valorInput != null){
    valorFinal.innerHTML = "R$" + valorInput;
  }else if (de.value == "USD" && para.value == "USD" && valorInput != null){
    valorFinal.innerHTML = "US$" + valorInput;
  }else if (de.value == "EUR" && para.value == "EUR" && valorInput != null){
    valorFinal.innerHTML = "€" + valorInput;
  }else{
    valorFinal.innerHTML = "Insira um número válido"
  }

}

main()

}