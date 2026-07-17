const actors = [
  {
    id: 'enemy-spawner',
    name: 'Enemy Spawner',
    category: 'Objects',
    summary: 'Creates enemies when activated by another actor.',
    description:
      'Use an Enemy Spawner when enemies need to appear after the player enters an area, activates a switch, or completes another event.',
    example:
      'Connect a trigger to the spawner to release enemies when the player crosses a doorway.',
    parameters: [
      {
        name: 'Enemy type',
        description: 'Determines which enemy the spawner creates.',
      },
      {
        name: 'Difficulty',
        description: 'Set which skill level the spawn applies to',
      },
      {
        name: 'Spawn Effects',
        description: 'Silent spawn or regular audible spawn',
      },
    ],
    tags: [
      'spawn',
      'enemy',
      'monster',
      'ambush',
      'trigger',
      'encounter',
    ],
    image: 'actors/enemyspawner.png',
    related: ['player-trigger'],
  },
  {
    id: 'door',
    name: 'Door',
    category: 'Objects',
    summary: 'Creates an interactive or triggered doorway.',
    description:
      'Doors can control access, divide encounters, and reveal new parts of a map. Some doors can be triggered or require certain keys As labelled.',
    example:
      'Position between two blocks to create interactive passage. ',
    parameters: [],
    tags: [
      'doorway',
      'entrance',
      'exit',
      'switch',
      'locked',
    ],
    image: 'actors/door.png',
    related: ['map-exit', 'player-trigger'],
  },
  {
    id: 'player-start',
    name: 'Player Start',
    category: 'Essential',
    summary: 'Creates the position the player starts the map in',
    description:
      'Every map needs a player start point. You can place multiple but the most recent one will be used. This can help when testing. The player will face the direction of the arrow.',
    example:
      'Essential for a map to start!',
    parameters: [],
    tags: [
      'spawn',
      'start',
      'player'
    ],
    image: 'actors/playerstart.png',
    related: ['map-exit'],
  },
  {
    id: 'map-exit',
    name: 'Map Exit',
    category: 'Essential',
    summary: 'Creates the level exit',
    description:
      'Every map needs an exit, This actor provides that function.',
    example:
      'Essential for a map to end!',
    parameters: [{
        name: 'Exit type',
        description: 'Can be toggled to create a fake exit, this still prevents player movement after use but allows a level end trigger actor to be used instead if you wish to show some further level action before ending',
      }
    ],
    tags: [
      'exit',
      'end'
    ],
    image: 'actors/exit.png',
    related: ['player-start', 'player-trigger'],
  },
    {
    id: 'player-trigger',
    name: 'Player Trigger',
    category: 'Trigger',
    summary: 'Creates A spot that can fire signals when the player enters',
    description:
      'The player trigger is used in all manner of interactive responsive map actions, if you want something to happen when the player moves to a spot - this is the actor! You can use the deactivator to stop a trigger from working until activated by some other action if needed.',
    example:
      'The player walks into a room, hits the trigger and a wave of enemy spawners fire, some walls collapse and a sound plays. So many options!',
    parameters: [{
        name: 'Size',
        description: 'The size of the trigger can be made larger as needed',
      },
      {
        name: 'Multiuse',
        description: 'If you need something to trigger more than once, set the multiuse flag',
      }
    ],
    tags: [
      'trigger',
      'player',
      'activation',
      'signal',
      'interactive'
    ],
    image: 'actors/playertrig.png',
    related: ['enemy-spawner', 'door', 'map-exit'],
  },
  // generated to check below, speeds this up!!!
    {
    id: 'level-end-trigger',
    name: 'Level End Trigger',
    category: 'Essential',
    summary: 'Ends the current level when activated.',
    description:
      'Use this actor when the level should finish through a signal rather than direct interaction with a Map Exit.',
    example:
      'Activate it after a final switch, encounter, or scripted sequence has completed.',
    parameters: [],
    image: 'actors/levelend.png',
    tags: [
      'level',
      'end',
      'exit',
      'finish',
      'complete',
      'trigger',
    ],
    related: ['map-exit', 'player-trigger', 'relay'],
  },
  {
    id: 'secret-area',
    name: 'Secret Area',
    category: 'Trigger',
    summary: 'Marks an area as a discovered secret.',
    description:
      'Waslking into this actor will trigger a secret that is counted on the end level screen.',
    example:
      'After moving an unmarked wall, treasure is found! Reward the player with a "secret found".',
    parameters: [{
        name: 'Size',
        description: 'The size of the trigger can be made larger as needed',
      },],
    image: 'actors/secretarea.png',
    tags: [
      'secret',
      'hidden',
      'area',
      'discovery',
      'completion',
      'trigger',
    ],
    related: ['player-trigger', 'secret-level-end'],
  },
  {
    id: 'invisible-wall',
    name: 'Invisible Wall',
    category: 'Geometry',
    summary: 'Creates an unseen barrier that blocks movement.',
    description:
      'Use an Invisible Wall to prevent movement through an area without displaying ordinary wall geometry.',
    example:
      'Place one around decorative scenery that the player should be able to see but not enter.',
    parameters: [{
        name: 'Disabled',
        description: 'You can setup a trigger to toggle the state, so an area can become unblocked or blocked',
      },],
    image: 'actors/inviswall.png',
    tags: [
      'invisible',
      'wall',
      'barrier',
      'block',
      'collision',
      'boundary',
    ],
    related: ['passable', 'magic-field'],
  },
  {
    id: 'magic-floor',
    name: 'Magic Floor',
    category: 'Geometry',
    summary: 'Creates a floor with special magical behaviour.',
    description:
      'When the player collects the Seers orb, these floors will become walkable',
    example:
      'A key is in sight but out of reach, the player needs the orb to get to it!',
    parameters: [],
    image: 'actors/magicfloor.png',
    tags: [
      'magic',
      'floor',
      'surface',
      'ground',
      'effect',
      'special',
    ],
    related: ['magic-field', 'visual-effect'],
  },
  {
    id: 'water-current',
    name: 'Water Current',
    category: 'Movement',
    summary: 'Pushes the player through liquid in a chosen direction.',
    description:
      'Use Water Current to create directional movement while the player is inside a liquid area. (or other!)',
    example:
      'Create a river that carries the player towards an area',
    image: 'actors/watercurrent.png',
    parameters: [{name: 'power',description: 'How fast should the player be moved'}],
    tags: [
      'water',
      'current',
      'liquid',
      'push',
      'movement',
      'flow',
      'river',
    ],
    related: ['liquid-riser', 'liquid-stream'],
  },
  {
    id: 'switch',
    name: 'Switch',
    category: 'Trigger',
    summary: 'Sends an activation signal when used by the player.',
    description:
      'Switches provide a visible interactive control for doors, traps, movers, and other actors.',
    example:
      'Connect a switch to a door so that using the switch opens the route ahead.',
    parameters: [{name: 'State',description: 'Can be set to "on" to start already switched'}],
    image: 'actors/switch1.png',
    tags: [
      'switch',
      'button',
      'use',
      'activate',
      'signal',
      'interactive',
    ],
    related: ['door', 'relay', 'counter', 'switch-multiuse'],
  },
  {
    id: 'shootable-switch',
    name: 'Shootable Switch',
    category: 'Trigger',
    summary: 'Sends an activation signal when shot.',
    description:
      'Use a Shootable Switch when the player must attack a target instead of interacting with it directly.',
    example:
      'Place one across a gap to open a distant door when the player shoots it.',
    parameters: [{name: 'Position',description: 'Toggle the placement of the switch or its visibility'}],
    image: 'actors/shootswitch1.png',
    tags: [
      'shoot',
      'shootable',
      'switch',
      'target',
      'projectile',
      'activate',
      'signal',
    ],
    related: ['switch', 'door', 'relay'],
  },
  {
    id: 'combination',
    name: 'Combination',
    category: 'Logic',
    summary: 'Coordinates several inputs as part of a combined activation.',
    description:
      'Use a Combination actor when multiple switches or other signals must contribute to one result. Check out the offical docs for some good guidance images!',
    example:
      'Require several switches to be activated before opening a locked chamber.',
    parameters: [{name: 'State',description: 'Toggle if you want the player to be able to adjust switches AFTER getting the right combo'}],
    image: 'actors/combo1.png',
    tags: [
      'combination',
      'multiple',
      'inputs',
      'logic',
      'puzzle',
      'switches',
    ],
    related: ['switch', 'counter', 'relay'],
  },
  {
    id: 'switch-multiuse',
    name: 'Switch Multiuse',
    category: 'Trigger',
    summary: 'Provides a switch that can be activated more than once.',
    description:
      'Use this variant when a switch needs to repeatedly send signals rather than becoming permanently used.',
    example:
      'Control a moving platform that the player may need to call several times.',
    parameters: [{name:'State', description: 'Toggle if the switch starts on'}],
    image: 'actors/multiswitch.png',
    tags: [
      'switch',
      'multiuse',
      'repeat',
      'reusable',
      'toggle',
      'activate',
    ],
    related: ['switch', 'relay', 'wall-mover'],
  },
  {
    id: 'invisible-switch',
    name: 'Invisible Switch',
    category: 'Trigger',
    summary: 'Provides switch behaviour without a visible switch object.',
    description:
      'Use this actor when an interactable location should send a signal without displaying an ordinary switch.',
    example:
      'Create a hidden interaction on a suspicious wall or decorative object.',
    parameters: [{name:'multi use', description: 'Allow multiple uses'},{name:'Hide', description: 'Prevent use until enabled'}],
    image: 'actors/invisswitch.png',
    tags: [
      'invisible',
      'switch',
      'hidden',
      'interaction',
      'activate',
      'secret',
    ],
    related: ['switch', 'secret-area', 'relay'],
  },
  {
    id: 'counter',
    name: 'Counter',
    category: 'Logic',
    summary: 'Counts incoming activations before sending its own signal.',
    description:
      'Use a Counter when an action should occur only after a particular number of events has happened. More than one trigger must feed into the activator for it to then trigger what is is connected to.',
    example:
      'Open an exit after the player activates three separate switches.',
    parameters: [],
    image: 'actors/countact.png',
    tags: [
      'counter',
      'count',
      'number',
      'events',
      'activations',
      'logic',
      'sequence',
    ],
    related: ['switch', 'kill-counter', 'relay'],
  },
  {
    id: 'timer',
    name: 'Timer',
    category: 'Logic',
    summary: 'Delays or schedules an activation using time.',
    description:
      'Use a Timer to create a pause between receiving a signal and activating another actor.',
    example:
      'Wait several seconds after a switch is pressed before lowering a wall. up to 4s',
    parameters: [{name: 'Time', description: 'How long the delay will be in increments, up to 4s. Can be chained.'}],
    image: 'actors/timer.png',
    tags: [
      'timer',
      'time',
      'delay',
      'wait',
      'seconds',
      'schedule',
      'logic',
    ],
    related: ['relay', 'interval', 'wall-lower'],
  },
  {
    id: 'relay',
    name: 'Relay',
    category: 'Logic',
    summary: 'Passes an activation signal to other actors.',
    description:
      'Relays help organise connections and allow one event to activate a group of related actors.',
    example:
      'Send a Player Trigger into a Relay that activates sound, enemies, and moving walls together.',
    parameters: [{name: 'Once', description: 'Will this relay only fire its targets one or multiple times'},{name: 'Sticky', description: 'Allows the relay to be moved, useful if you want to redirect a path using relays'}],
    image: 'actors/relay.png',
    tags: [
      'relay',
      'signal',
      'activate',
      'connection',
      'logic',
      'group',
      'sequence',
    ],
    related: ['player-trigger', 'timer', 'counter', 'node'],
  },
  {
    id: 'node',
    name: 'Node',
    category: 'Logic',
    summary: 'Provides a connection point for an actor sequence.',
    description:
      'Nodes alone do not do anything, They act as points for other actors to use. Wall tower paths, minecart paths, cutter paths, treasure goblin paths, destinations for move to actors and one way teleport destinations',
    example:
      'Connect to a cutter to define the path it will travel along',
    parameters: [],
    image: 'actors/node.png',
    tags: [
      'node',
      'connection',
      'signal',
      'logic',
      'sequence',
      'link',
    ],
    related: ['relay', 'timer', 'counter'],
  },
  {
    id: 'earthquake',
    name: 'Earthquake',
    category: 'Audio and Visual',
    summary: 'Creates an earthquake-style environmental effect.',
    description:
      'Use this actor to add shaking and impact to collapses, machinery, or dramatic scripted events. Makes the player camera judder around',
    example:
      'Activate an Earthquake alongside collapsing walls as a boss enters the arena.',
    parameters: [{name: 'Strength', description: 'How much shaking will be applied'},{name: 'Duration', description: 'How long the effect will last'}],
    image: 'actors/quake.png',
    tags: [
      'earthquake',
      'shake',
      'camera',
      'rumble',
      'impact',
      'effect',
    ],
    related: ['wall-break', 'sound-fx', 'massive-mover'],
  },
  {
    id: 'wall-break',
    name: 'Wall Break',
    category: 'Geometry',
    summary: 'Breaks a wall when activated.',
    description:
      'Wall breaks create small cracks on the wall, the player can break these open.',
    example:
      'Hide a secret room behind a regular wall with this actor so the player can break their way in',
    parameters: [{name: 'Type', description: 'Select wood or stone for the effect when broken'}],
    image: 'actors/wallbreak.png',
    tags: [
      'wall',
      'break',
      'collapse',
      'destructible',
      'secret',
      'passage',
    ],
    related: ['wall-destroyer', 'player-trigger', 'earthquake'],
  },
  {
    id: 'wall-destroyer',
    name: 'Wall Destroyer',
    category: 'Geometry',
    summary: 'Removes designated wall geometry when activated.',
    description:
      'Use a Wall Destroyer when a wall needs to disappear as the result of another actor’s signal.',
    example:
      'Remove a concealed wall after the player solves a switch puzzle.',
    parameters: [],
    tags: [
      'wall',
      'destroy',
      'remove',
      'open',
      'passage',
      'geometry',
    ],
    related: ['wall-break', 'switch', 'massive-destroyer'],
  },
  {
    id: 'push-wall',
    name: 'Push Wall',
    category: 'Geometry',
    summary: 'Creates a wall that can move when pushed or activated.',
    description:
      'Use Push Wall for classic secret walls and movable pieces of level geometry.',
    example:
      'Hide treasure behind a wall that slides away when the player pushes it.',
    parameters: [],
    tags: [
      'push',
      'wall',
      'secret',
      'move',
      'sliding',
      'hidden',
    ],
    related: ['wall-mover', 'secret-area'],
  },
  {
    id: 'wall-lower',
    name: 'Wall Lower',
    category: 'Geometry',
    summary: 'Lowers a wall when activated.',
    description:
      'Use Wall Lower to reveal passages, enemies, items, or changes in room geometry.',
    example:
      'Lower the walls surrounding an arena after all enemies have been defeated.',
    parameters: [],
    tags: [
      'wall',
      'lower',
      'down',
      'reveal',
      'open',
      'geometry',
    ],
    related: ['wall-rise', 'wall-mover', 'kill-counter'],
  },
  {
    id: 'wall-rise',
    name: 'Wall Rise',
    category: 'Geometry',
    summary: 'Raises a wall when activated.',
    description:
      'Use Wall Rise to create barriers, traps, arena boundaries, or changing room layouts.',
    example:
      'Raise walls behind the player when an encounter begins.',
    parameters: [],
    tags: [
      'wall',
      'rise',
      'raise',
      'up',
      'barrier',
      'geometry',
    ],
    related: ['wall-lower', 'wall-mover', 'player-trigger'],
  },
  {
    id: 'wall-mover',
    name: 'Wall Mover',
    category: 'Movement',
    summary: 'Moves wall geometry along a configured path.',
    description:
      'Use Wall Mover for sliding structures and other wall movement that is more involved than simply raising or lowering.',
    example:
      'Create a repeatedly moving wall as part of a timing puzzle.',
    parameters: [],
    tags: [
      'wall',
      'move',
      'moving',
      'slide',
      'platform',
      'geometry',
    ],
    related: ['push-wall', 'wall-lower', 'wall-rise', 'timer'],
  },
  {
    id: 'liquid-riser',
    name: 'Liquid Riser',
    category: 'Geometry',
    summary: 'Changes the height of a liquid surface.',
    description:
      'Use Liquid Riser to flood or drain an area as part of a puzzle or scripted event.',
    example:
      'Raise water after a switch is activated so the player can reach a higher passage.',
    parameters: [],
    tags: [
      'liquid',
      'water',
      'rise',
      'lower',
      'flood',
      'drain',
      'level',
    ],
    related: ['water-current', 'liquid-stream', 'switch'],
  },
  {
    id: 'passage',
    name: 'Passage',
    category: 'Movement',
    summary: 'Connects locations through passage behaviour.',
    description:
      'Use a Passage where the player needs to move between linked parts of the map using the actor’s configured transition.',
    example:
      'Connect two separated areas that should behave as parts of the same route.',
    parameters: [],
    tags: [
      'passage',
      'travel',
      'connection',
      'entrance',
      'route',
      'transition',
    ],
    related: ['teleport', 'door'],
  },
  {
    id: 'teleport',
    name: 'Teleport',
    category: 'Movement',
    summary: 'Moves the player between linked locations.',
    description:
      'Use Teleport to transfer the player instantly to another position in the map.',
    example:
      'Create a magical portal that transports the player to a hidden chamber.',
    parameters: [],
    tags: [
      'teleport',
      'portal',
      'travel',
      'transport',
      'destination',
      'warp',
    ],
    related: ['passage', 'rune-portal', 'visual-effect'],
  },
  {
    id: 'creature-riser',
    name: 'Creature Riser',
    category: 'Creature and Loot',
    summary: 'Raises a creature into the playable area.',
    description:
      'Use Creature Riser for enemies that emerge from floors, pits, or concealed spaces during an encounter.',
    example:
      'Raise several enemies into an arena when the player takes an important item.',
    parameters: [],
    tags: [
      'creature',
      'enemy',
      'rise',
      'spawn',
      'ambush',
      'monster',
    ],
    related: ['enemy-spawner', 'player-trigger', 'kill-counter'],
  },
  {
    id: 'kill-counter',
    name: 'Kill Counter',
    category: 'Logic',
    summary: 'Counts defeated creatures before activating another actor.',
    description:
      'Use Kill Counter when progression depends on the player defeating a group of enemies.',
    example:
      'Lower the exit wall after every enemy in an arena has been killed.',
    parameters: [],
    tags: [
      'kill',
      'counter',
      'enemy',
      'creature',
      'defeat',
      'arena',
      'combat',
    ],
    related: ['enemy-spawner', 'counter', 'wall-lower'],
  },
  {
    id: 'ground-spikes',
    name: 'Ground Spikes',
    category: 'Combat and Hazards',
    summary: 'Creates a spike hazard that attacks from the floor.',
    description:
      'Use Ground Spikes to create timed traps and dangerous floor areas.',
    example:
      'Connect the spikes to an Interval actor to produce a repeating trap.',
    parameters: [],
    tags: [
      'ground',
      'floor',
      'spikes',
      'trap',
      'hazard',
      'damage',
    ],
    related: ['wall-spikes', 'ceiling-spikes', 'interval'],
  },
  {
    id: 'wall-spikes',
    name: 'Wall Spikes',
    category: 'Combat and Hazards',
    summary: 'Creates a spike hazard that attacks from a wall.',
    description:
      'Use Wall Spikes in narrow passages, trap rooms, and other dangerous areas.',
    example:
      'Activate them when the player crosses a concealed trigger in a corridor.',
    parameters: [],
    tags: [
      'wall',
      'spikes',
      'trap',
      'hazard',
      'damage',
      'ambush',
    ],
    related: ['ground-spikes', 'ceiling-spikes', 'player-trigger'],
  },
  {
    id: 'ceiling-spikes',
    name: 'Ceiling Spikes',
    category: 'Combat and Hazards',
    summary: 'Creates a spike hazard that attacks from above.',
    description:
      'Use Ceiling Spikes to threaten the player from overhead or as part of a crushing trap.',
    example:
      'Trigger ceiling spikes after the player enters a treasure alcove.',
    parameters: [],
    tags: [
      'ceiling',
      'spikes',
      'trap',
      'hazard',
      'damage',
      'overhead',
    ],
    related: ['ground-spikes', 'wall-spikes', 'player-trigger'],
  },
  {
    id: 'wall-turret',
    name: 'Wall Turret',
    category: 'Combat and Hazards',
    summary: 'Creates a wall-mounted projectile hazard.',
    description:
      'Use Wall Turret to attack the player from fixed positions and create pressure in combat spaces.',
    example:
      'Place turrets overlooking a room where the player must move between cover.',
    parameters: [],
    tags: [
      'wall',
      'turret',
      'projectile',
      'shoot',
      'trap',
      'hazard',
      'combat',
    ],
    related: ['shootable-switch', 'player-trigger'],
  },
  {
    id: 'flame-bar',
    name: 'Flame Bar',
    category: 'Combat and Hazards',
    summary: 'Creates a moving or rotating bar of flame.',
    description:
      'Use Flame Bar as a timing and movement hazard in corridors, arenas, and puzzle rooms.',
    example:
      'Make the player time their movement through a room containing several rotating flame bars.',
    parameters: [],
    tags: [
      'flame',
      'fire',
      'bar',
      'rotating',
      'trap',
      'hazard',
      'damage',
    ],
    related: ['flame-breather', 'interval', 'cutter'],
  },
  {
    id: 'cutter',
    name: 'Cutter',
    category: 'Combat and Hazards',
    summary: 'Creates a moving cutting hazard.',
    description:
      'Use Cutter to build traps that require careful positioning or timed movement.',
    example:
      'Place cutters along a narrow route that the player must cross between movements.',
    parameters: [],
    tags: [
      'cutter',
      'blade',
      'saw',
      'trap',
      'hazard',
      'damage',
      'moving',
    ],
    related: ['flame-bar', 'interval', 'player-trigger'],
  },
  {
    id: 'boulder-spawner',
    name: 'Boulder Spawner',
    category: 'Combat and Hazards',
    summary: 'Creates rolling boulders or equivalent configured objects.',
    description:
      'Use Boulder Spawner to produce moving hazards that travel through the map.',
    example:
      'Release a boulder down a corridor when the player crosses a trigger.',
    parameters: [],
    tags: [
      'boulder',
      'rock',
      'snowball',
      'spawn',
      'rolling',
      'trap',
      'hazard',
    ],
    related: ['player-trigger', 'timer', 'relay'],
  },
  {
    id: 'flame-breather',
    name: 'Flame Breather',
    category: 'Combat and Hazards',
    summary: 'Emits bursts of flame as a hazard.',
    description:
      'Use Flame Breather for periodic fire traps and dangerous environmental decorations.',
    example:
      'Use an Interval actor to fire repeated flame bursts across a passage.',
    parameters: [],
    tags: [
      'flame',
      'fire',
      'breath',
      'trap',
      'hazard',
      'damage',
      'burst',
    ],
    related: ['flame-bar', 'interval', 'timer'],
  },
  {
    id: 'sound-fx',
    name: 'Sound FX',
    category: 'Audio and Visual',
    summary: 'Plays a configured sound effect when activated.',
    description:
      'Use Sound FX to support switches, traps, secrets, encounters, and scripted environmental events.',
    example:
      'Play a heavy impact sound when a wall collapses.',
    parameters: [],
    tags: [
      'sound',
      'audio',
      'effect',
      'noise',
      'play',
      'sfx',
    ],
    related: ['sound-source', 'wall-break', 'relay'],
  },
  {
    id: 'sound-source',
    name: 'Sound Source',
    category: 'Audio and Visual',
    summary: 'Places a positional source of sound in the map.',
    description:
      'Use Sound Source for audio that should appear to come from a particular location.',
    example:
      'Add ambient machinery noise to a specific part of a room.',
    parameters: [],
    tags: [
      'sound',
      'audio',
      'source',
      'positional',
      'ambient',
      'loop',
    ],
    related: ['sound-fx', 'ambient-trigger', 'music-setter'],
  },
  {
    id: 'visual-effect',
    name: 'Visual Effect',
    category: 'Audio and Visual',
    summary: 'Displays a configured visual effect.',
    description:
      'Use this actor to add visual feedback to magic, traps, switches, portals, and scripted sequences.',
    example:
      'Display a magical burst when a portal becomes active.',
    parameters: [],
    tags: [
      'visual',
      'effect',
      'vfx',
      'animation',
      'magic',
      'particles',
    ],
    related: ['particle-spawner', 'magic-field', 'rune-portal'],
  },
  {
    id: 'magic-field',
    name: 'Magic Field',
    category: 'Combat and Hazards',
    summary: 'Creates a magical field with configurable behaviour.',
    description:
      'Use Magic Field as a visible barrier, hazard, or magical boundary within the map.',
    example:
      'Block a doorway with a magic field until the player activates the correct switch.',
    parameters: [],
    tags: [
      'magic',
      'field',
      'barrier',
      'forcefield',
      'hazard',
      'energy',
    ],
    related: ['switch', 'deactivator', 'visual-effect'],
  },
  {
    id: 'deactivator',
    name: 'Deactivator',
    category: 'Logic',
    summary: 'Disables another actor or connected behaviour.',
    description:
      'Use a Deactivator when an actor must stop responding after a particular event.',
    example:
      'Disable a Player Trigger after it has started a one-time encounter.',
    parameters: [],
    tags: [
      'deactivate',
      'disable',
      'stop',
      'off',
      'logic',
      'trigger',
    ],
    related: ['player-trigger', 'switch', 'relay'],
  },
  {
    id: 'level-start-activator',
    name: 'Level Start Activator',
    category: 'Logic',
    summary: 'Sends an activation signal when the level begins.',
    description:
      'Use this actor to start ambient effects, machinery, timers, or other scripted behaviour immediately.',
    example:
      'Begin a repeating environmental sound as soon as the map loads.',
    parameters: [],
    tags: [
      'level',
      'start',
      'activate',
      'begin',
      'initial',
      'startup',
    ],
    related: ['player-start', 'relay', 'timer'],
  },
  {
    id: 'autosave',
    name: 'Autosave',
    category: 'Essential',
    summary: 'Creates an automatic save point.',
    description:
      'Use Autosave before important encounters or after meaningful sections of progression.',
    example:
      'Trigger an autosave immediately before the player enters a boss arena.',
    parameters: [],
    tags: [
      'autosave',
      'save',
      'checkpoint',
      'progress',
      'automatic',
    ],
    related: ['player-trigger', 'player-start'],
  },
  {
    id: 'waypoint',
    name: 'Waypoint',
    category: 'Movement',
    summary: 'Provides a target position used by other actors.',
    description:
      'Use Waypoints to define destinations and routes for actors that move through the map.',
    example:
      'Give a Creature Move To actor a waypoint on the opposite side of a room.',
    parameters: [],
    tags: [
      'waypoint',
      'destination',
      'target',
      'path',
      'position',
      'movement',
    ],
    related: ['creature-move-to', 'creature-navigation-node'],
  },
  {
    id: 'creature-move-to',
    name: 'Creature Move To',
    category: 'Creature and Loot',
    summary: 'Directs a creature towards a selected destination.',
    description:
      'Use Creature Move To for staged entrances, patrol-like movement, and scripted creature positioning.',
    example:
      'Make a creature move towards a waypoint when an encounter begins.',
    parameters: [],
    tags: [
      'creature',
      'enemy',
      'move',
      'destination',
      'waypoint',
      'path',
    ],
    related: ['waypoint', 'creature-navigation-node', 'enemy-spawner'],
  },
  {
    id: 'creature-glue',
    name: 'Creature Glue',
    category: 'Creature and Loot',
    summary: 'Associates a creature with another moving element.',
    description:
      'Use Creature Glue when a creature must remain attached to compatible moving geometry or behaviour.',
    example:
      'Attach a creature to an element that changes position during a scripted sequence.',
    parameters: [],
    tags: [
      'creature',
      'enemy',
      'glue',
      'attach',
      'linked',
      'moving',
    ],
    related: ['loot-glue', 'creature-move-to', 'massive-mover'],
  },
  {
    id: 'loot-glue',
    name: 'Loot Glue',
    category: 'Creature and Loot',
    summary: 'Associates loot with another moving element.',
    description:
      'Use Loot Glue when an item must remain attached to compatible moving geometry or behaviour.',
    example:
      'Keep a pickup positioned on a moving piece of scenery.',
    parameters: [],
    tags: [
      'loot',
      'item',
      'pickup',
      'glue',
      'attach',
      'moving',
    ],
    related: ['creature-glue', 'massive-mover'],
  },
  {
    id: 'ambient-trigger',
    name: 'Ambient Trigger',
    category: 'Audio and Visual',
    summary: 'Changes or activates ambient behaviour in an area.',
    description:
      'Use Ambient Trigger to alter the atmosphere as the player moves between parts of the map.',
    example:
      'Change the ambient sound when the player enters an underground section.',
    parameters: [],
    tags: [
      'ambient',
      'trigger',
      'atmosphere',
      'sound',
      'environment',
      'area',
    ],
    related: ['player-trigger', 'sound-source', 'background-setter'],
  },
  {
    id: 'reset',
    name: 'Reset',
    category: 'Logic',
    summary: 'Returns compatible actors or logic to a reusable state.',
    description:
      'Use Reset in mechanisms or puzzles that need to be attempted or activated again.',
    example:
      'Reset a timed switch puzzle after the player runs out of time.',
    parameters: [],
    tags: [
      'reset',
      'restart',
      'restore',
      'repeat',
      'logic',
      'puzzle',
    ],
    related: ['switch-multiuse', 'timer', 'counter'],
  },
  {
    id: 'wall-layer-setter',
    name: 'Wall Layer Setter',
    category: 'Geometry',
    summary: 'Changes the active layer of compatible wall geometry.',
    description:
      'Use Wall Layer Setter when scripted events need to alter which wall layer is being displayed or used.',
    example:
      'Change a room’s wall presentation after a magical event occurs.',
    parameters: [],
    tags: [
      'wall',
      'layer',
      'set',
      'change',
      'geometry',
      'texture',
    ],
    related: ['wall-mover', 'visual-effect'],
  },
  {
    id: 'minecart',
    name: 'Minecart',
    category: 'Movement',
    summary: 'Provides the moving minecart ride element.',
    description:
      'Use Minecart as part of a configured rail journey through the map.',
    example:
      'Carry the player through a mine while hazards and scenery pass alongside the route.',
    parameters: [],
    tags: [
      'minecart',
      'cart',
      'ride',
      'rail',
      'track',
      'movement',
    ],
    related: ['minecart-controller', 'barrel-ride'],
  },
  {
    id: 'barrel-ride',
    name: 'Barrel Ride',
    category: 'Movement',
    summary: 'Provides the moving barrel ride element.',
    description:
      'Use Barrel Ride for a scripted journey using the game’s barrel-riding behaviour.',
    example:
      'Create an alternative transport sequence through a dangerous area.',
    parameters: [],
    tags: [
      'barrel',
      'ride',
      'transport',
      'movement',
      'journey',
    ],
    related: ['minecart', 'minecart-controller'],
  },
  {
    id: 'minecart-controller',
    name: 'Minecart Controller',
    category: 'Movement',
    summary: 'Controls compatible minecart or ride behaviour.',
    description:
      'Use this actor to configure and coordinate a minecart sequence.',
    example:
      'Connect the controller to the actors required to start and operate a minecart journey.',
    parameters: [],
    tags: [
      'minecart',
      'controller',
      'cart',
      'ride',
      'rail',
      'control',
    ],
    related: ['minecart', 'barrel-ride', 'waypoint'],
  },
  {
    id: 'massive-mover',
    name: 'Massive Mover',
    category: 'Movement',
    summary: 'Moves a large configured piece of map geometry.',
    description:
      'Use Massive Mover for substantial scripted movement involving structures or grouped geometry.',
    example:
      'Move a large section of a room to reveal a new route.',
    parameters: [],
    tags: [
      'massive',
      'move',
      'geometry',
      'structure',
      'large',
      'scripted',
    ],
    related: ['massive-destroyer', 'wall-mover', 'earthquake'],
  },
  {
    id: 'massive-destroyer',
    name: 'Massive Destroyer',
    category: 'Geometry',
    summary: 'Destroys a large configured piece of map geometry.',
    description:
      'Use Massive Destroyer for major scripted destruction involving grouped or substantial geometry.',
    example:
      'Destroy a large structure during a dramatic level event.',
    parameters: [],
    tags: [
      'massive',
      'destroy',
      'geometry',
      'structure',
      'collapse',
      'large',
    ],
    related: ['massive-mover', 'wall-destroyer', 'earthquake'],
  },
  {
    id: 'particle-controller',
    name: 'Particle Controller',
    category: 'Audio and Visual',
    summary: 'Controls compatible particle effects.',
    description:
      'Use Particle Controller to start, stop, or otherwise coordinate configured particle behaviour.',
    example:
      'Enable a group of magical particles when a portal becomes active.',
    parameters: [],
    tags: [
      'particle',
      'controller',
      'effect',
      'visual',
      'vfx',
      'control',
    ],
    related: ['particle-spawner', 'visual-effect', 'rune-portal'],
  },
  {
    id: 'particle-spawner',
    name: 'Particle Spawner',
    category: 'Audio and Visual',
    summary: 'Creates configured particles when activated.',
    description:
      'Use Particle Spawner to produce smoke, magic, sparks, or other supported particle effects.',
    example:
      'Spawn dust and debris while a wall collapses.',
    parameters: [],
    tags: [
      'particle',
      'spawn',
      'effect',
      'visual',
      'vfx',
      'smoke',
      'sparks',
    ],
    related: ['particle-controller', 'visual-effect', 'wall-break'],
  },
  {
    id: 'interval',
    name: 'Interval',
    category: 'Logic',
    summary: 'Sends repeated activations at a configured interval.',
    description:
      'Use Interval for effects and hazards that need to repeat automatically.',
    example:
      'Repeatedly activate a Flame Breather with a pause between each burst.',
    parameters: [],
    tags: [
      'interval',
      'repeat',
      'loop',
      'timing',
      'delay',
      'automatic',
    ],
    related: ['timer', 'flame-breather', 'ground-spikes'],
  },
  {
    id: 'texture-scroller',
    name: 'Texture Scroller',
    category: 'Audio and Visual',
    summary: 'Moves a texture across its surface over time.',
    description:
      'Use Texture Scroller to suggest flowing liquid, machinery, magical energy, and other movement.',
    example:
      'Scroll a water or conveyor texture in the direction of travel.',
    parameters: [],
    tags: [
      'texture',
      'scroll',
      'moving',
      'animation',
      'surface',
      'conveyor',
      'water',
    ],
    related: ['water-current', 'visual-effect', 'wall-layer-setter'],
  },
  {
    id: 'creature-navigation-assist',
    name: 'Creature Navigation Assist',
    category: 'Creature and Loot',
    summary: 'Helps creatures navigate difficult map geometry.',
    description:
      'Use this actor where creatures need additional assistance moving through a particular part of the map.',
    example:
      'Add navigation assistance near geometry where enemies otherwise struggle to follow the intended route.',
    parameters: [],
    tags: [
      'creature',
      'enemy',
      'navigation',
      'pathfinding',
      'movement',
      'assist',
    ],
    related: ['creature-navigation-node', 'creature-move-to', 'waypoint'],
  },
  {
    id: 'creature-navigation-node',
    name: 'Creature Navigation Node',
    category: 'Creature and Loot',
    summary: 'Provides a navigation point for creature movement.',
    description:
      'Use navigation nodes to help define intended creature routes through complicated spaces.',
    example:
      'Place nodes along the route an enemy should follow around an obstacle.',
    parameters: [],
    tags: [
      'creature',
      'enemy',
      'navigation',
      'node',
      'pathfinding',
      'route',
    ],
    related: ['creature-navigation-assist', 'creature-move-to', 'waypoint'],
  },
  {
    id: 'music-setter',
    name: 'Music Setter',
    category: 'Audio and Visual',
    summary: 'Changes the music used by the level.',
    description:
      'Use Music Setter when a particular event or area should switch to another music track.',
    example:
      'Change to combat music as the player enters a major encounter.',
    parameters: [],
    tags: [
      'music',
      'track',
      'song',
      'audio',
      'change',
      'set',
    ],
    related: ['music-control', 'ambient-trigger', 'player-trigger'],
  },
  {
    id: 'music-control',
    name: 'Music Control',
    category: 'Audio and Visual',
    summary: 'Controls the playback state of level music.',
    description:
      'Use Music Control for supported changes to currently configured music playback.',
    example:
      'Coordinate a music change with the beginning or end of a scripted sequence.',
    parameters: [],
    tags: [
      'music',
      'control',
      'audio',
      'play',
      'stop',
      'track',
    ],
    related: ['music-setter', 'relay', 'ambient-trigger'],
  },
  {
    id: 'background-setter',
    name: 'Background Setter',
    category: 'Audio and Visual',
    summary: 'Changes the level background when activated.',
    description:
      'Use Background Setter to alter the distant backdrop as the player enters another environment or event.',
    example:
      'Change the background when the player travels from an interior into an outdoor area.',
    parameters: [],
    tags: [
      'background',
      'sky',
      'backdrop',
      'environment',
      'visual',
      'change',
    ],
    related: ['ambient-trigger', 'visual-effect', 'player-trigger'],
  },
  {
    id: 'rune-portal',
    name: 'Rune Portal',
    category: 'Movement',
    summary: 'Creates a rune-themed portal for travel or scripted use.',
    description:
      'Use Rune Portal for magical transitions between linked parts of the map.',
    example:
      'Activate a portal after the player completes a puzzle, allowing travel to the next area.',
    parameters: [],
    tags: [
      'rune',
      'portal',
      'teleport',
      'magic',
      'travel',
      'warp',
    ],
    related: ['teleport', 'visual-effect', 'particle-controller'],
  },
]

export default actors



// tags     = words people might search
// related  = exact IDs of other actor entries