---
title: Common Issues
description: Quick solutions for frequently encountered problems when using Fileglancer with scientific imaging data.
---

## Quick Solutions Guide

This page provides immediate solutions for the most common issues users encounter with Fileglancer. For more detailed troubleshooting, see the [Troubleshooting Guide](/support/troubleshooting/).

## Access and Login Issues

### Can't Access Fileglancer

**Problem**: Fileglancer page won't load or shows connection errors

**Quick Fixes**:
1. **Check network**: Ensure you're connected to Janelia internal network or VPN
2. **Try different browser**: Test with Chrome, Firefox, or Safari
3. **Clear browser cache**: Clear cookies and cache for the site
4. **Check URL**: Verify you're using `fileglancer.int.janelia.org`

**When to get help**: If none of these work, contact IT support

### Authentication Keeps Failing

**Problem**: Login page appears repeatedly or shows authentication errors

**Quick Fixes**:
1. **Check credentials**: Verify your Janelia username and password
2. **Clear login data**: Clear cookies and try logging in again
3. **Try incognito mode**: Use private/incognito browsing
4. **Restart browser**: Close and reopen your browser completely

**When to get help**: If your credentials are correct but login still fails

## Navigation Problems

### Search Returns No Results

**Problem**: Searching for zones or file paths returns empty results

**Quick Fixes**:
1. **Try partial names**: Use just the beginning of zone names
2. **Check spelling**: Verify the correct spelling of zone names
3. **Try broader terms**: Use less specific search terms
4. **Wait and retry**: File systems may be temporarily unavailable

**Common solutions**:
- Search for "smith" instead of "smithlab-data-2024"
- Try searching for the lab name only
- Check with lab mates for correct zone names

### Can't See Expected Files

**Problem**: Directories appear empty or files are missing

**Quick Fixes**:
1. **Refresh the page**: Click refresh or press F5
2. **Check permissions**: Verify you have access to the directory
3. **Try parent directory**: Navigate up one level and back down
4. **Look for hidden files**: Files starting with '.' may be hidden

**When to get help**: If you previously had access but now cannot see files

### Properties Panel Not Showing

**Problem**: Can't see Properties Panel or conversion options

**Quick Fixes**:
1. **Click on a file or directory**: Properties Panel appears when items are selected
2. **Look for panel toggle**: Check for buttons to show/hide panels
3. **Expand browser window**: Panel may be collapsed on smaller screens
4. **Refresh the page**: Reset the interface state

**Check these locations**:
- Right side of the browser window
- Bottom of the browser window
- Look for ▶ or ☰ icons to expand panels

## Data Link Issues

### Toggle Switch Not Working

**Problem**: Data link toggle in Properties Panel doesn't respond

**Quick Fixes**:
1. **Check permissions**: Ensure you have write access to the directory
2. **Try different directory**: Test with a directory you own
3. **Refresh and retry**: Reload the page and try again
4. **Check file type**: Data links work best with Zarr/OME-Zarr directories

**Common causes**:
- Insufficient permissions to create sharing links
- Directory is read-only or system-controlled
- Network connectivity issues

### Shared Links Don't Work for Others

**Problem**: Links work for you but collaborators get errors

**Quick Fixes**:
1. **Verify their network access**: Ensure they're on Janelia network or VPN
2. **Check their permissions**: Confirm they have file system access
3. **Test the link yourself**: Try the link in an incognito browser window
4. **Check link status**: Verify the link is still active on `/links` page

**Common solutions**:
- Have collaborators connect to Janelia VPN
- Contact IT to add collaborators to appropriate groups
- Verify you're sharing the correct directory level

## File Conversion Problems

### Can't Find Conversion Tab

**Problem**: Properties Panel doesn't show conversion options

**Quick Fixes**:
1. **Navigate to Zarr directory**: Conversion tab only appears for Zarr/OME-Zarr data
2. **Select the directory**: Click on the Zarr directory to select it
3. **Check directory structure**: Ensure it's a properly formatted Zarr directory
4. **Look for .zarray file**: Zarr directories should contain .zarray files

**What to look for**:
- Directory name ending in `.zarr` or `.ome.zarr`
- Presence of `.zarray` and `.zattrs` files
- Numeric subdirectories (0, 1, 2, etc.) for multi-resolution data

### Conversion Request Won't Submit

**Problem**: Conversion request form has errors or won't submit

**Quick Fixes**:
1. **Complete all required fields**: Check for red asterisks or error messages
2. **Provide specific details**: Include source path, target format, output location
3. **Check path accuracy**: Verify all file paths are correct
4. **Try shorter descriptions**: Very long text may cause submission issues

**Required information**:
- Complete source data path
- Desired output format
- Target location for converted data
- Timeline requirements

