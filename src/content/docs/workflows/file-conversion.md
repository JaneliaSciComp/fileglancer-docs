---
title: File Conversion Requests
description: Learn how to request file format conversions for your scientific imaging data through Fileglancer's integrated help desk system.
---

## Overview

Fileglancer integrates with Janelia's help desk system to handle manual data conversions. This feature allows you to request professional conversion services for your scientific imaging data, ensuring proper handling by qualified technical staff.

## Understanding File Conversions

### What File Conversions Provide

- **Format standardization**: Convert data to analysis-ready formats
- **Professional handling**: Conversions performed by qualified technical staff
- **Metadata preservation**: Maintain important imaging metadata during conversion
- **Quality assurance**: Verified conversion processes with validation
- **Integration support**: Converted data works seamlessly with analysis tools

### Common Conversion Scenarios

1. **Legacy format updates**: Convert older imaging formats to modern standards
2. **Analysis preparation**: Convert raw data to formats suitable for specific analysis tools
3. **Sharing optimization**: Convert to formats that are easier to share or view
4. **Storage optimization**: Convert to formats with better compression or structure
5. **Integration requirements**: Convert to formats required by specific software or pipelines

### Supported Source Formats

Fileglancer conversion requests typically support:

- **Zarr arrays**: Existing Zarr datasets that need reformatting
- **OME-Zarr**: Conversion between OME-Zarr versions or structures
- **TIFF files**: Legacy TIFF data conversion to modern formats
- **OME-TIFF**: Metadata-rich TIFF conversions
- **Proprietary formats**: Manufacturer-specific formats (CZI, LIF, etc.)
- **HDF5**: Scientific data format conversions
- **NetCDF**: Climate and scientific data formats

## Requesting File Conversions

### Prerequisites

Before requesting a conversion:

1. **Verify source data accessibility**
   - Ensure you can navigate to and view the source data in Fileglancer
   - Confirm the data is complete and not corrupted
   - Check that you have read permissions for the source data

2. **Determine target format requirements**
   - Know what format you need for your analysis workflow
   - Understand any specific parameters or options required
   - Consider where the converted data should be stored

3. **Prepare conversion details**
   - Document any special requirements or constraints
   - Gather information about the original acquisition parameters
   - Note any metadata that must be preserved

### Step-by-Step Conversion Request

#### For Zarr and OME-Zarr Data

1. **Navigate to your Zarr directory**
   - Use any navigation method to reach the Zarr or OME-Zarr directory
   - Ensure you're at the correct directory level containing the data

2. **Open the Properties Panel**
   - Locate the Properties Panel (typically on the right side)
   - If not visible, look for a Properties button or panel toggle

3. **Switch to the Conversion tab**
   - Click on the "Conversion" tab within the Properties Panel
   - This tab contains conversion-specific tools and information

![Convert Tab](../../../assets/fileglancer-convert-tab.png)
*The Convert tab in the Properties Panel showing conversion request options*

4. **Review conversion options**
   - The panel will display available conversion options for your data type
   - Review any preset conversion parameters or templates

5. **Open the conversion request**
   - Click the button or link to "Open conversion request" or similar
   - This will launch the integrated help desk system

6. **Complete the request form**
   - Fill out the help desk form with required information
   - Include details about:
     - Source data location and format
     - Desired output format and specifications
     - Target location for converted data
     - Timeline requirements
     - Any special instructions or requirements

7. **Submit your request**
   - Review all information for accuracy
   - Submit the request through the help desk system
   - Note the ticket or request ID for tracking

### Request Information Requirements

When completing the conversion request form, include:

#### Essential Information
- **Source data path**: Complete path to the data requiring conversion
- **Current format**: Detailed information about the existing format
- **Target format**: Specific format requirements for the conversion
- **Output location**: Where the converted data should be stored
- **Contact information**: Your preferred contact method for updates

#### Additional Details
- **Metadata requirements**: Specific metadata that must be preserved
- **Parameter specifications**: Any custom conversion parameters needed
- **Timeline constraints**: When you need the conversion completed
- **Analysis workflow context**: How the converted data will be used
- **Quality requirements**: Any specific validation or quality checks needed

## Tracking Your Conversion Requests

### Using the Jobs Page

1. **Navigate to the jobs page**
   - Go to `/jobs` in your browser
   - Example: `fileglancer-dev.int.janelia.org/jobs`

![Tasks Page](../../../assets/fileglancer-tasks-page.png)
*The Tasks page showing conversion request status and history*

2. **View your requests**
   - See all current conversion requests and their status
   - Monitor progress through different conversion stages

3. **Check status updates**
   - Track when requests are received, in progress, or completed
   - View any messages or updates from technical staff

4. **Access completed conversions**
   - Find links to converted data when processing is complete
   - Download or access converted files

### Status Meanings

