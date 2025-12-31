# How to Add Images to Your Website

This guide explains how to add your own images to the BitterrootGG website.

## Quick Start

1. **Add your images** to the `images/before-after/` folder
2. **Name them** according to the pattern below
3. **Push to GitHub** - the website will automatically use your images!

## Image Naming Convention

The website is configured to look for these specific image files:

### Before/After Photos
- `images/before-after/site1-before.jpg` - First site, before work
- `images/before-after/site1-after.jpg` - First site, after work
- `images/before-after/site2-before.jpg` - Second site, before work
- `images/before-after/site2-after.jpg` - Second site, after work

### Adding More Images

To add more before/after photo pairs:

1. Add your images to `images/before-after/` folder
2. Edit `index.html` and find the gallery section (around line 76)
3. Copy one of the existing gallery-item blocks:

```html
<div class="gallery-item">
  <img src="images/before-after/site3-before.jpg" alt="Before - Site 3" onerror="this.src='https://via.placeholder.com/400x300/2d3748/7bd389?text=Before+Photo+3'" />
  <div class="caption"><span class="badge">BEFORE</span> Your description here</div>
</div>
<div class="gallery-item">
  <img src="images/before-after/site3-after.jpg" alt="After - Site 3" onerror="this.src='https://via.placeholder.com/400x300/2d3748/7bd389?text=After+Photo+3'" />
  <div class="caption"><span class="badge">AFTER</span> Your description here</div>
</div>
```

## Image Requirements

### Format
- JPEG (.jpg) - Recommended for photos
- PNG (.png) - For graphics or transparent backgrounds
- WebP (.webp) - Modern format, smaller file sizes

### Size Recommendations
- **Width:** 800-1200 pixels
- **Aspect Ratio:** 4:3 or 16:9
- **File Size:** Under 500KB per image (compress if needed)

### Optimization Tips
- Use online tools like TinyPNG or Squoosh to compress images
- Convert to WebP for better performance
- Remove EXIF data for privacy

## Fallback Behavior

The website uses placeholders that will show if your images aren't found yet. This means:
- ✅ The site will work immediately
- ✅ Placeholders show until you add real images
- ✅ No broken images - automatic fallback

## Videos

For hazard assessment videos, see `videos/README.md`

## Need Help?

The `onerror` attribute in the image tags ensures that if your image file isn't found, a placeholder will display instead. This prevents broken image icons and keeps your site looking professional while you're adding content.

## Example Workflow

1. Take before/after photos of your work
2. Resize and compress them
3. Rename them to match the naming convention
4. Upload to `images/before-after/` folder
5. Commit and push to GitHub
6. The website automatically updates!
