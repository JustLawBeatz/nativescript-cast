import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.app',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  cli: {
    packageManager: "npm",
    /**
     * Optional - Override the files or paths to clean when running the `ns clean` command
     */
    pathsToClean: ["node_modules"],
    /**
     * Optional - Additional files or paths to clean when running the `ns clean` command, the paths are appended to the
     * default list of paths.
     */
    additionalPathsToClean: [],
  },
  useLegacyWorkflow: false,
} as NativeScriptConfig;
