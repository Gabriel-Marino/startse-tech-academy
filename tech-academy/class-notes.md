# Modulo I

## aula 01: Introdução à Programação.

- Programar é criar um conjunto de instruções através de uma linguagem de programção para que o computador resolva nosso problema;
- A internet ou Web é a rede interconectada de computadores, pela web acessa-se os dominios (sites que estam no subdominio www (world wide web)) que ficam armazenadas nos servidores, os dispositivos que acessam são os clients;
- um dominio é acessado pela sua URL (uniform resource locator) que contem um protocolo (http/https) e dominio (nome do site) e path, pode ter também o subdominio (www), porta (80 para http e 443 para https), querry e parametros, âncora. 

#### Linguagens:
- Alto nível: mais similares com textos escritos, Python similar a textos em inglês e Portugol similar a textos em português;
- Baixo nível: mais próximo da máquina, C é um exemplo;
- Assembly: é uma linguagen aonde as outras linguagens são construídas em cima, muito próximo da máquina, é semelhante ao código hexadecimal;
- código da máquina: hexadecimal do binário que é lido pelo sistema operacional;
- código binário.

<hr>

## aula 02: Hardware.

- Parte física de um computador, abrange componentes como gabinete, placa-mãe, armazenamento (hd, ssd), periféricos (teclado, mouse, monitor);
- hd também são periféricos, pois os hardware centrais são: placa-mãe, processador, memória RAM, fonte;
- Memórias RAM são volatéis, não armazenam informação sem estarem energizadas, servem para que o conteudo de um programa saia do hd e fique mais facil de acessar quando usar o determinado programa.

<hr>

## aula 03: Software.

- Parte intagível do computador, programas (sistema operaciona, drivers, aplicativos e utilitários), da vida ao hardware.

<hr>

## aula 04: Estrutura de um Computador.

- Atualmente é utilizada a arquitetura de Von Neumann, todo computador tem ao menos entrada (dados por teclados, mouses ou outros equipamentos), processsamento (operações lógicas e aritméticas) e saída (informação);
- os primeiros computadores foram construídos com Válvulas termiônicas, depois com transistores, então circuitos integrados e atualmente com chips VLSI (very large scale integration).

<hr>

## aula 05: Internet.

- em 62 EUA criou CCD, então em 66 ARPANET, ambas de uso exclusivamente militar;
- em 82 desenvolvimento do TCP/IP e então liberado para uso civil;
- ip: Internet protocol, é o endereço que reconhece cada computador da rede, muda de tempos em tempos, ip é formado por quatro octetos que vão de 0 a 255;
- MAC Address é o endereço que da identidade a máquina, ou seja, cada computador tem um único MAC Address e é formado por seis bytes com dois algarismos hexadecimal cada e separados por dois pontos ou hífen;
- DNS: Domain Name Systema, criado em 84 para traduzir um endereço (url) a um endereço que remete a rede desejada;
- HTTP: Hypertext Transfer Protocol, é o conjunto de regras que permite os computadores se comunicarem, junto com ele foi criado o HTML e os primeiros navegadores WEB, tudo na década de 90 pelo Tim Berners-Lee no CERN.

<hr>

## aula 06: Sistemas Operacionais.

- Composto de um Kernel (elo entre hardware e software, gerencia processos e hardware), Scheduler (ordem em que os processos são feitos e quando eles usam ou deixar de usar um hardware), Gerenciador de Arquivo e Interface.

<hr>

## aula 07: Tipos de sistemas Operacionais.

- Desktop: Linux, Windows e Macintosh (MacOS);
- Server: Linux e Windows;
- Mobile: Linux (Android), iOS, Windows Phone;
- Embutidos: Desenvolvidos para aparelhos e aplicações especificas.

<hr>

## aula 08: Principais funções de um sistema Operacional.

- tem como função gerenciar processos e arquvios.

<hr>

## aula 09: Tipos de aplicação Web.

- HTML: Hypertext Markup Languange, XML: Extensible Markup Languange, CSS: Cascading Style Sheets;
- API: Application Programming Interface, gera as interfaces que permite as diferentes aplicações (back e front) se comunicarem;
- API endpoint é o que é exposto ao usuário; contém Addres, Binding e Contract;
- JSON: JavaScript Object Notation, é um formato de texto aceito por diversos protocolos

#### Aplicações podem ser Dinâmicas ou Estáticas:
- Estática: não contém ferramentas para mudar o conteúdo do site, necessário conhecimento de programção para alterar;
- Dinâmica: contém ferramentas para mudar o conteúdo do site, amigável a não programadores, fácil de se modificar;

<hr>

## aula 10: Front-end e Back-end.

- Front-end é a interface da aplicação;
- Back-end é tudo aquilo que o usuário não vê diretamente e que está sendo usado para que a aplicação funciona devidamente, resposanvel pela implementação das regras de negócio.

<hr>

<!-- ## aula 11: Entendendo o mercado de computadores (Extra).

<hr> -->

## aula 11: Aplicações web e SPAs.

- SPA: Single Page Application, é uma aplicação que carrega uma única vez todas as páginas contida nela.

<hr>

## aula 12: Engenharia de Software e boas práticas.

<hr>

## aula 13: O que é engenharia de Software?

