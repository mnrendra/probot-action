/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
const app = (
  probot
) => {
  // Your code here
  probot.log.info("Yay, the app was loaded!")

  probot.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue! By Cok!!"
    })
    return context.octokit.issues.createComment(issueComment)
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}

export default app
