---
title: Troubleshooting
description: Solutions for common issues encountered when using Fileglancer with scientific imaging data.
---

## Common Access Issues

### Cannot Access Fileglancer

**Symptoms**: Fileglancer page won't load or shows connection errors

**Possible Causes & Solutions**:

1. **Network connectivity**
   - **Check**: Verify you're connected to the Janelia internal network
   - **Solution**: Connect to Janelia VPN if working remotely
   - **Test**: Try accessing other internal Janelia resources

2. **Browser compatibility**
   - **Check**: Use a supported modern browser (Chrome, Firefox, Safari, Edge)
   - **Solution**: Update your browser to the latest version
   - **Clear cache**: Clear browser cache and cookies for the site

3. **Authentication issues**
   - **Check**: Ensure your Janelia credentials are current
   - **Solution**: Log out and log back in to refresh authentication
   - **Contact**: Reach out to IT if password reset is needed

### File System Access Problems

**Symptoms**: Can't see expected directories or get permission errors

**Possible Causes & Solutions**:

1. **POSIX permissions**
   - **Check**: Verify you have appropriate permissions for target directories
   - **Solution**: Contact your lab manager or system administrator
   - **Group access**: Ensure you're in the correct user groups

2. **File system mount issues**
   - **Check**: Verify the file system is currently mounted and accessible
   - **Solution**: Contact IT if file systems appear to be offline
   - **Alternative**: Try accessing different file systems (PRFS vs NRS)

3. **Path resolution**
   - **Check**: Verify the file path is correct and hasn't changed
   - **Solution**: Use search functions to locate moved directories
   - **Update**: Update saved favorites if paths have changed

## Navigation and Browsing Issues

### Slow or Unresponsive Interface

**Symptoms**: Pages load slowly, interface feels sluggish, or operations timeout

**Possible Causes & Solutions**:

1. **Large directory handling**
   - **Issue**: Directory contains thousands of files
   - **Solution**: Navigate to more specific subdirectories
   - **Workaround**: Use search functions to find specific files
   - **Optimization**: Create favorites for frequently accessed locations

2. **Network latency**
   - **Issue**: Slow connection to file systems
   - **Solution**: Try accessing during off-peak hours
   - **Check**: Test other network-intensive operations
   - **Report**: Contact IT if consistently slow across all operations

3. **Browser performance**
   - **Issue**: Browser running out of memory or resources
   - **Solution**: Close unnecessary tabs and applications
   - **Refresh**: Reload the page to reset interface state
   - **Browser**: Try using a different browser

### Missing Files or Directories

**Symptoms**: Expected files don't appear in directory listings

**Possible Causes & Solutions**:

1. **Permission restrictions**
   - **Issue**: Files exist but you lack read permissions
   - **Solution**: Contact data owner or system administrator
   - **Verification**: Check if you can access parent directories

2. **Hidden files**
   - **Issue**: Files are hidden by default (Unix hidden files starting with '.')
   - **Solution**: Look for view options to show hidden files
   - **Alternative**: Use direct path navigation if you know the filename

3. **File system synchronization**
   - **Issue**: Recent files haven't synchronized across file systems
   - **Solution**: Refresh the directory view
   - **Wait**: Allow time for file system synchronization
   - **Verify**: Check the original location where files were created

## Data Link Issues

### Cannot Create Data Links

**Symptoms**: Data link toggle doesn't work or link creation fails

**Possible Causes & Solutions**:

1. **Insufficient permissions**
   - **Issue**: You lack write permissions for the directory
   - **Solution**: Contact the directory owner or system administrator
   - **Verification**: Check if you can modify files in the directory

2. **Unsupported directory type**
   - **Issue**: Trying to create links for system or temporary directories
   - **Solution**: Only create links for user data directories
   - **Alternative**: Copy data to an appropriate location first

3. **Properties Panel not loading**
   - **Issue**: Properties Panel isn't visible or responsive
   - **Solution**: Refresh the page and try again
   - **Browser**: Clear cache and retry
   - **Alternative**: Try using a different browser

### Data Links Not Working for Collaborators

**Symptoms**: Links work for you but not for others

**Possible Causes & Solutions**:

1. **Permission mismatch**
   - **Issue**: Collaborators lack file system permissions
   - **Solution**: Work with system administrator to grant appropriate access
   - **Group access**: Add collaborators to required user groups

2. **Network access**
   - **Issue**: Collaborators not on Janelia network
   - **Solution**: Ensure they're connected to VPN or internal network
   - **Alternative**: Consider data export for external collaborators

3. **Authentication problems**
   - **Issue**: Collaborators not properly authenticated
   - **Solution**: Have them log out and log back in
   - **Credentials**: Verify their Janelia account is active

## File Conversion Issues

### Conversion Requests Failing

**Symptoms**: Conversion requests don't submit or fail processing

**Possible Causes & Solutions**:

1. **Incomplete request information**
   - **Issue**: Missing required fields in conversion request
   - **Solution**: Review and complete all required form fields
   - **Details**: Provide comprehensive information about source and target formats

