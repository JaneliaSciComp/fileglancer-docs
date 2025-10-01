---
title: Troubleshooting
description: Solutions for common issues encountered when using Fileglancer with scientific imaging data.
---

## Common Access Issues

### Cannot Access Fileglancer

**Symptoms**: Fileglancer page won't load or shows connection errors

**Possible Causes & Solutions**:

**Network connectivity**
   - **Check**: Verify you're connected to the Janelia internal network
   - **Solution**: Connect to Janelia VPN if working remotely
   - **Test**: Try accessing other internal Janelia resources

**Site maintenance or server down**
   - **Check**: A maintenance or server down warning will appear
   - **Solution**: Try accessing the site later
   - **Contact**: Reach out on the #fileglancer-support Slack channel if not resolved

**Authentication issues**
   - **Check**: Ensure your Janelia credentials are current
   - **Solution**: Log out and log back in to refresh authentication
   - **Contact**: Reach out to IT if password reset is needed

### File System Access Problems

**Symptoms**: Can't see expected directories or get permission errors

**Possible Causes & Solutions**:

1. **POSIX permissions**
   - **Check**: Verify you have appropriate permissions for target directories
   - **Solution**: Contact your system administrator
   - **Group access**: Ensure you're in the correct user groups

## Navigation and Browsing Issues

### Slow or Unresponsive Interface

**Symptoms**: Pages load slowly, interface feels sluggish, or operations timeout

**Possible Causes & Solutions**:

**Large directory handling**
   - **Issue**: Directory contains thousands of files
   - **Solution**: Navigate to more specific subdirectories
   - **Report**: Open a ticket in Clickup or reach out on #fileglancer-support

**Network latency**
   - **Issue**: Slow connection to file systems
   - **Check**: Test other network-intensive operations
   - **Try**: Close unnecessary tabs and applications
   - **Report**: Contact IT if consistently slow across all operations

### Missing Files or Directories

**Symptoms**: Expected files don't appear in directory listings

**Possible Causes & Solutions**:

**Permission restrictions**
   - **Issue**: Files exist but you lack read permissions
   - **Solution**: Contact data owner or system administrator

**Hidden files**
   - **Issue**: Files are hidden by default (Unix hidden files starting with '.')
   - **Solution**: Look for view options to show hidden files
   - **Alternative**: Use direct path navigation if you know the filename

**File system synchronization**
   - **Issue**: Recent files haven't synchronized across file systems
   - **Solution**: Refresh the directory view
   - **Verify**: Check the original location where files were created

## Data Links Not Working for Collaborators

**Symptoms**: Data links work for you but not for others

**Possible Causes & Solutions**:

**Network access**
   - **Issue**: Collaborators not on Janelia network
   - **Solution**: Ensure they're connected to VPN or internal network
   - **Alternative**: Consider setting up a `data_external` folder to share the data

## File Conversion Issues

**Symptoms**: Conversion requests don't submit or fail processing

**Possible Causes & Solutions**:

**Incomplete request information**
   - **Issue**: Missing required fields in conversion request
   - **Solution**: Review and complete all required form fields

**Source data accessibility**
   - **Issue**: Technical staff can't access source data
   - **Verify**: Double-check source data paths in request

## Scientific Imaging Format Issues

### Zarr/OME-Zarr Problems

**Symptoms**: Zarr datasets won't open or display incorrectly

**Possible Causes & Solutions**:

**Incomplete Zarr structure**
   - **Issue**: Missing .zarray or .zattrs files
   - **Solution**: Avoid modifying Zarr directory structure manually
   - **Recovery**: Contact technical staff for structure repair

**Corrupted chunks**
   - **Issue**: Individual chunk files are corrupted
   - **Solution**: Request data validation and repair
   - **Prevention**: Avoid interrupting write operations to Zarr datasets

**Metadata inconsistencies**
   - **Issue**: OME metadata doesn't match actual data structure
   - **Solution**: Request metadata validation and correction
   - **Tools**: Use OME-Zarr validation tools if available

## Data Viewer Integration Issues

### External Viewer Problems

**Symptoms**: Data viewers (Neuroglancer, Vol-E, Avivator) won't open or display data incorrectly

**Possible Causes & Solutions**:

**Data format compatibility**
   - **Issue**: Dataset format not supported by selected viewer
   - **Solution**: Try a different viewer or request data conversion
   - **Check**: Use OME-ZARR Validator to verify dataset compliance

**Data link accessibility**
   - **Issue**: Viewer can't access data through Fileglancer data link
   - **Solution**: Verify data link is active and accessible
   - **Test**: Try accessing the data link URL directly in browser

**Viewer loading failures**
   - **Issue**: External viewer opens but shows blank screen or errors
   - **Solution**: Check browser console for error messages, share with Fileglancer team
   - **Alternative**: Try opening dataset with a different viewer

**Metadata or scaling issues**
   - **Issue**: Data loads but appears incorrectly scaled or oriented
   - **Solution**: Verify OME metadata is complete and correct
   - **Request**: Contact technical staff for metadata validation
   - **Workaround**: Use viewer controls to adjust display settings

## Getting Additional Help

To get additional support:

- Reach out on the [#fileglancer-support](https://hhmi.enterprise.slack.com/archives/C0938N06YN8) Slack channel
- Fill out the [Clickup issue form](https://forms.clickup.com/10502797/f/a0gmd-713/NBUCBCIN78SI2BE71G)