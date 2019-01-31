var apiURL = 'https://petitsbonheursdesophie.com/wp-json/wp/v2/posts'

window.onload = function () {
    var posts = new Vue({

        el: '#app',

        data: {
            posts: [],
        },

        created: function () {
            this.fetchData()
        },


        methods: {
            fetchData: function () {
                var xhr = new XMLHttpRequest()
                var self = this
                xhr.open('GET', apiURL)
                xhr.onload = function () {
                    self.posts = JSON.parse(xhr.responseText)
                    console.log(self.posts[0].link)
                }
                xhr.send()
            }
        }
    })
}