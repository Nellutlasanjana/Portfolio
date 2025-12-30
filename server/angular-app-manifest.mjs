
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Portfolio/about",
    "route": "/Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Portfolio/about",
    "route": "/Portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 503, hash: '8971797d2ba05eea2c011518af8b906bf0e35b58c8efa733e0bcaf1d3739d30f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '4673ebaec067297a8b5766da2489846e69d7ddbe7a2b8af5d72ffd84fc3b171f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 7826, hash: '36fd89c9b14d4730c662de28161ec962cf6b270665e53519f239e137cc02d54b', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 7892, hash: 'a3c1e18aa1258758c2b000aa5e1db94b6a2171292337e283dcf51979ecff097f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 8905, hash: 'a12fda2708682e8e6b9b8a0c7a9683437dffecdf5133a9c832ec3d638a709607', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 9899, hash: '5f533b47baa63759e43e194fee306b2fc90f004ad34025f56b5da6ab7c131a6b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
