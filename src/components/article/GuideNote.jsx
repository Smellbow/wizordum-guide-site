import './GuideNote.css'

function GuideNote({ title = 'Mapper note', children }) {
    return (
        <aside className="guide-note" aria-label={title}>
            <strong>{title}</strong>

            <div>{children}</div>
        </aside>
    )
}

export default GuideNote