---
title: Supported File Formats
description: Complete overview of scientific imaging file formats supported by Fileglancer, including format-specific features and capabilities.
---

## Overview

Fileglancer is designed to work with the diverse range of file formats commonly used in scientific imaging. This guide covers all supported formats, their specific features in Fileglancer, and how to work with them effectively.

## Core Scientific Imaging Formats

### Zarr Arrays

**Extension**: `.zarr` (directory)
**Type**: Chunked, compressed N-dimensional arrays

**Fileglancer Features**:
- Native browsing and metadata display
- Efficient data link creation
- Neuroglancer integration
- Conversion support to/from other formats
- Multi-dimensional array visualization

**Best Use Cases**:
- Large, multi-dimensional datasets
- Cloud-optimized storage and access
- Parallel processing workflows
- Long-term data archival

**Limitations**:
- Requires understanding of array structure
- Directory-based format may be unfamiliar to some users

### OME-Zarr

**Extension**: `.ome.zarr` (directory)
**Type**: OME metadata + Zarr storage

**Fileglancer Features**:
- Full OME metadata support and display
- Multi-resolution pyramid handling
- Channel and time series information
- Direct Neuroglancer opening
- Biological imaging metadata preservation

**Best Use Cases**:
- Biological and medical imaging data
- Multi-channel microscopy datasets
- Time-lapse imaging series
- Publication and sharing of imaging data

**Limitations**:
- Requires OME metadata standards knowledge
- Larger storage overhead for metadata

### TIFF Files

**Extensions**: `.tiff`, `.tif`
**Type**: Tagged Image File Format
**Status**: Limited Support

**Current Fileglancer Features**:
- File browsing and navigation
- Basic file properties display
- Data link creation for sharing
- File conversion requests to supported formats

**Current Limitations**:
- No direct viewing in browser
- No thumbnail generation
- No metadata extraction or display
- Cannot open with integrated viewers (Neuroglancer, Vol-E, etc.)

**Recommended Approach**:
- Convert TIFF files to OME-Zarr format for full Fileglancer functionality
- Use data links to share TIFF files with collaborators
- Contact technical staff for batch conversion of TIFF collections

### OME-TIFF

**Extensions**: `.ome.tiff`, `.ome.tif`
**Type**: TIFF with OME metadata
**Status**: Limited Support

**Current Fileglancer Features**:
- File browsing and navigation
- Basic file properties display
- Data link creation for sharing
- File conversion requests to OME-Zarr format

**Current Limitations**:
- No OME metadata extraction or display
- No direct viewing in browser
- No thumbnail generation
- Cannot open with integrated viewers

**Best Use Cases**:
- Source data for conversion to OME-Zarr
- Data interchange with OME-compliant systems
- Legacy workflow compatibility

**Recommended Approach**:
- Convert OME-TIFF to OME-Zarr to preserve metadata and enable full functionality
- Use conversion requests to maintain OME compliance during format transformation

## Proprietary Imaging Formats

### Carl Zeiss Formats

**CZI (Carl Zeiss Image)**
- **Extension**: `.czi`
- **Features**: Multi-dimensional microscopy data
- **Fileglancer Support**: Metadata extraction, conversion requests
- **Best for**: Zeiss microscopy workflows

**LSM (Laser Scanning Microscopy)**
- **Extension**: `.lsm`
- **Features**: Confocal microscopy data
- **Fileglancer Support**: Basic file information, conversion available

### Leica Formats

**LIF (Leica Image File)**
- **Extension**: `.lif`
- **Features**: Multi-experiment container format
- **Fileglancer Support**: File structure browsing, conversion to open formats

**LEI (Leica)**
- **Extension**: `.lei`
- **Features**: Leica microscopy format
- **Fileglancer Support**: Basic file handling, conversion requests

### Nikon Formats

**ND2 (Nikon)**
- **Extension**: `.nd2`
- **Features**: Multi-dimensional time-lapse imaging
- **Fileglancer Support**: Metadata preview, conversion to standard formats

### Olympus Formats

**OIB (Olympus Image Binary)**
- **Extension**: `.oib`
- **Features**: Olympus microscopy data
- **Fileglancer Support**: File recognition, conversion services

**OIF (Olympus Image Format)**
- **Extension**: `.oif`
- **Features**: Multi-file Olympus format
- **Fileglancer Support**: Directory structure browsing

## Scientific Data Formats

### HDF5 (Hierarchical Data Format)

**Extensions**: `.h5`, `.hdf5`
**Type**: Hierarchical scientific data format

**Fileglancer Features**:
- Dataset structure browsing
- Metadata extraction
- Group and dataset information display
- Conversion support

**Best Use Cases**:
- Complex hierarchical scientific data
- Large numerical datasets
- Multi-parameter experimental data

