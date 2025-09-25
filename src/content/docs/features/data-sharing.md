---
title: Data Sharing
description: Learn about Fileglancer's comprehensive data sharing capabilities, from creating links to managing permissions and collaborating effectively.
---

## Overview

Fileglancer provides powerful data sharing capabilities designed specifically for scientific collaboration. The platform allows you to share imaging datasets with colleagues, collaborators, and the broader research community while maintaining appropriate security and access controls.

## Understanding Data Sharing in Fileglancer

### Core Sharing Principles

1. **No data movement**: Files remain in their original locations
2. **Permission-based access**: Sharing respects existing file system permissions
3. **Persistent links**: URLs remain valid while sharing is enabled
4. **Trackable access**: Monitor who accesses your shared data
5. **Revocable sharing**: Disable sharing at any time

### Types of Data Sharing

#### Directory-Level Sharing
- Share entire directories and their contents
- Ideal for project datasets or experimental series
- Collaborators can browse the full directory structure
- Perfect for ongoing collaborative projects

#### Dataset-Specific Sharing
- Share individual Zarr or OME-Zarr datasets
- Optimized for specific analysis datasets
- Integrated with visualization tools
- Suitable for publication supplements

#### Neuroglancer Integration
- Share interactive visualizations
- Collaborators get identical viewing experiences
- Perfect for discussing specific features or regions
- Enables remote collaborative analysis

## Creating Shareable Links

### Basic Sharing Workflow

1. **Navigate to your data**
   - Use any navigation method to reach the target directory
   - Ensure you have appropriate permissions to share the data

2. **Enable sharing**
   - Open the Properties Panel
   - Use the Overview tab to toggle data link creation
   - Copy the generated shareable URL

3. **Share with collaborators**
   - Send the URL via email, messaging, or documentation
   - Include any necessary context or instructions
   - Verify collaborators have appropriate access permissions

### Advanced Sharing Options

#### Automatic Link Creation
- Enable automatic sharing for similar datasets
- Streamline repeated sharing workflows
- Maintain consistency across shared datasets

#### Batch Sharing
- Create multiple data links simultaneously
- Useful for sharing related datasets
- Efficient for large collaborative projects

## Permission Management

### Understanding Access Controls

Fileglancer sharing works with Janelia's existing permission systems:

#### POSIX Permissions
- **Read access**: Required for collaborators to view shared data
- **Group membership**: Collaborators must be in appropriate groups
- **Directory permissions**: Must allow access to parent directories

#### Network Access
- **Internal network**: Full access from Janelia internal network
- **VPN access**: Remote access through Janelia VPN
- **External access**: Limited to specifically configured scenarios

### Managing Collaborator Access

#### Before Sharing
1. **Verify permissions**: Ensure intended collaborators have file system access
2. **Check group membership**: Confirm collaborators are in necessary groups
3. **Test access**: Verify collaborators can reach the data location

#### During Collaboration
1. **Monitor access**: Use the `/links` page to track link usage
2. **Provide support**: Help collaborators with access issues
3. **Update permissions**: Coordinate with system administrators as needed

#### After Collaboration
1. **Disable unnecessary links**: Remove links that are no longer needed
2. **Archive important links**: Keep records of links used in publications
3. **Document access patterns**: Learn from successful sharing experiences

## Collaborative Workflows

### Research Team Collaboration

#### Ongoing Project Sharing
1. **Create project directories**: Organize data in logical project structures
2. **Set up team access**: Ensure all team members have appropriate permissions
3. **Share at appropriate levels**: Share project directories rather than individual files
4. **Maintain organization**: Keep shared directories well-organized and documented

#### Data Review and Feedback
1. **Share specific datasets**: Create links for datasets needing review
2. **Provide context**: Include experimental details and analysis questions
3. **Use Neuroglancer integration**: Share interactive visualizations for discussion
4. **Document feedback**: Keep records of review comments and decisions

### External Collaboration

#### Academic Partnerships
1. **Coordinate access**: Work with IT to establish appropriate access for external partners
2. **Create dedicated sharing areas**: Use specific directories for external collaboration
3. **Document shared data**: Maintain clear records of what's shared externally
4. **Monitor compliance**: Ensure sharing follows institutional data policies

#### Publication Data Sharing
1. **Create stable links**: Establish data links that will remain available long-term
2. **Organize for publication**: Structure shared data to support publication supplements
3. **Include metadata**: Ensure shared datasets include comprehensive metadata
4. **Verify accessibility**: Test that reviewers and readers can access shared data

