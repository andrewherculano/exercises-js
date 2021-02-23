let user = {
    name: 'Will Smith',
    age: 19,
    email: 'willsmith@gmail.com',
    city: 'São Paulo',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
    login: function () {
        console.log('Usuario logado')
    },
    logout: function () {
        console.log('Usuario deslogado')
    },
    logBlogPosts: function () {
        console.log(`${this.name} escreveu os seguintes posts abaixo:`)

        this.blogPosts.forEach((post) => {
            console.log(post)
        })
    }
}

user.logBlogPosts()

