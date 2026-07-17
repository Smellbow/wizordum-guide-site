import GuideHeader from '../components/article/GuideHeader'
import GuideImage from '../components/article/GuideImage'
import GuideNote from '../components/article/GuideNote'
import Key from '../components/article/Key'
import useDocumentTitle from '../hooks/useDocumentTitle'
import publicAsset from '../utils/publicAsset'
import './GuidePage.css'

function AdditiveLoad() {
    useDocumentTitle('Additive Load')



    return (
        <article className="guide-page article-width">
            <GuideHeader
                avatar={publicAsset('avatars/smellbow.png')}
                category="Mapping Basics"
                title="Additive Load"
                summary="Learn how to use the additive load feature in the Wizordum editor."
                author="Smellbow"
                published="2026-07-16"
            />


            <section id="first-section">
                <h2>One level... into another?</h2>

                <p>
                    Its possible to take a part of one map and load it into another map. Perhaps youve got a structure you like an want to use in another map file you started. Rather than rebuild it part by part, you can move it into the new map.
                </p>
                <GuideNote title="WARNING">
                    <p>
                        I would advise you practice this in a safe area or test map first as there is no easy undo if you get this wrong!
                    </p>
                </GuideNote>

                <p>First off, find the point in the map you want to copy <strong>INTO</strong>. Right click in the center of the space you wish the added part to appear.</p>
                <GuideImage
                    src={publicAsset('guides/additiveload/additiveload1.png')}
                    alt="A small map section"
                    caption="Selecting the point in the map to add the new structure."

                />
                <p>In this example I have another map which just holds a U shaped wall </p>
                <p>After right clicking the center of the map to load INTO, select the map holding the parts you want to copy in, hold <Key>Shift</Key> and click load.</p>
                <GuideImage
                    src={publicAsset('guides/additiveload/additiveload2.png')}
                    alt="A small map section"
                    caption="Selecting the point in the map to add the new structure."

                />
                <p>The selected map is loaded into the current map around the point you selected.</p>
                <GuideImage
                    src={publicAsset('guides/additiveload/additiveload3.png')}
                    alt="A small map section"
                    caption="Selecting the point in the map to add the new structure."

                />
                <GuideNote title="Practice!">
                    <p>
                        This can be fiddly so again, practice in some dummy maps first!
                    </p>
                </GuideNote>
            </section>







        </article>
    )
}

export default AdditiveLoad