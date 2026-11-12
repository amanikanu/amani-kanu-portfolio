#!/usr/bin/env python3
"""Download locally hosted SVG logos used by the Skills section."""

from pathlib import Path
import ssl
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

import certifi


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "public" / "skills"
BASE_URL = "https://cdn.simpleicons.org"
SSL_CONTEXT = ssl.create_default_context(cafile=certifi.where())
DIRECT_LOGOS = {
    "zustand": (
        "https://raw.githubusercontent.com/pmndrs/zustand/main/docs/bear.jpg",
        ".jpg",
    ),
    "aws": ("https://api.iconify.design/logos/aws.svg", ".svg"),
    "dynamodb": ("https://api.iconify.design/logos/aws-dynamodb.svg", ".svg"),
    "amplify": ("https://api.iconify.design/logos/aws-amplify.svg", ".svg"),
}

# Generic web-platform skills intentionally reuse the closest recognizable
# technology mark. Dark brand marks receive a light display color so they
# remain visible on the portfolio's dark background.
LOGOS = {
    "typescript": ("typescript", None),
    "javascript": ("javascript", None),
    "html5": ("html5", None),
    "css3": ("css", None),
    "react": ("react", None),
    "nextjs": ("nextdotjs", "F6F4EF"),
    "nodejs": ("nodedotjs", None),
    "expressjs": ("express", "F6F4EF"),
    "remix": ("remix", "F6F4EF"),
    "gatsby": ("gatsby", None),
    "tailwindcss": ("tailwindcss", None),
    "scss": ("sass", None),
    "cssgrid": ("css", None),
    "flexbox": ("css", None),
    "styledcomponents": ("styledcomponents", None),
    "reduxtoolkit": ("redux", None),
    "redux": ("redux", None),
    "zustand": ("zustand", "F6F4EF"),
    "contextapi": ("react", None),
    "git": ("git", None),
    "github": ("github", "F6F4EF"),
    "jest": ("jest", None),
    "reacttestinglibrary": ("testinglibrary", None),
    "eslint": ("eslint", None),
    "prettier": ("prettier", None),
    "cypress": ("cypress", None),
    "aws": ("amazonwebservices", "F6F4EF"),
    "firebase": ("firebase", None),
    "restfulapis": ("openapiinitiative", None),
    "graphql": ("graphql", None),
    "dynamodb": ("amazondynamodb", None),
    "amplify": ("awsamplify", None),
}


def download(name: str, slug: str, color: str | None) -> None:
    if name in DIRECT_LOGOS:
        url, extension = DIRECT_LOGOS[name]
    else:
        suffix = f"/{color}" if color else ""
        url = f"{BASE_URL}/{slug}{suffix}"
        extension = ".svg"

    request = Request(url, headers={"User-Agent": "amani-kanu-portfolio/1.0"})

    with urlopen(request, timeout=20, context=SSL_CONTEXT) as response:
        payload = response.read()

    if extension == ".svg" and (
        b"<svg" not in payload[:500] or b"<path" not in payload
    ):
        raise ValueError(f"{url} did not return a valid SVG")

    (OUTPUT_DIR / f"{name}{extension}").write_bytes(payload)


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    failures: list[str] = []

    for name, (slug, color) in LOGOS.items():
        try:
            download(name, slug, color)
            print(f"downloaded {name}")
        except (HTTPError, URLError, TimeoutError, ValueError) as error:
            failures.append(f"{name}: {error}")

    if failures:
        raise SystemExit("Logo downloads failed:\n" + "\n".join(failures))

    print(f"Downloaded {len(LOGOS)} logos to {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
