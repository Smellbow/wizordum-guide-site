import GuideHeader from '../components/article/GuideHeader'
import GuideImage from '../components/article/GuideImage'
import GuideNote from '../components/article/GuideNote'
import useDocumentTitle from '../hooks/useDocumentTitle'
import publicAsset from '../utils/publicAsset'
import './GuidePage.css'

function TransparantTexture() {
    useDocumentTitle('Transparent texture')



    return (
        <article className="guide-page article-width">
            <GuideHeader
                avatar={publicAsset('avatars/smellbow.png')}
                category="Mapping basics"
                title="Transparent texture"
                summary="Learn how to use and apply transparent textures in Wizordum."
                author="Smellbow"
                published="2026-07-16"
            />

            <GuideNote title="Transparent tiles">
                <p>
                    Certain textures in Wizordum are transparent, allowing you to create windows, holes, and other see-through effects. A couple of special textures exist also for empty space that does or does not block projectiles.
                </p>
            </GuideNote>



            <section >


                <p>
                    Most textures in the tileset which have transparency are obvious and used as an editor sees fit. However, there are a few special textures that are used for specific purposes.
                </p>
                <GuideImage
                    src={publicAsset(
                        'guides/transtextures/transp1.png',
                    )}
                    alt="The main transparent textures in the Wizordum editor"
                    caption="Transparent and blocking, texture with transpancy, and transparant and projectile-blocking"

                />

                <ul>
                    <li>The purple cross-hatch texture will appear transparent in game and will block all projectiles. 🧱</li>
                    <li>The yellow cross-hatch texture will appear transparent in game and will allow projectiles to pass through. 🧙‍♂️✨</li>

                </ul>

                <p>Note that these textures still block player movement but do not render as visible in game as depicted below.</p>

                <GuideImage
                    src={publicAsset(
                        'guides/transtextures/transp2.png',
                    )}
                    alt="View in game showing the same three textures."
                    caption="Notice cross hatch textures do not appear in game"

                />

                <GuideNote>
                    <p>
                        The magic barrier actors will reflect player projetiles and can be angled for neat effect!
                    </p>
                </GuideNote>

                <p>Whilst not a tile texture, its worth noting that the magic barrier actors are also transparent 🪟 and will reflect player projectiles!</p>

                <GuideImage
                    src={publicAsset(
                        'guides/transtextures/transp3.png',
                    )}
                    alt="View in game of the barriers."
                    caption="Magic barrier actors - Blue (Green and red also available)"

                />
            </section>


        </article>
    )
}

export default TransparantTexture