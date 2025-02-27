function calcularidade(){
    let anonascimento = document.getElementById("anonascimento").value;
    let idade = 2025 - anonascimento;
    //let retorno = String("A sua idade é" + idade);
    //document.getElementById("resultado").innerHTML = retorno;

    document.getElementById("resultado").innerHTML = `Sua idade é : ${idade}`;

}