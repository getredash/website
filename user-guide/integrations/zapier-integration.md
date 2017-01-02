# Creating a Zap in Zapier for New Query Results

You can connect Redash to Zapier and trigger an action every time a new line is added to you query results - for example, a Slack bot that announces every time a new order came in.
The best way is to have a scheduled query that refreshes frequently so the notification you get is in real-time.

For now you'll need to ask us for an invitation as it's still in beta - you can do that via Intercom (at the bottom right corner of every page in /help or inside the Redash webapp or [Slack](https://redash.slack.com/).

Here's a short example of connecting Redash to Zapier and creating a new Zap:
1. Open the invitation you got via email to use the beta Redash trigger app (,create an account if needed) and click "Make a Zap" right next to your account area at the top of the page.

2. Choose a trigger app - in this case, Redash (it won't be available to you unless you have received and opened the invitation)

3. Choose a trigger - for now we have only "New Query Results" in there, this means the Zap will get triggered everytime a new line is added to the results set of your query.

4. Connect your Redash account:

  4.1. Full domain of your Redash account (Something like: `https://app.redash.io/myorg/` or `https://redash.myorg.com/` (note the slash at the end))

  4.2. Your User ID - go to your account in Redash, the number in the URL just after /users/ is your User ID, i.e. `https://app.redash.io/myorg/users/{user id}`

  4.3. API key - also in your user settings, select the API KEY tab and copy it from there

  4.4. Tese your connection!
5. Select the query you want to get the Zap for by entering the query ID (`https://app.redash.io/myorg/queries/{query id}`)

6. Select the app you want to do something when a new query result is added to your query - Slack is a good option

7. Select an action - for this example we'll use "Send Channel Message". You'll need to connect your Slack account to Zapier as well, if you are logged-in in your browser it'll be pretty instant.

8. Enter the channel, message text (you can select different column values from your query), bot/your user in slack, bot name, bot icon emoji or icon url, auto expend links and mentions settings. Bots are cool so you should definitely send the zap as a bot!

9. Test your connection and you're done!

![](../assets/zappy_bot.png)
