import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../src/**/*.mdx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-onboarding'
  ],
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        '@api': path.resolve(__dirname, '../src/utils/burger-api.ts'),
        '@components': path.resolve(__dirname, '../src/components'),
        '@pages': path.resolve(__dirname, '../src/pages'),
        '@slices': path.resolve(__dirname, '../src/services/slices'),
        '@selectors': path.resolve(__dirname, '../src/services/selectors'),
        '@ui': path.resolve(__dirname, '../src/components/ui'),
        '@ui-pages': path.resolve(__dirname, '../src/components/ui/pages'),
        '@utils-types': path.resolve(__dirname, '../src/utils/types'),
        ...config.resolve.alias
      };
    }
    return config;
  }
};

export default config;