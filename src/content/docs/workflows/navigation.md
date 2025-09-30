---
title: Navigating Files
description: Master all the ways to browse, search, and organize your data in Fileglancer.
---

Fileglancer provides multiple methods to navigate Janelia's file systems. This guide covers all navigation features.

![Fileglancer Homepage](../../../assets/fileglancer-homepage.png)
*The Fileglancer main interface showing the left sidebar with zones, file share paths, and navigation options*

## Primary Navigation Methods

### 1. Search and Browse

You can browse your data as you would in macOS Finder or Windows Explorer.

1. **Open the Zone search interface**
   - Locate the search box at the top of the left sidebar
   - The sidebar remains accessible throughout your session

2. **Search for your group or team name**
   - Start typing the name of your group or team (e.g., "scicomp", "fly")
   - Search results update as you type

3. **Select your file share path**
   - Click on a zone name in the search results to view the file share paths it contains (e.g., "home", "primary")
   - Click on a file share path to open the file browser interface at that location

4. **Browse your data**
   - Use the main file browser (central panel) to navigate through directories
   - Click on a directory name to enter it; click on a file name to preview its contents
   - Use the breadcrumb trail at the top of the browser to navigate back up the hierarchy

### 2. Direct Path Navigation

For when you know exactly where you want to go:

1. **Locate the "Navigate to path" widget**
   - Found on the Fileglancer home page, at the top of the central panel
   - OR click the "Navigate to path" button in the toolbar

2. **Enter your complete file path**
   - Paste or type the full path to your target directory. Any style of path will work (Mac, Windows, Linux), for example:
   - `/misc/public`
   - `smb://prfs.hhmi.org/public`
   - `\\prfs.hhmi.org\public\`

3. **Navigate to the path**
   - Press Enter or click the navigation button
   - Fileglancer will take you directly to that location

### 3. Home Directory Access

Quick access to your personal directory:

1. **Click the home icon**
   - Located in the toolbar at the top of the central navigation panel

2. **Access your home directory**
   - Takes you directly to your personal home directory on the Janelia file system

## Organizing Your Navigation

### Saving Favorites

For frequently accessed zones, file shares, and folders:

1. **Save a zone or file share path favorite**
   - Use the search method described above
   - Locate the zone or file share path you access regularly
   - Click on the star icon next to the zone or file share path name

2. **Save a folder favorite**
   - Navigate to the folder in the file browser
   - Click the star icon in the toolbar at the top of the file browser
   - OR right click on a folder in the file browser and favorite it from the pop-up menu

3. **Access saved favorites**
   - Saved favorites appear at the top of the left sidebar
   - Click any favorite for direct access in the file browser
   - Favorites persist across sessions

## Troubleshooting Navigation Issues

### Path Not Found
- Check if the path exists and hasn't been moved

### Search Returns No Results
- Try broader search terms
- Verify the zone or share name spelling 
- Ensure that your file share is listed on the [Lab and Project File Share Paths](https://hhmi.atlassian.net/wiki/spaces/SCS/pages/152469629/Lab+and+Project+File+Share+Paths) wiki page.


### Slow Loading
- Large directories with many files may take time to populate
- Consider using more specific navigation paths to reduce directory listing overhead