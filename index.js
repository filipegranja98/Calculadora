
    const insert = (num) =>{
       
        const numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num; 
    }

    const limpar = () =>{
        document.getElementById('resultado').innerHTML = "";
    }

    const apagar = () => {
        const resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1); 
    }
    
   

