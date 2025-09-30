---
title: Quick Start Guide
description: Get up and running with Fileglancer in minutes with this step-by-step quick start guide.
---

## Access Fileglancer

1. **Connect to Janelia network**: Ensure you're on the Janelia internal network or using the VPN
2. **Open your browser**: Navigate to [fileglancer.int.janelia.org](https://fileglancer.int.janelia.org)
3. **Authenticate**: Log in via Okta with your Janelia credentials

## Navigate to your file share

### Open your home folder
1. **Home button**: In the toolbar, click the home icon to view the contents of your home folder.

### Find your group's data
1. **Use the search**: In the left sidebar, search for a group or team project
2. **Expand zones**: Click on a Zone to expand it and see the file share paths it contains
3. **Browse file share path**: Click on a file share path to view its contents in the file browser

### Save a favorite
1. **Navigate to a frequently-used folder**: Use the file browser to reach an important directory
2. **Click the favorites icon**: Use the star icon in the toolbar to save the current location
3. **Access later**: Your saved favorites will appear in the left sidebar for quick access

## View OME-Zarr data

We'll use an example data set to get familiar with the interface. 

1. **Copy path**: Copy this path into your clipboard: 
    * ```/nrs/opendata/ome-zarr-examples/fused-timeseries.zarr```
2. **Navigate**: Click the "Navigate to path" button in the toolbar, paste the path and click "Go"
3. **See metadata**: Since this is an OME-Zarr image, you can view all of its metadata along with a thumbnail image.
3. **View image**: Click on the "View in Neuroglancer" button
4. **Create data link**: Viewing an image requires a data link, so click "Create Data Link" on the dialog that appears
5. **Visualize**: Your image will open in the Neuroglancer viewer for viewing

## Request a file conversion

If your data is not already in OME-Zarr format, we can help!

1. **Navigate to Zarr data**: Browse to a Zarr or OME-Zarr directory
2. **Open Properties Panel**: Ensure the right-side Properties panel is visible
3. **Switch to Conversion tab**: Click the Conversion tab in the Properties Panel
4. **Open conversion request**: Follow the prompts to submit your conversion request
5. **Track progress**: Monitor your request status on the Tasks page

## Essential Tips

### Navigation Shortcuts
- **Breadcrumbs**: Use the breadcrumb trail to quickly move up directory levels.
- **Copy path**: Hover over the breadcrumbs to reveal a copy button that copies the current path into your clipboard.
- **Paste onto page**: Power users can take advantage of a special hidden feature: if you have a path in your clipboard, simply click anywhere in the file browser and paste using your usual keyboard shortcut. The "Navigate" dialog will come up automatically, prefilled with your path.

### Link Management
- **View all links**: Visit the *Data Links* page to see all your current data links
- **Enable automatic links**: When creating links, you can choose to enable automatic link creation for future similar actions

### Getting Help
- **Check job status**: Visit the Tasks page to monitor conversion requests
- **Built-in help**: Look for help icons and tooltips throughout the interface
- **Technical support**: Use the integrated help desk system for complex issues

## Common First Tasks

### Scenario 1: Sharing Lab Data with an Internal Collaborator
1. Navigate to your lab's shared data directory
2. Find the specific dataset you want to share
3. Create a data link using the Properties Panel
4. Send the link to your collaborator

### Scenario 2: Preparing Data for Analysis
1. Browse to your raw imaging data
2. Submit a conversion request using the Convert tab in the Properties panel
3. Monitor the conversion progress on the `/jobs` page
4. Once complete, create a data link for the converted data

### Scenario 3: Organizing Your Workflow
1. Use search to find all your project directories
2. Save frequently-accessed folders as favorites
3. Create data links for datasets you reference often
4. Set up automatic link creation for common sharing patterns

## What's Next?

Now that you've completed the basics, explore these guides for more detailed workflows:

- **[Navigation Guide](/workflows/navigation/)**: Master all navigation features
- **[Data Links Guide](/workflows/data-links/)**: Learn advanced sharing options
- **[File Conversion Guide](/workflows/file-conversion/)**: Understand the complete conversion process
- **[File Browser Features](/features/file-browser/)**: Discover advanced browser capabilities

## Quick Reference

| Task | Location | Action |
|------|----------|---------|
| Search for data | Left sidebar | Type group/team name |
| Navigate to specific path | Toolbar widget | Paste path and navigate |
| Save favorite | Toolbar | Click star icon |
| Create data link | Properties Panel | Toggle switch in Overview |
| Request conversion | Properties Panel | Use Conversion tab |
| View all data links | URL | Navigate to `/links` |
| Check job status | URL | Navigate to `/jobs` |
| Go home directory | Toolbar | Click home icon |