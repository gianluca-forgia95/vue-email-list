var root = new Vue({
el: '#root',
 data: {
   emailList: [],

    },
   mounted: function() {
     const select = this;
     for (var i = 0; i < 10 ; i++) {
         axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
         .then( function (response) {
          const resultCall = response.data.response;
          select.emailList.push(resultCall);
         });
     }
   },

   methods: {

   }

});
