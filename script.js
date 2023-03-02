 let btnGaleria = document.querySelector('#avancar');
 let btnVoltar = document.querySelector('#voltar');
 let imagem = document.querySelector('#imagem');
 let imagens = ['brasil.png','barcelona.png', 'city.png', 'liverpool.png', 'allnasser.png', 'borussia.png', 'psg.png'];
 let imAtual = 0;

 btnGaleria.addEventListener('click', function(){
    imAtual++;
   if(imAtual >= imagens.length){
         imAtual = 0;
     }
     imagem.setAttribute('src', imagens[imAtual]);

     setTimeout(function(){
         imagem.style.transition = '1s';
     }, 1000);

     

     btnVoltar.addEventListener('click', function(){
         imAtual--;
         if(imAtual < 0){
             imAtual = imagens.length -1;
        }
         imagem.setAttribute('src', imagens[imAtual]);

         setTimeout(function(){
             imagem.style.transition = '1s';
         }, 1000);
     }); });















// let btnGaleria = document.querySelector('#avancar');
// let imagem = document.querySelector('#imagem');
// let imagens = ['/imagens/barcelona.png', '/imagens/city.png', '/imagens/liverpool.png', '/imagens/allnasser.png', '/imagens/borussia.png', '/imagens/psg.png'];
// let imAtual = 0;

// btnGaleria.addEventListener('click', function(){
//     imAtual++;
//     if(imAtual >= imagens.length){
//         imAtual = 0;
//     }
//     imagem.setAttribute('src', imagens[imAtual]);

//     setTimeout(function(){
//         imagem.style.transition = '1s';
//     }, 1000);
// });
// let btnVoltar = document.querySelector('#btnVoltar');

//      btnVoltar.addEventListener('click', function(){
//         imAtual--;
//          if(imAtual < 0){
//              imAtual = imagens.length - 1;
//          }
//          imagem.setAttribute('src', imagens[imAtual]);

//         setTimeout(function(){
//              imagem.style.transition = '1s';
//         }, 1000);
//      });






