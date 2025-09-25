---
title: Data Viewers Integration
description: Learn how to use Fileglancer's seamless integration with multiple data viewers including Neuroglancer, Vol-E, Avivator, and OME-ZARR Validator for visualizing and sharing scientific imaging data.
---

## Overview

Fileglancer provides seamless integration with multiple data viewers, allowing you to open compatible datasets directly for visualization, analysis, and sharing. When viewing OME-Zarr or compatible scientific imaging data, Fileglancer automatically displays "Open with" options for appropriate viewers.

## Available Data Viewers

### Neuroglancer
A powerful web-based viewer for large-scale volumetric data, particularly suited for:
- **Large-scale imaging datasets**: Terabyte-scale brain imaging data
- **Multi-resolution data**: Pyramidal data structures for efficient viewing
- **Multi-modal datasets**: Combine different types of imaging data
- **Collaborative visualization**: Share interactive views with colleagues

### Vol-E (Volume Explorer)
Allen Cell Institute's volume viewer designed for cellular and subcellular imaging:
- **Cell biology focus**: Optimized for cellular imaging workflows
- **Interactive 3D rendering**: Real-time volume rendering capabilities
- **Multiple rendering modes**: Surface rendering, volume rendering, and cross-sections
- **Cellular structure visualization**: Specialized for organelles and cellular components

### Avivator
A lightweight, web-based image viewer for OME-Zarr data:
- **Multi-channel support**: View and blend multiple imaging channels
- **Interactive visualization**: Pan, zoom, and navigate through datasets
- **Channel controls**: Adjust brightness, contrast, and visibility per channel
- **Responsive design**: Works well on different screen sizes and devices

### OME-ZARR Validator
A diagnostic tool for verifying OME-Zarr dataset compliance:
- **Format validation**: Verify OME-Zarr specification compliance
- **Metadata checking**: Ensure proper OME metadata structure
- **Error reporting**: Identify and report format issues
- **Quality assurance**: Validate datasets before sharing or publication

## Choosing the Right Viewer

### Data Type Considerations
- **Large-scale brain/tissue imaging**: Use Neuroglancer for its performance with massive datasets
- **Cell biology and microscopy**: Vol-E provides specialized tools for cellular imaging
- **General OME-Zarr viewing**: Avivator offers a lightweight, accessible option
- **Dataset validation**: Use OME-ZARR Validator to ensure data integrity

### Use Case Recommendations
- **Research collaboration**: Neuroglancer for advanced features and annotations
- **Quick data review**: Avivator for fast, lightweight viewing
- **Educational purposes**: Vol-E for its intuitive interface
- **Data publishing**: OME-ZARR Validator to ensure dataset quality

## Accessing Data Viewers from Fileglancer

### Locating Viewer Options

When you navigate to a compatible dataset (OME-Zarr or Zarr format):

1. **View the file/directory in Fileglancer**
   - Navigate to your OME-Zarr dataset directory
   - The dataset will be recognized automatically

2. **Find the "Open with" section**
   - Located in the file preview area
   - Shows thumbnail preview of the dataset
   - Lists all compatible viewers with their respective logos

3. **Available viewer buttons**
   - **Neuroglancer logo**: Brain icon for Neuroglancer
   - **Vol-E logo**: Volume Explorer icon
   - **Avivator logo**: Multi-channel viewer icon
   - **OME-ZARR Validator logo**: Validation tool icon
   - **Copy URL icon**: Copy direct data link

### Launching Viewers

1. **Click the desired viewer button**
   - Each viewer opens in a new browser tab
   - Data is automatically loaded with appropriate settings
   - Spatial calibration and metadata are preserved

2. **Share viewer URLs**
   - Copy the URL from the opened viewer tab
   - Share with collaborators who have data access
   - URLs remain valid as long as data links are active

### Viewer-Specific Features

Each viewer provides different capabilities once opened:

- **Neuroglancer**: Full 3D/4D navigation, annotations, measurements
- **Vol-E**: Volume rendering, surface rendering, cellular visualization
- **Avivator**: Channel blending, brightness/contrast controls, multi-dimensional navigation
- **OME-ZARR Validator**: Compliance reports, error identification, metadata verification

## What is Neuroglancer?

Neuroglancer is an open-source web application designed for visualization of highly detailed volumetric data, particularly:

