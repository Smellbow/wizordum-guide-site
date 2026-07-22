import GuideHeader from '../components/article/GuideHeader'
import GuideImage from '../components/article/GuideImage'

import useDocumentTitle from '../hooks/useDocumentTitle'
import publicAsset from '../utils/publicAsset'
import './GuidePage.css'

function WallSwap() {
    useDocumentTitle('Wall Swapping')



    return (
        <article className="guide-page article-width">
            <GuideHeader
                avatar={publicAsset('avatars/smellbow.png')}
                category="Advanced"
                title="Instant wall swapping"
                summary="Little bits of magic"
                author="Smellbow"
                published="2026-07-22"
            />


            <section id="first-section">
                <h2>Lighting a fireplace</h2>

                <p>Wall movers can be used to make textures appear to "swap out". Your imagination is the limit here but one simple example is the player lighting a fireplace.</p>

                <GuideImage
                    src={publicAsset('guides/wallswap/fireplace1.png')}
                    alt="An unlit fireplace"


                />

                <p>Above we have a simple wall with an unlit fireplace texture on one wall. Behind it we have another block textured as the lit fireplace. Also laid out we have an invisible button and two wall movers.</p>
                <GuideImage
                    src={publicAsset('guides/wallswap/fireplace2.png')}
                    alt="Arranged mover actors"


                />
                <p>Above we set the movers up so they will move the needed number of blocks in distance and set the speed to "INST" (Instant)</p>

                <p>Next we connect the switch to the two movers so when activated, they move effectively swap places.</p>
                <GuideImage
                    src={publicAsset('guides/wallswap/fireplace3.png')}
                    alt="setting the actor speeds"


                />
                <p>Lastly we move the movers into the correct spots, move the switch onto the unlit fireplace block (on top of the mover) and if you want, like below ive added a fire sound effect to also trigger on the switch use.</p>

                <GuideImage
                    src={publicAsset('guides/wallswap/fireplace4.png')}
                    alt="Completed fireplace swap setup"


                />
                <p>So the player interacts with the unlit fireplace, the lit fireplace appears instantly and the fire sound effect begins to play. Nice.</p>
            </section>







        </article>
    )
}

export default WallSwap