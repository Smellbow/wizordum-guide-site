import GuideHeader from '../components/article/GuideHeader'
import GuideImage from '../components/article/GuideImage'
import GuideNote from '../components/article/GuideNote'
import useDocumentTitle from '../hooks/useDocumentTitle'
import publicAsset from '../utils/publicAsset'
import './GuidePage.css'

function Elevator() {
    useDocumentTitle('Elevators')


    return (
        <article className="guide-page article-width">
            <GuideHeader
                avatar={publicAsset('avatars/killm.webp')}
                category="Advanced"
                title="Elevators"
                summary="Just stand still a moment..."
                author="Killmonster"
                published="2026-07-22"
            />


            <section id="first-section">
                <h2>A bit of logic</h2>

                <p>
                    Due to the way Wizordum is made, moving the player from one floor to another, much like with monsters too, involves making sure they cannot move as the transitions occurs.
                </p>

                <p>Making a two floor elevator is a case of rigging up wall movers to some logic based nodes to create a loop. One such method is given here.</p>
                <p>First off we need a lift and a destination. Here we have a simple single block setup to move up the wooden beam texture to the brown floor above.</p>

                <GuideImage
                    src={publicAsset('guides/elevate/elevate1.png')}
                    alt="A simple block setup with two floors and a lift block"


                />


                <p>First we need a wall riser and we set its move parameter to be the number of floors to cover. Here thats two.</p>

                <GuideImage
                    src={publicAsset('guides/elevate/elevate2.png')}
                    alt="Preparing a mover actor"


                />
                <p>Next we connect the mover to <strong>RELAY A</strong></p>
                <GuideImage
                    src={publicAsset('guides/elevate/elevate3.png')}
                    alt="Connecting the first relay"


                />

                <p>We place our first switch and connect it to the wall riser. The position and type of switches will depend on your design need.</p>
                <GuideImage
                    src={publicAsset('guides/elevate/elevate4.png')}
                    alt="Placing switch one"


                />
                <GuideNote title="Note">
                    <p>
                        You can move the actors where you like, ive spread them out intentionally to try make it easier to follow for this guide, also the wall riser will need to be on the block but again ive moved it for ease of reading
                    </p>
                </GuideNote>
                <p>Now we place our second switch and connect it to a deactivator actor. Then the deactivator is connected to the wall riser. This will make the wall riser go back to its starting position.</p>
                <GuideImage
                    src={publicAsset('guides/elevate/elevate5.png')}
                    alt="Placing the second switch"


                />
                <p>Here we place <strong>RELAY B</strong> and connect to it from both switches. We also place the player sticker actor (which will need to be above the wall riser when ready to use). Connect to the player sticker from <strong>RELAY B</strong></p>
                <GuideImage
                    src={publicAsset('guides/elevate/elevate7.png')}
                    alt="Connect relay B"


                />
                <p>Add a reset actor and connect to it from <strong>RELAY A</strong> the connect the rest actor to both switches</p>
                <GuideImage
                    src={publicAsset('guides/elevate/elevate8.png')}
                    alt="Add a reset actor"


                />
                <GuideImage
                    src={publicAsset('guides/elevate/elevate9.png')}
                    alt="connecting reset"


                />
                <p>Add a deactivator and connect to it from <strong>RELAY A</strong> and connect the deactivator to the player sticker. This will allow player movement again once the lift completes its move.</p>
                <GuideImage
                    src={publicAsset('guides/elevate/elevate10.png')}
                    alt="Add a deactivator"


                />
                <p>Move the player sticker to above the lift block and move the wall riser, if you have not already, so its on the block to move.</p>
                <GuideImage
                    src={publicAsset('guides/elevate/elevate11.png')}
                    alt="Move the player sticker into place"


                />
                <p>Bingo. A working elevator!</p>
            </section>

        </article>
    )
}

export default Elevator