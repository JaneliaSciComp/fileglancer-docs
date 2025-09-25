---
title: File Browser
description: Explore the powerful file browsing capabilities of Fileglancer, designed specifically for scientific imaging data.
---

## Overview

The Fileglancer file browser is the core interface for exploring your scientific imaging data. Built specifically for researchers working with large datasets, it provides specialized features for navigating, viewing, and managing scientific imaging files.

## Browser Interface Components

### Main File List

The central area displays your directory contents with:

- **File and folder icons**: Visual indicators for different content types
- **File names**: Full names with support for long scientific naming conventions
- **File sizes**: Human-readable sizes for quick capacity assessment
- **Modification dates**: When files were last changed
- **Type indicators**: Special markers for scientific formats (Zarr, OME-TIFF, etc.)

### Toolbar

Located above the file list, the toolbar provides essential navigation and management controls:

#### Navigation Controls
- **Home button** (house icon): Quick access to your home directory on the file system
- **Back/Forward buttons**: Navigate through your browsing history
- **Up directory button**: Move to the parent directory of your current location
- **Navigation path widget**: Direct path entry field and breadcrumb display of current location

#### Directory Management
- **Favorites star**: Save current directory as a favorite for quick access later
- **Refresh button** (circular arrow): Update directory contents to reflect any changes
- **Create folder button**: Create new directories (when permissions allow)

#### View and Display
- **View options toggle**: Switch between list, grid, and compact display modes
- **Sort controls**: Change how files are sorted (name, date, size, type)
- **Properties panel toggle**: Show/hide the right-side Properties Panel

#### File Operations
- **Download button**: Download selected files (when applicable)
- **Share button**: Quick access to data link creation for the current directory
- **Settings/preferences button** (gear icon): Access user preferences and configuration options

#### Context-Sensitive Buttons
Additional buttons appear based on the current directory contents and your permissions:
- **Data link creation**: When viewing shareable scientific data
- **Format conversion**: When viewing files that can be converted to other formats
- **External viewer launch**: When viewing data compatible with tools like Neuroglancer

### Properties Panel

Contextual information panel (typically right side):

- **Overview tab**: General information and data link controls
- **Conversion tab**: File conversion request interface (for applicable formats)
- **Metadata tab**: Detailed file and format information
- **Permissions tab**: Access control and sharing information

### Left Sidebar

Navigation and organization:

- **Search interface**: Find zones and file share paths
- **Saved favorites**: Quick access to bookmarked locations
- **Recent locations**: Recently visited directories
- **File share paths**: Available storage systems

## Specialized Scientific Imaging Features

### Format Recognition

Fileglancer automatically recognizes and handles:

#### Zarr Arrays
- **Visual indicators**: Special icons for Zarr directories
- **Structure preview**: Quick view of array dimensions and data types
- **Chunk information**: Details about data organization
- **Metadata display**: Zarr-specific attributes and metadata

#### OME-Zarr Datasets
- **OME metadata**: Biological imaging metadata preservation
- **Multi-resolution displays**: Information about pyramid levels
- **Channel information**: Details about imaging channels and wavelengths
- **Spatial metadata**: Pixel sizes, coordinate systems, and spatial relationships

#### TIFF Files
- **Multi-page support**: Navigate through TIFF stacks
- **OME-TIFF recognition**: Display of OME metadata when present
- **Compression information**: Details about TIFF compression methods
- **Pyramid structure**: Multi-resolution TIFF display capabilities

#### Other Scientific Formats
- **HDF5 files**: Hierarchical data format structure browsing
- **NetCDF**: Climate and scientific data format support
- **Proprietary formats**: Recognition of manufacturer formats (CZI, LIF, etc.)

### Large Dataset Handling

Optimized for scientific imaging workflows:

#### Performance Features
- **Lazy loading**: Directory contents load as needed
- **Thumbnail generation**: Quick previews for supported formats
- **Partial loading**: Handle directories with thousands of files
- **Caching**: Intelligent caching for faster repeated access

#### Navigation Aids
- **Breadcrumb trails**: Navigate complex directory hierarchies
- **Search within directories**: Find specific files in large collections
- **Sorting options**: Sort by name, size, date, or file type
- **Filtering**: Hide or show specific file types

## Advanced Browser Features

### Multi-System Integration

Seamless access across Janelia file systems:

- **PRFS integration**: Primary research file system access
- **NRS connectivity**: Nearline research storage browsing
- **Unified interface**: Same browser experience across all systems
- **Permission awareness**: Respect different system access controls

