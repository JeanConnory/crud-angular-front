const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://localhost:7194/',
    secure: false,
    loglevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
