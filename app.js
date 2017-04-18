// var Vue = require('vue');
// Vue.use(require('vue-resource'));
new Vue({
	el:"#app",
	data:{
		sortparam:"",
		message:"hello vuejs.",
		selected:"Q",
		book: { id: 0, author: '', name: '', price: '' }, 
		books: []//[{ id: 1, author: '曹雪芹', name: '红楼梦', price: 32.0 }, { id: 2, author: '施耐庵', name: '水浒传', price: 30.0 }, { id: '3', author: '罗贯中', name: '三国演义', price: 24.0 }, { id: 4, author: '吴承恩', name: '西游记', price: 20.0 }]
	},
	mounted:function(){
		console.log(1)
		this.$http.get('./book.json').then(data=>{
			for(var i=0;i<data.data.length;i++){
				this.books.push(data.data[i])
			}
			// this.$set(this.books,data.data);
			// console.log(typeof(data.data))
		},request=>{
			console.log('fail'+status+","+request);
		})
	},
	methods:{
		dosomething:function(){
			
		},
		addBook:function(){
			this.book.id=this.books.length+1;
			console.log(this.book)
			this.books.push(this.book);
			this.book={};
		},
		sortBy:function(sortparam){
			this.sortparam = sortparam;
		}
	},
	computed:{
		sum:function(){
			var result = 0;
			for(var i = 0;i<this.books.length;i++){
				result = Number(this.books[i].price) + result;
			}
			return result;
		}
	}
	
})