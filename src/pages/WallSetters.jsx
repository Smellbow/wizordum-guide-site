import GuideHeader from '../components/article/GuideHeader'
import GuideImage from '../components/article/GuideImage'
import Key from '../components/article/Key'
import useDocumentTitle from '../hooks/useDocumentTitle'
import publicAsset from '../utils/publicAsset'
import GuideNote from '../components/article/GuideNote'
import OnThisPage from '../components/article/OnThisPage'
import './GuidePage.css'

function WallSetters() {
    useDocumentTitle('WallSetters')
    const pageSections = [
        {
            id: 'setters',
            label: 'Wall Setters',
        },
        {
            id: 'merging',
            label: 'Merging',
        }

    ]


    return (
        <article className="guide-page article-width">
            <GuideHeader
                avatar={publicAsset('avatars/smellbow.png')}
                category="Advanced"
                title="Wall Setters"
                summary="Go bigger!"
                author="Smellbow"
                published="2026-07-16"
            />
            <OnThisPage items={pageSections} />

            <section id="setters">
                <h2>Higher or lower?</h2>

                <p>Wall setters are pretty versitile and allow you to work outside the apparant restrictions you might encounter when designing play spaces / buildings. You will find them under the "actors" menu.</p>
                <p>Normally if your ground floor was on the middle editor 'level', you would be restricted to building three full blocks above that level.</p>
                <GuideImage
                    src={publicAsset('guides/wallsetter/wallsetter1.png')}
                    alt="standard max height wall"
                    caption="No, thats the limit sonny!"

                />


                <p>Wall setters allow you to exceed that limitation when desired, the same goes for below the lowest level using the "down" variant.</p>

                <p>Here we place an extra row of blocks along the top level of our wall example.</p>


                <GuideImage
                    src={publicAsset('guides/wallsetter/wallsetter2.png')}
                    alt="top edge of the max wall now has an extra row next to it"
                    caption="Same level.. for now..."

                />

                <p>Now we place Up wall layer setters on those blocks and configure their parameters for movement, Up and Forward.</p>
                <p><Key>Shift + Q or E</Key> or will rotate the direction for the forward movement.</p>
                <p>Highlight a wall setter and use : <Key>C</Key> = forward movement adjust <Key>X</Key> = Upward movement adjust</p>
                <p>Here (below image) we are saying, when the map loads I want you to move up one more space and move forward one space.</p>

                <GuideImage
                    src={publicAsset('guides/wallsetter/wallsetter3.png')}
                    alt="wall setters now sit on that extra row along the top edge"
                    caption="Orders are given to these blocks for when the map starts"

                />

                <p>When a map loads wall setters activate. So here on map load we see those blocks move up and ontop of the wall, above the editor limit!</p>

                <GuideImage
                    src={publicAsset('guides/wallsetter/wallsetter4.png')}
                    alt="The extra blocks now sit above the normal map limit on top of the wall"
                    caption="Thats illegal mate!"

                />
                <GuideNote title="Going underground!">
                    <p>
                        As the same applies for moving downwards also, a little imagination can create some unique spaces around the player.
                    </p>
                </GuideNote>
            </section>

            <section id="merging">

                <h2>Merging blocks</h2>

                <p>Another neat feature with wall setters is their ability to "push" a spaces contents into another, even if it has something in it already!</p>
                <p>Say you have used a middle wall and an some edges to create a thin wall like this:</p>
                <GuideImage
                    src={publicAsset('guides/wallsetter/settermerge1.png')}
                    alt="A thing wall setup missing one side"
                    caption="Teeny wall"

                />
                <GuideNote title="ackshually we can do this already">
                    <p>
                        This example is a little outdated but you can use these same steps to experiment with other blocks/shapes
                    </p>
                </GuideNote>
                <p>Youd might try cap the end with another half wall like so:</p>
                <GuideImage
                    src={publicAsset('guides/wallsetter/settermerge2.png')}
                    alt="trying to add a side to a thin wall"
                    caption="How about no?"

                />
                <p>Only to find the editor wont allow this. This is where a wall setter can come in!</p>
                <p>Place the capping edge int he adjacent space and add a wallsetter! This tells the game to move that spaces contents as configured by the setter on map load.</p>
                <GuideImage
                    src={publicAsset('guides/wallsetter/settermerge3.png')}
                    alt="an offset wall that would fit one space away in a wall setter"
                    caption="Lets squash you in there"

                />
                <p>We dont want it to move up or down, just across. So leave the up/down at zero and just set the movement amount.</p>
                <p>Then on game load we get a fully capped small wall!</p>
                <GuideImage
                    src={publicAsset('guides/wallsetter/settermerge4.png')}
                    alt="The offset wall is pushed into the other on map load"
                    caption="Merged on map load"

                />
                <GuideNote title="Play with it!">
                    <p>
                        You can do this with lots of combinations to create some neat architecture!
                    </p>
                </GuideNote>
            </section>





        </article>
    )
}

export default WallSetters