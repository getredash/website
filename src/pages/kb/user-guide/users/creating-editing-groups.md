---
category: users
parent_category: user-guide
helpscout_url: https://help.redash.io/article/72-creating-editing-groups
title: Group Management
slug: creating-editing-groups
---
Users of Redash can be members of one or more groups. Each new user is added to the `Default` group automatically. Members of `Admin` can create new groups, add and remove members from groups, and disable users from accessing Redash entirely. Each group can be connected to specific data sources. Read more about group permissions [here]({% link _kb/user-guide/users/permissions-groups.md %}).

## Creating & Editing Groups
Only members of `Admin` can edit or create groups. Go to `Settings > Groups` and hit **New Group**. Type a name for your new group and the continue.

![](/assets/images/docs/gitbook/group_settings.png)

Add users to your new group by typing their names:

![](/assets/images/docs/gitbook/view_only_group.png)

You can edit details for a group by clicking its name on the groups list in the settings panel. There you can change its name, add or remove users, or associate it with different data sources.

{% callout info %}
The `Default` and `Admin` groups can't be deleted.
{% endcallout %}

## Making Admins

You can make any user an admin. Just add that user to the `Admin` group. Admins are able to modify data sources, change groups and permissions, disable users, and add further admins. To withdraw admin permissions from a user just remove them from `Admin` group by following the instructions above.

## Disabling Users

Admins can add a user to the `Disabled` group from the `Settings` screen. Find the user on the `Users` tab and click the `Disable` button on the right.

![](/assets/images/docs/gitbook/disable-user.png)

Disabled users cannot login to Redash. You can re-enable a disabled user by finding them on the `Disabled` tab.

{% callout info %}
The `Disabled` tab does not appear unless you have at least one disabled user.
{% endcallout %}