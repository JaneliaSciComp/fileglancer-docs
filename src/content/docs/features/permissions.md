---
title: File Permissions
description: Understand how Fileglancer works with file system permissions, group access, and how to manage sharing permissions effectively.
---

## Overview

Fileglancer operates within Janelia's existing file permission system, respecting POSIX permissions and group memberships. Understanding how permissions work is crucial for effective data sharing and collaboration through the platform.

## Understanding POSIX Permissions

### Permission Basics

POSIX permissions control access to files and directories using three levels:

#### Permission Types
- **Read (r)**: View file contents or list directory contents
- **Write (w)**: Modify files or create/delete files in directories
- **Execute (x)**: Run files as programs or access directories

#### Permission Levels
- **User (u)**: The file owner's permissions
- **Group (g)**: Permissions for users in the file's group
- **Other (o)**: Permissions for all other users

#### How Permissions Appear
```
drwxrwxr-x  user  labgroup  directory-name
-rw-rw-r--  user  labgroup  filename.zarr
```

### Permissions in Fileglancer Context

#### Directory Access
- **Read**: Required to browse directory contents in Fileglancer
- **Execute**: Required to enter directories and navigate file structures
- **Write**: Required to create data links and modify sharing settings

#### File Access
- **Read**: Required to view file metadata and create data links
- **Write**: Required to modify files (rarely needed in Fileglancer)
- **Execute**: Not typically relevant for data files

## Group-Based Access Control

### Janelia Group Structure

#### Lab Groups
- **Primary lab group**: Main group for lab members (e.g., `smithlab`, `flylight`)
- **Project groups**: Specific groups for collaborative projects
- **Equipment groups**: Groups for shared equipment or resources
- **Administrative groups**: Groups for data managers and administrators

#### Group Membership Benefits
- **Shared access**: All group members can access group-owned data
- **Collaborative workflows**: Easy sharing within research teams
- **Permission inheritance**: New files often inherit group permissions
- **Simplified management**: Easier than individual user permissions

### Checking Your Group Memberships

Your group memberships determine what data you can access:

1. **Primary groups**: Usually include your lab's main group
2. **Secondary groups**: May include project or collaboration groups
3. **Administrative groups**: Special access groups when applicable

## Permission Requirements for Fileglancer Features

### Basic File Browsing

#### Minimum Requirements
- **Read + Execute on directories**: To browse and navigate
- **Read on files**: To view metadata and file information
- **Network access**: Appropriate network permissions

#### What You Can Do
- Browse directory structures
- View file and directory metadata
- Navigate using search and favorites
- Use the Properties Panel to view information

### Creating Data Links

#### Required Permissions
- **Write permission on directory**: To enable sharing
- **Read + Execute on parent directories**: For access path
- **Group membership**: Collaborators need appropriate group access

#### Permission Considerations
- **Sharing scope**: Can only share directories you have write access to
- **Collaborator access**: Shared links only work for users with file system access
- **Permission boundaries**: Cannot share system or restricted directories

### File Conversion Requests

#### Required Permissions
- **Read access to source data**: To process the original files
- **Write access to output location**: For storing converted data
- **Technical staff access**: Conversion staff need temporary access to your data

#### Planning Considerations
- **Output permissions**: Specify where converted data should be stored
- **Access coordination**: May need to coordinate with system administrators
- **Temporary access**: Technical staff may need temporary elevated access

## Managing Permissions for Collaboration

### Setting Up Collaborative Access

#### Within Your Lab
1. **Use lab group permissions**: Ensure data is group-readable
2. **Set appropriate directory permissions**: Use `rwxrwxr--` for lab collaboration
3. **Coordinate with lab data manager**: Follow lab-specific permission policies
4. **Use shared directories**: Store collaborative data in group-accessible locations

#### With External Collaborators
1. **Request access through IT**: External access requires special setup
2. **Use appropriate groups**: Add collaborators to project-specific groups
3. **Create collaboration directories**: Set up dedicated sharing areas
4. **Document access requirements**: Maintain records of who needs what access

### Best Practices for Permission Management

#### For Individual Researchers
1. **Understand your groups**: Know which groups you belong to
2. **Use group permissions**: Make your data accessible to appropriate lab members
3. **Coordinate with data managers**: Follow institutional data management policies
4. **Plan for sharing**: Consider permission requirements when organizing data

