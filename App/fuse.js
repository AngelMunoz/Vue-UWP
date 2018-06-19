const { src, task, exec, context } = require("fuse-box/sparky");
const {
  FuseBox,
  WebIndexPlugin,
  CSSPlugin,
  HTMLPlugin,
  VueComponentPlugin,
  CopyPlugin,
  QuantumPlugin
} = require("fuse-box");

context(class {
  getConfig() {
    return FuseBox.init({
      homeDir: "src",
      output: "dist/$name.js",
      target: 'browser@es6',
      plugins: [
        CSSPlugin(),
        HTMLPlugin({ useDefault: true }),
        VueComponentPlugin(),
        CopyPlugin({ files: ["**/*.woff2"], dest: '' }),
        WebIndexPlugin({
          template: './index.html'
        })
      ],
      useTypescriptCompiler: true,
      allowSyntheticDefaultImports: true,
      sourceMaps: { project: !this.isProduction, inline: false }
    });
  }
});

task("default", ['clean'], async context => {
  const fuse = context.getConfig();
  fuse.bundle("app")
    .watch()
    .instructions(">main.js");

  await fuse.run();
});

task("prod", ['clean'], async context => {
  context.isProduction = true;
  const fuse = context.getConfig();
  fuse.bundle("app")
    .instructions(">main.js");
  // copy also the index file
  await src('index.html', { base: '' }).dest('dist/').exec();
  await fuse.run();
});

task("clean", async context => {
  await src('./dist')
    .clean('dist/')
    .exec();
});

task("serve", ['clean'], async context => {
  const fuse = context.getConfig();
  fuse.dev();
  fuse.bundle("app")
    .hmr({ reload: true })
    .watch()
    .instructions(">main.js");

  await fuse.run();
});