import config from '../../src/utils/config'

for (let i = 0; i < config.navBarLinks.length; i += 1) {
    ;(function (x) {
        describe(`Verify complete header is visible. Test: ${config.navBarLinks[i].title}`, function () {
            it('contains all headers', function () {
                const { link } = config.navBarLinks[x]
                cy.visit(link)
                cy.get('.navbar').within(() => {
                    cy.get('a').then(($navLinks) => {
                        const pageNamesActual = $navLinks
                            .toArray()
                            .map((el) => el.innerText)
                        const pageNamesExpected = config.navBarLinks.map(
                            (el) => el.title
                        )
                        expect(pageNamesActual).to.deep.eq(pageNamesExpected)
                    })
                })
            })
        })
    })(i)
}