Understanding conversion request statuses:

- **Submitted**: Request received and queued for processing
- **In Review**: Technical staff reviewing the request details
- **In Progress**: Conversion actively being performed
- **Completed**: Conversion finished and data available
- **On Hold**: Waiting for additional information or clarification
- **Failed**: Conversion encountered errors (details provided)

## Post-Conversion Workflow

### Accessing Converted Data

1. **Check completion notification**
   - Monitor the `/jobs` page for completion status
   - Look for email notifications if configured

2. **Locate converted data**
   - Follow links provided in the completion notification
   - Navigate to the specified output directory
   - Verify the converted data is accessible

3. **Validate conversion results**
   - Check that the converted data opens properly in your analysis tools
   - Verify metadata preservation
   - Compare file sizes and structure as expected

### Creating Data Links for Converted Data

After successful conversion:

1. **Navigate to the converted data location**
   - Use the path provided in the completion notification

2. **Create data links**
   - Follow the [Data Links Guide](/workflows/data-links/) to create shareable links
   - Enable data links for the new converted datasets

3. **Update collaborators**
   - Share new data links with team members
   - Update documentation with converted data locations

## Best Practices for Conversion Requests

### Planning Your Request

1. **Batch similar conversions**
   - Group related datasets in single requests when possible
   - This is more efficient for technical staff and you

2. **Provide comprehensive information**
   - Include all relevant details in the initial request
   - This reduces back-and-forth communication and speeds processing

3. **Plan for storage requirements**
   - Converted data may be larger than original formats
   - Ensure adequate storage space in the target location

### Working with Technical Staff

1. **Be responsive to questions**
   - Monitor your email and the jobs page for staff questions
   - Respond promptly to requests for clarification

2. **Test converted data promptly**
   - Validate converted data as soon as possible after completion
   - Report any issues immediately

3. **Provide feedback**
   - Let staff know if conversions meet your requirements
   - Share feedback about the process for continuous improvement

### Managing Multiple Requests

1. **Use descriptive request titles**
   - Make it easy to identify different conversion requests
   - Include project names or dataset identifiers

2. **Track dependencies**
   - Note if some conversions depend on others being completed first
   - Communicate priority and sequencing needs

3. **Plan for processing time**
   - Allow adequate time for conversion processing in your project timeline
   - Complex conversions may take several days

## Advanced Conversion Options

### Custom Conversion Parameters

For specialized requirements:

1. **Compression settings**: Specify compression algorithms or levels
2. **Chunk sizes**: For Zarr conversions, specify optimal chunk dimensions
3. **Metadata handling**: Detailed instructions for metadata preservation or modification
4. **Multi-resolution pyramids**: Request creation of multi-resolution datasets
5. **Format-specific options**: Parameters specific to target formats

### Batch Processing

For large datasets:

1. **Directory-level conversions**: Convert entire directory hierarchies
2. **Pattern matching**: Convert files matching specific naming patterns
3. **Automated workflows**: Set up recurring conversions for ongoing data
4. **Parallel processing**: Request parallel conversion of independent datasets

## Troubleshooting Conversion Issues

### Common Request Problems

**Problem**: Conversion request form won't submit
- Solution: Check that all required fields are completed
- Verify you're still authenticated to the system
- Try using a different browser if issues persist

**Problem**: Can't find the Conversion tab
- Solution: Ensure you're navigating to Zarr or OME-Zarr directories
- Check that the Properties Panel is fully expanded
- Verify you have appropriate permissions for the directory

### Conversion Process Issues

**Problem**: Conversion failed or produced unexpected results
- Solution: Contact technical staff through the help desk system
- Provide specific details about what you expected vs. what occurred
- Include sample files or detailed error descriptions

**Problem**: Converted data is missing metadata
- Solution: Review your original conversion request for metadata requirements
- Contact technical staff to clarify metadata preservation options
- Consider requesting a re-conversion with specific metadata instructions

**Problem**: Conversion taking longer than expected
- Solution: Check the jobs page for status updates
- Contact technical staff if no progress updates are visible
- Consider if the dataset size or complexity requires additional processing time

## Integration with Research Workflows

### Publication Preparation

- Request conversions to standard formats for data sharing
- Ensure metadata compliance with publication requirements
- Create data links for converted datasets to include in publications

### Analysis Pipeline Integration

- Convert data to formats optimized for your analysis tools
- Request specific parameter settings that match your pipeline requirements
- Coordinate conversion timing with analysis project schedules

### Collaboration Support

- Convert data to formats that collaborators can easily access
- Request conversions that facilitate data sharing across institutions
- Ensure converted data works with collaborators' analysis environments

The file conversion system in Fileglancer provides professional data conversion services while maintaining the integrity and accessibility of your scientific imaging data. Use it as a reliable way to prepare your data for analysis, sharing, and long-term preservation.