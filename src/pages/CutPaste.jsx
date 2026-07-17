import GuideHeader from '../components/article/GuideHeader'
import GuideImage from '../components/article/GuideImage'
import GuideNote from '../components/article/GuideNote'
import Key from '../components/article/Key'
import useDocumentTitle from '../hooks/useDocumentTitle'
import publicAsset from '../utils/publicAsset'
import './GuidePage.css'

function CutPaste() {
    useDocumentTitle('Cut and Paste')



    return (
        <article className="guide-page article-width">
            <GuideHeader
                avatar={publicAsset('avatars/smellbow.png')}
                category="Mapping Basics"
                title="Cut and Paste"
                summary="Learn how to cut and paste elements within the Wizordum editor."
                author="Smellbow"
                published="2026-07-16"
            />


            <section id="first-section">
                <h2>Move that there!</h2>

                <p>
                    You can cut and paste structures from one part of your map to another. This is useful when you encounter spacing issues and dont want to do a total rebuild of a section.
                </p>

                <GuideNote title="WARNING">
                    <p>
                        E X P E R I M E N T A L
                    </p>
                </GuideNote>

                <p>Use <Key>V</Key> or <Key>C</Key> to select a section of the map to copy with the floor tool.</p>

                <p>Before letting go of the hightlight tool, press <Key>Mouse 2 (right)</Key> to make the selection.</p>

                <p>Next move your cursor to the desired location, the item will paste the lower left corner to the cursor position and there is no direct undo, so be careful and practice in a safe area first!</p>

                <p>With your cursor in the desired location press <Key>SHIFT + P</Key> to paste the copied section.</p>


            </section>


            <GuideImage
                src={publicAsset('guides/copypaste/copy1.png')}
                alt="Two secttions of a map, one with a highlighted area to be copied and the other with the same area pasted in."
                caption="Moving walls to a new area"

            />
            <GuideImage
                src={publicAsset('guides/copypaste/copy2.png')}
                alt="Mouse highlighting a section of a map to be copied."
                caption="Here we hold V to select a section of the map to copy."
            />

            <GuideNote title="Note">
                <p>
                    This feature in practice can be a little buggy, On occasion a restart of the editor may be required if the function stops responding!
                </p>
            </GuideNote>

        </article>
    )
}

export default CutPaste