alert("welcome to our makeup site")
var place = prompt('what is your location?');
alert('dont worry we ship all over the world even ' + place)
var makeup = prompt ('what is the product you are looking for?', 'lipstick, eyeshadow, mascara');
if(makeup === 'lipstick'){
    
document.write('<img src="http://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-mettle-matte-lipstick-02-flora-coral-pink-13200498819155_1200x1200.jpg?v=1577303422"/>')}
else if (makeup === 'eyeshadow') 

{ document.write('<img scr="https://www.narscosmetics.eu/dw/image/v2/BCMQ_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwbbb8facf/hi-res/034500110101/NARS_FA20_ClimaxInnovation_PDPCrop_Soldier_Climax_ExtremeEffects_EyeshadowPalette_GLBL_SQUARE_Open_B.jpg?sw=1500&sh=1500&sm=fit"/>')
}
else if (makeup === 'mascara')
 { document.write('<img src="https://cdn.cultbeauty.com/resized/876x1026/slots-img/narnars_climax_mini_1560x1960-blykzjpg"/>')}

 else { alert("Out of stock!")}

 var FirstProduct = prompt('if you are an old costumer please name what is our first product?', 'redlipstick');
 while (FirstProduct !== 'redlipstick') {FirstProduct = prompt("guess again")

 }
 var trys = prompt('we like to give you a lipstick gift, choose how many gifts you want "max gifts is 5"');
                        //
 for (var i = 1; i <= trys; i++) {
    console.log('i',i)
     console.log(trys)
    document.write(' <img src= "https://cdn.artdeco.com/media/catalog/product/cache/4592d0c5034d19e28419115cb371f311/8/9/892006cfe0c047b2b52997158cc59ed65288d983_8458d8ae_57ce_47a6_bdff_f9e2b68d2c4c-image_product_1595862459_1.jpg"/>') 
    if(i ==6){
         break;
     } 
     


      
 }

 
 