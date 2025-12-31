# Images Directory

This directory contains images for the BitterrootGG website.

## Adding Your Images

### Before/After Photos
Place your before and after photos in the `before-after/` subdirectory:

1. Name your files clearly, for example:
   - `site1-before.jpg`
   - `site1-after.jpg`
   - `site2-before.jpg`
   - `site2-after.jpg`

2. Update the image paths in `index.html`:
   - Find the `<img src="...">` tags in the "Before & After" section
   - Replace the placeholder URLs with your actual image paths
   - Example: `<img src="images/before-after/site1-before.jpg" alt="Before - Site 1" />`

### Supported Image Formats
- JPEG (.jpg, .jpeg)
- PNG (.png)
- WebP (.webp)

### Recommended Image Sizes
- Width: 800-1200px
- Aspect ratio: 4:3 or 16:9
- File size: Keep under 500KB for faster loading

## Example

```html
<!-- Replace this placeholder -->
<img src="https://via.placeholder.com/400x300/2d3748/7bd389?text=Before+Photo+1" alt="Before" />

<!-- With your actual image -->
<img src="images/before-after/site1-before.jpg" alt="Before hazard removal - Site 1" />
```
