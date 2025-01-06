/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/../utils/categories`; params?: Router.UnknownInputParams; } | { pathname: `/../componets/categories/index`; params?: Router.UnknownInputParams; } | { pathname: `/../componets/categories/styles`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/index`; params?: Router.UnknownInputParams; } | { pathname: `/index/styles`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/../utils/categories`; params?: Router.UnknownOutputParams; } | { pathname: `/../componets/categories/index`; params?: Router.UnknownOutputParams; } | { pathname: `/../componets/categories/styles`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/index`; params?: Router.UnknownOutputParams; } | { pathname: `/index/styles`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/../utils/categories${`?${string}` | `#${string}` | ''}` | `/../componets/categories/index${`?${string}` | `#${string}` | ''}` | `/../componets/categories/styles${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/index${`?${string}` | `#${string}` | ''}` | `/index/styles${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/../utils/categories`; params?: Router.UnknownInputParams; } | { pathname: `/../componets/categories/index`; params?: Router.UnknownInputParams; } | { pathname: `/../componets/categories/styles`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/index`; params?: Router.UnknownInputParams; } | { pathname: `/index/styles`; params?: Router.UnknownInputParams; };
    }
  }
}
