/* global cspaceUIPluginProfileHKU */
/* The cspaceUIPluginProfileHKU global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/hku.css';

export default () => ({
  messages,
  className: styles.common,
  prettyUrls: true,
  pluginInfo: {
    cspaceUIPluginProfileHKU: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileHKU.name',
          defaultMessage: 'HKU Libraries profile',
        },
      }),
      packageName: cspaceUIPluginProfileHKU.packageName,
      packageVersion: cspaceUIPluginProfileHKU.packageVersion,
      buildNum: cspaceUIPluginProfileHKU.buildNum,
      repositoryUrl: cspaceUIPluginProfileHKU.repositoryUrl,
      // packageVersion is now preferred, but keep version for backward compatibility with older
      // versions of cspace-ui.
      version: cspaceUIPluginProfileHKU.packageVersion,
    },
  },
  plugins: plugins.map((plugin) => plugin()),
});
