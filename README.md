# Rayforce Technologies

Company website: https://rayforce.co/

The site is plain HTML, CSS, and JavaScript in `docs/`, with local fonts and assets. No build or dependency installation is required.

GitHub Pages publishes the `docs/` directory from `main`. Push changes to `main` to deploy automatically. The custom domain is recorded in `docs/CNAME` and the repository’s Pages settings. `.nojekyll` keeps GitHub Pages from applying Jekyll processing.

For a local preview, run `python3 -m http.server 8000 --directory docs`.

Font Awesome attribution and licensing are preserved in `docs/assets/fontawesome-LICENSE.txt`.

Social previews use static Open Graph and Twitter card metadata in `docs/index.html` and the committed 1200×630 `docs/assets/social-preview.png`. Its editable artwork is `tools/social-preview.html`, using the site's official logo and local fonts. To regenerate it with Python Playwright and Chromium installed, run `python3 tools/render-social-preview.py`. These tools are only needed to edit the artwork, not to publish the site.

Search discovery uses `docs/robots.txt`, `docs/sitemap.xml`, the canonical URL, and JSON-LD describing the company, website, and products. `docs/llms.txt` provides an optional plain-text overview for tools that consume it; it is not a search-engine requirement or a guarantee of AI citations. Keep these descriptions consistent with the visible page, especially Rayforce Cloud's coming-soon status. Add future public page URLs to the sitemap; assets and external product pages do not belong in this site's sitemap.

For indexing visibility, verify `rayforce.co` in Google Search Console and Bing Webmaster Tools, submit `https://rayforce.co/sitemap.xml`, and inspect/request indexing of `https://rayforce.co/`. Verification requires the owner's account and the exact verification token from each service; no placeholder verification tags are included. Crawling being allowed does not guarantee indexing or ranking.
