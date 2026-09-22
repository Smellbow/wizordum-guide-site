import GuideHeader from "../components/article/GuideHeader";
import GuideNote from "../components/article/GuideNote";
import OnThisPage from "../components/article/OnThisPage";
import useDocumentTitle from "../hooks/useDocumentTitle";
import publicAsset from "../utils/publicAsset";
import "./GuidePage.css";
import "./Scripting.css";

const commands = [
  "wait time <value in seconds>",
  "wait health <health>",
  "wait enemy-health <health> <enemy id>",
  "activate <actor id>",
  "deactivate <actor id>",
  "reset <actor id>",
  "lightning",
  "lightning strong",
  "repeat",
  "repeat <number of repeats>",
  "give <pickup id> <amount>",
  "heal <amount>",
  "heal <amount> overflow",
  "move player <position>",
  "move enemy <enemy id> <position>",
  "damage <amount>",
  "message <text>",
  "message <duration> <text>",
  "shake <strength> <duration>",
  "kill player",
  "kill <enemy id>",
  "ambient <ambient id>",
  "skybox <skybox id>",
  "weather <on/off>",
  "weather <rain/rainHeavy/stormy/heavyStorm/snow/fall/forest/ash/dust/interiorStorm>",
  "spawn fx <type> <position>",
  "spawn pickup <id> <position>",
  "spawn creature <id> <position>",
  "spawn particles <id> <position> <amount> <spread>",
];

const positionOrigins = [
  {
    format: "[x,y,z]",
    name: "Local",
    description:
      "The default. The origin (0,0,0) is the centre of the placed Game Script object, so every position is relative to it.",
  },
  {
    format: "w-[x,y,z]",
    name: "World",
    description:
      "The origin (0,0,0) is the centre of the map on the middle-ground layer.",
  },
  {
    format: "p-[x,y,z]",
    name: "Player",
    description: "The origin (0,0,0) is the player’s current position.",
  },
  {
    format: "e-[x,y,z,ID]",
    name: "Enemy",
    description:
      "The origin (0,0,0) is the chosen enemy’s position. The fourth value is the enemy ID.",
  },
  {
    format: "t-[x,y,z,ID]",
    name: "Target node",
    description:
      "The origin (0,0,0) is a target node connected to the Game Script. The fourth value is its order ID, such as 0, 1, 2, or 3.",
  },
];

const pageSections = [
  { id: "commands", label: "Script commands" },
  { id: "position-format", label: "Position format" },
];

function Scripting() {
  useDocumentTitle("Scripting");

  return (
    <article className="guide-page article-width">
      <GuideHeader
        avatar={publicAsset("avatars/smellbow.png")}
        category="Advanced"
        title="Game scripts"
        summary="A quick reference for the commands and position formats available to Game Script actors."
        author="Smellbow"
        published="2026-09-22"
      />

      <GuideNote title="Work in progress">
        <p>
          This is an initial command reference. Examples may follow once people
          start using and sharing scripts!
        </p>
      </GuideNote>

      <OnThisPage items={pageSections} />

      <section id="commands">
        <h2>Game Script commands</h2>

        <p>
          Enter commands into a Game Script actor. Values inside angle brackets
          are placeholders: replace them with the value required by your script.
        </p>

        <ul className="script-command-list" aria-label="Game Script commands">
          {commands.map((command) => (
            <li key={command}>
              <code>{command}</code>
            </li>
          ))}
        </ul>
      </section>

      <section id="position-format">
        <h2>Position format</h2>

        <p>
          Positions must use the format <code>[x,y,z]</code>. By default, a
          position uses local space: <code>[0,0,0]</code> is the centre of the
          placed Game Script object and all coordinates are relative to it.
        </p>

        <p>
          Add one of the prefixes below when a position needs a different
          origin.
        </p>

        <dl className="position-origin-list">
          {positionOrigins.map((origin) => (
            <div key={origin.format}>
              <dt>
                <code>{origin.format}</code>
                <span>{origin.name}</span>
              </dt>
              <dd>{origin.description}</dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  );
}

export default Scripting;
