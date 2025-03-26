import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoaders';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('ts', 'tsx');
  config.module?.rules?.push(buildCssLoader(true));

  // // eslint-disable-next-line no-param-reassign
  // config.module!.rules = config.module?.rules?.filter(
  //   (rule): rule is webpack.RuleSetRule => !!rule && typeof rule === 'object',
  // )
  //   .map((rule: RuleSetRule) => {
  //     if (!rule || typeof rule !== 'object') {
  //       return rule; // Возвращаем как есть, если правило невалидно
  //     }

  //     if (/svg/.test(rule.test as string)) {
  //       return {
  //         ...rule,
  //         exclude: /\.svg$/,
  //       };
  //     }

  //     return rule;
  //   });

  // config.module?.rules?.push({
  //   test: /\.svg$/,
  //   use: ['@svgr/webpack'],
  // });
  // eslint-disable-next-line no-param-reassign
  config.module!.rules = config.module!.rules!.filter(
    (rule): rule is webpack.RuleSetRule => !!rule && typeof rule === 'object',
  )
    .map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });

  config.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  return config;
};
