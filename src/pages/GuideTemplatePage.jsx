import GuideHeader from '../components/article/GuideHeader'
import GuideImage from '../components/article/GuideImage'
import GuideNote from '../components/article/GuideNote'
import Key from '../components/article/Key'
import OnThisPage from '../components/article/OnThisPage'
import useDocumentTitle from '../hooks/useDocumentTitle'
import publicAsset from '../utils/publicAsset'
import './GuidePage.css'

function GuideTemplatePage() {
    useDocumentTitle('Guide template')

    const pageSections = [
        {
            id: 'first-section',
            label: 'First section',
        },
        {
            id: 'subsections',
            label: 'Subsections',
        },
        {
            id: 'images',
            label: 'Images',
        },
    ]

    return (
        <article className="guide-page article-width">
            <GuideHeader
                avatar={publicAsset('avatars/smellbow.png')}
                category="Guide category"
                title="A clear, descriptive guide title"
                summary="Write one or two sentences explaining what the reader will learn and why the technique is useful."
                author="Author name"
                published="2026-07-16"
            />

            <GuideNote title="Template page">
                <p>
                    This route is intentionally absent from the main navigation.
                    Copy this file when starting a new guide, then replace its
                    metadata and example content.
                </p>
            </GuideNote>

            <OnThisPage items={pageSections} />

            <section id="first-section">
                <h2>Start with the main task</h2>

                <p>
                    Use normal paragraphs for instructions and explanations. Keep
                    individual steps focused, and explain why an action matters when
                    that information helps the mapper make decisions.
                </p>

                <p>
                    Use the keyboard component for editor input, such as
                    pressing <Key>X</Key>, <Key>Tab</Key>, or <Key>Shift</Key>.
                </p>

                <GuideNote>
                    <p>
                        Use a note for cautions, useful discoveries, limitations, or
                        information that supports the instructions without belonging
                        in the main flow. Guide note can take an optional title prop.
                    </p>
                </GuideNote>
            </section>

            <section id="subsections">
                <h2>Break complex topics into subsections</h2>

                <p>
                    Every major article section uses an h2 heading. Topics nested
                    inside that section use h3 headings.
                </p>

                <h3>A meaningful subsection</h3>

                <p>
                    Never choose a heading level because of its visual size. Heading
                    levels describe the document structure; CSS controls appearance.
                </p>
            </section>

            <section id="images">
                <h2>Add supporting images</h2>

                <p>
                    Every image needs alternative text describing the information
                    conveyed by the image, plus a visible caption providing context.
                </p>

                <GuideImage
                    alt="Describe the useful information shown by the future image"
                    caption="Explain how this image relates to the surrounding instructions."
                    dimensions="1600 × 900 px"
                    ratio="16 / 9"
                />

                <div className="guide-image-grid">
                    <GuideImage
                        alt="Describe the first image in this comparison"
                        caption="First comparison image."
                        dimensions="1000 × 1000 px"
                        ratio="1 / 1"
                    />

                    <GuideImage
                        alt="Describe the second image in this comparison"
                        caption="Second comparison image."
                        dimensions="1000 × 1000 px"
                        ratio="1 / 1"
                    />
                </div>

                <GuideNote title="Using a real image">
                    <p>
                        Add the image to the public folder and pass its root-relative
                        path through the src prop. Real images automatically gain the
                        click-to-enlarge dialog.
                    </p>
                </GuideNote>
            </section>
        </article>
    )
}

export default GuideTemplatePage