---
title: Creating Data Links
description: Learn how to create, manage, and share links to your data on Janelia's file systems.
---

## Overview

Data links in Fileglancer allow you to create shareable URLs for your data on Janelia's file systems without moving or copying files.

## What are Data Links?
- **Persistent URLs**: Stable web addresses that point to your data
- **No data movement**: Links point to data in original locations on the Janelia file system
- **Internally shareable**: Can be sent to interal collaborators or used with online tools on the internal network

## Creating Data Links for Zarr/OME-Zarr Files

Zarr and OME-Zarr files have special integration features for data links:

![Zarr File View](../../../assets/fileglancer-zarr-file-view.png)
*Viewing an OME-Zarr file in Fileglancer with metadata display and properties panel*

### Method 1: Tool Icons (Recommended)

1. **Navigate to your Zarr directory**
   - Browse to the target Zarr or OME-Zarr directory

2. **Click one of the tool icons under the image thumbnail**
   - Select one of the available tools, including Neuroglancer, Vol-E, Avivator, OME-Zarr Validator, or copy link
   - If you don't have automatic data links enabled, this will open the data link creation dialog

3. **Review the link creation dialog**
   - The dialog shows information about the link being created
   - Review any permissions or access settings

4. **Approve the link creation**
   - Click "Approve," "Create Link," or similar confirmation button
   - The dialog may offer additional options

5. **Enable automatic links (optional)**
   - The dialog may offer to enable automatic link creation for similar future actions
   - Choose this option to streamline future link creation

6. **Copy the generated link**
   - The dialog or interface will display the new link
   - Copy and share as needed

### Method 2: Properties Panel 

1. **Navigate to your Zarr directory**
   - Use any navigation method to reach the folder containing your Zarr or OME-Zarr data
   - Ensure you're at the directory level, not inside the Zarr structure

2. **Open the Properties Panel**
   - The Properties Panel is located on the right side of the file browser
   - If not visible, look click the expand icon on the right side of the file browser toolbar
   - OR right click on the Zarr directory and select "view properties" from the pop-up menu

3. **Locate the Overview tab**
   - Click on the "Overview" tab within the Properties Panel
   - This tab shows general information about the selected directory

4. **Enable the data link**
   - Find the data link toggle switch
   - Click the switch to enable link creation
   - The switch will change state to indicate the link is active

5. **Copy the generated link**
   - Once enabled, a shareable URL will be generated
   - Copy this URL to share with others
   - The link will remain active until you disable it

![Data Link Success](../../../assets/fileglancer-data-link-success.png)
*Successful data link creation showing the generated URL and external viewer integration options*

## Creating Data Links for Any Directory

You can create data links for any directory, not just Zarr files:

1. **Navigate to the target directory**
   - Use any navigation method to reach the desired folder
   - This can be any directory you have appropriate permissions for

2. **Open the Properties Panel**
   - Ensure the Properties Panel is visible
   - Usually located on the right side of the interface

3. **Access the Overview tab**
   - Click on the "Overview" tab within the Properties Panel
   - This shows general directory information and controls

4. **Enable directory sharing**
   - Find the data link toggle switch in the Overview tab
   - Click the switch to enable sharing for this directory
   - The switch indicates whether sharing is active

5. **Use the generated link**
   - Copy the generated URL for sharing
   - The link provides access to browse the directory contents

## Automatic Link Creation

When creating links through the tool icon dialog:

1. **Enable automatic creation**
   - Choose the option to enable automatic links during the approval process
   - This will remove the dialog confirmation step for future link creation

3. **Managing automatic settings**
   - Review and modify automatic link settings in your profile at any time
   - Disable automatic creation if you prefer manual control

## Managing Your Data Links

### Viewing All Data Links

1. **Navigate to the links page**
   - Go to `/links` in your browser (add this to the base Fileglancer URL)
   - See table with all currently active data links. Sort and filter links, if desired

![Data Links Page](../../../assets/fileglancer-data-links-page.png)
*The Data Links page showing all created data links with management options*

### Disabling Data Links

#### Method 1 - From the data links page

1. **Click the actions button**
   - The circle icon with three dots on the right side of the data links table

2. **Select delete link from the pop-up menu**
   - Confirm deleting in the link in the dialog

#### Method 2 - From the Properties panel

1. **Navigate to the linked directory**
   - Use navigation to return to the directory with an active link

2. **Open Properties Panel**
   - Access the Overview tab as before

3. **Disable the link**
   - Click the toggle switch to turn off the data link
   - The link will immediately become inactive

4. **Confirm on the links page**
   - If desired, check `/links` to verify the link has been removed

## Security Considerations

1. **Understand access scope**
   - Anyone with the link and using the Janelia network can view directory contents
   - Be aware of what data is included in shared directories

2. **Disable links that are no longer needed**
   - Regularly review data links on the `/links` page

## Troubleshooting Data Links

### Link Creation Issues

**Problem**: Toggle switch doesn't respond
- Solution: Verify you have write permissions for the directory
- Check if you're authenticated properly
- Try refreshing the browser

**Problem**: Properties Panel not visible
- Solution: Look for panel toggle buttons in the interface
- Check if the panel is collapsed or minimized
- Try different browser window sizes

### Link Access Issues

**Problem**: Collaborators can't access links
- Solution: Verify collaborators have network access and updated links
- Check if they're on the correct network (Janelia internal)
- Confirm the link is still active on your `/links` page

**Problem**: Links stop working
- Solution: Check if the data has been moved or permissions changed
- Verify the link wasn't accidentally disabled
- Contact system administrators for file system issues

Remember that data links are a powerful feature for collaboration, but they should be used thoughtfully with consideration for security, permissions, and data management best practices.