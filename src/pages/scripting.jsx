import { useState } from "react";
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

// Add an entry here when a command needs an expandable explanation.
// The key must exactly match its text in the commands array above.
const commandDescriptions = {
  repeat:
    "Repeats the script continuously. Deactivate the Game Script actor to stop it.",
  "repeat <number of repeats>":
    "Repeats the script the specified number of times, then allows it to finish.",
};

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

const pickupIds = [
  [0, "Health Shard"],
  [1, "Greater Health Potion"],
  [2, "Berries"],
  [29, "Minor Health Potion"],
  [48, "Snowberries"],
  [41, "Raw Mana"],
  [3, "Armor Shard"],
  [55, "Armor Cap"],
  [28, "Breastplate Armor"],
  [25, "Minor Fire Essence"],
  [4, "Fire Essence"],
  [33, "Arcane Rocks"],
  [26, "Ice Shard"],
  [5, "Ice Shards"],
  [56, "Pyroblast Scroll"],
  [16, "Storm Vial"],
  [58, "Sylvan Essence"],
  [64, "Chaos Mana"],
  [7, "Blood Sigil"],
  [6, "Magic Orb"],
  [42, "Divine Shard"],
  [76, "Spell Shard"],
  [8, "Bronze Coins"],
  [9, "Silver Coins"],
  [10, "Gold Coins"],
  [11, "Gold Chalice"],
  [12, "Treasure Box"],
  [60, "Pile of Gems"],
  [23, "Coin Purse"],
  [37, "Treasure Pile"],
  [13, "Fire Rings"],
  [32, "Spellstriker"],
  [14, "Frostweaver"],
  [18, "Storm Gauntlets"],
  [27, "Crossbow"],
  [40, "Pyroblast"],
  [59, "Staff of Chaos"],
  [15, "Grimoire"],
  [17, "Cloak of Invisibility"],
  [19, "Health Elixir"],
  [45, "Scroll - Repulsion"],
  [34, "Scroll of Hellfire"],
  [53, "Scroll - Holy Nova"],
  [46, "Wizard's Wrath"],
  [43, "Fire Shield"],
  [44, "Stone Skin Elixir"],
  [49, "Haste Elixir"],
  [57, "Poison Vial"],
  [20, "Bronze Key"],
  [21, "Silver Key"],
  [22, "Gold Key"],
  [35, "Treasure Key"],
  [30, "Silver Skull"],
  [31, "Golden Skull"],
  [61, "Green Gem"],
  [62, "Red Gem"],
  [63, "Blue Gem"],
  [24, "Magic Map"],
  [68, "Magic Torch"],
  [36, "Seer's Orb"],
  [38, "Pigleton"],
  [39, "EGA Treasure Chest"],
  [47, "Candy"],
  [70, "Harp"],
  [75, "Dragonbreath Elixir"],
];

const soundIds = [
  [0, "Wall Collapse"],
  [1, "Earthquake (5s)"],
  [2, "Water Start Running"],
  [3, "Bell"],
  [4, "Explosion"],
  [5, "Platform Hits Ground"],
  [6, "Evil Spirits Banished"],
  [7, "Blood Splash"],
  [8, "Goblin Taunt"],
  [9, "Ogre Annoyed"],
  [10, "Stone Hit"],
  [11, "Rune Activation"],
  [12, "Goblin Annoyed"],
  [13, "Lightning"],
  [14, "Stone Break Big"],
  [15, "Stone Break Small"],
  [16, "Stone Hit Ground"],
  [17, "Arcane Effect"],
  [18, "Meteor Impact"],
  [19, "Cultist"],
  [20, "Cultist Argh"],
  [21, "Pigglet Speak"],
  [22, "Coins"],
];

const weatherTypes = [
  "rain",
  "rainHeavy",
  "stormy",
  "heavyStorm",
  "snow",
  "fall",
  "forest",
  "ash",
  "dust",
  "interiorStorm",
];

const pageSections = [
  { id: "commands", label: "Script commands" },
  { id: "position-format", label: "Position format" },
  { id: "basic-setup", label: "Basic setup" },
  { id: "script-params", label: "Command values" },
];

function IdReferenceList({ items, name, searchId }) {
  const [searchTerm, setSearchTerm] = useState("");
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredItems = items.filter(([id, label]) =>
    `${id} ${label}`.toLowerCase().includes(normalizedSearch),
  );

  return (
    <div className="script-reference-browser">
      <div className="script-reference-search">
        <label htmlFor={searchId}>Search {name}s</label>
        <input
          id={searchId}
          type="search"
          value={searchTerm}
          placeholder={`Search by ${name} name or ID`}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <p className="script-reference-count" aria-live="polite">
        {filteredItems.length === 1
          ? `1 ${name} found`
          : `${filteredItems.length} ${name}s found`}
      </p>

      {filteredItems.length > 0 ? (
        <ul className="script-value-list" aria-label={`${name} IDs`}>
          {filteredItems.map(([id, label]) => (
            <li key={id}>
              <code>{id}</code>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="script-reference-empty">
          No {name}s match “{searchTerm}”.
        </p>
      )}
    </div>
  );
}

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
          {commands.map((command) => {
            const description = commandDescriptions[command];

            return (
              <li key={command}>
                {description ? (
                  <details className="script-command-details">
                    <summary>
                      <code>{command}</code>
                      <span>What it does</span>
                    </summary>
                    <p>{description}</p>
                  </details>
                ) : (
                  <code>{command}</code>
                )}
              </li>
            );
          })}
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
        <h2>Command values</h2>

        <p>
          Some commands require a numeric ID or one of a fixed set of values.
          Use the references below when filling in those command placeholders.
        </p>
        <h3>Actor IDs</h3>
        <p>
          Trigger an actor by using its ID found in the highlighted actors
          details in the lower left of the editor view.
          <code>activate 0E</code>.
        </p>
        <h3>Pickup IDs</h3>

        <p>
          Use these IDs with commands such as <code>give</code> and{" "}
          <code>spawn pickup</code>.
        </p>

        <IdReferenceList
          items={pickupIds}
          name="pickup"
          searchId="pickup-search"
        />

        <h3>Sound IDs</h3>

        <IdReferenceList
          items={soundIds}
          name="sound"
          searchId="sound-search"
        />

        <h3>Weather types</h3>

        <p>
          Use one of these exact, case-sensitive values with the
          <code>weather</code> command.
        </p>

        <ul className="script-weather-list" aria-label="Weather types">
          {weatherTypes.map((weather) => (
            <li key={weather}>
              <code>{weather}</code>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Scripting;
