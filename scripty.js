

AOS.init();

function typeWriter(elemento) {
    let letra = 0
      const textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = '';
      textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 50 * i);   
      });
          
    }
  
    const titulo = document.querySelector('.frase1');
    typeWriter(titulo);


  let guru = document.querySelector('.nome-guru')
    
    

setTimeout(function(){
  guru.innerHTML = 'S.B.S Govinda Dev Goswami Maharaj'

},10000)
    
    
    
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
   
  
    
      
    
  

   
    
   
    

    


    
   
    