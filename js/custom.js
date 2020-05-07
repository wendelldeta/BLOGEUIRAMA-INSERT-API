let rowNews = document.getElementById("news-items");

let blogs = [
    {
        url:'https://luiscardoso.com.br',
        avatar:'img/slide/luis-cardoso.png',
        name:'Luis Cardoso',
        platform:'wordpress'
    },
    {
        url:'https://atual7.com',
        avatar:'img/slide/atual7.png',
        name:'Atual7',
        platform:'wordpress'
    }
];

let news = [];

let page = 1;

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}

function showPost(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

function getPosts(page=page,per_page=2){
	blogs.map(b=>{
		let blogItems = httpGet(`${b.url}/wp-json/wp/v2/posts?per_page=${per_page}`);
		blogItems.map(i=>{
			i.blog_url = b.url;
			i.blog_name = b.name;
			// Get thumbnail
			if(i._links['wp:featuredmedia']){
				let resThumb = httpGet(i._links['wp:featuredmedia'][0].href);
				i.thumbnail = resThumb.media_details.sizes.thumbnail.source_url;
			}
			news.push(i);
		})
	})
	console.log('Page:',page);
	page++;
}

getPosts()

news = news.sort(function(a,b){
	return new Date(a.date) - new Date(b.date);
})

news.map(i=>{
	let insertPost = showPost(`
		<div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="itemBlog">
                <a class="linkImagem" href="#">
                    <img src="${i.thumbnail || 'img/no-image.png'}" width="238px" height="148.6px" alt="">
                </a>
                <div class="itemBlogConteudo">
                    <h4>
                        <a href="${i.link}" target="_blank">${i.title.rendered}</a>
                    </h4>
                    <p class="conteudo">${i.excerpt.rendered}</p>
                    <p class="data">${i.date}</p>
                    <p class="autor"><a href="${i.blog_url}" target="_blank">${i.blog_name}</a></p>
                </div>
            </div>
        </div>`);
	rowNews.insertBefore(insertPost, rowNews.childNodes[0]);
})