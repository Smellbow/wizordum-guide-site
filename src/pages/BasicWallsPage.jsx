import GuideHeader from '../components/article/GuideHeader'
import useDocumentTitle from '../hooks/useDocumentTitle'
import GuideImage from '../components/article/GuideImage'
import GuideNote from '../components/article/GuideNote'
import Key from '../components/article/Key'
import OnThisPage from '../components/article/OnThisPage'
import publicAsset from '../utils/publicAsset'
import './GuidePage.css'

function BasicWallsPage() {
    useDocumentTitle('Floors, walls and half walls')

    const pageSections = [
        {
            id: 'wall-pieces',
            label: 'Wall pieces',
        },
        {
            id: 'room-details',
            label: 'Adding room details',
        },
        {
            id: 'floors-and-ceilings',
            label: 'Floors and ceilings',
        },
    ]

    return (
        <article className="guide-page article-width">
            <GuideHeader
                avatar={publicAsset('avatars/smellbow.png')}
                category="Mapping basics"
                title="Floors, walls and half walls"
                summary="Learn how Wizordum’s core building pieces can be combined to make detailed rooms, columns, alcoves, floors, and ceilings."
                author="Smellbow"
                published="2026-07-16"
            />
            <OnThisPage items={pageSections} />

            <section id="wall-pieces">
                <h2>Get to know the wall pieces</h2>

                <p>
                    Wizordum uses a block-based grid, but its different wall and floor
                    pieces can be combined to create surprisingly intricate layouts.
                </p>
                <GuideImage
                    src={publicAsset(
                        'guides/basic-walls/block-types1.png',
                    )}
                    alt="The available wall types shown inside the Wizordum editor"
                    caption="The editor provides several wall shapes that can be combined."
                    dimensions="1200 × 900 px"
                    ratio="4 / 3"
                />
                <p>
                    The block selection menu offers several wall shapes. Combining those
                    parts lets you work beyond the appearance of a simple square grid.
                </p>
                <p>
                    Select the <strong>Flat edge</strong> piece and press <Key>X</Key> to
                    cycle through its four variations before placing it.
                </p>

                <GuideNote title="Try this next">
                    <p>
                        Build one plain square room, then improve it using only corner walls,
                        middle walls, and small floor sections.
                    </p>
                </GuideNote>
            </section>
            <section id="room-details">
                <h2>Add depth to simple rooms</h2>

                <p>
                    Start with a square room and use corner walls to create pillars or
                    frame an outcropping wall. Small additions can quickly make a flat
                    room more interesting to look at.
                </p>

                <GuideImage
                    alt="A simple room improved with corner-wall pillars and a framed bookcase"
                    caption="Corner pieces can frame walls and turn plain corners into architectural details."
                />

                <h3>Create off-grid columns</h3>

                <p>
                    Nest corner walls together to create columns or thin walls that appear
                    to sit outside the normal grid.
                </p>

                <GuideImage
                    alt="Nested corner walls forming an off-grid pillar"
                    caption="Nested corner pieces create a narrow column."
                    dimensions="1200 × 900 px"
                    ratio="4 / 3"
                />

                <h3>Build quick alcoves</h3>

                <p>
                    Middle-wall pieces make straightforward alcoves. Wall setters open up
                    even more shapes beyond the editor’s standard placement options.
                </p>

                <GuideImage
                    alt="Middle-wall pieces used to form alcoves"
                    caption="Middle-wall pieces can form shallow recesses without complex setup."
                    dimensions="1200 × 900 px"
                    ratio="4 / 3"
                />
            </section>

            <section id="floors-and-ceilings">
                <h2>Adjust floors and ceilings</h2>

                <p>
                    Select a floor or ceiling and press <Key>X</Key> before placing it to
                    cycle through the available sizes.
                </p>

                <GuideImage
                    alt="The available floor and ceiling sizes in the editor"
                    caption="Cycle through floor and ceiling sizes before placing the piece."
                />

                <p>
                    Combine a small floor section with corner-wall and flat-edge pieces to
                    create compact columns. The same technique works for ceiling details.
                </p>

                <div className="guide-image-grid">
                    <GuideImage
                        alt="Small floor parts used to build a column"
                        caption="Small floor pieces can finish narrow columns."
                        dimensions="1000 × 1000 px"
                        ratio="1 / 1"
                    />

                    <GuideImage
                        alt="Small ceiling parts used in a matching column"
                        caption="The same combination works for ceiling details."
                        dimensions="1000 × 1000 px"
                        ratio="1 / 1"
                    />
                </div>

                <GuideNote title="Experiment deliberately">
                    <p>
                        Build one plain square room, then improve it using only corner walls,
                        middle walls, and small floor sections. Limiting the available pieces
                        makes their possible combinations easier to learn.
                    </p>
                </GuideNote>
            </section>
        </article>
    )
}

export default BasicWallsPage