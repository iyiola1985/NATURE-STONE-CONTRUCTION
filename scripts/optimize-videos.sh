#!/usr/bin/env bash
# Re-compress public videos for web delivery (run after replacing source files).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VID="$ROOT/web/public/videos"
command -v ffmpeg >/dev/null || { echo "ffmpeg required"; exit 1; }

compress() {
  local src="$1" dest="$2"
  ffmpeg -y -i "$src" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 96k \
    -movflags +faststart -vf "scale='min(1280,iw)':-2" "$dest"
}

compress "$VID/machine-operations.mp4" "$VID/machine-operations.tmp.mp4"
mv "$VID/machine-operations.tmp.mp4" "$VID/machine-operations.mp4"

compress "$VID/forklift-operations.mp4" "$VID/forklift-operations.tmp.mp4"
mv "$VID/forklift-operations.tmp.mp4" "$VID/forklift-operations.mp4"

compress "$VID/projects-completed-web.mp4" "$VID/projects-completed-web.tmp.mp4"
mv "$VID/projects-completed-web.tmp.mp4" "$VID/projects-completed-web.mp4"

ls -lh "$VID"/*.mp4
