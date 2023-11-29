Vue.createApp({
    template: "#my-app",
    data() {
      return {
        books: [
          {
            id: 1,
            name: '《算法导论》',
            date: '2006-9',
            price: 85.00,
            count: 1
          },
          {
            id: 2,
            name: '《UNIX编程艺术》',
            date: '2006-2',
            price: 59.00,
            count: 1
          },
          {
            id: 3,
            name: '《编程珠玑》',
            date: '2008-10',
            price: 39.00,
            count: 1
          },
          {
            id: 4,
            name: '《代码大全》',
            date: '2006-3',
            price: 128.00,
            count: 1
          },
        ]
      }
    },
    computed: {

    },
    methods: {
        minus (i){
            this.books[i].count--
            // if(this.books[i].count>1){
            //     this.books[i].count--
            // }
            // if(this.books[i].count == 1){
            //     this.dis1 =true
            // }
        },
        add (i){
            this.books[i].count++
            // this.dis1 = false
            // this.dis2 = false
        },
        del (i){
            this.books.splice(i,1)
            
        }
    }
  }).mount("#app");