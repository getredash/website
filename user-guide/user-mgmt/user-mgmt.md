# User, Group and Query Management

## Inviting Users to Redash {#inviting_users}

Users can be invited only by admins - to invite a new user go to Settings>Users and hit New User:

![](../assets/invite_new_user.png)

Then fill in their name and email. They'll get an invite via email and be required to setup a Redash account.

Users can be added to existing groups - add users to it by typing their name:
![](../assets/view_only_group.png)

## Creating and Editing Groups {#create-edit-groups}

Only admins can create groups and edit them - to create a new group to to Settings>Groups and hit New Group:
![](../assets/group_settings.png)

To edit an existing group's settings, click on its name in the Groups list.

Once you created a group, you can start adding users to it by typing their name:
![](../assets/view_only_group.png)

Each group can be connected to specific data sources, read more about group permissions [here](permissions_and_groups.md)

## Permissions and Groups {#permissions_and_groups}

In version 0.9.0 we introduced a new permissions model based on groups. Each user by default joins the Default group, but can be a member of any number of groups.

Group membership defines the actions you’re allowed to take (although currently there is no UI to edit group action permissions), but also what data sources you have access to (for this we have UI).

### How does it work?

Each user belongs to one or more groups. By default each user joins the Default group. So the common data sources, should be associated with this group.
Each data source will be associated with one or more groups. Each connection to a group will define, whether this group has full access to this data source (view existing queries and run new ones) or view only access, which allows only viewing existing queries and results.
Any dashboard can contain visualizations from any data source (as long as the creating user has access to them). When a user who doesn’t have access to some visualization (because he doesn’t have access to the data source) opens a dashboard, he will see that there is a visualization there but won’t see the details.
![](/assets/restricted_dashboard.png)
Dashboard widget with a visualization the user doesn’t have access to.

If a user has access to at least one widget on a dashboard, they can see this dashboard in the list of all dashboards.

### What if I want to limit the user to only some tables?

The idea is to leverage your database’s security model, and hence create a user with access to the tables/columns you want to give access to. Create a data source that is using this user and then associate it with a group of users who need this level of access.

### How Can I View or Edit the Queries in Queue?

Admins can view the currently running and scheudled queries in the admin menu: `https://app.redash.io/<your org>/admin/queries/tasks`
