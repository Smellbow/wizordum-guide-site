import GuideHeader from '../components/article/GuideHeader'
import useDocumentTitle from '../hooks/useDocumentTitle'
import publicAsset from '../utils/publicAsset'
import GuideImage from '../components/article/GuideImage'
import GuideNote from '../components/article/GuideNote'
import OnThisPage from '../components/article/OnThisPage'
import './GuidePage.css'

function MineCart() {
    useDocumentTitle('Mine Carts')

    const pageSections = [
        {
            id: 'minecarts',
            label: 'Minecarts',
        },
        {
            id: 'controllers',
            label: 'Controllers',
        }
    ]

    return (
        <article className="guide-page article-width">
            <GuideHeader
                avatar={publicAsset('avatars/smellbow.png')}
                category="Advanced"
                title="Indiana Jones time"

                author="Smellbow"
                published="2026-07-19"
            />

            <OnThisPage items={pageSections} />
            <section id="minecarts">
                <h2>Minecarts</h2>
                <p>The minecart actor, as youd expect, creates rideable minecarts.</p>
                <GuideImage
                    src={publicAsset('guides/minecart/minecart1.png')}
                    alt="A minecart actor in 3d view"
                    caption="Minecart actor in game"

                />
                <GuideImage
                    src={publicAsset('guides/minecart/minecart2.png')}
                    alt="A minecart actor in the editor view"
                    caption="Minecart actor in editor view"

                />

                <p>Like wall towers, a minecart can be connected to node actors in sequence to form its "track". These can change height and the cart will travel up and down as needed.  Once a minecart reaches its last node, it can be used again to go back to the first. The cart will travel at a steady speed without any controllers connected to adjust it.</p>

                <GuideNote title="Eject!">
                    <p>
                        Note the player will be ejected at the last node.
                    </p>
                </GuideNote>
                <GuideImage
                    src={publicAsset('guides/minecart/minecart3.png')}
                    alt="A minecart actor connected to a series of node actors"
                    caption="Nodes connected in sequence form the waypoints of the 'track'"

                />
                <hr />
                <p>In the below example the minecart connects to a series of nodes in the order it should travel to them. One is on a higher block. The cart will slow down on the climb and accelerate to the lower node on its way around.</p>
                <p>Also note that the last node <strong>has another node connected to it</strong>, this is where the player will land when "ejected" from the minecart. You can send the player to almost anywhere on exit and they will "hop" to that location. in this case the wooden tile. The layout is explained below with controllers for a little more clarity in setup.</p>

                <GuideImage
                    src={publicAsset('guides/minecart/mcart2.png')}
                    alt="A series of connected nodes at differing heights forming a track"
                    caption="A series of connected nodes at differing heights forming a track"

                />


            </section>

            <section id="controllers">
                <h2>Minecart Controllers</h2>

                <p>You an also use minecart controllers to ... well.. control the minecart at points in your track. We can impact the speed from its default using them.</p>
                <p>Here is a simple loop. We have a series of nodes set up with the final node pointing to where we would like the player to "land" when they are booted out the cart at the end of the ride.</p>

                <p>The cart is not yet wired up.</p>


                <GuideImage
                    src={publicAsset('guides/minecart/minecart4.png')}
                    alt="A series of connected nodes around a track texture not yet connected"
                    caption="A series of nodes ready to be setup"

                />
                <p>Next we have pointed the nodes at which we want to impact the carts speed to some minecart controllers with speed set as desired. The controllers then also need to point to the cart.</p>

                <p>If you make a mistake remember you can shift-right click to undo a connection or if youre lost its often easier to delete the minecart and re-wire it to the nodes.</p>

                <GuideImage
                    src={publicAsset('guides/minecart/minecart5.png')}
                    alt="Nodes connected out to the controller actors where changes are desired in speed"
                    caption="Nodes connected to controllers where we want changes"

                />
                <GuideNote title="Eject!">
                    <p>
                        It gets a bit spiderweb like now, be careful with your connections!
                    </p>
                </GuideNote>

                <p>Controllers pointing to the cart. So they are triggered by the nodes pointing to them and then in turn they point to the cart to impact.</p>
                <p>(Note i also added another node at the start to the left of the cart, the cart will face the direction of its first node)</p>

                <GuideImage
                    src={publicAsset('guides/minecart/minecart6.png')}
                    alt="Controllers now point back to the minecart to complete the changes to the cart movement"
                    caption="Nodes to controllers, controllers to cart"

                />
                <p>Now when the player rides the cart, at the set points its speed will adjust accordingly.</p>
                <GuideNote title="Eject!">
                    <p>
                        The exit node can be far away and on another level! You can fling the player!
                    </p>
                </GuideNote>

            </section>





        </article>
    )
}

export default MineCart