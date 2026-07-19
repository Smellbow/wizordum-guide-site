import GuideHeader from '../components/article/GuideHeader'
import GuideImage from '../components/article/GuideImage'
import useDocumentTitle from '../hooks/useDocumentTitle'
import publicAsset from '../utils/publicAsset'
import GuideNote from '../components/article/GuideNote'
import './GuidePage.css'

function WallTower() {
    useDocumentTitle('Wall Tower')



    return (
        <article className="guide-page article-width">
            <GuideHeader
                avatar={publicAsset('avatars/smellbow.png')}
                category="Advanced"
                title="I like to move it move it 🎵"

                author="Smellbow"
                published="2026-07-19"
            />


            <section id="first-section">
                <h2>A block that moves... <i>more</i></h2>
                <p>The wall tower actor is well detailed in the official documentation. When placed onto a block and connected to "node" actors, the block will move between them in sequence. It will crush any other actors in its path including the player.</p>
                <p>If a wall tower is given only one connected node it will, on map load, move to and remain at that position.</p>
                <p>Wall towers can create looping crush traps, moving scenery etc.</p>
                <p>They can also be used to create moving walls / secret doors that move in more than one direction with manuipulation.</p>
                <p>Using level start flags coupled with deactivators, you can trigger a movement pattern with a wall tower and nodes then deactivate it at a chosen point. (Wheyy used this to great effect to create doom IIs e1m1 stairway)</p>

                <GuideImage
                    src={publicAsset('guides/walltower/walltower1.png')}
                    alt="A basic walltower 2 node setup"
                    caption="2 Nodes define a path"

                />


                <p>In the above example a node actor is also directly underneath the wall block and wall tower actor. It is the first actor the tower is connected to and then the one further to the right. Upon level start this block will move from point to point forever.</p>



                <GuideImage
                    src={publicAsset('guides/walltower/walltower2.png')}
                    alt="A sliding wall setup"
                    caption="Move a wall out then to the side"

                />

                <p>In the above example a wall tower has been set on a block (the brown brick), it has nodes under itself and two more to give it an L shaped travel path. A level start flag is connected to a deactivator and then to the wall tower. This stops the wall tower from moving along its given path as soon as the map starts. This means we can instead trigger it when we choose.</p>
                <p>In this case a player trigger spot is used to trigger the wall tower, which sets it along its path of nodes.</p>
                <p>The player trigger activates the wall tower but also at the same time activates a timer. On the timers end it activates another deactivator also connected to the wall tower.</p>
                <p>This allows the wall tower to complete its path once upon player trigger and then stop in place. With some careful setup this can be used to create all manner of moving blocks, secret doors and terrain shifting actions!</p>
                <p>In this example, upon player trigger the wall with the tower actor wil move forward and then shift to the players left and stop. An alternate to the usual push wall or break wall actions.</p>

                <GuideNote title="Parameters">
                    <p>
                        The wall tower has parameter you can set to enable it to also move blocks above it so you can move... towers 🗼
                    </p>
                </GuideNote>
            </section>







        </article>
    )
}

export default WallTower