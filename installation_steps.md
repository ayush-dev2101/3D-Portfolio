# Spline 3D Integration Skill Installation Steps

This document details the step-by-step process used to install the **Spline 3D Integration** skill into the project for 3D element requirement.

---

## Step 1: Locate the Skill Archive

The source file was identified in the workspace root:
`c:\Ayush\Projects\Full-Stack\Portfolio\spline-3d-skill.zip`

---

## Step 2: Unzip the Archive

The archive was extracted to a temporary directory in the workspace using PowerShell:

```powershell
Expand-Archive -Path "c:\Ayush\Projects\Full-Stack\Portfolio\spline-3d-skill.zip" -DestinationPath "c:\Ayush\Projects\Full-Stack\Portfolio\spline_unzipped"
```

The unzipped content structure was verified to be:

- `spline-3d-integration/`
  - `SKILL.md` (Main skill definition)
  - `examples/` (Reference code implementations)
  - `guides/` (Detailed markdown guides)

---

## Step 3: Create target directories in configuration

The active configuration directory for plugin skills is located at `C:\Users\ayush\.gemini\config\plugins`.
A target directory for the new skill plugin was created:

- `C:\Users\ayush\.gemini\config\plugins\spline-3d-integration\skills`

---

## Step 4: Transfer Skill Files

To make sure relative links (e.g., to guides and examples) in `SKILL.md` continue to resolve correctly, all files were transferred into the `skills` subfolder under the target plugin folder:

1. `SKILL.md` was copied to `C:\Users\ayush\.gemini\config\plugins\spline-3d-integration\skills\SKILL.md`.
2. The `examples` directory was copied to `C:\Users\ayush\.gemini\config\plugins\spline-3d-integration\skills\examples`.
3. The `guides` directory was copied to `C:\Users\ayush\.gemini\config\plugins\spline-3d-integration\skills\guides`.

---

## Step 5: Create Plugin Manifest

A `plugin.json` manifest file was created at the root of the plugin directory (`C:\Users\ayush\.gemini\config\plugins\spline-3d-integration\plugin.json`) so the IDE plugin loader detects it:

```json
{
  "name": "spline-3d-integration",
  "version": "1.0.0",
  "description": "Interactive 3D scenes from Spline.design integration"
}
```

---

## Step 6: Cleanup Workspace

The temporary `spline_unzipped` folder in the workspace was removed to keep the repository clean:

```powershell
Remove-Item -Path "c:\Ayush\Projects\Full-Stack\Portfolio\spline_unzipped" -Recurse -Force
```

The original `spline-3d-skill.zip` remains in the workspace root for your records.

## npm run build --> For Build Errors

# npm run preview --> For previewing the Application on port 4173
