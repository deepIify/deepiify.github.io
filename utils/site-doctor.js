import { LIMITER, getPixelHelperElement, getPixel } from './pixel-calculator'
import robotsParser from './robots'
import Diagnosis from './diagnosis'
const URL_REGEX = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/

const getDomainFrom = (url) => {
  const a = document.createElement('a')
  a.href = url
  return a.hostname
}

const getOriginFrom = (url) => {
  const a = document.createElement('a')
  a.href = url
  return a.origin
}

const getPathnameFrom = (url) => {
  const a = document.createElement('a')
  a.href = url
  return a.pathname
}

const getPathnameFrom2 = (url) => {
  if (!url || url === '') return '[λΉμ΄μμ]'
  if (url.indexOf('http') > -1) {
    return getPathnameFrom(url)
  }
  return url
}

const getInternalLinkHash = (url) => {
  const a = document.createElement('a')
  a.href = url
  return a.hash
}

const isHash = (url) => {
  if (!url) return false
  const hash = getInternalLinkHash(url)
  return hash && hash !== ''
}

const getDoctypeText = (doctype) => {
  const node = doctype
  return `<!DOCTYPE ${node.name}${node.publicId ? ' PUBLIC"' + node.publicId + '"' : ''}${!node.publicId && node.systemId ? ' SYSTEM' : ''}${node.systemId ? ' "' + node.systemId + '"' : ''}>`
}

const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length

const ROBOT_UAS = ['Googlebot', 'NaverBot', 'Yeti']

class SiteDoctor {
  constructor() {

    this.head = null
    this.html = null
    // meta infos
    this.url = null
    this.domain = null
    this.doctype = null
    this.lang = null
    this.title = null
    this.meta = null
    this.canonicalLink = null
    this.favicons = null
    this.hreflang = null
    // page quality
    this.frames = null
    this.images = null
    this.headings = null
    this.links = null
    this.mobile = null
  }

