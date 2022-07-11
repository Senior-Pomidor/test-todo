module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test-todo/'
    : '/',
    css: {
      loaderOptions: {
        sass: {
          additionalData: `@import "@/styles/vars/colors.scss"; @import "@/styles/vars/vars.scss";`
        },
      }
    }
}