### Collaborative Features

Support for team-based research:

#### Shared Directory Support
- **Group permissions**: Display group-accessible directories
- **Lab space navigation**: Easy access to shared lab resources
- **Project organization**: Browse project-specific directory structures

#### Access Indicators
- **Permission status**: Visual indicators for read/write access
- **Sharing status**: Show which directories have active data links
- **Collaboration markers**: Indicate directories shared with external collaborators

### Data Management Tools

Built-in tools for research data organization:

#### Directory Operations
- **Create directories**: Make new folders for organizing data
- **Move files**: Relocate data within accessible areas
- **Copy operations**: Duplicate files when appropriate permissions exist
- **Delete capabilities**: Remove files and directories (with appropriate safeguards)

#### Metadata Management
- **View metadata**: Display embedded file metadata
- **Edit annotations**: Add or modify file descriptions
- **Tag systems**: Organize files with custom tags or labels
- **Search metadata**: Find files based on metadata content

## Browser Customization

### Display Options

Customize the browser interface:

- **List view**: Detailed file information in tabular format
- **Grid view**: Thumbnail-based display for visual browsing
- **Compact view**: Dense listing for directories with many files
- **Custom columns**: Choose which information columns to display

### Sorting and Filtering

Organize large datasets:

#### Sorting Options
- **Name**: Alphabetical sorting with natural number ordering
- **Size**: Sort by file size (largest/smallest first)
- **Date**: Most recent or oldest files first
- **Type**: Group files by format or extension
- **Custom criteria**: Sort by metadata fields when available

#### Filtering Capabilities
- **File type filters**: Show only specific formats (e.g., only Zarr files)
- **Size filters**: Display files within specific size ranges
- **Date filters**: Files modified within certain time periods
- **Metadata filters**: Filter based on imaging parameters or metadata values

### Favorites and Bookmarks

Organize frequently accessed locations:

- **Hierarchical favorites**: Organize bookmarks in folders
- **Quick access**: One-click navigation to important directories
- **Sync across sessions**: Favorites persist between browser sessions
- **Export/import**: Share favorite collections with team members

## Integration with Analysis Tools

### Neuroglancer Integration

Direct connection to visualization tools:

- **One-click opening**: Launch Neuroglancer with compatible datasets
- **URL generation**: Create shareable Neuroglancer links
- **Parameter passing**: Automatically configure visualization settings
- **Multi-dataset support**: Open multiple related datasets together

### External Tool Support

Connect with other analysis platforms:

- **API endpoints**: Programmatic access for custom analysis scripts
- **Export functions**: Generate file lists for batch processing
- **Integration hooks**: Connect with lab-specific analysis pipelines
- **URL schemes**: Support for custom protocol handlers

## Performance Optimization

### Large Directory Handling

Efficient browsing of big datasets:

- **Progressive loading**: Load directory contents incrementally
- **Search indexing**: Fast full-text search across large file collections
- **Thumbnail caching**: Store previews for faster repeat access
- **Network optimization**: Minimize data transfer for remote file systems

### Responsive Design

Optimized for different screen sizes and devices:

- **Desktop optimization**: Full feature set for desktop workstations
- **Laptop compatibility**: Efficient use of smaller screens
- **Touch support**: Basic touch navigation for tablet access
- **Accessibility**: Screen reader support and keyboard navigation

## Troubleshooting Browser Issues

### Common Problems

**Slow directory loading**
- Check network connectivity to file systems
- Try accessing smaller subdirectories first
- Clear browser cache and refresh
- Contact IT if persistent on all directories

**Missing files or directories**
- Verify permissions for the directory
- Check if files have been moved or renamed
- Refresh the directory view
- Confirm you're connected to the correct file system

**Interface not responsive**
- Refresh the browser page
- Check if you're still authenticated
- Try a different browser
- Clear browser cache and cookies

**Properties Panel not showing**
- Look for panel toggle buttons
- Try clicking on files or directories to activate
- Check browser window size (panel may be collapsed)
- Refresh the page to reset interface state

### Performance Tips

- Use specific navigation rather than browsing very large directories
- Create favorites for frequently accessed locations
- Use search functions to find files quickly
- Close unnecessary browser tabs to improve performance

The Fileglancer file browser provides a comprehensive, specialized interface for scientific imaging data that combines the familiarity of standard file browsing with the specialized needs of research data management.