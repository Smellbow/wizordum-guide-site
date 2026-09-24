import GuideHeader from "../components/article/GuideHeader";
import GuideNote from "../components/article/GuideNote";
import OnThisPage from "../components/article/OnThisPage";
import useDocumentTitle from "../hooks/useDocumentTitle";
import GuideImage from "../components/article/GuideImage";
import publicAsset from "../utils/publicAsset";
import "./GuidePage.css";
import "./ModScripts.css";

const sampleModScript = `{
  "Decor": [
    {
      "UID": 0,
      "name": "Ancient Tree",
      "texture": "ancient_tree.png"
    }
  ],
  "Creature": [
    {
      "ID": "goblin_b",
      "health": 50,
      "texture": "forest_goblin.png"
    }
  ],
  "LoreScrolls": [
    {
      "id": 0,
      "type": 1,
      "text": "Someone passed this way before us."
    }
  ]
}`;

const pageSections = [
  { id: "file-setup", label: "File setup" },
  { id: "sample-script", label: "Sample script" },
  { id: "structure", label: "How it is structured" },
  { id: "json-values", label: "JSON values" },
  { id: "commas", label: "Comma rules" },
  { id: "checklist", label: "Checklist" },
  { id: "lore-scrolls", label: "Lore scrolls" },
];

