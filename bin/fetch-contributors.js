const request = require('request')

function getPage(page) {
  const url = 'https://api.github.com/repos/getredash/redash/contributors'
  const qs = {
    per_page: 100,
    page,
  }
  const headers = {
    'User-Agent': 'Contributors Downloader',
  }

  return new Promise((resolve, reject) => {
    request(url, { qs, headers }, function(error, response, body) {
      if (error) {
        reject(error)
      } else {
        resolve(JSON.parse(body))
      }
    })
  })
}

async function getContributors() {
  let hasMore = true
  let page = 1
  let contributors = []

  while (hasMore) {
    const currentPage = await getPage(page)

    if (currentPage.length === 0) {
      hasMore = false
    } else {
      contributors = contributors.concat(currentPage)
    }

    page += 1
  }

  return contributors
}

async function printContributors() {
  const contributors = await getContributors()

  console.log(JSON.stringify(contributors, null, 2))
}

printContributors()
