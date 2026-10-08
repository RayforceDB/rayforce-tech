"""Render the brand artwork with Python Playwright and Chromium installed.

Run: python3 tools/render-social-preview.py
The committed PNG is served directly; deployment needs no build tools.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parents[1]
with sync_playwright() as playwright:
    browser = playwright.chromium.launch()
    page = browser.new_page(viewport={"width": 1200, "height": 630}, device_scale_factor=1)
    page.goto((root / "tools/social-preview.html").as_uri())
    page.evaluate("document.fonts.ready")
    page.screenshot(path=str(root / "docs/assets/social-preview.png"))
    browser.close()
