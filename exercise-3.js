
const anav = $('#cat-anav');
let catName = anav.find('.anavmfe__accordion__item__name');
let item;

// Creates list container
$('#cat-fran-rows').prepend('<ul></ul>');

// Appends list itens dinamically with filter titles 
for (let x = 0; x < catName.length; x++) {
    item = $(catName[x]);
    item.clone().appendTo('#cat-fran-rows ul');
    
}
// Creates list of filter elements with links
$('#cat-fran-rows ul div ').wrap('<li><a href="#"></a></li>');

// Styling
$('#cat-fran-rows ul').css('display', 'flex').css('list-style-type', 'none').css('flex-wrap', 'wrap');
$('#cat-fran-rows ul li').css('margin', '0 15px');

// Builds URL from click events on the dinamic list 
$('#cat-fran-rows ul li a').on('click', function(){
    let category = $(this).text();
    console.log(category)
        if ($('#cat-anav .anavmfe__accordion__item__trigger:contains("'+category+'")')) {
        
        let inputs = $('#cat-anav .anavmfe__accordion__item__trigger:contains("'+category+'")').parent().find('input[type="checkbox"]');
        console.log(inputs);
        let url = window.location.href;
        let refinements = '';
        
        for (let i = 0; i < inputs.length; i++) {
            if(inputs[i].value != undefined) {
                console.log(inputs[i].value);
                refinements = refinements + inputs[i].value + ',';
            }
            
        }
        
        url = url.replace('sc', 'sr').replace('#', '/');
        url = url+'ready-to-ship?appliedRefinements='+ refinements;
        url = url.slice(0, -1);
        console.log(url);
        // Redirects to URL with filter parameters
        window.location = url; 
        
        }
                    
    });
