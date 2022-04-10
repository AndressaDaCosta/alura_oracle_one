
    function desenhaRetangulo(x, y, largura, altura, cor) {
        document.getElementById("fundo").className = "container";
        var tela = document.querySelector('canvas');
        var pincel = tela.getContext('2d');

       

        pincel.fillStyle=cor;
        pincel.fillRect(x,y, largura, altura);
        pincel.strokeStyle='black';
        pincel.strokeRect(x,y, largura, altura);
    }

    
    function desenhaTexto(x, y, texto) {
        var tela = document.querySelector('canvas');
        var pincel = tela.getContext('2d');

        pincel.font='16px Georgia';
        pincel.fillStyle='black';
        pincel.fillText(texto, x, y);    
    }

	

	function desenhaBarra(x, y, serie, cores, texto) {
		desenhaTexto(x+7,y-10,texto);
            
		var somaAltura = 0; 

		for (var contador = 0; contador<serie.length;contador++){
			 var altura = serie[contador];
			 desenhaRetangulo(x,y+somaAltura,50,altura,cores[contador],sites[contador]);
			somaAltura = somaAltura + altura;
	    }

    }   

    function desenhaLegenda() {

        for ( var y = 0; y < 95; y++){
            desenhaRetangulo(450, 70, 100, 100, "white");
            desenhaRetangulo(460, 85, 10, 10, "blue");
            desenhaTexto(480, 95,"Chrome");
            desenhaRetangulo(460, 105, 10, 10,"green");
            desenhaTexto(480, 115,"Firefox");
            desenhaRetangulo(460, 125, 10, 10, "yellow" );
            desenhaTexto(480, 135, "Safari");
            desenhaRetangulo(460, 145, 10, 10, "red");
            desenhaTexto(480, 155, "Outros");
        
        }
    }


	var cores = ["blue","green","yellow","red"];
	var serie2015 = [50, 25, 20, 5];
	var serie2016 = [65, 20, 13, 3];
    var sites = ["Chrome", "Firefox", "Safari", "Outros"];

    // desenhaRetangulo(0,0,600,400,"lightgray"); //mudei pra background CSS
    desenhaTexto(60,12,"Navegadores que os alunos da Alura utilizavam em 2015 e 2016:");
	desenhaBarra(180, 90, serie2015, cores,"2015");
    desenhaBarra(280, 90, serie2016, cores,"2016");
    desenhaLegenda(150,200);