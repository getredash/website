# GitBook FAQ Theme

Theme for using GitBook to publish an FAQ or Knowledge Base. This theme works perfectly with search plugins (as the [default one](https://github.com/GitbookIO/plugin-search) or [algolia](https://github.com/GitbookIO/plugin-algolia)).

### Usage

This theme requires GitBook version 3 or later.

Add the theme to your book's configuration (`book.json`):

```js
{
    "plugins": ["theme-faq"]
}
```

##### Add relations between articles

Suggestions for other articles can be shown at the bottom of an article, relations are specified in the YAML frontmatter of a page:

```md
---
related:
    - some/other/page.md
    - another_related_article.md
---

My article!
```

##### Add logo to header

Extend the theme by creating a file `_layouts/website/page.html` in your book with:

```html
{% extends template.self %}

{% block faq_header_brand %}
<img src="https://mywebsite.com/logo.png" height="30" />
{% endblock %}
```

##### Add links to header

Extend the theme by creating a file `_layouts/website/page.html` in your book with:

```html
{% extends template.self %}

{% block faq_menu %}
<ul class="nav navbar-nav navbar-right">
    <li><a href="#">Contact us</a></li>
    <li><a href="#">Return to SuperWebsite</a></li>
</ul>
{% endblock %}
```

##### Add short description for the home page

The content of your README will be used as short description on the home page of your FAQ. If you want to keep a separate and more detailed README file for your project, you can use configure your `book.json` to specify the file to use:

```json
{
  "structure": {
     "readme": "home-page-description.md"
  }
}
```
