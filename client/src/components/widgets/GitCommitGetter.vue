<template lang="html">
  <div class="page">
    <ul>
      <li v-for="record in commits">
        <a :href="record.html_url" target="_blank" class="commit">{{ record.sha.slice(0, 7) }}</a> - <span class="message">{{ record.commit.message}}</span><br>
        by <span class="author"><a :href="record.author.html_url" target="_blank">{{ record.commit.author.name }}</a></span> at <span class="date">{{ record.commit.author.date | formatDate('YYYY-MM-DD hh:mm:ss')}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      commits: []
    }
  },
  props: {
    length: String
  },
  mounted () {
    this.getCommits()
  },
  methods: {
    getCommits () {
      this.$http.get('https://api.github.com/repos/popitin/haowen/commits?per_page=' + this.length + '&sha=')
      .then((res) => {
        this.commits = res.data
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
  color: #f66;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
  max-width: 500px;
  margin: 20px auto;
}
.author, .date {
  font-weight: bold;
}
</style>
