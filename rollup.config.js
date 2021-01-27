import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import multi from '@rollup/plugin-multi-entry';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

export default {
  input: ["src/index.ts", "src/**/index.ts"],
  output: [
    {
      dir: "lib",
      format: "cjs",
      sourcemap: true
    }
  ],
  plugins: [
    multi( { entryFileName: 'index.js'}),
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    copy({
      targets: [
        {
          src: "src/variables.scss",
          dest: "lib",
          rename: "variables.scss"
        },
        {
          src: "src/typography.scss",
          dest: "lib",
          rename: "typography.scss"
        }
      ]
    })
  ]
};
