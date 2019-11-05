/*
-- Javascript routine writed by Dennis (professor.dennis@gmail.com)
-- Procedimento para criar cartões de visita
-- Uso:
--    1 - Criar uma DIV em sua página HTML com class=".barra-lateral-direita";
--    2 - Use de uma a quatro tags CARTAO com atributos:
--        imagem="local_da_imagem"
--        descricao="nome_da_pessoa"
--        login="nickname"
--        href="link_para_email_ou_redes_sociais"
--        atrib="descrição_do_cargo"
--        end="endereço"
--    3 - Ao executar, clique na imagem do cartão para removê-lo da tela.
--
*/

// lista de variaveis utilizadas
var elemento_pai = document.querySelector('.barra-lateral-direita');
var bg = document.createElement('div');
var dc = document.createElement('div');
var bcic = document.createElement('button');
var blc = document.createElement('button');
var descricao = document.querySelectorAll('.persona-descricao');
var login = document.querySelectorAll('div.persona-login a');
var atrib = document.querySelectorAll('div.persona-atribuicoes');
var end = document.querySelectorAll('.persona-endereco');
var persona = {imagem:[], descricao:[], login:[], href:[], atrib:[], end:[] };
var executa = 0;

// coleta da tag <cartao> com imagem, descricao, login, href, atrib e end.
var cartao = document.querySelectorAll('cartao');


// entrada apenas se houver cartões
if (cartao.length > 0 ) {

    // funções caso existam cartões
    function limpaCartao() {
          var pai = document.querySelector('.bloco-grande');
          var filho = pai.lastElementChild;
          while (filho) {
            pai.removeChild(filho);
            filho = pai.lastElementChild;
          }
    }

    // Alimenta os cartões com dados originados da tag <cartao>
    function injetaCartao(i) {
          var np = "img.persona-bloco-grande-imagem";
          var nomePersona = document.querySelectorAll(np);
          if (typeof(nomePersona) != 'undefined' && nomePersona != null ) {
              var descricao = document.querySelectorAll('.persona-descricao');
              var login = document.querySelectorAll('div.persona-login a');
              var atrib = document.querySelectorAll('div.persona-atribuicoes');
              var end = document.querySelectorAll('.persona-endereco');

              persona.imagem[i] = cartao[i].getAttribute('imagem'),
              persona.descricao[i] = cartao[i].getAttribute('descricao'),
              persona.login[i] = cartao[i].getAttribute('login'),
              persona.href[i] = cartao[i].getAttribute('href'),
              persona.atrib[i] = cartao[i].getAttribute('atrib'),
              persona.end[i] = cartao[i].getAttribute('end');

              nomePersona[i].src = persona.imagem[i];
              descricao[i].textContent = persona.descricao[i];
              login[i].textContent = persona.login[i];
              login[i].href = persona.href[i];
              atrib[i].textContent = persona.atrib[i];
              end[i].innerHTML = persona.end[i];
          }
    }

    // Cria a estrutura física do cartão
    function criaCartao(nomedobloco) {

          var pbg = document.createElement('div');
          var pb = document.createElement('div');
          var div = document.createElement('div');
          var img = document.createElement('img');
          var pd = document.createElement('div');
          var pl = document.createElement('div');
          var linkdesc = document.createElement('a');
          var linklog = document.createElement('a');
          var pa = document.createElement('div');
          var pe = document.createElement('address');

          pbg.className = nomedobloco;
          pb.className = 'persona-bloco';
          img.className = 'persona-bloco-grande-imagem';
          div.style = 'display: inline-block;';
          pd.className = 'persona-descricao';
          pl.className = 'persona-login';
          pa.className = 'persona-atribuicoes';
          pe.className = 'persona-endereco';

          bg.appendChild(pbg);
          pbg.appendChild(pb);
          pb.appendChild(img);
          pb.appendChild(div);
          div.appendChild(pd);
          pd.appendChild(linkdesc);
          div.appendChild(pl);
          pl.appendChild(linklog);
          pb.appendChild(pa);
          pbg.appendChild(pe);
    }

    // execução
    if (executa == 0) {
        elemento_pai.appendChild(bg);
        bg.className = 'bloco-grande';
        var fim = cartao.length;
        console.log(fim);
        if (fim > 4) {
           fim = 4;
        }
        for (var i = 0; i < fim; i++) {
          console.log('valor de i:',i);
          var nomedobloco = 'persona-bloco-grande-'+i;
          criaCartao(nomedobloco);
          injetaCartao(i);
        }
        executa = 1;
    }

    // limpeza de cartões se qualquer imagem de persona for clicada
    document.querySelector('.persona-bloco-grande-imagem').onclick = function() {
                  limpaCartao();
    }
}
