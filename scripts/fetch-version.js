#!/usr/bin/env node

/**
 * Fetches the FileGlancer version from the main repository's package.json
 * and writes it to a local file for use during the build process.
 */

import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const GITHUB_REPO = 'JaneliaSciComp/fileglancer';
const RELEASES_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`;

async function fetchVersion() {
  try {
    console.log(`Fetching latest stable FileGlancer release from ${GITHUB_REPO}...`);

    // Fetch from GitHub Releases API - this gets the latest non-prerelease version
    const response = await fetch(RELEASES_API_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch latest release: ${response.status} ${response.statusText}`);
    }

    const release = await response.json();
    const version = release.tag_name;

    if (!version) {
      throw new Error('Version not found in release data');
    }

    // Remove 'v' prefix if present (e.g., 'v2.4.0' -> '2.4.0')
    const cleanVersion = version.startsWith('v') ? version.slice(1) : version;

    console.log(`Found FileGlancer version: ${cleanVersion} (from release: ${release.name || version})`);

    // Write to a file that can be imported during build
    const outputPath = join(__dirname, '..', 'src', 'fileglancer-version.json');
    const versionData = {
      version: cleanVersion,
      fetchedAt: new Date().toISOString(),
      source: `${GITHUB_REPO} latest release`,
      releaseName: release.name || version,
      releaseUrl: release.html_url
    };

    writeFileSync(outputPath, JSON.stringify(versionData, null, 2));
    console.log(`Version written to ${outputPath}`);

    return cleanVersion;
  } catch (error) {
    console.error('Error fetching FileGlancer version:', error.message);
    console.error('Using fallback version: unknown. No version badge will be displayed');

    // Write fallback version
    const outputPath = join(__dirname, '..', 'src', 'fileglancer-version.json');
    const fallbackData = {
      version: 'unknown',
      fetchedAt: new Date().toISOString(),
      source: `${GITHUB_REPO} latest release`,
      error: error.message
    };

    writeFileSync(outputPath, JSON.stringify(fallbackData, null, 2));

    // Don't fail the build, just use fallback. No version badge will be displayed
    return 'unknown';
  }
}

fetchVersion();
