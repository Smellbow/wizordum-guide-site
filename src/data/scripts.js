// Add library entries here as scripts become available.
//
// A short script can provide `content` for the copy button. A larger script can
// provide `downloadPath` for a hosted file. Include both to offer both options.
// Store downloadable files in public/scripts and omit the leading slash:
//
// {
//   id: 'example-script',
//   title: 'Example script',
//   description: 'Explain what the script does and when someone might use it.',
//   keywords: ['welcome', 'message', 'intro'],
//   content: `message 4 Welcome to the map`,
//   downloadPath: 'scripts/example-script.txt',
//   downloadName: 'example-script.txt',
// }

const scripts = [
  {
    id: "One",
    title: "Just an example",
    description:
      "An example of chained commands just to show the syntax setup.",
    content: `message 10 hello there gamer
wait time 1
message 5 nice script kiddo
wait time 1
message 3 this might hurt a little
damage 20
wait time 2
message 3 ☺☺☺☺æ©§¶¹À¿
skybox 3
ambient 6`,
  },
];

export default scripts;
