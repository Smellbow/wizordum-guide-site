import GuideHeader from '../components/article/GuideHeader'
import GuideImage from '../components/article/GuideImage'
import useDocumentTitle from '../hooks/useDocumentTitle'
import publicAsset from '../utils/publicAsset'
import './GuidePage.css'

function Barrel() {
    useDocumentTitle('Barrel Ride')


    return (
        <article className="guide-page article-width">
            <GuideHeader
                avatar={publicAsset('avatars/smellbow.png')}
                category="Advanced"
                title="Barrel Ride"
                summary="Bobbing about"
                author="Smellbow"
                published="2026-07-16"
            />


            <section id="first-section">
                <h2>Barrels of fun</h2>

                <p>
                    Barrel rides work in the manner as minecarts, Place the barrel ride actor and connect it in sequence to nodes. The Barrel will follow the node path and "eject" the player at the last node.
                </p>



                <p>As with minecarts the last node can be added to by connecting another node, This will be where the player hops to when the ride ends.</p>

                <GuideImage
                    src={publicAsset('guides/barrel/barrel.png')}
                    alt="A barrel in game view"
                    caption="Yup, a barrel"

                />
                <p>First off we layout our nodes in the desired route we want the barrel to take. Also with one extra node for the player exit position. This is optional, without it the player will end up next to the final node.</p>
                <GuideImage
                    src={publicAsset('guides/barrel/barrel2.png')}
                    alt="Basic layout nodes"
                    caption="The starter setup"

                />
                <p>Here I have connected my final node to my desired exit position on the rocky grass.</p>
                <GuideImage
                    src={publicAsset('guides/barrel/barrel3.png')}
                    alt="Exit node connected"
                    caption="Exit node connected"

                />
                <p>Now the barrel ride actor is connected to each route node in sequnce just like a minecart setup.</p>
                <GuideImage
                    src={publicAsset('guides/barrel/barrel4.png')}
                    alt="All nodes connected to complete the 'track'"
                    caption="All nodes connected in sequence"

                />

                <p>With that the barrel ride is complete, it will perform a lap of the water and eject the player onto the rocky grass texture.</p>
            </section>

        </article>
    )
}

export default Barrel