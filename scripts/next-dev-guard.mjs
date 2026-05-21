#!/usr/bin/env node
/**
 * Prevents blank localhost pages caused by mixing production `next build` output
 * with `next dev` (missing /_next/static/chunks/*.js → 404).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextDir = path.join(root, "web", ".next");

function hasProductionBuild(dir) {
  return (
    fs.existsSync(path.join(dir, "BUILD_ID")) ||
    fs.existsSync(path.join(dir, "export-marker.json")) ||
    fs.existsSync(path.join(dir, "images-manifest.json"))
  );
}

if (fs.existsSync(nextDir) && hasProductionBuild(nextDir)) {
  console.log(
    "\n[next-dev-guard] Clearing production .next cache so dev server can compile fresh chunks.\n"
  );
  fs.rmSync(nextDir, { recursive: true, force: true });
}