- **Large-scale imaging datasets**: Terabyte-scale brain imaging data
- **Multi-resolution data**: Pyramidal data structures for efficient viewing
- **Multi-modal datasets**: Combine different types of imaging data
- **Collaborative visualization**: Share interactive views with colleagues
- **Web-based access**: No software installation required

### Key Neuroglancer Features

- **3D/4D visualization**: Navigate through space and time
- **Multi-channel support**: View multiple imaging channels simultaneously
- **Segmentation overlay**: Display and interact with segmentation data
- **Annotation tools**: Create and share annotations
- **URL sharing**: Share exact visualization states via URLs
- **Cross-sectional views**: Multiple 2D slice views with 3D context

## Compatible Data Formats

### Fully Supported Formats

**OME-Zarr datasets**:
- Multi-resolution pyramids automatically detected
- Channel information correctly interpreted
- Spatial metadata properly applied
- Time series data supported

**Zarr arrays**:
- 3D and 4D arrays supported
- Custom chunk structures handled efficiently
- Compression formats automatically detected

**Neuroglancer Precomputed format**:
- Native Neuroglancer format for optimal performance
- Multi-resolution sharding support
- Segmentation and image data types

### Conversion-Supported Formats

These formats can be opened after conversion:

- **OME-TIFF**: Convert to OME-Zarr for Neuroglancer compatibility
- **Large TIFF stacks**: Convert to chunked Zarr format
- **CZI, LIF, ND2**: Convert through file conversion requests
- **HDF5**: Convert to Zarr format when structured appropriately

## Opening Data in Neuroglancer

### Direct Opening from Fileglancer

1. **Navigate to compatible dataset**
   - Browse to an OME-Zarr or compatible Zarr directory
   - Ensure the dataset is properly structured for Neuroglancer

2. **Locate the Neuroglancer option**
   - Look for a "Open in Neuroglancer" button or link
   - Usually found in the Properties Panel or main toolbar
   - Icon may appear as a brain symbol or "NG" logo

3. **Launch Neuroglancer**
   - Click the Neuroglancer option
   - A new browser tab will open with Neuroglancer
   - Data will automatically load with appropriate settings

4. **Verify the visualization**
   - Check that all channels are properly loaded
   - Verify spatial calibration and scale
   - Confirm multi-resolution levels are available

### URL Generation and Sharing

When you open data in Neuroglancer from Fileglancer:

1. **Automatic URL generation**
   - Fileglancer creates a properly formatted Neuroglancer URL
   - URL includes data source location and basic viewing parameters
   - Spatial calibration and metadata automatically applied

2. **Share the visualization**
   - Copy the Neuroglancer URL from your browser address bar
   - Share this URL with collaborators for identical visualization
   - Recipients need access to the underlying data via Fileglancer

3. **Persistent links**
   - URLs remain valid as long as data links are active
   - Can be bookmarked for repeated access
   - Include in publications or documentation

## Advanced Neuroglancer Features

### Multi-Channel Visualization

For multi-channel OME-Zarr datasets:

1. **Automatic channel detection**
   - Fileglancer passes channel information to Neuroglancer
   - Each channel appears as a separate layer
   - Channel names and colors preserved when available

2. **Channel manipulation**
   - Toggle individual channels on/off
   - Adjust brightness and contrast per channel
   - Blend channels for composite visualization

3. **Color management**
   - Use original acquisition colors when available
   - Customize colors for better visualization
   - Create false-color composite images

### Time Series Data

For 4D datasets with time dimension:

1. **Time navigation**
   - Use time slider to navigate through frames
   - Play animations for dynamic visualization
   - Set playback speed for optimal viewing

2. **Time-specific sharing**
   - Share URLs that include specific time points
   - Create animations or time-lapse visualizations
   - Compare different time points side-by-side

### Annotation and Measurement

1. **Point annotations**
   - Click to create point annotations
   - Add text descriptions and labels
   - Share annotations with collaborators

2. **Line measurements**
   - Draw lines to measure distances
   - Measurements respect spatial calibration
   - Export measurement data

3. **Region selection**
   - Define regions of interest
   - Extract image data from selected regions
   - Share specific regions with collaborators

## Best Practices for Neuroglancer Integration

### Data Preparation

1. **Optimize data structure**
   - Use OME-Zarr format for best compatibility
   - Create multi-resolution pyramids for large datasets
   - Ensure proper spatial metadata

2. **Channel organization**
   - Use descriptive channel names
   - Set appropriate default colors
   - Organize channels logically (e.g., DAPI, GFP, RFP)

