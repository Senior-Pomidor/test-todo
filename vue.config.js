// файл vue.config.js должен быть расположен в корневом каталоге проекта

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/test-todo/'
    : '/',
    css: {
      loaderOptions: {
        sass: {
          additionalData: `@import "@/styles/vars/imports.scss";`
        },
      }
    }
}
