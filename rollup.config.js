import babel from "@rollup/plugin-babel"
import nodeResolve from "@rollup/plugin-node-resolve"
// import alias from '@rollup/plugin-alias'

export default {
    input: "src/index.tsx",
    output: [
        {
            file: "dist/index.js",
            format: "es"
        }
    ],
    // external: ["solid-js", "solid-js/web"],
    plugins: [
        nodeResolve({
            extensions: [".js", ".ts", ".tsx"]
        }),
        babel({
            extensions: [".js", ".ts", ".tsx"],
            babelHelpers: "bundled",
            presets: ["solid", "@babel/preset-typescript"],
            exclude: "node_modules/**"
        }),
        // alias({
        //     entries: [
        //         { find: 'solid-js', replacement: '../solid-js/packages/solid' },
        //     ]
        // })
    ]
}
