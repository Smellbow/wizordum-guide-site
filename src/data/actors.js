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
    related: ['trigger', 'spawn-wave'],
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
    related: ['switch', 'trigger'],
  },
]

export default actors