  init (url, rawHtml, robotsTxt) {
    this.html = this.parseHtml(rawHtml)
    const pixelHelper = document.querySelector('#pixel-helper')
    if (!pixelHelper) {
      const helper = getPixelHelperElement()
      document.body.appendChild(helper)
    }

    this.LIMITER = LIMITER

    // meta infos
    this.url = {
      name: 'νμ΄μ§ URL (Page URL)',
      self: url,
      isValid: false,
      hasParameters: true,
      hasManySubdirectories: true
    }
    this.domain = {
      name: 'λλ©μΈ (Domain)',
      self: getDomainFrom(url),
      isSubDomain: false,
      isValidLength: false
    }

    this.doctype = {
      name: 'λ¬Έμ μ ν (Doctype)',
      self: null,
      exist: false,
      isHtml5: false,
      isDoctypeLocatedFirst: false
    }

    this.lang = {
      name: 'μΈμ΄ (Language)',
      self: null,
      exist: false
    }

    this.title = {
      name: 'νμ΄ν (Title)',
      self: null,
      exist: false,
      size: 0,
      desktop: {
        isSizeValid: false
      },
      mobile: {
        isSizeValid: false
      }
    }

    this.meta = {
      name: 'λ©ν νκ·Έ (Meta Tags)',
      self: null,
      desc: {
        name: 'λ©ν μ€λͺ (Meta Description)',
        self: null,
        exist: false,
        size: 0,
        desktop: {
          isSizeValid: false
        },
        mobile: {
          isSizeValid: false
        }
      },
      charset: {
        name: 'λ¬Έμ μΈμ½λ© (Charset Encoding)',
        self: null,
        exist: false,
        isValid: false
      },
      robot: {
        name: 'ν¬λ‘€λ§ κ°λ₯μ¬λΆ (Crawlability)',
        self: null,
        exist: false,
        isValid: true
      }
    }

    this.canonicalLink = {
      name: 'μ μ λ§ν¬ (Canonical URL)',
      self: null,
      exist: false,
      isValid: false
    }

    this.favicons = {
      name: 'νλΉμ½ (Favicon)',
      self: null,
      existAtLeastOne: false
    }

    this.hreflang = {
      name: 'νμ§ν λ²μ  (Localized Version)',
      self: null,
      existAtLeastOne: false
    }

    // page quality
    this.content = {
      name: 'λ΄μ© (Content)',
      word: {
        self: null,
        size: 0,
        isValidSize: false
      },
      paragraph: {
        self: null,
        size: 0,
        isValidSize: false,
        avgWordPerParagraph: 0.0,
        isValidAvg: false
      },
      isTitleWordsIncludedInContent: false,
      isHead1WordsIncludedInContent: false
    }

    this.frames = {
      name: 'νλ μ (Frames)',
      self: null,
      isFrameset: false,
      isFrames: false,
      isNoFrames: false
    }

    this.images = {
      name: 'μ΄λ―Έμ§ μ΅μ ν (Image Optimization)',
      self: null,
      size: 0,
      altSize: 0,
      isValid: false
    }

    this.headings = {
      name: 'νμ  (Headings)',
      self: null,
      exist: false,
      head1: {
        name: 'H1 νμ  (H1 Heading)',
        self: false,
        exist: false,
        isOnlyOne: false
      },
      isValidStructure: false,
      isNoAnchors: false
    }

    this.links = {
      internal: {
        name: 'λ΄λΆ λ§ν¬ (Internal Link)',
        self: null,
        size: ''
      },
      external: {
        name: 'μΈλΆ λ§ν¬ (External Link)',
        self: null
      },
      socials: {
        name: 'SNS κ³΅μ  λ§ν¬ (Sharing Social)',
        self: null,
        isSharing: false
      }
    }

    this.mobile = {
      name: 'λͺ¨λ°μΌ μ΅μ ν (Mobile Optimization)',
      viewport: {
        content: null,
        exist: false,
        isValid: false
      },
      appleTouchIcon: {
        exist: false
      }
    }
    this.preview = {
      name: 'κ²μ κ²°κ³Ό λ―Έλ¦¬λ³΄κΈ° (Search Result Preview)',
      content: null
    }

    this.robotTxt = {
      self: robotsTxt,
      exist: false,
      isAllowGoogle: true,
      isAllowNaver: true,
      importance: 2,
      content: null
    }

    this.sitemaps = {
      name: 'μ¬μ΄νΈ λ§΅ (Sitemap)',
      self: null,
      exist: false,
      importance: 2,
      content: null
    }
  }

  parseHtml(rawHtml) {
    return new DOMParser().parseFromString(rawHtml, "text/html")
  }

  diagnose (url, headers, rawHtml, robotsTxt) {
    this.init(url, rawHtml, robotsTxt)
    if (!this.html) return -1
    if (this.html.documentElement.tagName !== "HTML") return -2
    // validate meta
    this.validateDomain()
    this.validateUrl()
    this.validateDoctype()
    this.validateLang()
    this.validateTitle()
    this.validateMeta()
    this.validateCanonicalUrl()
    this.validateFavicon()
    this.validateHreflang()

    // validate page structure
    this.validateHeadings()

    // validate page quality
    this.validateContent()
    this.validateFrames()
    this.validateImages()
    this.validateMobile()

    // validate link structure
    this.validateLinks()

    this.validateRobotTxt()
  }

  getDiagnosis () {
    const dianosis = new Diagnosis()

    dianosis.setPreview(this.url, this.title, this.meta.desc, this.favicons)
    dianosis.setTitle(this.title)
    dianosis.setMetaDescription(this.meta.desc)
    dianosis.setMetaRobots(this.meta.robot, this.robotTxt)
    dianosis.setMeta(this.meta)
    dianosis.setCanonicalLink(this.canonicalLink)
    dianosis.setLang(this.lang)
    dianosis.setDomain(this.domain)
    dianosis.setUrl(this.url)
    dianosis.setHreflang(this.hreflang)
    dianosis.setDoctype(this.doctype)
    dianosis.setFavicon(this.favicons, this.url)

    // νμ΄μ§ νμ§
    dianosis.setContent(this.content)
    dianosis.setFrames(this.frames)
    dianosis.setImages(this.images)
    dianosis.setMobile(this.mobile)

    // νμ΄μ§ κ΅¬μ‘°
    dianosis.setHead1(this.headings.head1)
    dianosis.setHeadingStructure(this.headings)
    dianosis.setHeadingsTable(this.headings.self)

    // λ§ν¬ κ΅¬μ‘°
    dianosis.setLinks(this.links.internal, 'IN')
    dianosis.setLinks(this.links.external, 'EX')
    dianosis.setLinkList(this.links)
    return dianosis.get()
  }

