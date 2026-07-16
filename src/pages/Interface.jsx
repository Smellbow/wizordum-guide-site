import GuideHeader from '../components/article/GuideHeader'
import GuideImage from '../components/article/GuideImage'
import GuideNote from '../components/article/GuideNote'
import Key from '../components/article/Key'
import OnThisPage from '../components/article/OnThisPage'
import useDocumentTitle from '../hooks/useDocumentTitle'
import './GuidePage.css'
import ShortcutFinder from '../components/article/ShortcutFinder'
import publicAsset from '../utils/publicAsset'

const pageSections = [
    {
        id: 'views',
        label: 'Editor views',
    },
    {
        id: 'navigation',
        label: 'Navigation and movement',
    },
    {
        id: 'layers',
        label: 'Working with layers',
    },
    {
        id: 'shortcuts',
        label: 'Shortcut finder',
    },
    {
        id: 'editing-modes',
        label: 'Editing modes',
    },
]

function InterfacePage() {
    useDocumentTitle('Editor Interface and Controls')

    return (
        <article className="guide-page article-width">
            <GuideHeader
                avatar={publicAsset('avatars/smellbow.png')}
                category="Mapping Basics"
                title="Editor Interface and Controls"
                summary="Learn how to move around the Wizordum editor, switch views, manage layers, and quickly access its editing tools."
                author="Smellbow"
                published="2026-07-16"
            />

            <OnThisPage items={pageSections} />

            <section id="views">
                <h2>Editor views</h2>

                <p>
                    The Wizordum editor provides both a 2D planning view and a 3D
                    first-person view. You can switch between them with{' '}
                    <Key>Numpad Enter</Key> or <Key>F1</Key>.
                </p>

                <p>
                    The 2D view is useful for laying out rooms and understanding the
                    shape of the map. The 3D view makes it easier to inspect the result,
                    apply textures, and position visual details.
                </p>

                <GuideImage
                    alt="Placeholder showing the Wizordum editor in its 2D and 3D views"
                    caption="Replace this placeholder with a comparison of the 2D and 3D editor views."
                    dimensions="1600 × 900 recommended"
                    ratio="16 / 9"
                />

                <GuideNote>
                    Most shortcuts work in both views. Where a control behaves
                    differently, this guide will identify the affected view.
                </GuideNote>
            </section>

            <section id="navigation">
                <h2>Navigation and movement</h2>

                <p>
                    Use <Key>W</Key>, <Key>A</Key>, <Key>S</Key>, and <Key>D</Key> or
                    the arrow keys to move around the map.
                </p>

                <p>
                    In the 2D view, <Key>Q</Key> and <Key>E</Key> rotate the view
                    counter-clockwise and clockwise.
                </p>

                <p>
                    In the 3D view, hold the right mouse button to look around freely.
                    Use <Key>R</Key> and <Key>F</Key> to move the camera vertically.
                </p>
            </section>

            <section id="layers">
                <h2>Working with layers</h2>

                <p>
                    Wizordum maps contain seven layers: three above the ground layer,
                    three below it, and the central ground layer numbered zero.
                </p>

                <p>
                    Change the active layer through the editor interface or hold{' '}
                    <Key>Ctrl</Key> while using the mouse wheel.
                </p>

                <GuideImage
                    alt="Placeholder showing the layer controls in the Wizordum editor"
                    caption="Replace this placeholder with an annotated image of the layer controls."
                    dimensions="1200 × 675 recommended"
                    ratio="16 / 9"
                />

                <GuideNote>
                    The player normally remains on one layer. Teleports, passages, and
                    elevators can move the player between layers.
                </GuideNote>
            </section>

            <section id="shortcuts">
                <h2>Shortcut finder</h2>

                <p>
                    Search by key, editing mode, action, or editor view.
                </p>

                <ShortcutFinder />
            </section>
            <section id="editing-modes">
                <h2>Editing modes</h2>

                <p>
                    The editor provides seven main editing modes. Each mode can be
                    selected from the interface or with a number key.
                </p>

                <p>
                    We will add the complete mode reference after building the shortcut
                    finder.
                </p>
            </section>
        </article>
    )
}

export default InterfacePage