Vue.component("page-content", {
	props: [ "padded" ],
	template: `
	<div v-if="padded" class="container mt-5">
		<div class="row">
			<slot></slot>
		</div>
	</div>
	<div v-else class="container">
		<div class="row">
			<slot></slot>
		</div>
	</div>`
});

Vue.component("text-heading", {
	template: `
	<h2 class="fw-bolder mb-4 mt-5">
		<slot></slot>
	</h2>`
});

Vue.component("text-content", {
	template: `
	<section class="mb-5">
		<slot></slot>
	</section>`
});

Vue.component("text-paragraph", {
	template: `
	<p class="fs-5 mb-4">
		<slot></slot>
	</p>`
});

Vue.component("page-body", {
	template: `
	<div class="col-lg-8">
		<slot></slot>
	</div>`
});

Vue.component("side-bar", {
	template: `
	<div class="col-lg-4">
		<slot></slot>
	</div>`
});

Vue.component("nav-bar", {
	props: {
		title: {
			type: String			
		},
		url: {
			type: String,
			default: "/"
		}
	},
	template: `
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container">
			<a class="navbar-brand" v-bind:href="url">{{ title }}</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<slot></slot>
				</ul>
			</div>
		</div>
	</nav>`
});

Vue.component("nav-bar-tab", {
	props: [ "current", "url", "value" ],
	template: `
	<li class="nav-item">
		<a v-if="current" v-bind:href="url" class="nav-link active">{{ value }}</a>
		<a v-else-if="current === undefined" v-bind:href="url" class="nav-link">{{ value }}</a>
	</li>`
});

Vue.component("page-heading", {
	props: [ "page_title", "page_lead" ],
	template: `
	<header class="py-5 bg-light border-bottom mb-4">
		<div class="container">
			<div class="text-center my-5">
				<h1 class="fw-bolder">{{ page_title }}</h1>
				<p class="lead mb-0">{{ page_lead }}</p>
			</div>
		</div>
	</header>`
});

Vue.component("content-heading", {
	props: {
		title: {
			type: String
		},
		date: {
			type: String
		},
		author: {
			type: String,
			default: "Anonymous"
		}
	},
	data: function () {
		return {
			pDate: new Date(this.$props.date)
		}
	},
	template: `
	<header class="mb-4">
		<h1 class="fw-bolder mb-1">{{ title }}</h1>
		<div class="text-muted fst-italic mb-2">
			Posted on {{ pDate.toUTCString().split(" ")[2] }} {{ pDate.getDate() }}, {{ pDate.getUTCFullYear() }} by {{ author }}
		</div>
		<slot></slot>
	</header>`
});

Vue.component("badge", {
	props: [ "text", "url" ],
	template: `
	<a class="badge bg-secondary text-decoration-none link-light" v-bind:href="url">
		{{ text }}
	</a>`
});

Vue.component("post-tab", {
	props: [ "post_title", "post_date", "post_url", "image_url" ],
	template: `
	<div class="card mb-4">
		<a v-bind:href="post_url">
			<img class="card-img-top" src="/static/assets//startbootstrap-blog/assets/850x350.jpg" alt="...">
		</a>
		<div class="card-body">
			<div class="small text-muted">{{ post_date }}</div>
			<h2 class="card-title">{{ post_title }}</h2>
			<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
			<a class="btn btn-primary" v-bind:href="post_url">Read more <span class="fontawesome-angle-right"></span>→</a>
		</div>
	</div>`
});

Vue.component("side-widget", {
	props: [ "header" ],
	template: `
	<div class="card mb-4">
		<div class="card-header">{{ header }}</div>
		<div class="card-body">
			<slot></slot>
		</div>
	</div>`
});

Vue.component("search-widget", {
	template: `
	<side-widget header="Search">
		<div class="input-group">
			<input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
			<button class="btn btn-primary" id="button-search" type="button">Go!</button>
		</div>
	</side-widget>`
});

Vue.component("categories-widget", {
	template: `
	<side-widget header="Categories">
		<div class="row">
			<slot></slot>
		</div>
	</side-widget>`
});

Vue.component("feature-image", {
	props: [ "url" ],
	template: `
	<figure class="mb-4">
		<img class="img-fluid rounded" v-bind:src="url">
	</figure>`
});

Vue.component("pagination-widget", {
	template: `
	<nav aria-label="Pagination">
		<hr class="my-0" />
		<ul class="pagination justify-content-center my-4">
			<li class="page-item disabled">
				<a class="page-link" href="#" tabindex="-1" aria-disabled="true">
					Newer
				</a>
			</li>
			<slot></slot>
			<li class="page-item disabled">
				<a class="page-link" href="#" tabindex="-1" aria-disabled="true">
					Older
				</a>
			</li>
		</ul>
	</nav>`
});

Vue.component("pagination-widget-button", {
	props: [ "current", "separator", "url", "value"],
	template: `
	<li v-if="current" class="page-item active" aria-current="page">
		<a class="page-link" v-bind:url="url">
			{{ value }}
		</a>
	</li>
	<li v-else-if="separator === ''" class="page-item disabled">
		<a class="page-link" v-bind:url="url">
			...
		</a>
	</li>
	<li v-else-if="current == undefined" class="page-item">
		<a class="page-link" v-bind:href="url">
			{{ value }}
		</a>
	</li>`
});

Vue.component("comments-section", {
	props: {
		commentPlaceholder: {
			type: String,
			default: "Join the discussion and leave a comment"
		}
	},
	template: `
	<section class="mb-5">
		<div class="card bg-light">
			<div class="card-body">
				<form class="mb-4">
					<textarea v-bind:placeholder="commentPlaceholder" class="form-control" rows="3" style="margin-top: 0; margin-bottom: 0"></textarea>
				</form>
				<slot></slot>
			</div>
		</div>
	</section>`
});

Vue.component("comment-section-comment", {
	props: {
		userAvatar: {
			type: String,
			default: "/static/assets/startbootstrap-blog/assets/50x50.jpg"
		},
		userName: {
			type: String,
			required: true
		},
		userPage: {
			type: String
		}
	},
	template: `
	<div class="d-flex mb-4">
		<div class="flex-shrink-0">
			<img class="rounded-circle" v-bind:src="userAvatar">
		</div>
		<div class="ms-3">
			<div class="fw-bold">{{ userName }}</div>
			<slot></slot>
		</div>
	</div>`
});

Vue.component("page-footer", {
	props: [ "company-name" ],
	template: `
	<footer class="py-5 bg-dark">
		<div class="container">
			<slot></slot>
		</div>
	</footer>`
});

Vue.component("copyright", {
	props: [ "company-name" ],
	template: `
	<p class="m-0 text-center text-white">
		Copyright &copy; {{ companyName }} 2021
	</p>`
});
