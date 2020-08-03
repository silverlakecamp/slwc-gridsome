const WEB_FONT_HOST_URL='https://fonts.googleapis.com/css?'

const WEB_FONT_FAMILIES = [
  'PT+Sans:400,700',
  'Work+Sans:100,300,400,500,700,900'
]

const ICON_URLS = [
  'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css'
]

export default function loadWebFonts(head) {
  head.link = [
    ...head.link,
    {
      rel: 'stylesheet',
      href: WEB_FONT_FAMILIES.reduce((hostURL, family) => {
        return `${hostURL}&family=${family}`
      }, WEB_FONT_HOST_URL)
    }
  ]
}
