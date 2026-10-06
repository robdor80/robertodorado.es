from pathlib import Path

from PIL import Image

source = Path("public/favicon.webp")
icons_dir = Path("public/icons")
icons_dir.mkdir(parents=True, exist_ok=True)

with Image.open(source) as image:
    image = image.convert("RGBA")
    for size in (192, 512):
        resized = image.resize((size, size), Image.Resampling.LANCZOS)
        resized.save(icons_dir / f"icon-{size}.png", format="PNG", optimize=True)

print("Generated PWA icons: 192x192 and 512x512")