#### For Lab Data Managers
1. **Establish group policies**: Define standard permission structures for lab data
2. **Regular access reviews**: Periodically review and update access permissions
3. **Coordinate with IT**: Work with system administrators for complex access needs
4. **Train lab members**: Help researchers understand permission requirements

## Troubleshooting Permission Issues

### Common Permission Problems

#### Cannot Browse Expected Directories

**Problem**: Directories don't appear or show "Permission Denied" errors

**Possible Causes**:
- Missing read or execute permissions on directories
- Not a member of required groups
- Files or directories have restrictive permissions

**Solutions**:
1. **Check group membership**: Verify you're in the appropriate groups
2. **Contact data owner**: Ask the data owner to adjust permissions
3. **Request group access**: Work with system administrators to join required groups
4. **Use alternative paths**: Try accessing through different directory paths

#### Cannot Create Data Links

**Problem**: Data link toggle doesn't work or shows permission errors

**Possible Causes**:
- Missing write permissions on the target directory
- Directory is owned by someone else with restrictive permissions
- System or read-only directories cannot be shared

**Solutions**:
1. **Check directory ownership**: Verify you own the directory or have write access
2. **Contact directory owner**: Ask for write permissions or have them create the link
3. **Copy to personal directory**: Copy data to your own directory for sharing
4. **Use alternative sharing methods**: Consider other collaboration approaches

#### Collaborators Cannot Access Shared Links

**Problem**: Data links work for you but not for collaborators

**Possible Causes**:
- Collaborators not in required groups
- Collaborators lack network access
- File system permissions don't include collaborators

**Solutions**:
1. **Verify group memberships**: Ensure collaborators are in appropriate groups
2. **Check network access**: Confirm collaborators can access Janelia systems
3. **Test permissions**: Try accessing data as a different user
4. **Contact IT support**: Request assistance with access configuration

### Permission Diagnostic Steps

#### For Access Issues
1. **Identify the exact error**: Note specific error messages
2. **Check your groups**: Verify your group memberships
3. **Test with known working data**: Compare with directories that work
4. **Try different access paths**: Test alternative routes to the same data

#### For Sharing Issues
1. **Verify your write access**: Confirm you can modify the target directory
2. **Test link creation**: Try creating links for data you definitely own
3. **Check collaborator access**: Have collaborators test their general system access
4. **Document the problem**: Note specific directories and users involved

## Advanced Permission Concepts

### Access Control Lists (ACLs)

Some Janelia systems may use extended ACLs:

- **More granular control**: Individual user permissions beyond standard POSIX
- **Project-specific access**: Temporary access for specific collaborations
- **Complex permission structures**: Multiple group memberships with different rights

### Special Directory Types

#### System Directories
- **Read-only access**: Cannot create data links
- **Administrative control**: Managed by system administrators
- **Standard locations**: `/usr`, `/etc`, `/sys`, etc.

#### Shared Project Directories
- **Group writable**: Multiple users can create and modify content
- **Collaborative workflows**: Designed for team-based research
- **Policy-controlled**: May have special management policies

#### Personal Directories
- **User-controlled**: You have full control over permissions
- **Privacy options**: Can be made completely private or shared
- **Backup considerations**: May have different backup policies

## Permission Planning and Policies

### Research Project Planning

#### Initial Setup
1. **Define collaboration needs**: Identify who needs access to what data
2. **Choose appropriate directories**: Select locations with suitable permission structure
3. **Plan for growth**: Consider how permission needs might change over time
4. **Document access requirements**: Maintain records of permission decisions

#### Ongoing Management
1. **Regular reviews**: Periodically assess whether permissions are still appropriate
2. **Access updates**: Modify permissions as project needs change
3. **Cleanup procedures**: Remove access for users who no longer need it
4. **Policy compliance**: Ensure permissions follow institutional policies

### Institutional Policies

#### Data Classification
- **Public data**: Data that can be shared broadly
- **Internal data**: Data restricted to Janelia community
- **Sensitive data**: Data with special access restrictions
- **Collaborative data**: Data shared with external partners

#### Compliance Considerations
- **Grant requirements**: Some funding requires specific data sharing approaches
- **Publication policies**: Publishers may have data availability requirements
- **International regulations**: Cross-border data sharing may have restrictions
- **Institutional policies**: Janelia-specific data management requirements

Understanding and properly managing file permissions is essential for effective use of Fileglancer's sharing and collaboration features. When in doubt about permission requirements or policies, consult with your lab's data manager or contact IT support for guidance.