## Format-Specific Issues

### Zarr Data Won't Load

**Problem**: Zarr directories show errors or won't display properly

**Quick Fixes**:
1. **Check directory structure**: Ensure .zarray and chunk files are present
2. **Verify permissions**: Confirm you can access all files in the Zarr directory
3. **Try parent directory**: Navigate to the directory containing the Zarr folder
4. **Check for corruption**: Look for error messages about missing files

**Signs of problems**:
- Missing .zarray or .zattrs files
- Incomplete chunk file sets
- Permission errors on subdirectories

### Large TIFF Files Cause Browser Issues

**Problem**: Browser becomes slow or crashes with large TIFF files

**Quick Fixes**:
1. **Close other tabs**: Reduce memory usage in your browser
2. **Use different browser**: Try Chrome or Firefox for better memory handling
3. **Don't open very large files**: Files over 1GB may cause problems
4. **Request conversion**: Convert large TIFF files to Zarr format

**Prevention tips**:
- Convert large TIFF files to more efficient formats
- Create preview versions of very large images
- Use data links rather than trying to view files directly

## Performance Issues

### Fileglancer Runs Slowly

**Problem**: Interface is sluggish or operations take too long

**Quick Fixes**:
1. **Close unused tabs**: Reduce browser memory usage
2. **Clear browser cache**: Remove cached data that may be causing conflicts
3. **Restart browser**: Close and reopen your browser completely
4. **Check network**: Test other Janelia network resources

**Performance tips**:
- Use specific navigation rather than browsing large directories
- Create favorites for frequently accessed locations
- Avoid opening multiple Fileglancer tabs simultaneously

### Directory Loading Takes Forever

**Problem**: Large directories load very slowly or not at all

**Quick Fixes**:
1. **Navigate to subdirectories**: Browse smaller, more specific directories
2. **Use search instead**: Search for specific files rather than browsing
3. **Try different times**: Access during off-peak hours
4. **Use path navigation**: Type specific paths instead of browsing

**When directories are too large**:
- Directories with thousands of files load slowly
- Consider organizing data in smaller subdirectories
- Use search functions to find specific files

## Browser-Specific Issues

### Safari Issues

**Common problems**:
- Some interface elements may not display correctly
- File uploads may not work properly

**Solutions**:
- Try Chrome or Firefox instead
- Update Safari to the latest version
- Disable Safari content blockers for Fileglancer

### Chrome Issues

**Common problems**:
- Memory usage with large files
- Extension conflicts

**Solutions**:
- Close unnecessary tabs and extensions
- Use Task Manager to monitor Chrome memory usage
- Try Incognito mode to disable extensions

### Firefox Issues

**Common problems**:
- Slower performance with large datasets
- Some modern web features may not work

**Solutions**:
- Update Firefox to the latest version
- Check that JavaScript is enabled
- Clear Firefox cache and cookies

## Emergency Solutions

### When Everything Else Fails

1. **Restart your browser completely**
2. **Clear all browser data** for Fileglancer
3. **Try a different browser**
4. **Test from a different computer**
5. **Contact support** with specific error details

### For Urgent Data Access

If Fileglancer is unavailable and you need immediate data access:

1. **Use command-line tools** if you have shell access
2. **Contact lab mates** who may have local copies
3. **Use alternative file browsers** available at Janelia
4. **Contact IT for emergency access** methods

## Getting Help Quickly

### Before Contacting Support

1. **Try the quick fixes above**
2. **Check with lab mates** for similar issues
3. **Note exact error messages** and steps that cause problems
4. **Test with different browsers** or computers

### Information to Include in Support Requests

- **Exact error message** (copy and paste if possible)
- **Browser and operating system**
- **Steps to reproduce the problem**
- **What you expected to happen**
- **File paths or directories involved**
- **Screenshots** (if they help show the problem)

### Emergency Contact

For urgent issues preventing critical research:
- Mark support requests as **HIGH PRIORITY**
- Include **specific research deadlines**
- Provide **multiple contact methods**
- Explain **research impact** of the delay

## Prevention Tips

### Avoid Common Problems

1. **Save favorites** for frequently accessed locations
2. **Bookmark important data links**
3. **Keep browser updated** to latest version
4. **Don't modify Zarr directories manually**
5. **Test data links** before sharing with collaborators
6. **Monitor conversion request status** on `/jobs` page
7. **Organize data** in appropriately sized directories

### Best Practices

1. **Use descriptive file and directory names**
2. **Create data links at appropriate directory levels**
3. **Convert large TIFF files** to more efficient formats
4. **Document important workflows** and file locations
5. **Coordinate with team members** on shared data access

Most common issues can be resolved quickly using these solutions. If problems persist, don't hesitate to contact support with specific details about your issue.