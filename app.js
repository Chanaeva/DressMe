 $(document).ready(function() {

     $('select').material_select();

     var inputInfo = [];

     var key = "uid2496-36840364-7";
     var url = "http://api.shopstyle.com/api/v2/products?pid=";

     $('button').click(function() {
         inputInfo.push($('.topCat').val())
         inputInfo.push($('.bottomCat').val())
         inputInfo.push($('.shoeCat').val())
             //  inputInfo.push($('price').val())


         var length = 3;

         for (var i = 0; i < length; i++) {
             $.get(url + key + "&fts=" + inputInfo[i] + "&offset=0&limit=10", function(productList) {
                 //  console.log(productList);
                 var randomIndex = Math.floor(Math.random() * productList.products.length);

                 console.log(productList.products[randomIndex].image.sizes.Best.url);


             });

         }

     });

 });