  validateDomain () {
    const domainWords = this.domain.self.split('.')
    const mainDomain = domainWords[domainWords.length - 2]

    this.domain.isSubDomain = domainWords.length > 2
    this.domain.isValidLength = mainDomain.length < 21
  }

  validateUrl () {
    const pathname = getPathnameFrom(this.url)
    this.url.hasParameters = this.url.self.match(/\?./)
    this.url.hasManySubdirectories = pathname.split('\\/').length > 4
  }

  validateDoctype () {
    this.doctype.self = this.html.doctype
    this.doctype.exist = !!this.doctype.self
    this.doctype.isHtml5 = this.isValidHtml5()
    this.doctype.isDoctypeLocatedFirst = this.doctype.exist && this.html.doctype === this.html.firstChild
  }

  validateLang () {
    this.lang.self = this.html.documentElement.getAttribute('lang')
    this.lang.exist = this.lang.self && this.lang.self.length > 1
  }

  validateTitle () {
    this.title.self = this.html.title
    this.title.exist = this.title.self && this.title.self !== '' && this.title.self.length > 0
    this.title.size = getPixel('TITLE', this.title.self)
    this.title.desktop.isSizeValid = this.title.size >= this.LIMITER.DESKTOP.TITLE.MIN && this.title.size <= this.LIMITER.DESKTOP.TITLE.MAX
    this.title.mobile.isSizeValid = this.title.size >= this.LIMITER.MOBILE.TITLE.MIN && this.title.size <= this.LIMITER.MOBILE.TITLE.MAX
  }

  validateMeta () {
    this.meta.self = Array.from(this.html.head.querySelectorAll('meta'))

    // description
    const desc = this.meta.self.find(m => m.name === 'description')
    if (desc) {
      this.meta.desc.self = desc.content
      this.meta.desc.exist = this.meta.desc.self && this.meta.desc.self !== '' && this.meta.desc.self.length > 0
      this.meta.desc.size = getPixel('DESC', this.meta.desc.self)
      this.meta.desc.desktop.isSizeValid = this.meta.desc.size >= this.LIMITER.DESKTOP.DESC.MIN && this.meta.desc.size <= this.LIMITER.DESKTOP.DESC.MAX
      this.meta.desc.mobile.isSizeValid = this.meta.desc.size >= this.LIMITER.MOBILE.DESC.MIN && this.meta.desc.size <= this.LIMITER.MOBILE.DESC.MAX
    }

    const charset = this.html.charset
    if (charset && charset !== '') {
      this.meta.charset.self = charset
      this.meta.charset.exist = true
      this.meta.charset.isValid = 'UTF-8'.toLowerCase() === charset.toLowerCase()
    }

    const robots = this.meta.self.find(m => m.name === 'robots')
    if (robots) {
      this.meta.robot.self = robots.content
      this.meta.robot.exist = true
      const contents = robots.content.split(',').map(r => r.toLowerCase().trim())
      this.meta.robot.isValid = !contents.includes('noindex')
    }
  }

  validateCanonicalUrl () {
    const canonical = this.html.head.querySelector('link[rel="canonical"]')
    if (canonical) {
      this.canonicalLink.self = canonical.href
      this.canonicalLink.isValid = URL_REGEX.test(this.canonicalLink.self)
      this.canonicalLink.exist = this.canonicalLink.self && this.canonicalLink.isValid
    }
  }

