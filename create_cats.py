import os
import json

templ = """---
title: {title}
permalink: {permalink}
parent_category: {collection}
category: {category}
layout: docs-category
order: {order}
---
"""


def load():
	with open('./_usage/categories.json') as f:
		categories = json.load(f)

	with open('./_usage/collections.json') as f:
		collections = json.load(f)

	return collections, categories


if __name__ == '__main__':
	collections, categories = load()

	for cat in categories.values():
		collection_slug = collections[cat['collectionId']]['slug']
		path = '{collection}/{category}'.format(collection=collection_slug, category=cat['slug'])
		permalink = '/help/{path}'.format(path=path)
		body = templ.format(collection=collection_slug,order=cat.get('order'), category=cat['slug'], title=cat['name'], permalink=permalink)

		# try:
		# 	os.mkdir('./_usage/' + collection_slug)
		# except OSError:
		# 	pass

		with open('./_usage/{}_category.md'.format(path), 'w') as f:
			f.write(body)

	simple_collections = {c['slug']: c['name'] for c in collections.values()}
	with open('_data/collections.json', 'w') as f:
		json.dump(simple_collections, f, indent=4)