- Conjunto de práticas para a abordagem sistemática, disciplinada e quantificavel no desenvolvimento, na operação e manutenção de software.

<hr>

## aula 14: Os sete princípios da engenharia de Software.

<ol>
    <li>A razão de existir</li>
    <li>Keep It Simple Stupid (KISS)</li>
    <li>Mantenha a visão</li>
    <li>O que um produz, os outros consomem</li>
    <li>Esteja aberto para o futuro</li>
    <li>Planeje com antecedência, visando a reutilização</li>
    <li>Pense!</li>
</ol>

<hr>

<hr style="height:1px;border:none;color:#333;background-color:#333;" />

# Modulo II

## aula 01: Linguagens de Programação

#### uma linguagem de programação possuí as senguintes regras:
- Léxico: reconhece as palavras reservadas
- Sintático: analisa a estrutura do código
- Semântico: interpreta o código

<hr>

## Aula 02: Linguagens de Alto e Baixo nível

- Alto Nível é a linguagem mais próxima da linguagem natural humana (inglês, português, etc);
- Baixo Nível é uma linguagem mais próxima da máquina, como assembly que recebe código hexadecimal.

<hr>

## Aula 03: Compiladores

- Transformam o código programada em binário ou hexadecimal (linguagem que o computador entende).

<hr>

## aula 04: O que é e para que serve HTML?


- HTML: Hypertext Markup Language, cada atg html inicia em tag e termina em /tag e elas vão dentro de <> (-- antes da tag comenta ela);

#### HTML tags:

- html: todo conteudo da página vai dentro delas
- head: informações sobre a página
- title: titulo da página
- body: o que é redenrizado na página vai aqui
- div: divide o body em seções
- heading: h1, h2, h3, h4, h5, h6;  texto maior e em negrito
- p: paragrafo, recebe texto
- a: ancoras que recebem links
- b: texto em negrito
- em: adiciona emfase
- img: insere imagem e video ao corpo, é um tag que não tem tag de fechamento

<hr>

## aula 05: O que é e para que serve o CSS?

- CSS: cascading style sheet, dar um estilo próprio para o HTML.

<hr>

## aula 06: Como pesquisar erros dúvidas de código no Google

- Pesuisa no google podem ser feita utilizando o hifen para remover certos termos, podemos usar after:data ou before:data para pesquisar antes ou depois daquela data,
podemos usar data1..data para pesquisar em um periodo de tempo, podemos usar site:link para procurar em um site especifico,
podemos usar pipe para compara termos (termo1 | termo2 | termo3), especificar tipo de arquivo com filetype: e coisas relacionadas com related:

<hr>

## aula 07: Como pesquisar erros dúvidas de código no Stack Overflow

- Procuras nas perguntas já existentes, usar as tags.

<hr>

## aula 08: Ferramentas - DevDocs

- <a href = "https://devdocs.io/" target = "_blank">Link</a>

<hr>

## Aula 09: Editor Online

- <a href = "https://jsfiddle.net/" target = "_blank">Link</a>

<hr>

## Aula 10: IDE

- Visual Studio Code

<hr>

## Aula 11: Instalação do NodeJS

<hr>

## Aula 12: Lógica de Programação e Algoritmos

- É importante seguir uma convenção na hora de escrever algoritimos, convenções que contenham regras de sintaxe e semantica.

#### definição de algoritimo:
<ol>
    <li>. Mat. Processo de cálculo, ou de resolução de um grupo de problemas semelhantes, em que se estipulam, com generalidade e sem restrições, regras formais para a obtenção do resultado, ou solução do problema.</li>
    <li>Inform. Conjunto de regras e operações bem definidas e ordenadas destinadas à solução de um problema, ou de uma classe de problemas, em um número finito de etapas.</li>
</ol>

<hr>

## Aula 13: Qual o papel da lógica na programação?

- Conduzir o raciocinio para o desenvolvimento das soluções;
- Racionar é o ato de obter novas informações apartir das informações exitentes.

<hr>

## Aula 14: Lógica

- Lógica é a área da matemática que investiga proposições e a sua veracidade.

<hr>

## Aula 15: Lógica de Programação e Algoritmos

#### tipos de dados:
- numérico (int, float, double)
- caracteres (char)
- alfanumérico (string)
- lógico (bool)

<hr>

## Aula 16: Operadores

#### operadores aritméticos:
- +: soma
- -: subtrai
- /: divisão
- *: produto
- **: exponenciação
- += -= /= *=

#### operadores relacionais:
- '>' maior que
- < menor que
- == igual a
- != diferente de
- '>=' maior ou igual
- <= menor ou igual

#### operadores lógicos
- and: ambas proposições devem ser verdadeiras para que o resultados seja verdadeiro
- or: um das proposições deve ser verdadeira para que o resultado seja verdadeiro
- not: inverete o valor booleano da proposição

<hr>

## Aula 17: Estrutura de Decisão e Repetição

#### operadores léxicos:
- if
- else
- else if
- elif
- switch
- for
- while
- do while

<hr>

<hr style="height:1px;border:none;color:#333;background-color:#333;" />

# Modulo III, IV & V

### [Aplicado em mod3.html e mod4.css, tudo anotado em mod3 (clicando aqui você vai para o arquivo)](https://github.com/Gabriel-Marino/code-studies/blob/main/startSe/tech-academy/mod3.html)
