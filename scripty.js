

AOS.init();

function typeWriter(elemento, callback) {
    const textoOriginal = elemento.innerHTML;
    const guru = document.querySelector('.nome-guru');
    
    function animarTexto() {
        elemento.innerHTML = '';
        guru.innerHTML = ''; // Limpa o nome do Guru no início do loop
        const textoArray = textoOriginal.split('');
        
        textoArray.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
                // Se for a última letra
                if (i === textoArray.length - 1) {
                    // Executa o callback se existir
                    if (callback) callback();
                    // Aguarda 3s e reinicia
                    setTimeout(() => animarTexto(), 4000);
                }
            }, 70 * i);
        });
    }
    
    animarTexto();
}

const titulo = document.querySelector('.frase1');
const guru = document.querySelector('.nome-guru');

typeWriter(titulo, function() {
    guru.innerHTML = 'S.B.S Govinda Dev Goswami Maharaj';
});
    
    
 let trivikramaImg= document.querySelector('.trivikrama-img')
 

setTimeout(function(){

trivikramaImg.src = 'img/Post-Trivikrama-100.jpg'


}, 3000)

setTimeout(function(){

  trivikramaImg.remove(trivikramaImg)
  
  
  }, 30000)

   
  $(".nav-link").on("click",function(){
    $("#btn-Fechar").click();
  
   })  
   
  
    
      
    
  

   
    
   
    

    


    
   
    