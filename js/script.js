var root = new Vue({
el: '#root',
 data: {
   emailList: [],

    },
   mounted: function() {
     select = this;
     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(function (response) {
      


    });
   }


   ,
   methods: {

   }

});
