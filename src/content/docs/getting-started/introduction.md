---
title: Introduction to Fileglancer
description: Learn what Fileglancer is, how it fits into the Janelia ecosystem, and what you can accomplish with it.
---

## Welcome to Fileglancer

Fileglancer is a web-based file browser and data sharing platform specifically designed for researchers at Janelia Research Campus. It provides an intuitive interface for working with scientific imaging data stored on Janelia's internal file systems without requiring data movement or complex setup procedures.

## What Fileglancer Does

Fileglancer addresses common challenges researchers face when working with large scientific imaging datasets:

- **Eliminates data movement friction**: Browse and share data directly from existing file systems (PRFS, NRS, Nearline)
- **Simplifies data sharing**: Create shareable links with appropriate permission controls
- **Streamlines file format conversions**: Request data conversions through integrated help desk routing
- **Integrates with analysis tools**: Open datasets directly in Neuroglancer for visualization
- **Manages access permissions**: Simplify POSIX file permission management
- **Preserves metadata**: Apply and maintain metadata for converted OME-Zarr images

## How Fileglancer Fits Into Your Workflow

### For Individual Researchers

- **Browse your data**: Navigate through your lab's imaging data using a familiar web interface
- **Quick sharing**: Generate links to share specific datasets with collaborators
- **Format conversions**: Request conversions to analysis-ready formats when needed
- **Neuroglancer integration**: Open supported data directly in visualization tools

### For Lab Groups

- **Collaborative access**: Share data within your lab or with external collaborators
- **Permission management**: Control who can access your shared datasets
- **Centralized browsing**: Access data from multiple file systems through one interface
- **Conversion tracking**: Monitor status of data processing requests

### For Data Managers

- **Batch operations**: Manage multiple datasets and conversion requests
- **Access oversight**: Monitor and control data sharing permissions
- **Format standardization**: Coordinate data conversions to standard formats

## Key Benefits

### No Data Movement Required
Fileglancer connects directly to Janelia's existing file systems, so you don't need to copy or move your data to use the platform. This saves time and storage space while maintaining your existing file organization.

### Integrated Help Desk
When you need data converted to different formats, Fileglancer routes your requests through Janelia's established help desk system, ensuring proper handling by qualified technical staff.

### Scientific Imaging Focus
Unlike general file browsers, Fileglancer is designed specifically for scientific imaging workflows, with built-in support for formats like Zarr, OME-Zarr, TIFF, OME-TIFF, and integration with specialized visualization tools.

### Seamless Neuroglancer Integration
For compatible datasets, Fileglancer provides one-click opening in Neuroglancer, making it easy to visualize and share your data with collaborators who can access the same visualization interface.

## Getting Started

Ready to start using Fileglancer? Here are your next steps:

1. **Access the platform**: Navigate to [fileglancer.int.janelia.org](https://fileglancer.int.janelia.org) from the Janelia network
2. **Learn navigation**: Start with our [Navigation Guide](/workflows/navigation/) to understand how to browse your data
3. **Try sharing**: Follow the [Data Links Guide](/workflows/data-links/) to create your first shareable link
4. **Explore features**: Review the [Features](/features/file-browser/) section to understand all available capabilities

## System Requirements

- **Network access**: Must be connected to the Janelia internal network
- **Web browser**: Modern web browser (Chrome, Firefox, Safari, Edge)
- **File permissions**: Appropriate POSIX permissions for the data you want to access
- **Authentication**: Valid Janelia credentials

## Supported File Systems

Fileglancer connects to Janelia's multi-tier storage infrastructure:

- **PRFS (Primary Research File System)**: High-performance storage optimized for active research data with fast access times and frequent read/write operations. Best for current experiments and active analysis work.

- **NRS (Non-Recoverable Storage)**: Cost-effective storage for large datasets that don't require backup. Offers good throughput for large file operations and larger storage quotas. Ideal for raw microscopy data and reproducible datasets.

- **Nearline Storage**: Long-term archival storage with retrieval capabilities. Provides very large storage capacity at lower cost but with slower access times. Perfect for completed project archives and reference datasets.

All systems are accessible through the same Fileglancer interface, allowing you to browse across different storage tiers seamlessly. The platform automatically handles the performance characteristics of each system to provide the best user experience.