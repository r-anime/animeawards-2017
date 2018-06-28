Vue.component('show-result', {
	props: ['show', 'rank'],
	computed: {
		small () {
			return this.show.title.length > 12;
		},
		backgroundStyle () {
			return `background-image: url(${this.show.img})`;
		}
	},
	template: `
		<div class="result">
			<div
				class="result-image"
				:style="backgroundStyle"
			/>
			<div class="result-caption">
				<span :class="['result-title', {small: show.name.length > 12}]">
					{{show.name}}
				</span>
				<span class="result-rank">
					{{rank}}
				</span>
			</div>
		</div>
	`
});

Vue.component('award-results', {
	props: ['award'],
	computed: {
		slug () {
			return `award-${this.$root.slugify(this.award.name)}`;
		}
	},
	template: `
		<div class="award">
			<h3 class="award-title" :id="slug">
				{{award.name}}
			</h3>
			<div class="award-ranking public">
				<h4 class="award-ranking-title">
					Public Pick
				</h4>
				<show-result
					v-for="(show, index) in award.public"
					:show="show"
					:rank="index + 1"
				/>
			</div>
			<div class="award-ranking jury">
				<h4 class="award-ranking-title">
					Jury Pick
				</h4>
				<show-result
					v-for="(show, index) in award.jury"
					:show="show"
					:rank="index + 1"
				/>
			</div>
			<div class="clear"/>
			<div v-if="award.hms" class="award-hms">
				<h4 class="award-hms-title">Honorable Mentions</h4>
				<ul class="award-hms-list">
					<li v-for="hm in award.hms" class="award-hms-list-item">
						{{hm.name}}
					</li>
				</ul>
			</div>
		</div>
	`
});

Vue.component('awards-section', {
	props: ['section'],
	computed: {
		slug () {
			return `section-${this.$root.slugify(this.section.name)}`;
		}
	},
	template: `
		<div class="section">
			<h2 class="section-title" :id="slug">
				{{section.name}}
			</h2>
			<p
				v-if="typeof section.blurb === 'string'"
				class="section-blurb"
				v-html="section.blurb"
			/>
			<p
				v-else
				v-for="blurb in section.blurb"
				class="section-blurb"
				v-html="blurb"
			/>
			<award-results
				v-for="award in section.awards"
				:award="award"
			/>
		</div>
	`
});

Vue.component('sections-nav', {
	props: ['sections'],
	methods: {
		linkFor (section) {
			return `#section-${this.$root.slugify(section.name)}`;
		}
	},
	template: `
		<nav class="sections-nav">
			<ul class="sections-list">
				<li
					class="sections-list-item"
					v-for="section in sections"
				>
					<a class="sections-list-item-link" :href="linkFor(section)">
						{{section.name}}
					</a>
				</li>
			</ul>
		</nav>
	`
});

new Vue({ // eslint-disable-line no-new
	el: '#app',
	data: {
		stuff
	},
	methods: {
		slugify (text) {
			return text.toLowerCase().replace(/\s+/g, '-');
		}
	},
	template: `
		<div class="app">
			<header>
				<h1>
					<img class="header-snoo" src="img/snoo.png">
					/r/anime awards
				</h1>
			</header>
			<sections-nav :sections="stuff.sections"/>
			<main class="content">
				<awards-section
					v-for="section in stuff.sections"
					:section="section"
				/>
			</main>
		</div>
	`
});
