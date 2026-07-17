import GuideHeader from '../components/article/GuideHeader'
import GuideImage from '../components/article/GuideImage'
import Key from '../components/article/Key'
import useDocumentTitle from '../hooks/useDocumentTitle'
import publicAsset from '../utils/publicAsset'
import './GuidePage.css'

function PlaceWithTexture() {
    useDocumentTitle('Place With Texture')



    return (
        <article className="guide-page article-width">
            <GuideHeader
                avatar={publicAsset('avatars/smellbow.png')}
                category="Mapping Basics"
                title="Place blocks with a texture"
                summary="Save some pasting!"
                author="Smellbow"
                published="2026-07-16"
            />


            <section id="first-section">
                <h2>Copy that block</h2>

                <p>When placing a block you will get the good ol' default wall texture. We love the grassy fella but, when youre making a large mountain for example, pasting textures all over those walls gets a bit tedious.</p>

                <GuideImage
                    src={publicAsset('guides/texturedblock/defaultbrick1.png')}
                    alt="The default brick textured cube"
                    caption="Thats Mr Default Bricks to you"

                />


                <p>So lets say we want a different texture on each cube we place to save that pasting spam. Place a cubve and texture it as desired.</p>

                <p>Highlight it with the block tool and press <Key>Shift + right click</Key>. The next block placed normally will start with the copied blocks textures!</p>


                <GuideImage
                    src={publicAsset('guides/texturedblock/rockpaste1.png')}
                    alt="Lots of same textured rock cubes after copying"
                    caption="Rocks all over the place, easy."

                />

                <p>RSI be gone!</p>
            </section>







        </article>
    )
}

export default PlaceWithTexture