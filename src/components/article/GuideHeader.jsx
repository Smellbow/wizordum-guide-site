import './GuideHeader.css'

function GuideHeader({
    category,
    title,
    summary,
    author,
    published,
    avatar,
}) {
    const authorInitial = author.charAt(0).toUpperCase()

    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(new Date(`${published}T00:00:00`))

    return (
        <header className="guide-header">
            <p className="guide-category">{category}</p>

            <h1>{title}</h1>

            <p className="guide-summary">{summary}</p>

            <div className="guide-byline">
                {avatar ? (
                    <img
                        className="author-avatar"
                        src={avatar}
                        alt=""
                        width="48"
                        height="48"
                    />
                ) : (
                    <span className="author-avatar-fallback" aria-hidden="true">
                        {authorInitial}
                    </span>
                )}

                <p>
                    <span>
                        Written by <strong>{author}</strong>
                    </span>

                    <time dateTime={published}>
                        {formattedDate}
                    </time>
                </p>
            </div>
        </header>
    )
}

export default GuideHeader