  validateFavicon () {
    const faviconCandidates = [
      this.html.head.querySelector('link[rel="shortcut icon"]'),
      this.html.head.querySelector('link[rel="icon shortcut"]'),
      this.html.head.querySelector('link[rel="icon"]'),
      this.html.head.querySelector('link[rel="apple-touch-icon"]'),
      this.html.head.querySelector('link[rel="apple-touch-icon-precomposed"]')
    ]
    
    this.favicons.self = faviconCandidates.filter(f => f && f !== undefined).map(f => f.href)
    this.favicons.existAtLeastOne = faviconCandidates.some(f => f && f !== undefined)
  }

  validateHreflang () {
    const hreflangs = Array.from(this.html.head.querySelectorAll('link[rel="alternate"]:not([type="application/atom+xml"])'))
    this.hreflang.self = hreflangs.map(h => {
      return {
        href: h.href,
        lang: h.hreflang
      }
    })
    const hrefs = this.hreflang.self.map(h => h.href)
    const langs = this.hreflang.self.map(h => h.lang)

    this.hreflang.hasDuplicatedHref = hrefs.filter((item, index) => hrefs.indexOf(item) != index).length > 0
    this.hreflang.hasDuplicatedLang = langs.filter((item, index) => langs.indexOf(item) != index).length > 0
    this.hreflang.existAtLeastOne = this.hreflang.self.length > 0
  }

  validateContent () {
    this.content.word.self = this.html.body.innerText.trim()
    this.content.word.size = this.content.word.self.split(' ').length
    this.content.word.isValidSize = this.content.word.size >= 250 && this.content.word.size <= 8000
    this.content.paragraph.self = Array.from(this.html.body.querySelectorAll('p')).map(p => p.innerText)
    this.content.paragraph.size = this.content.paragraph.self.length
    this.content.paragraph.isValidSize = this.content.paragraph.size >= 7 && this.content.paragraph.size <= 100
    this.content.paragraph.avgWordPerParagraph = average(this.content.paragraph.self.map(p => p.split(' ').length)).toFixed(2)
    this.content.paragraph.isValidAvg = this.content.paragraph.avgWordPerParagraph >= 5 && this.content.paragraph.avgWordPerParagraph <= 20
    
    const wordsOfTitle = this.title.self.split(' ')
    const wordsOfhead1 = this.headings.head1.exist && this.headings.head1.self[0].anchor.split(' ')
    const contentWords = this.content.word.self.split(' ')
    for (let i = 0; i < wordsOfTitle.length; i += 1) {
      if (contentWords.includes(wordsOfTitle[i])) {
        this.content.isTitleWordsIncludedInContent = true
        break
      }
    }
    for (let i = 0; i < wordsOfhead1.length; i += 1) {
      if (contentWords.includes(wordsOfTitle[i])) {
        this.content.isHead1WordsIncludedInContent = true
        break
      }
    }
  }

  validateFrames () {
    const framesets = this.html.body.querySelectorAll('frameset')
    const frames = this.html.body.querySelectorAll('frame')
    const noframes = this.html.body.querySelectorAll('noframe')

    this.frames.isFrameset = framesets.length > 0
    this.frames.isFrames = frames.length > 0
    this.frames.isNoFrames = noframes.length > 0
  }

  validateImages () {
    const images = Array.from(this.html.body.querySelectorAll('img'))
    this.images.self = images.map(i => {
      return {
        src: i.src,
        alt: i.alt
      }
    })
    this.images.size = this.images.self.length
    this.images.altSize = this.images.self.filter(i => i.alt && i.alt !== '').length
    this.images.isValid = this.images.size === this.images.altSize
  }

  validateHeadings () {
    const h1Headings = Array.from(this.html.body.querySelectorAll('h1'))
    const headings = Array.from(this.html.body.querySelectorAll('h1,h2,h3,h4,h5,h6'))

    this.headings.self = headings.map(h => ({
      level: Number(h.localName.replace('h', '')),
      anchor: h.innerText.trim(),
      isAnchor: h.innerText.trim() !== ''
    }))
    this.headings.exist = this.headings.self.length > 0
    this.headings.head1.self = h1Headings
    this.headings.head1.exist = h1Headings.length > 0
    this.headings.head1.isOnlyOne = this.headings.head1.exist && h1Headings.length === 1
    if (this.headings.head1.exist) {
      this.headings.head1.self = h1Headings.map(h => ({
        anchor: h.innerText.trim(),
        isAnchor: h.innerText.trim() !== ''
      }))
    }

    this.headings.isValidStructure = this.isValidHeadingStructure(this.headings.self)
    this.headings.isNoAnchors = this.headings.head1.self.filter(h => !h.isAnchor).length > 0
  }

