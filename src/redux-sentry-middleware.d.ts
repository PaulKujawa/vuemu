import { Action, Middleware } from "redux";
import { User, Event } from "@sentry/browser";

declare module "redux-sentry-middleware" {
  interface Options<T> {
    breadcrumbDataFromAction?: (action: Action) => any;
    actionTransformer?: (action: Action) => any;
    stateTransformer?: (state: T) => any;
    breadcrumbCategory?: string;
    filterBreadcrumbActions?: (action: Action) => boolean;
    getUserContext?: (state: T) => User;
    getTags?: (state: T) => Event["tags"];
  }

  declare function value<T>(
    sentry: { configureScope: Function; addBreadcrumb: Function },
    options?: Options<T>
  ): Middleware;

  export default value;
}