3. **Compression considerations**
   - Use appropriate compression for data type
   - Balance compression ratio with access speed
   - Consider network bandwidth of users

### Sharing and Collaboration

1. **Create stable data links**
   - Ensure data links remain active for shared visualizations
   - Use descriptive names for shared datasets
   - Document any access requirements

2. **Provide context**
   - Include descriptions of what the data shows
   - Explain channel meanings and experimental conditions
   - Document any special viewing instructions

3. **Verify access**
   - Test shared Neuroglancer URLs with collaborators
   - Confirm they have necessary data access permissions
   - Provide alternative access methods if needed

### Performance Optimization

1. **Multi-resolution strategy**
   - Create appropriate resolution levels for your data
   - More levels = smoother zooming but larger storage
   - Consider your typical viewing patterns

2. **Chunk size optimization**
   - Choose chunk sizes appropriate for typical view sizes
   - Consider network transfer efficiency
   - Balance between load time and memory usage

3. **Network considerations**
   - Be aware of network speed limitations
   - Consider creating lower-resolution versions for sharing
   - Use compression appropriately for network transfer

## Troubleshooting Neuroglancer Integration

### Data Loading Issues

**Problem**: Neuroglancer opens but no data appears
- **Check**: Verify data format compatibility
- **Solution**: Ensure OME-Zarr structure is correct
- **Alternative**: Request conversion to compatible format

**Problem**: Data appears but with wrong dimensions or orientation
- **Check**: Verify spatial metadata in original data
- **Solution**: Request metadata correction during conversion
- **Workaround**: Use Neuroglancer controls to adjust orientation

### Performance Issues

**Problem**: Slow loading or navigation in Neuroglancer
- **Check**: Data chunk sizes and compression
- **Solution**: Consider creating optimized versions for viewing
- **Network**: Verify network connectivity and speed

**Problem**: Browser crashes or becomes unresponsive
- **Check**: Dataset size and browser memory
- **Solution**: Use lower resolution levels for initial viewing
- **Browser**: Try different browsers or increase available memory

### Sharing Issues

**Problem**: Shared URLs don't work for collaborators
- **Check**: Data link accessibility and permissions
- **Solution**: Verify collaborators have data access
- **Network**: Ensure collaborators are on correct network

**Problem**: Shared URLs show different data than expected
- **Check**: Data link points to correct dataset
- **Solution**: Recreate data link and Neuroglancer URL
- **Verification**: Test URL in private/incognito browser

## Advanced Use Cases

### Publication Figures

1. **Static views**: Create specific views for figure panels
2. **Annotations**: Add annotations directly in Neuroglancer
3. **Multi-panel layouts**: Use multiple Neuroglancer views
4. **URL documentation**: Include URLs in supplementary materials

### Collaborative Analysis

1. **Shared annotation sessions**: Multiple users can annotate simultaneously
2. **Discussion points**: Use annotations for team communication
3. **Comparative visualization**: Share multiple datasets with consistent settings
4. **Progress tracking**: Document analysis progress through annotations

### Educational Use

1. **Teaching datasets**: Create curated views for educational purposes
2. **Interactive demonstrations**: Use during presentations
3. **Self-guided exploration**: Allow students to explore data independently
4. **Assignment creation**: Design assignments around specific datasets

### Research Presentations

1. **Live demonstrations**: Use Neuroglancer during talks
2. **Interactive exploration**: Respond to audience questions by navigating data
3. **Comparative analysis**: Show multiple datasets side-by-side
4. **Zoom and detail**: Seamlessly move from overview to detailed views

## Integration with Research Workflows

### Analysis Pipeline Integration

- **Data validation**: Use Neuroglancer to verify analysis results
- **Quality control**: Visually inspect processing outputs
- **Parameter optimization**: Adjust analysis parameters based on visual feedback
- **Result communication**: Share analysis results with collaborators

### Data Management

- **Dataset organization**: Use Neuroglancer to understand data structure
- **Quality assessment**: Evaluate data quality before analysis
- **Archive visualization**: Access and review archived datasets
- **Migration planning**: Understand data characteristics for format migrations

The Neuroglancer integration in Fileglancer provides a powerful platform for collaborative visualization and analysis of scientific imaging data. By combining Fileglancer's data management capabilities with Neuroglancer's advanced visualization features, researchers can efficiently explore, analyze, and share complex imaging datasets.