[![Netlify Status](https://api.netlify.com/api/v1/badges/d4c0e4d8-ebd6-4616-9ece-e39f32c22034/deploy-status)](https://app.netlify.com/sites/vuemu/deploys)

## Development

- `yarn install` and `npm start` runs app in development mode.
- `npm test` launches the test runner in the interactive watch mode.

## Deployment

- commit changes.
- `npm version major|minor|patch` to tag release.
- merge to `master`, whereupon Netlify runs `npm run deploy`.
  - `npm run build` to bundle and deploy `./build`.
  - `npm run sentry` to tag release in Sentry and upload source maps.

### Eject

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
