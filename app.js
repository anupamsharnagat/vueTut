const vm = Vue.createApp({

    data(){
      return{
        firstName: 'John',
        lastName: 'Doe',
        url: 'https://www.google.com/',
        rawUrl: '<a href="https://www.google.com/" ',
        age:20
      }
    },

    methods:{

        fullName()
        {
            return `${this.firstName} ${this.lastName}`;
        },
        increment()
        {
            return this.age++;
        }

    }
}).mount('#app')

// setTimeout(()=>{
//     vm.firstName='Bob';
// },2000);

/*Vue.createApp({

    data(){
      return{
        firstName: 'Jane',
        lastName: 'Doe'
      }
    }
}).mount('#app2')*/