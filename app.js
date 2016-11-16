 $(document).ready(function() {

     $('select').material_select();

     var catObj = {};


     var key = "uid2496-36840364-7";
     var url = "http://api.shopstyle.com/api/v2/products?pid=";

     $('button').click(function() {
          catObj.topCat = $('.topCat').val();
          catObj.bottomCat = $('.bottomCat').val();
          catObj.shoeCat = $('.shoeCat').val();
          catObj.price = $('price').val();

         console.log(catObj);


         // after the button is clicked the values from the above cats will go into this get function//


         $.get(url + key + "&fts=" + catObj.topCat + "&fts=" + catObj.bottomCat + "&fts=" + catObj.shoeCat + "&fts=" + catObj.price + "&offset=0&limit=10", function(productList) {
             console.log(productList);
             //  then I need a new object that provides me with the img for each item in the cat values//
             // then I need to display the images onto my page.

              var id = productList.products[0].id
              $.get("http://api.shopstyle.com/api/v2/products/" + id + "?pid=uid2496-36840364-7", function(product) {
                  console.log(product);

              })
         });

     });

 });
