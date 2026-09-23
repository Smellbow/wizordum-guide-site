import GuideHeader from "../components/article/GuideHeader";
import GuideNote from "../components/article/GuideNote";
import OnThisPage from "../components/article/OnThisPage";
import useDocumentTitle from "../hooks/useDocumentTitle";
import publicAsset from "../utils/publicAsset";
import Key from "../components/article/Key";
import GuideImage from "../components/article/GuideImage";
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
  { id: "basic-setup", label: "Basic setup" },
  { id: "script-params", label: "Script Params" },
];

function Scripting() {
  useDocumentTitle("Scripting");

  return (
    <article className="guide-page article-width">
      <GuideHeader
        avatar={publicAsset("avatars/smellbow.png")}
        category="Advanced"
        title="Game scripts"
        summary="Time to get all 1337 H4x0r in here 💻"
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
      <section id="basic-setup">
        <h2>Basic Setup</h2>

        <p>
          A new actor "Game Script" is placed in the map. Its location can
          impact how a script operates depending on your script design.
        </p>
        <p>
          A script is triggered like most other actors. Connect a triggering
          event to it, such as a player trigger, to start the script.
        </p>
        <GuideImage
          src={publicAsset("guides/scripting/script1.png")}
          alt="A Player Trigger connected directly to a Game Script actor set to script 0"
          caption="A basic connection that starts script 0 when the player enters the trigger area."
        />
        <p>
          The script actor has one parameter you can adjust with <Key>X</Key>.
          This sets the script ID number. This goes up to 100! Each script is
          numbered in the script editor window. Match the actor parameter with
          the script ID.
        </p>
        <GuideImage
          src={publicAsset("guides/scripting/script2.png")}
          alt="The script editor button highlighted in the top toolbar"
          caption="Select the highlighted button in the top toolbar to open the script editor."
          maxWidth="20rem"
        />
        <p>
          As shown below, in the script editor window we can set the script ID
          to match that of the actor, That script will be what runs when that
          actor is triggered.
        </p>
        <GuideNote title="Loooops">
          <p>
            Script actors can be de-activated with the deactivator actor, So if
            you use a repeat command without a count value, you can stop it!
          </p>
        </GuideNote>
        <GuideImage
          src={publicAsset("guides/scripting/script3.png")}
          alt="The script editor window showing the script ID matching the actor ID"
          caption="Match the ID to the actor"
        />
      </section>
      <section id="script-params">
        <p>Coming when I have time!</p>
        <p>
          Will add a list of params and what they link to like ambients/skys
          etc...
        </p>
      </section>
    </article>
  );
}

export default Scripting;
