import { useRef } from 'react'
import './GuideImage.css'

function GuideImage({
    src,
    alt,
    caption,
    dimensions = '1600 × 900 px',
    ratio = '16 / 9',
    maxWidth,
}) {
    const dialogRef = useRef(null)

    function openImage() {
        dialogRef.current?.showModal()
    }

    return (
        <figure
            className="guide-figure"
            style={
                maxWidth
                    ? { '--guide-image-max-width': maxWidth }
                    : undefined
            }
        >
            {src ? (
                <>
                    <button
                        className="guide-image-button"
                        type="button"
                        onClick={openImage}
                        aria-label={`Enlarge image: ${alt}`}
                    >
                        <img
                            className="guide-image"
                            src={src}
                            alt={alt}
                            loading="lazy"
                        />

                        <span className="enlarge-hint" aria-hidden="true">
                            ⤢
                        </span>
                    </button>

                    <dialog
                        ref={dialogRef}
                        className="image-dialog"
                        aria-label={`Enlarged image: ${alt}`}
                    >
                        <div className="image-dialog-inner">
                            <form method="dialog">
                                <button
                                    className="dialog-close"
                                    type="submit"
                                >
                                    Close
                                </button>
                            </form>

                            <img src={src} alt={alt} />

                            <p>{caption}</p>
                        </div>
                    </dialog>
                </>
            ) : (
                <div
                    className="image-placeholder"
                    style={{ '--image-ratio': ratio }}
                    role="img"
                    aria-label={`Placeholder: ${alt}`}
                >
                    <span aria-hidden="true">▧</span>
                    <strong>Image coming soon</strong>
                    <small>Recommended size: {dimensions}</small>
                </div>
            )}

            <figcaption>{caption}</figcaption>
        </figure>
    )
}

export default GuideImage
