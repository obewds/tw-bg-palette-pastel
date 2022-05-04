// ./docs/.vitepress/config.js

module.exports = {
    base: '/tw-bg-palette-pastel/',
    title: '@obewds/tw-bg-palette-pastel',
    description: 'A documentation site for the TwBgPalettePastel component',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Component", link: "/component" },
            { text: "Tests", link: "/tests" },
            { text: "npm", link: "https://www.npmjs.com/package/@obewds/tw-bg-palette-pastel" },
            { text: "GitHub", link: "https://github.com/obewds/tw-bg-palette-pastel" },
        ],
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
