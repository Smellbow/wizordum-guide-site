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
    image: 'actors/walldestroy.png',
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
      'Use Push Wall for classic secret walls and movable pieces of level geometry. Note that unless the wall ends in a spot that prevents it, it can be pushed again!',
    example:
      'Hide treasure behind a wall that slides away when the player pushes it.',
    parameters: [],
    image: 'actors/pushwall.png',
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
    parameters: [{name: 'Move', description: 'How many spaces will this move'},{name: 'Speed', description: 'How fast will it move, can be instant!'}],
    image: 'actors/wallLower.png',
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
    parameters: [{name: 'Move', description: 'How many spaces will this move'},{name: 'Speed', description: 'How fast will it move, can be instant!'}],
    image: 'actors/wallRise.png',
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
      'Use Wall Mover for sliding structures and other wall movement that is more involved than simply raising or lowering. Rotate the actor to changes which direction the mover will go. The arrow points the way!',
    example:
      'Create a repeatedly moving wall as part of a timing puzzle.',
    parameters: [{name: 'Move', description: 'How many spaces will this move'},{name: 'Speed', description: 'How fast will it move, can be instant!'}],
    image: 'actors/wallMover.png',
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
      'Use Liquid Riser to flood or drain an area as part of a puzzle or scripted event. One Rise will impact all connected liquid spaces',
    example:
      'Raise water after a switch is activated so the player can cross a space',
    parameters: [],
    image: 'actors/liquidRise.png',
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
      'Use a Passage where the player needs to move between linked parts of the map using the actor’s configured transition. Highlight the passage and press TAB to access the settings for its destination. Here you can set light levels, weather, fog and sounds. Try to ensure each passage, if two way matches your areas on each end!',
    example:
      'Connect two separated areas that should behave as parts of the same route.',
    parameters: [{name: 'Up', description: 'The player must look up to use'},{name: 'Down', description: 'The player must look down to use'}],
    image: 'actors/passage.png',
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
      'Use Teleport to transfer the player instantly to another position in the map. They can be two way or one way. Like the passage, pressing TAB whilst highlighting the teleport point will allow you to set audio, lighting, sound at the destination. The player will exit the teleporter facing the direction of the arrow.',
    example:
      'Create a magical portal that transports the player to a hidden chamber.',
    parameters: [{name: 'Off', description: 'Set a teleporter to be disabled until some other trigger activates it'}],
    image: 'actors/teleport.png',
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
      'Some enemies come in two variants: the default standing variant and the "Hidden" variant. A hidden enemy is one that isnt visible (like Tentacle and Undead) or appears dead (like Skeleton Swordsman) until you approach them, at which point they become alive or visible, The Creature Rise object can be used to "rise" these enemies using an activator. Note that enemies can still be risen by the player approaching them (see the parameters below).',
    example:
      'Raise several enemies into an arena when the player takes an important item.',
    parameters: [{name: 'Exclusive', description: 'Will not rise at all unless activated by a trigger'}],
    image: 'actors/creatureRiser.png',
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
      'Use Kill Counter when progression depends on the player defeating a group of enemies. Connect the kill counter to monsters to count, the total will be the number connected, Then connect spawns/triggers you want to fire when the count is reached',
    example:
      'Lower the exit wall after every enemy in an arena has been killed.',
    parameters: [],
    image: 'actors/killcount.png',
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
      'Use Ground Spikes to create timed traps and dangerous floor areas. There are matching textures if desired for these. Press SPACE to set a difficulty to appear on',
    example:
      'Connect the spikes to an Interval actor to produce a repeating trap.',
    parameters: [{name: 'Delay', description: 'The time between poking!'},{name: 'Speed', description: 'The speed of the poking!'}],
    image: 'actors/groundspike.png',
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
      'The player must run a gauntlet of traps in the dungeon',
    parameters: [{name: 'Delay', description: 'The time between poking!'},{name: 'Speed', description: 'The speed of the poking!'}],
    image: 'actors/wallspike.png',
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
      'Use Ceiling Spikes to threaten the player from overhead, who looks up?',
    example:
      'Trigger ceiling spikes after the player enters a treasure alcove.',
    parameters: [{name: 'Delay', description: 'The time between poking!'},{name: 'Speed', description: 'The speed of the poking!'}],
    image: 'actors/ceilingspike.png',
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
      'Once the player collects a key, trigger wall turrets to complicated their escape!',
    parameters: [{name: 'Interval', description: 'Time between projectiles from the turret'},{name: 'Delay', description: 'Start after the map loads by X amount'}],
    image: 'actors/wallturret.png',
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
      'Use Flame Bar as a timing and movement hazard in corridors, arenas, and puzzle rooms. Has a vertical version also',
    example:
      'Make the player time their movement through a room containing several rotating flame bars.',
    parameters: [{name: 'Reverse', description: 'Change rotation direction'}],
    image: 'actors/flamebar.png',
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
      'Use Cutter to build traps that require careful positioning or timed movement. Cutters will move along a path if defined by pointing it to node actors, make the connection in order of the path desired.',
    example:
      'Place cutters along a narrow route that the player must cross between movements.',
    parameters: [],
    image: 'actors/cutter.png',
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
      'Use Boulder Spawner to produce moving hazards that travel through the map. Boulders drop as they spawn so position accordingly. You can decativate them on level start and then trigger them later. Hook up a level start flag and a deactivator.',
    example:
      'Release a boulder down a corridor when the player crosses a trigger.',
    parameters: [{name: 'Interval', description: 'Time between boulders appearing'},{name: 'Delay', description: 'Start after the map loads by X amount, setup staggering.'}],
    image: 'actors/boulder.png',
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
      'Set them as deactivated at level start then on player trigger FIRE! BURN THEM ALL! *ahem*',
    parameters: [],
    image: 'actors/flamebreath.png',
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
      'Play a heavy impact sound when a wall collapses, or sound a bell for an alarm',
    parameters: [],
    image: 'actors/soundfx.png',
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
      'Add ambient water noise to a specific part of a room.',
    parameters: [{name: 'Toggle type', description: 'Select the soud to be played'}],
    image: 'actors/soundsource.png',
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
      'Use this actor to add bursts of dust or an explosion to other actions and sequences',
    example:
      'Display an explosion as a wall is destroyed',
    parameters: [],
    image: 'actors/visualeffect.png',
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
      'Use Magic Field as a visible barrier blocking progress until the matching orb is destroyed. Note that barriers can reflect projectiles and be angled to created neat tricks',
    example:
      'Block a doorway with a magic field until the player finds and destroys the matching orb.',
    parameters: [],
    image: 'actors/magicbar.png',
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
      'Disable a Player Trigger after it has started a one-time encounter, Stop a wall tower moving or wall turret firing. Deactivating a wall riser/lower will cause it to go back to its original position',
    parameters: [],
    image: 'actors/deactivate.png',
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
      'This actor will trigger any connected actors as soon as the level starts.',
    example:
      'Begin a boulder trap as the map loads or move some walls around without needing player interaction',
    parameters: [],
    image: 'actors/startflag.png',
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
      'Use Autosave before important encounters or after meaningful sections of progression. Try to add a few of these in your maps to prevent total restarts that may frustrate players. Connect a trigger to this actor to cause an autosave. It is best to use a short delay before the autosave from the trigger point.',
    example:
      'Trigger an autosave immediately before the player enters a boss arena.',
    parameters: [],
    image: 'actors/autosave.png',
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
    name: 'Waypoint (Wheyypoint)',
    category: 'Movement',
    summary: 'Guides the player on the minimap',
    description:
      'Use Waypoints to help guide the player on the minimap, The flashing blue points that help indicate a correct path or next intended route are controlled by these. Connect them to each other in sequence and trigger them as needed.',
    example:
      'Keep the player on track by placing waypoints throughout the map',
    parameters: [{name: 'No Trigger', description: 'The waypoint must be triggered by something other than direct player contact'}],
    image: 'actors/wheyypoint.png',
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
      'Creature Move To is used to make enemies walk toward a specific location (Node). The enemy will stop moving if it spots a player and will attack instead.',
    example:
      'Make a creature move towards a waypoint when an encounter begins.',
    parameters: [],
    image: 'actors/creaturemove.png',
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
      'Use Creature Glue when a creature must remain attached to compatible moving geometry or behaviour. A creature will remain stuck unless you deactivate the glue later.',
    example:
      'Attach a creature to an element that changes position during a scripted sequence.',
    parameters: [],
    image: 'actors/cglue.png',
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
      'Use Loot Glue when an item must remain attached to compatible moving geometry or behaviour. Works for massive movers so you can swap out a large area and have loot appear',
    example:
      'Keep a pickup positioned on a moving piece of scenery.',
    parameters: [],
    image: 'actors/lootglue.png',
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
      'Use Ambient Trigger to alter the atmosphere as the player moves between parts of the map. Changes will trigger as the player passes into the trigger.',
    example:
      'Change the ambient sound when the player enters an underground section.',
    parameters: [{name: 'Size', description: 'Alter the size of the area that will cause a change'}],
    image: 'actors/ambientt.png',
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
      'Use Reset to... reset another actor :)',
    example:
      'Reset a switch connected to an elevator sequence. (see the elevator guide!)',
    parameters: [],
    image: 'actors/reset.png',
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
      'Up and Down variants exist, wall setters will move a wall part to another layer as selected in its parameters. This allows blocks to move into places they would not normally be allowed in the editor. You can move blocks above and below the normal layer limits. If you dont specify an up/down value you can push walls into other walls!',
    example:
      'Make a tower look larger than should be possble by setting blocks to move up out of normal editor bounds',
    parameters: [{name: 'Up/Down', description: 'How many spaces to move up or down'},{name: 'Forward', description: 'How many spaces to move forward in the arrow direction, use SHIFT + Q or E to rotate'}],
    image: 'actors/wallsetter.png',
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
    image: 'actors/minecart.png',
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
      'Yeh the 2D icon is a minecart, but its a barrel in game -Use Barrel Ride for a scripted journey using the game’s barrel-riding behaviour. use connected nodes to plot a bath the barrel will take when activated.',
    example:
      'Create an alternative transport sequence through a dangerous area.',
    parameters: [],
    image: 'actors/barrel.png',
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
      'Use this actor to configure and coordinate a minecart sequence. Points on the track use nodes, connect from a node to a controller to alter the speed of the cart at that stage. See the minecart guide!',
    example:
      'Slow the player down to appreciate your hard work or whisk them away at speed',
    parameters: [],
    image: 'actors/minecartspeed.png',
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
      'Use Massive Mover for substantial scripted movement involving structures or grouped geometry. you can move an entire structure in one go if it sits within the massive movers bounds. Connect to a node as a destination and move to that node on trigger.',
    example:
      'Move a large section of a room to reveal a new route.',
    parameters: [{name: 'Size X', description: 'How many spaces to move up or down'},{name: 'Sze Y', description: 'How many spaces to move up or down'}],
    image:'actors/massivemove.png',
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
      'Use Massive Destroyer for major scripted destruction involving grouped or substantial geometry. Height is calculated from the layer where the Massive Destroyer is placed, up to the top-most layer',
    example:
      'Destroy a large structure during a dramatic level event.',
    parameters: [{name: 'Size X', description: 'How many spaces to move up or down'},{name: 'Sze Y', description: 'How many spaces to move up or down'}],
    image: 'actors/massivedest.png',
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
      'The Particle Controller is used to toggle Smoke and Mist effects on and off during gameplay. Unlike the standard decorative versions (which always emit particles), the Particle Controller version can be activated and deactivated dynamically.',
    example:
      'Enable force rays whilst moving the player in some magic trap',
    parameters: [{name: 'Type', description: 'Type of effect to show'},{name: 'State', description: 'Start on or off'}],
    image: 'actors/partcont.png',
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
    parameters: [{name: 'Type', description: 'Type of particle to spawn'},{name: 'Amount', description: 'How much to spawn'}],
    image:'actors/partspawn.png',
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
      'Repeatedly activate a series of wall movers.',
    parameters: [{name: 'Time', description: 'How often to trigger'}],
    image: 'actors/interval.png',
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
      'Use Texture Scroller to make the selected texture scroll horizontally',
    example:
      'Scroll a texture to give the illusion of motion outside a window',
    parameters: [],
    image: 'actors/texturescroll.png',
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
      'Works together with the nav node to guide the Goblin Copter enemy along a path. The Goblin Copter will fly toward one of the connected Navigation Nodes, and if there are multiple options, it may change its destination over time. SETUP - Place a Goblin Copter, one Creature Navigation Assist, and at least one Navigation Node. Connect the Creature Navigation Assist to both the Goblin Copter and all Navigation Nodes.Trigger the setup using an activator like a Player Trigger, Switch, etc., and connect it to the Creature Navigation Assist.',
    example:
      'Setup an ambush in an open area with goblin copters to harass the player',
    parameters: [],
    image: 'actors/navigate.png',
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
    id: 'music-setter',
    name: 'Music Setter',
    category: 'Audio and Visual',
    summary: 'Changes the music used by the level.',
    description:
      'Use Music Setter when a particular event or area should switch to another music track. Must be triggered',
    example:
      'Leaving a village area and entering a lava filled mountain alternate music kicks in',
    parameters: [{name: 'Track', description: 'The music to be played on trigger'}],
    image: 'actors/music.png',
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
      'Some music tracks in the game have multiple layers, ranging from calm to intense variations. The Music Control object acts as a trigger that changes the music layer.',
    example:
      'Coordinate a music change with the beginning or end of a scripted sequence.',
    parameters: [],
    image: 'actors/musiccontrol.png',
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
      'Use Background Setter to alter the distant backdrop as the player enters another environment or event. Must be triggered. Works best with ambient triggers at the same time',
    example:
      'Change the background when the player travels from an interior into an outdoor area.',
    parameters: [{name: 'Type', description: 'Select the skybox to change to'}],
    image: 'actors/background.png',
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
      'The Rune Portal acts as a barrier or "locked door" that blocks passage until it’s unlocked. When activated (unlocked), it plays a unique animation and triggers camera shakes (earthquakes) for dramatic effect. To unlock the Rune Portal, connect an activator such as a Player Trigger, Switch, or similar to it.',
    example:
      'Activate a portal after the player completes a puzzle, allowing travel to the next area.',
    parameters: [],
    image: 'actors/portal.png',
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
  {
    id: 'message',
    name: 'Message',
    category: 'Audio and Visual',
    summary: 'Creates a rune-themed portal for travel or scripted use.',
    description:
      'When triggered a text message will be displayed on screen, Hover the actor and press TAB to enter the text',
    example:
      'When the player enters a new area display some text about their new surroundings',
    parameters: [],
    image: 'actors/message.png',
    tags: [
      'message',
      'text',
      'popup',
      'alert',
      'story',
    ],
    related: ['player-trigger'],
  },
    {
    id: 'skulls',
    name: 'Skull Pedestal',
    category: 'Logic',
    summary: 'An alternate to keys and locks',
    description:
      'If the player collects the correct skull they can place it on the pedestal, this will then trigger any connected actors as desired',
    example:
      'A locked gate cannot be moved until the correct skull is placed',
    parameters: [],
    image: 'actors/skulls.png',
    tags: [
      'Key',
      'Skull',
      'pedestal',
      'logic',
    ],
    related: ['player-trigger', 'switch', 'relay'],
  },
  {
    id: 'keys',
    name: 'Keys, Locks & Gates',
    category: 'Logic',
    summary: 'Wont budge, need a key',
    description:
      'Keys can prevent progression until obtained by using blocking gates or more complex structures with locks. A player simply interacts with a gate if they have the right key to progres. A lock actor will trigger other actors connected when the correct key is used. This can be used to make any manner of other sequences fire.',
    example:
      'A large wall moves apart after the player enters the correct key triggering a series of wall movers and sound fx',
    parameters: [],
    image: 'actors/keys.png',
    tags: [
      'Key',
      'logic',
      'gate',
      'lock',
      'door'
    ],
    related: ['player-trigger', 'switch', 'relay'],
  },
  {
    id: 'fancyshrine',
    name: 'Shrine - Special Ability',
    category: 'Creature and Loot',
    summary: 'Powerful magic!',
    description:
      'This shrine grants the player their middle mouse button ultimate spell!',
    example:
      'Prepare the player for a large fight by presenting this shrine',
    parameters: [],
    image: 'actors/fancyshrine.png',
    tags: [
      'Spells;',
      'Spell;',
      'Magic',
      'Shrine',
      'Ability',
      'Cast'
    ],
    related: ['spell'],
  },
  {
    id: 'spell',
    name: 'Magic Spells',
    category: 'Creature and Loot',
    summary: 'Whats a wizard without some spells',
    description:
      'This shrine grants the player their middle mouse button ultimate spell!',
    example:
      'Prepare the player for a large fight by presenting this shrine',
    parameters: [{name: 'Spell 1', description: 'Repulsion'},{name: 'Spell 2', description: 'Hellfire'},{name: 'Spell 3', description: 'Holy Nova'},{name: 'Spell 4', description: 'Wizards Wrath'}],
    image: 'actors/spell.png',
    tags: [
      'Spell;',
      'Spells;',
      'Magic',
      'Shrine',
      'Ability',
      'Cast'
    ],
    related: ['fancyshrine'],
  },
]

export default actors



// tags     = words people might search
// related  = exact IDs of other actor entries