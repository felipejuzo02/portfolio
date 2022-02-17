export default {
  data () {
    return {
      technologiesList: [
        {
          name: 'javascript',
          image: require('../static/assets/logo-js.png')
        },
        {
          name: 'html',
          image: require('../static/assets/logo-html.png')
        },
        {
          name: 'css',
          image: require('../static/assets/logo-css.png')
        },
        {
          name: 'vue',
          image: require('../static/assets/logo-vue.png')
        },
        {
          name: 'nuxt',
          image: require('../static/assets/logo-nuxt.png')
        }
      ]
    }
  },

  methods: {
    technologyImage (technology) {
      return this.technologiesList.find(technologyObject => technologyObject.name === technology)
    }
  }
}
