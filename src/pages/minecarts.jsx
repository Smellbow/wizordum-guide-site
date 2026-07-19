import GuideHeader from '../components/article/GuideHeader'
import useDocumentTitle from '../hooks/useDocumentTitle'
import publicAsset from '../utils/publicAsset'
import GuideNote from '../components/article/GuideNote'
import './GuidePage.css'

function MineCart() {
    useDocumentTitle('Mine Carts')



    return (
        <article className="guide-page article-width">
            <GuideHeader
                avatar={publicAsset('avatars/smellbow.png')}
                category="Advanced"
                title="Indiana Jones time"

                author="Smellbow"
                published="2026-07-19"
            />


            <section id="first-section">
                <h2>Minecarts</h2>


                <GuideNote title="Parameters">
                    <p>
                        Not done this page yet...Soon
                    </p>
                </GuideNote>
            </section>







        </article>
    )
}

export default MineCart