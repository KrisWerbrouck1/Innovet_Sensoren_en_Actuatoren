module.exports = {
  title: 'Innovet_Sensoren_en_Actuatoren',
  description: 'Overzicht van sensoren en actuatoren geschikt voor het Innovet IOT project',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: 'https://stem-ict.be/' },
      { text: 'License', link: '/LICENSE.md' },
    ],
    sidebar: [
      ['/', 'Home'],
      ['/digitale-ingang/', 'digitale ingang'],
      ['/drukknop/', 'drukknop'],
      ['/analoge-invoer/', 'Analoge invoer'],
      ['/potentiometer/', 'Potentiometer'],
      ['/lichtsterkte-sensor/', 'Lichtsterkte sensor']
    ],
    repo: 'https://github.com/KrisWerbrouck1/Innovet_Sensoren_en_Actuatoren.git',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
