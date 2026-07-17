import GuideHeader from '../components/article/GuideHeader'
import GuideImage from '../components/article/GuideImage'
import Key from '../components/article/Key'
import useDocumentTitle from '../hooks/useDocumentTitle'
import publicAsset from '../utils/publicAsset'
import './GuidePage.css'

function Stacking() {
    useDocumentTitle('Stacking')



    return (
        <article className="guide-page article-width">
            <GuideHeader
                avatar={publicAsset('avatars/smellbow.png')}
                category="Mapping Basics"
                title="Copy stacks"
                summary="Paste stacks instea of single blocks."
                author="Smellbow"
                published="2026-07-16"
            />


            <section id="first-section">
                <h2>Save some clicks with stack pasting</h2>

                <p>When building a tall wall section, you can save some time and clicking by copying one complete "tower" and pasting it all. Rather than having to build each part and texture each part again.</p>
                <GuideImage
                    src={publicAsset('guides/stacks/stacking1.png')}
                    alt="A Stack of different textured blocks"
                    caption="A stack ready to copy"

                />


                <p>Using the block placement tool, highlight the bottom of a stack. <Key>SHIFT + Right click</Key> (in first person mode) to copy</p>
                <p>Hold <Key>Z</Key> while clicking to place in a new spot to paste the whole stack</p>

                <GuideImage
                    src={publicAsset('guides/stacks/stacking2.png')}
                    alt="A series of pasted duplicate stacks"
                    caption="The stack can be pasted over and over retaining textures."

                />


            </section>







        </article>
    )
}

export default Stacking