**Limitations**:
- Requires understanding of HDF5 structure
- Binary format not human-readable

### NetCDF (Network Common Data Form)

**Extensions**: `.nc`, `.nc4`
**Type**: Array-oriented scientific data format

**Fileglancer Features**:
- Variable and dimension information
- Metadata and attributes display
- Climate and earth science data support

**Best Use Cases**:
- Climate and atmospheric data
- Earth science datasets
- Gridded scientific data

### FITS (Flexible Image Transport System)

**Extensions**: `.fits`, `.fit`
**Type**: Astronomy data format

**Fileglancer Features**:
- Header information display
- Basic file metadata
- Conversion to imaging formats

**Best Use Cases**:
- Astronomical imaging data
- Scientific datasets with extensive metadata

## Image Processing Formats

### ImageJ Formats

**TIFF with ImageJ metadata**
- Custom TIFF tags for ImageJ compatibility
- Stack and hyperstacks support
- ROI and overlay information

**ImageJ ROI files**
- **Extension**: `.roi`, `.zip` (ROI sets)
- Region of interest definitions
- Measurement and analysis regions

### Fiji/ImageJ Stack Formats

**Multi-dimensional TIFF stacks**
- Time series and Z-stack organization
- Channel separation information
- Calibration and scale metadata

## Video and Time Series Formats

### AVI (Audio Video Interleave)

**Extension**: `.avi`
**Type**: Video container format

**Fileglancer Features**:
- Basic video file information
- Frame count and duration display
- Conversion to image sequences

### MOV (QuickTime Movie)

**Extension**: `.mov`
**Type**: QuickTime video format

**Fileglancer Features**:
- Video metadata display
- Time-lapse sequence handling

## Compressed and Archive Formats

### ZIP Archives

**Extension**: `.zip`
**Features**: Compressed file containers
**Support**: Archive content listing, extraction for processing

### TAR Archives

**Extensions**: `.tar`, `.tar.gz`, `.tgz`
**Features**: Unix archive formats
**Support**: Content browsing, extraction capabilities

## Format-Specific Capabilities

### Metadata Handling

**Rich metadata formats** (OME-ZARR, OME-TIFF, CZI):
- Full metadata extraction and display
- Searchable metadata fields
- Preservation during conversions

**Basic metadata formats** (TIFF, basic formats):
- Limited metadata display
- File properties and creation information
- Enhancement through conversion

### Conversion Support

**Native format conversions**:
- Zarr ↔ OME-Zarr
- TIFF → OME-Zarr
- OME-TIFF → OME-Zarr

**Proprietary format conversions**:
- CZI → OME-Zarr
- LIF → OME-TIFF
- ND2 → Zarr

**Optimization conversions**:
- Large TIFF → Chunked Zarr
- Single resolution → Multi-resolution pyramids
- Uncompressed → Compressed formats

### Web Optimization

**Web-friendly formats** (Zarr, OME-Zarr):
- Efficient streaming and partial loading
- Browser-based viewing capabilities
- Fast thumbnail generation

**Conversion recommended** (Large TIFF, proprietary formats):
- Better performance after conversion to web-optimized formats
- Improved sharing and collaboration capabilities

## Choosing the Right Format

### For New Data Acquisition

**Recommended**: OME-Zarr
- Future-proof and web-optimized
- Rich metadata support
- Efficient for large datasets

**Alternative**: OME-TIFF
- Good metadata support
- Compatible with traditional tools
- Single-file convenience

### For Data Sharing

**Best choice**: OME-Zarr with data links
- Efficient web access
- Preserves all metadata
- Works with modern analysis tools

**Legacy compatibility**: OME-TIFF
- Works with older analysis software
- Self-contained files
- Standard format recognition

### For Long-term Archival

**Recommended**: OME-Zarr
- Open format with multiple implementations
- Excellent compression options
- Future-proof design

**Alternative**: OME-TIFF
- Widely supported standard
- Self-documenting format
- Good for smaller datasets

## Format Limitations and Considerations

### Storage Requirements

- **Zarr formats**: Variable, excellent compression options
- **TIFF formats**: Often large, limited compression
- **Proprietary formats**: Variable, often includes redundant data

### Access Patterns

- **Zarr**: Excellent for partial data access
- **TIFF**: Must load entire files for access
- **HDF5**: Good for hierarchical access patterns

### Tool Compatibility

- **OME formats**: Excellent compatibility with modern tools
- **Proprietary formats**: Limited to manufacturer software
- **Standard formats**: Broad compatibility but limited features

### Network Performance

- **Chunked formats** (Zarr): Optimized for network access
- **Single-file formats**: May require full download for access
- **Compressed formats**: Better network transfer but may require more processing

When working with Fileglancer, consider converting older or proprietary formats to modern, web-optimized formats for the best experience and long-term accessibility.