import { join, resolve, relative } from "path";
import { existsSync, readdirSync } from "fs";

import clearModule from "clear-module";

import consola from "consola";

import { name, version } from "../package.json";
import defaultTailwindConfig from "./tailwind.config";

const logger = consola.withScope("nuxt:tailwindcss");

async function CMLABSComponent(moduleOptions) {
  const { nuxt } = this;
  const options = Object.assign({}, moduleOptions, nuxt.options.cmlabs, {
    configPath: "tailwind.config.js",
    cssPath: join(nuxt.options.dir.assets, "css", "tailwind.css"),
    config: defaultTailwindConfig(nuxt.options),
  });

  // Installing the component prefixes
  options.prefix = String(options.prefix)?.toLowerCase() || "cm";
  const { prefix } = options;

  const configPath = nuxt.resolver.resolveAlias(options.configPath);
  const cssPath = nuxt.resolver.resolveAlias(options.cssPath);
  
  // Extend postcss config
  nuxt.options.build.postcss = Object.assign({}, nuxt.options.build.postcss, {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  });

  // Require postcss@8 and moment
  await this.addModule("@nuxt/postcss8");
  await this.addModule("@nuxtjs/moment");
  
  nuxt.options.css.unshift(resolve(__dirname, "css", "base.css"));
  nuxt.options.css.unshift(resolve(__dirname, "css", "vcalendar.css"));

  // Installing the plugins
  const pluginsToSync = [
    "components/index.js",
    ...readdirSync(resolve(__dirname, "plugins")).map(path => `plugins/${path}`)
  ];

  for (const plugin of pluginsToSync) {
    this.addPlugin({
      src: resolve(__dirname, plugin),
      fileName: join(prefix, plugin),
      options
    });
  }

  // Some library needs transpilations
  this.nuxt.options.build.transpile.push(
    "vee-validate/dist/rules",
    "vue-final-modal",
    "vt-notifications"
  )

  // Installing the components
  const foldersToSync = ["components/libs"];

  for (const folder of foldersToSync) {
    const path = resolve(__dirname, folder);
    
    for (const file of readdirSync(path)) {
      this.addTemplate({
        src: resolve(path, file),
        fileName: join(prefix, folder, file),
        options
      });
    }
  }

  // Include CSS file in project css
  if (typeof cssPath === "string") {
    if (existsSync(cssPath)) {
      logger.info(`Using Tailwind CSS from ~/${relative(nuxt.options.srcDir, cssPath)}`);
      nuxt.options.css.unshift(cssPath);
    } else {
      nuxt.options.css.unshift(resolve(__dirname, "css", "tailwind.css"));
    }
  }

  // Get and extend the Tailwind config
  let tailwindConfig = {};
  if (existsSync(configPath)) {
    clearModule(configPath);
    tailwindConfig = nuxt.resolver.requireModule(configPath);
    logger.info(`Merging Tailwind config from ~/${relative(this.options.srcDir, configPath)}`);
    // Transform purge option from Array to object with { content }
    if (Array.isArray(tailwindConfig.purge)) {
      tailwindConfig.purge = { content: tailwindConfig.purge };
    }
  }
  
  // Merge with our default purgecss default
  tailwindConfig = Object.assign({}, tailwindConfig, options.config);
  
  // Watch the Tailwind config file to restart the server
  if (nuxt.options.dev) {
    nuxt.options.watch.push(configPath);
  }

  // This hooks is called only for 'nuxt dev' and 'nuxt build' command
  nuxt.hook("build:before", async () => {
    if (!nuxt.options.dev && !process.env.NODE_ENV) {
      process.env.NODE_ENV = "production";
    }

    // Extend tailwindcss config
    tailwindConfig._hash = String(Date.now()).toString();
    if (options.jit === true) {
      logger.warn('`tailwindcss.jit` option had been deprecated in favour of tailwind config `mode: \'jit\'`');
      tailwindConfig.mode = "jit";
    }

    if (tailwindConfig.mode === "jit") {
      logger.info("Tailwind JIT activated");
    }

    nuxt.options.build.postcss.plugins.tailwindcss = tailwindConfig;
  });
}

CMLABSComponent.meta = { name, version };

export default CMLABSComponent;