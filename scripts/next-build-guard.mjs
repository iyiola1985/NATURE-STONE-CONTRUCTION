#!/usr/bin/env node
/**
 * Always start production builds from a clean .next folder so dev/prod artifacts never mix.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const nextDir = path.join(root, "web", ".next");

if (fs.existsSync(nextDir)) {
  console.log("\n[next-build-guard] Removing existing .next before production build.\n");
  fs.rmSync(nextDir, { recursive: true, force: true });
}
