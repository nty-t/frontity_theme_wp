const settings = {
  "name": "frontity-theme-wp",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "jsnation-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://jsnation2020.frontity.org/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
