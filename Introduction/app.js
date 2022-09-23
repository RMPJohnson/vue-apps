const { createApp } = Vue
  createApp({
    data() {
      return {
        first_name: 'Yasir',
        last_name: 'Rehman',
        gender:'male',
        email:'yasir509@gmail.com',
        picture: 'https://randomuser.me/api/portraits/men/10.jpg'
      }
    },
    methods: {
        async getUser() {
        const res = await fetch('https://randomuser.me/api/')
        const {results} = await res.json()         

        this.first_name= results[0].name.first
        this.last_name= results[0].name.last
        this.gender=results[0].gender
        this.email=results[0].email
        this.picture= results[0].picture.large
        },
    },
  }).mount('#app')