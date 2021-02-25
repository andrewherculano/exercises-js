//Objetos em arrays

let user = {
    name: 'Will Smith',
    age: 19,
    email: 'willsmith@gmail.com',
    city: 'São Paulo',
    blogPosts: [
        {title: 'Empadão de frango', likes: 100},
        {title: '4 receitas de purê de batata', likes: 78}
    ],
    login: function () {
        console.log('Usuario logado')
    },
    logout: function () {
        console.log('Usuario deslogado')
    },
    logBlogPosts: function () {
        console.log(`${this.name} escreveu os seguintes posts abaixo:`)

        this.blogPosts.forEach((post) => {
            console.log(post.title, post.likes)
        })
    },
    
}

user.logBlogPosts()