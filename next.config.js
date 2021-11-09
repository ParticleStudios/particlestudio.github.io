const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    assetPrefix: isProd ? 'https://particlestudios.org/particlestudios.github.io/' : ''
}