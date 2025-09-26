---
title: Quick Start Guide
description: Get up and running with Fileglancer in minutes with this step-by-step quick start guide.
---

## Access Fileglancer

1. **Connect to Janelia network**: Ensure you're on the Janelia internal network or using the VPN
2. **Open your browser**: Navigate to [fileglancer.int.janelia.org](https://fileglancer.int.janelia.org)
3. **Authenticate**: Log in via Okta with your Janelia credentials

## Your First Navigation

### Find Your Data
1. **Use the search**: In the left sidebar, search for a group or team project
2. **Click the path**: Select the file share path from search results to access the file browser
3. **Browse directories**: Navigate through folders using the main file browser interface

### Save a Favorite
1. **Navigate to a frequently-used folder**: Use the file browser to reach an important directory
2. **Click the favorites icon**: Use the star icon in the toolbar to save the current location
3. **Access later**: Your saved favorites will appear in the left sidebar for quick access

## Create Your First Data Link

### For Zarr/OME-Zarr Files
1. **Navigate to the Zarr directory**: Browse to a folder containing Zarr or OME-Zarr data
2. **Enable the link**: Click a tool icon under the image thumbnail and approve creating a data link through the dialog OR click the switch in the Properties panel. 
3. **Copy the link**: Use the generated URL to share your data

### For Any Directory
1. **Navigate to the target folder**: Browse to any directory you want to share
2. **Open Properties panel**: Ensure the Properties panel is visible on the right
3. **Click the switch**: In the Overview tab, toggle the sharing switch to enable the data link

## Request a File Conversion

1. **Navigate to Zarr data**: Browse to a Zarr or OME-Zarr directory
2. **Open Properties Panel**: Ensure the panel is visible
3. **Switch to Conversion tab**: Click the Conversion tab in the Properties Panel
4. **Open conversion request**: Follow the prompts to submit your conversion request
5. **Track progress**: Monitor your request status on the `/jobs` page

## Essential Tips

### Navigation Shortcuts
- **Home button**: Click the home icon in the toolbar to go to your home directory
- **Navigate to path**: Use the "Navigate to path" widget to paste and jump to specific file paths
- **Breadcrumbs**: Use the breadcrumb trail to quickly move up directory levels

### Link Management
- **View all links**: Visit the `/links` page to see all your current data links
- **Enable automatic links**: When creating links, you can choose to enable automatic link creation for future similar actions

### Getting Help
- **Check job status**: Visit `/jobs` to monitor conversion requests
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