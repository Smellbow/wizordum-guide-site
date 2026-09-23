import { useState } from "react";
import GuideHeader from "../components/article/GuideHeader";
import GuideNote from "../components/article/GuideNote";
import ScriptEntry from "../components/article/ScriptEntry";
import scripts from "../data/scripts";
import useDocumentTitle from "../hooks/useDocumentTitle";
import publicAsset from "../utils/publicAsset";
import "./GuidePage.css";
import "./ScriptLibrary.css";

function ScriptLibrary() {
  useDocumentTitle("Script Library");
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredScripts = scripts.filter((script) => {
    const searchableText = [
      script.title,
      script.description,
      script.content,
      ...(script.keywords || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedSearch);
  });

  return (
    <article className="guide-page article-width">
      <GuideHeader
        avatar={publicAsset("avatars/smellbow.png")}
        category="Advanced"
        title="Script library"
        summary="Ready-made Game Scripts to study, copy, adapt, or download for your own maps."
        author="Smellbow"
        published="2026-09-22"
      />

      <GuideNote title="Choose the useful format">
        <p>
          Short scripts can be copied directly from the page. Longer scripts may
          be provided as downloads, and an entry may offer both options.
          <br></br>Its practically empty at the moment 😅
        </p>
      </GuideNote>

      <section id="scripts">
        <h2>Available scripts</h2>

        {scripts.length > 0 ? (
          <>
            <div className="script-library-search">
              <label htmlFor="script-search">Search scripts</label>
              <input
                id="script-search"
                type="search"
                value={searchTerm}
                placeholder="Search by name, purpose, command, or keyword"
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>

            <p className="script-result-count" aria-live="polite">
              {filteredScripts.length === 1
                ? "1 script found"
                : `${filteredScripts.length} scripts found`}
            </p>

            {filteredScripts.length > 0 ? (
              <div className="script-library-list">
                {filteredScripts.map((script) => (
                  <ScriptEntry key={script.id} script={script} />
                ))}
              </div>
            ) : (
              <div className="script-library-empty">
                <h3>No matching scripts</h3>
                <p>Try a different name, command, or description.</p>
              </div>
            )}
          </>
        ) : (
          <div className="script-library-empty">
            <h3>Scripts coming soon</h3>
            <p>Scripts will come eventually...</p>
          </div>
        )}
      </section>
    </article>
  );
}

export default ScriptLibrary;