### Conference and Presentation Sharing

#### Live Demonstrations
1. **Prepare stable links**: Create reliable data links before presentations
2. **Test connectivity**: Verify network access from presentation venues
3. **Have backups**: Prepare alternative access methods if needed
4. **Share with audience**: Provide links for follow-up exploration

#### Poster and Paper Supplements
1. **Create permanent links**: Establish long-term accessible data links
2. **Include QR codes**: Make data easily accessible from printed materials
3. **Provide instructions**: Include brief access instructions with shared links
4. **Monitor usage**: Track how shared data is being accessed

## Best Practices for Data Sharing

### Organizing Data for Sharing

#### Directory Structure
```
shared-project/
├── raw-data/           # Original acquisition data
├── processed/          # Analysis-ready formats
├── results/           # Analysis outputs
├── documentation/     # Experimental protocols and metadata
└── README.txt         # Overview and instructions
```

#### Naming Conventions
- Use descriptive, consistent names for shared directories
- Include dates and version information when appropriate
- Avoid special characters that may cause URL problems
- Consider how names will appear in browser interfaces

### Providing Context

#### Documentation Standards
1. **README files**: Include overview documents in shared directories
2. **Metadata files**: Provide experimental details and acquisition parameters
3. **Analysis notes**: Document any processing or analysis performed
4. **Contact information**: Include contact details for questions

#### Communication
1. **Explain the data**: Describe what the shared data represents
2. **Provide instructions**: Include any special viewing or access instructions
3. **Set expectations**: Clarify how long the data will remain accessible
4. **Encourage feedback**: Invite questions and comments from collaborators

### Security and Compliance

#### Data Sensitivity
1. **Review data content**: Ensure shared data is appropriate for the intended audience
2. **Check institutional policies**: Verify compliance with data sharing policies
3. **Consider privacy**: Be aware of any privacy implications of shared data
4. **Document sharing decisions**: Keep records of what was shared and why

#### Access Monitoring
1. **Regular reviews**: Periodically review active data links on `/links` page
2. **Disable unused links**: Remove links that are no longer needed
3. **Track usage patterns**: Monitor how shared data is being accessed
4. **Report issues**: Contact support if you notice unusual access patterns

## Advanced Sharing Features

### Integration with Analysis Tools

#### Neuroglancer Sharing
1. **Create visualization links**: Share specific Neuroglancer views with collaborators
2. **Include annotations**: Add annotations to shared visualizations
3. **Provide navigation tips**: Help collaborators understand how to navigate the data
4. **Update visualizations**: Modify shared views based on feedback

#### API Access
1. **Programmatic access**: Enable automated access to shared data
2. **Analysis pipeline integration**: Allow collaborators to integrate shared data into their analysis workflows
3. **Batch processing**: Support efficient processing of shared datasets

### Large Dataset Sharing

#### Performance Considerations
1. **Multi-resolution data**: Create pyramid structures for large datasets
2. **Compressed formats**: Use appropriate compression for network efficiency
3. **Chunked access**: Enable partial data access for large arrays
4. **Bandwidth management**: Consider network limitations of collaborators

#### Storage Optimization
1. **Efficient formats**: Convert to web-optimized formats before sharing
2. **Deduplication**: Avoid creating unnecessary copies of shared data
3. **Archival strategies**: Plan for long-term storage of shared datasets

## Troubleshooting Sharing Issues

### Common Problems

**Collaborators can't access shared links**
- Verify file system permissions
- Check network connectivity requirements
- Confirm authentication is working
- Test with a different user account

**Shared data appears incomplete**
- Check permissions on all subdirectories
- Verify data integrity at source location
- Test access from different network locations
- Confirm sharing is enabled at correct directory level

**Performance issues with shared data**
- Consider data format optimization
- Check network bandwidth limitations
- Monitor server load during peak usage
- Create lower-resolution versions for previewing

### Getting Help with Sharing

1. **Document the sharing scenario**: Describe what you're trying to share and with whom
2. **Test from multiple locations**: Verify access from different networks and accounts
3. **Contact support**: Get help with permission configuration and troubleshooting
4. **Learn from others**: Ask colleagues about successful sharing strategies

Data sharing in Fileglancer enables powerful collaboration while maintaining security and performance. By understanding the platform's sharing capabilities and following best practices, you can create effective collaborative workflows that enhance your research productivity and impact.