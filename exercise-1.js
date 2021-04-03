//adiciona a coluna esquerda ao parent element
let parent = document.getElementById("divResourceLinks");
let newParent = "<div class='col-md-6 col-md'>"+ parent.innerHTML +"</div>";
parent = newParent;

//transformando a string do novo elemento pai em html
var stringToHTML = function (str) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(str, 'text/html');
	return doc.body;
};
parent = stringToHTML(parent);

//Corrige tamanho e espaçamento das colunas internas à coluna esquerda
let left_col_nodes = document.querySelectorAll('#divResourceLinks .col-md-6');

left_col_nodes.forEach(function(el){
    el.classList.add('col-lg-6', 'mb-lg-8');
    el.classList.remove('col-lg-3','mb-lg-0');
}  
);

//Conteudo da coluna direita
let rightCol = document.querySelector("#divEnterpriseProductLinks .row");

//Parent element
var divElement = document.getElementById("divResourceLinks");

//Ajusta tamanho do container
divElement.querySelector('.container').classList.add('row', 'justify-content-lg-center', 'align-items-start');
divElement.querySelector('.justify-content-lg-center').classList.remove('container');

//Adiciona coluna da direita
divElement.querySelector('.justify-content-lg-center').appendChild(rightCol);

//Corrige tamanho das colunas
divElement.querySelectorAll('.justify-content-lg-center .row').forEach(function(el) {
    el.classList.add('col-lg-6');
})

//Corrige tamanho das colunas internas á coluna da direita
divElement.querySelectorAll('.justify-content-lg-center .row:last-child > div').forEach(function(el) {
    el.classList.add('col-lg-12');
})

//Remove seção com fundo branco 
document.getElementById('divEnterpriseProductLinks').remove();







