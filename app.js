 $(document).ready(function() {

     $('select').material_select();

     var inputInfo = [];

     var key = "uid2496-36840364-7";
     var url = "https://api.shopstyle.com/api/v2/products?pid=";

     $('button').click(function() {
         inputInfo.push($('.topCat').val())
         inputInfo.push($('.bottomCat').val())
         inputInfo.push($('.shoeCat').val())



         var length = 3;

         for (var i = 0; i < length; i++) {
             $.get(url + key + "&fts=" + inputInfo[i] + "&offset=0&limit=10", function(productList) {
                 //  console.log(productList);
                 var randomIndex = Math.floor(Math.random() * productList.products.length);

                 var imageUrl = (productList.products[randomIndex].image.sizes.Best.url);
                 var clickUrl = (productList.products[randomIndex].clickUrl)

                 $('section.imgUrl').append(
                     '<div class="col s4">' +
                     '<a href= "'+ clickUrl + '"><img class="responsive-img" src="' + imageUrl + '"></a>' +
                     '</div>'

                 );

                 $('section.note').append(
                   '<p>Click the images for more information</p>'
                 );
             });
         }

     });

 });