  validateLinks () {
    const aLinks = Array.from(this.html.querySelectorAll('a')).filter(a => a.href && a.href !== '')
    const thisDomain = window.location.hostname

    this.links.internal.self = aLinks
      .filter(l => l && getDomainFrom(l.href) === this.domain || getDomainFrom(l.href) === thisDomain)
      .map(l => ({
        href: decodeURIComponent(isHash(l.href) ? getInternalLinkHash(l.href) : getPathnameFrom2(l.getAttribute('href'))),
        isNewWindow: l.target === '_blank',
        isNofollow: l.rel && l.rel.split(' ').includes('nofollow'),
        isHash: isHash(l.href),
        anchor: l.innerText ? l.innerText.trim() : '[λΉμ΄μμ]',
        isAnchor: l.innerText && l.innerText.trim() !== '',
        isExternal: false
      }))

    this.links.internal.size = this.links.internal.self.length
    this.links.internal.noAnchorSize = this.links.internal.self.filter(a => !a.isAnchor).length
    this.links.internal.longAnchorSize = this.links.internal.self.filter(a => a.anchor.length > 100).length

    this.links.external.self = aLinks
      .filter(l => l && getDomainFrom(l.href) !== this.domain && getDomainFrom(l.href) !== thisDomain)
      .map(l => ({
        href: decodeURIComponent(l.href),
        isNewWindow: l.target === '_blank',
        isNofollow: l.rel.split(' ').includes('nofollow'),
        isHash: isHash(l.href),
        anchor: l.innerText ? l.innerText.trim() : '[λΉμ΄μμ]',
        isAnchor: l.innerText && l.innerText.trim() !== '',
        isExternal: true
      }))

      this.links.external.size = this.links.external.self.length

    // TODO: social shareing 
  }

  validateMobile () {
    const viewport = this.html.head.querySelector('meta[name="viewport"]')
    if (viewport) {
      this.mobile.viewport.content = viewport.content
      this.mobile.viewport.exist = viewport.content && viewport.content !== ""
      if (this.mobile.viewport.exist) {
        this.mobile.viewport.isValid = viewport.content.toLowerCase().indexOf('width=device-width') > -1
      }
    }

    const appleTouchIcons = [
      this.html.head.querySelector('link[rel="apple-touch-icon"]'),
      this.html.head.querySelector('link[rel="apple-touch-icon-precomposed"]')
    ]
    this.mobile.appleTouchIcon.exist = appleTouchIcons.some(a => !!a)
  }

  validateRobotTxt () {
    if (this.robotTxt.self && this.robotTxt.self !== '') {
      const robotParser = robotsParser(`${getOriginFrom(this.url.self)}/robots.txt`, this.robotTxt.self)

      this.sitemaps.self = robotParser.getSitemaps()
      this.sitemaps.exist = this.sitemaps.self && this.sitemaps.self.length > 0

      this.robotTxt.exist = true
      this.robotTxt.isAllowGoogle = robotParser.isAllowed(this.url.self, ROBOT_UAS[0])
      this.robotTxt.isAllowNaver = robotParser.isAllowed(this.url.self, ROBOT_UAS[1]) || robotParser.isAllowed(this.url.self, ROBOT_UAS[2])
    }
  }

  isValidHtml5 () {
    if (!this.doctype.exist) return false
    return getDoctypeText(this.doctype.self) === '<!DOCTYPE html>'
  }
  isValidHeadingStructure (headings) {
    let now = 0, next = 0
    for (let i = 0; i < headings.length - 1; i += 1) {
      now = Number(headings[i].level)
      next = Number(headings[i + 1].level)
      if (next > now && next - now > 1) {
        return false
      }
    }
    return true
  }
}

export default new SiteDoctor()