/*
 * SentryCLI needs env variable SENTRY_AUTH_TOKEN to be present
 */
const SentryCli = require("@sentry/cli");
const { version: release } = require("./package.json");

async function createReleaseAndUpload() {
  const cli = new SentryCli();

  try {
    console.log("Sentry: creating release " + release);
    await cli.releases.new(release);

    console.log("Sentry: uploading source maps");
    await cli.releases.uploadSourceMaps(release, {
      include: ["build/static/js"],
      urlPrefix: "~/static/js",
      rewrite: false
    });

    console.log("Sentry: associate commits");
    await cli.releases.setCommits(release, { auto: true });

    console.log("Sentry: finalizing release");
    await cli.releases.finalize(release);
  } catch (err) {
    console.error(`Sentry: source maps uploads failed: ${err}`);
  }
}

createReleaseAndUpload();
