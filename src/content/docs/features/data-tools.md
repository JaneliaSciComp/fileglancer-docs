---
title: Data Tools Integration
description: Learn how to use Fileglancer's seamless integration with multiple data tools including Neuroglancer, Vol-E, Avivator, and OME-ZARR Validator for visualizing and sharing scientific imaging data.
---

Fileglancer provides seamless integration with multiple data viewers, allowing you to open compatible datasets directly for visualization, analysis, and sharing. When viewing OME-Zarr or compatible scientific imaging data, Fileglancer automatically displays "Open with" options for appropriate viewers.

## Available Data Tools

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

## Accessing Data Tools from Fileglancer

### Locating Tool Options

When you navigate to a compatible dataset (OME-Zarr or Zarr format):

1. **View the file/directory in Fileglancer**
   - Navigate to your OME-Zarr dataset directory
   - The dataset will be recognized automatically

2. **Find the "Open with" section**
   - Located in the file preview area
   - Shows thumbnail preview of the dataset
   - Lists all compatible viewers with their respective logos
   - There is also a button to copy the direct data link

### Launching Viewers

1. **Click the desired viewer button**
   - Each viewer opens in a new browser tab once a data link is available

2. **Share viewer URLs**
   - Copy the URL from the opened viewer tab
   - Share with internal collaborators
   - URLs remain valid as long as data links are active

## Troubleshooting Tools

### Data Loading Issues

**Problem**: A tool opens but no data appears
- Verify data format compatibility
- Ensure data structure is correct
- Request conversion to compatible format

### Performance Issues

**Problem**: Slow data loading
- Check data chunk sizes and compression
- Consider creating optimized versions for viewing
- Verify network connectivity and speed

### Sharing Issues

**Problem**: Shared URLs don't work for collaborators
- Check the data link is still active
- Ensure collaborators are on correct network

The data tool in Fileglancer provides a powerful platform for collaborative visualization and analysis of scientific imaging data.