2. **Unsupported format conversion**
   - **Issue**: Requested conversion isn't supported
   - **Solution**: Contact technical staff to discuss alternative approaches
   - **Alternatives**: Consider intermediate conversion steps

3. **Source data accessibility**
   - **Issue**: Technical staff can't access source data
   - **Solution**: Verify permissions allow technical staff access
   - **Path**: Double-check source data paths in request

### Conversion Results Issues

**Symptoms**: Converted data doesn't work as expected

**Possible Causes & Solutions**:

1. **Metadata loss**
   - **Issue**: Important metadata missing from converted data
   - **Solution**: Contact technical staff to request metadata preservation
   - **Prevention**: Specify metadata requirements in conversion requests

2. **Format compatibility**
   - **Issue**: Converted format doesn't work with intended analysis tools
   - **Solution**: Verify format requirements with tool documentation
   - **Alternative**: Request conversion to different target format

3. **Data validation**
   - **Issue**: Converted data appears corrupted or incomplete
   - **Solution**: Contact technical staff immediately with specific error details
   - **Verification**: Compare converted data characteristics with original

## Scientific Imaging Format Issues

### Zarr/OME-Zarr Problems

**Symptoms**: Zarr datasets won't open or display incorrectly

**Possible Causes & Solutions**:

1. **Incomplete Zarr structure**
   - **Issue**: Missing .zarray or .zattrs files
   - **Solution**: Avoid modifying Zarr directory structure manually
   - **Recovery**: Contact technical staff for structure repair

2. **Corrupted chunks**
   - **Issue**: Individual chunk files are corrupted
   - **Solution**: Request data validation and repair
   - **Prevention**: Avoid interrupting write operations to Zarr datasets

3. **Metadata inconsistencies**
   - **Issue**: OME metadata doesn't match actual data structure
   - **Solution**: Request metadata validation and correction
   - **Tools**: Use OME-Zarr validation tools if available

### TIFF File Problems

**Symptoms**: TIFF files won't preview or open correctly

**Possible Causes & Solutions**:

1. **Large file handling**
   - **Issue**: Very large TIFF files cause browser memory issues
   - **Solution**: Use file conversion to create more efficient formats
   - **Alternative**: Download files for local viewing

2. **Compression compatibility**
   - **Issue**: Unsupported TIFF compression schemes
   - **Solution**: Request conversion to standard compression formats
   - **Tools**: Use ImageJ or similar tools for problematic files

3. **Multi-page TIFF navigation**
   - **Issue**: Can't navigate through TIFF stack pages
   - **Solution**: Use appropriate viewer tools for multi-page TIFFs
   - **Conversion**: Consider converting to OME-Zarr for better browsing

## Performance Optimization

### Improving Browser Performance

1. **Memory management**
   - Close unused browser tabs
   - Restart browser periodically during long sessions
   - Use browser task manager to monitor memory usage

2. **Cache management**
   - Clear browser cache regularly
   - Disable unnecessary browser extensions
   - Use incognito/private browsing for troubleshooting

3. **Network optimization**
   - Use wired connection when possible
   - Close bandwidth-intensive applications
   - Test during off-peak network usage times

### Optimizing Data Access

1. **Navigation strategies**
   - Use specific path navigation instead of browsing large directories
   - Create and use favorites for frequently accessed locations
   - Search for files instead of browsing when possible

2. **Data organization**
   - Organize data in appropriately sized directories
   - Use descriptive naming conventions
   - Consider creating index files for large datasets

3. **File format choices**
   - Use Zarr/OME-Zarr for large datasets requiring frequent access
   - Consider compressed formats for archival data
   - Request optimized formats for specific use cases

## Getting Additional Help

### When to Contact Technical Support

Contact support when you encounter:

- Persistent authentication or access issues
- File system errors or missing data
- Conversion requests that fail repeatedly
- Performance issues that affect your research timeline
- Data integrity concerns

### Information to Provide When Seeking Help

Include this information in support requests:

1. **Problem description**: What you were trying to do and what happened instead
2. **Steps to reproduce**: Detailed steps that lead to the problem
3. **Error messages**: Exact text of any error messages
4. **File paths**: Specific directories or files involved
5. **Browser information**: Browser type and version
6. **Time and date**: When the problem occurred
7. **Screenshots**: Visual evidence of the issue (when helpful)

### Self-Service Resources

Before contacting support, try:

1. **Documentation review**: Check relevant sections of this user guide
2. **Browser troubleshooting**: Try different browsers or clear cache
3. **Network verification**: Test other Janelia network resources
4. **Colleague consultation**: Ask lab mates if they've experienced similar issues
5. **Simple solutions**: Restart browser, refresh pages, log out and back in

### Emergency Data Access

If you need urgent access to data and Fileglancer is unavailable:

1. **Direct file system access**: Use command-line tools if you have shell access
2. **Alternative tools**: Use other file browsing tools available at Janelia
3. **Local copies**: Access any local copies of critical data
4. **Collaboration tools**: Work with colleagues who may have access through other means

Remember that most issues can be resolved quickly with the right troubleshooting approach. When in doubt, don't hesitate to seek help from technical staff or experienced colleagues.