function ModScripts() {
  useDocumentTitle("Mod Scripting");

  return (
    <article className="guide-page article-width">
      <GuideHeader
        avatar={publicAsset("avatars/smellbow.png")}
        category="Advanced"
        title="Mod scripting"
        summary="Set up a mod.script file and learn the small amount of JSON needed to load custom adventure content."
        author="Smellbow"
        published="2026-09-24"
      />

      <GuideNote title="Restart after making changes">
        <p>
          Changes to <code>mod.script</code> or its graphics are not reloaded
          while an adventure is already open. Restart the editor after modifying
          a file.
        </p>
      </GuideNote>

      <OnThisPage items={pageSections} />

      <section id="file-setup">
        <h2>Set up the file</h2>

        <p>
          Create the adventure in Wizordum’s editor first. Its folder is where
          the mod script and any files referenced by it belong.
        </p>

        <ol>
          <li>
            Name the file exactly <code>mod.script</code>.
          </li>
          <li>Place it inside the folder for your adventure.</li>
          <li>Restart the editor after saving any changes.</li>
        </ol>

        <h3>Find the user-adventure folder on Windows</h3>

        <p>Paste this location into File Explorer’s address bar:</p>

        <pre className="mod-code-block">
          <code>%localappdata%low/Emberheart Games/Wizordum/UserContent</code>
        </pre>

        <p>A completed path will follow this pattern:</p>

        <pre className="mod-code-block">
          <code>UserContent/my_adventure/mod.script</code>
        </pre>

        <GuideNote title="Filename and location matter">
          <p>
            Wizordum will not find the script if the filename differs or the
            file sits outside the adventure folder.
          </p>
        </GuideNote>
      </section>

      <section id="sample-script">
        <h2>A small example</h2>

        <p>
          This example shows the overall shape of a mod script with one decor
          item, one creature, and one lore scroll. You can remove sections your
          adventure does not use. This structure is based on the{" "}
          <a href="https://mod.io/g/wizordum/r/mod-scripting">
            official Wizordum mod-scripting guide
          </a>
          .
        </p>

        <pre className="mod-code-block mod-code-block--large">
          <code>{sampleModScript}</code>
        </pre>
      </section>

      <section id="structure">
        <h2>How the file is structured</h2>

        <p>
          A mod script uses JSON: a structured text format made from objects,
          lists, keys, and values.
        </p>

        <ol className="mod-concept-list">
          <li>
            <strong>The outer object</strong>
            <span>
              The first and last curly braces, <code>{"{ ... }"}</code>, wrap
              the entire file.
            </span>
          </li>
          <li>
            <strong>Section keys</strong>
            <span>
              Names such as <code>&quot;Decor&quot;</code> and
              <code>&quot;Creature&quot;</code> identify categories of content.
            </span>
          </li>
          <li>
            <strong>Lists</strong>
            <span>
              Square brackets, <code>[ ... ]</code>, hold any number of entries
              for a section.
            </span>
          </li>
          <li>
            <strong>Entry objects</strong>
            <span>
              Each set of curly braces inside a list describes one piece of
              decor, creature, or other item.
            </span>
          </li>
        </ol>
      </section>

      <section id="json-values">
        <h2>Keys and values</h2>

        <p>
          A key says what a setting represents; its value supplies the actual
          information. The type of value determines whether quotation marks are
          required.
        </p>

        <div className="mod-rule-grid">
          <article>
            <h3>Text</h3>
            <p>Keys and text values use double quotation marks.</p>
            <code>&quot;texture&quot;: &quot;tree.png&quot;</code>
          </article>

          <article>
            <h3>Whole numbers</h3>
            <p>Numbers are written without quotation marks.</p>
            <code>&quot;health&quot;: 50</code>
          </article>

          <article>
            <h3>Decimal numbers</h3>
            <p>Use a period for the decimal separator.</p>
            <code>&quot;colliderSizeFactor&quot;: 0.5</code>
          </article>

          <article>
            <h3>True or false</h3>
            <p>Boolean values are lowercase and have no quotation marks.</p>
            <code>&quot;solid&quot;: true</code>
          </article>
        </div>
      </section>

      <section id="commas">
        <h2>Commas separate entries</h2>

        <p>
          Add a comma when another key-value pair or list item follows. Leave
          the comma off the final item in that group.
        </p>

        <div className="mod-comparison-grid">
          <article>
            <h3>Valid</h3>
            <pre className="mod-code-block">
              <code>{`{
  "name": "Tree",
  "texture": "tree.png"
}`}</code>
            </pre>
          </article>

          <article>
            <h3>Missing comma</h3>
            <pre className="mod-code-block mod-code-block--error">
              <code>{`{
  "name": "Tree"
  "texture": "tree.png"
}`}</code>
            </pre>
          </article>
        </div>

        <GuideNote title="A useful rule of thumb">
          <p>
            If another item is coming, the current item normally needs a comma.
            A <a href="https://jsonlint.com/">JSON validator</a> can help locate
            punctuation mistakes.
          </p>
        </GuideNote>
      </section>

      <section id="checklist">
        <h2>Before testing</h2>

        <ul className="mod-checklist">
          <li>
            The file is named exactly <code>mod.script</code>.
          </li>
          <li>It is stored inside the correct adventure folder.</li>
          <li>Keys and text values use double quotation marks.</li>
          <li>Numbers and true/false values are not quoted.</li>
          <li>Objects use curly braces and lists use square brackets.</li>
          <li>Commas appear between items, but not after the final item.</li>
          <li>Wizordum has been restarted since the latest changes.</li>
        </ul>
      </section>

      <section id="lore-scrolls">
        <h2>Lore scrolls</h2>
        <p>
          Lore Scroll actors in the editor have an ID number. Match that number
          to a Lore Scroll entry in your mod script. When the IDs match, the
          entry’s text is displayed on that scroll.
        </p>
        <h3>Example scroll types</h3>
        <p>
          A scroll can use type <code>1</code>, <code>2</code>, or
          <code>3</code>. These examples show how each type appears in game.
        </p>

        <div className="lore-scroll-grid">
          <GuideImage
            src={publicAsset("guides/lore/scrollT1.png")}
            alt="Type 1 lore scroll shown on a wide, lightly blood-stained parchment"
            caption="Type 1 uses a broad parchment design."
          />
          <GuideImage
            src={publicAsset("guides/lore/scrollT2.png")}
            alt="Type 2 lore scroll shown on a rough-edged parchment"
            caption="Type 2 uses a rough-edged parchment design."
          />
          <GuideImage
            src={publicAsset("guides/lore/scrollT3.png")}
            alt="Type 3 lore scroll shown on a blood-marked parchment with a ritual symbol"
            caption="Type 3 uses a blood-marked parchment design."
          />
        </div>
      </section>
    </article>
  );
}

export default ModScripts;
