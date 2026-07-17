import GuideHeader from '../components/article/GuideHeader'
import GuideNote from '../components/article/GuideNote'
import Key from '../components/article/Key'
import useDocumentTitle from '../hooks/useDocumentTitle'
import publicAsset from '../utils/publicAsset'
import './GuidePage.css'

function TestingMaps() {
    useDocumentTitle('Testing Maps')



    return (
        <article className="guide-page article-width">
            <GuideHeader
                avatar={publicAsset('avatars/smellbow.png')}
                category="Quick test tips"
                title="Test shortcuts"
                summary=""
                author="Smellbow"
                published="2026-07-16"
            />


            <section id="first-section">
                <h2>Playtesting</h2>

                <p>Whilst pressing the play icon will run the map from the player start point there are a couple of other options.</p>

                <p>Pressing <Key>Shift</Key> and then clicking play will present options to select a character and difficulty to run the map on.</p>

                <p>Also pointing to an area in the editor and pressing <Key>Ctrl + T</Key> will run the map from that position, great for testing certain areas without having to run the whole map or move the player start.</p>

                <GuideNote title="the void calls">
                    <p>When using the play from a point shortcut, be careful you are on the correct layer as you may load floating above the floor or even under the map 🧙‍♂️</p>
                </GuideNote>


            </section>







        </article>
    )
}

export default TestingMaps