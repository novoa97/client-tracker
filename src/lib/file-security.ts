import path from "path";

/** Max file size in bytes (default 25 MB) */
export const MAX_FILE_SIZE_BYTES =
  Number(process.env.MAX_UPLOAD_SIZE_BYTES) || 25 * 1024 * 1024;

/** Max extension length for disk filename (avoids abuse, keeps names readable). */
const MAX_EXTENSION_LENGTH = 20;

/** Max length for stored display name to avoid DB/UI issues */
export const MAX_DISPLAY_NAME_LENGTH = 255;

/**
 * Sanitizes a display filename: no path segments, no control chars, length limit.
 * Used for the name stored in DB and shown in UI.
 */
export function sanitizeDisplayName(input: string): string {
  const base = path.basename(input).replace(/[\x00-\x1f\x7f]/g, "").trim();
  if (!base) return "unnamed";
  return base.slice(0, MAX_DISPLAY_NAME_LENGTH);
}

/**
 * Returns a safe extension for disk storage: alphanumeric only, length-limited.
 * If missing or invalid, returns "bin".
 */
export function getSafeExtension(originalName: string): string {
  const ext = (originalName.split(".").pop() ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .slice(0, MAX_EXTENSION_LENGTH);
  return ext || "bin";
}

/**
 * Ensures the resolved file path is under the given root (prevents path traversal).
 * Uses path.resolve and checks that the normalized path starts with root.
 */
export function isPathUnderRoot(filePath: string, rootDir: string): boolean {
  const resolved = path.resolve(filePath);
  const root = path.resolve(rootDir);
  return resolved === root || resolved.startsWith(root + path.sep);
}

/**
 * Sanitizes filename for Content-Disposition header to prevent injection (quotes, newlines).
 */
export function sanitizeContentDispositionFilename(name: string): string {
  return name.replace(/[\r\n"]/g, "_").slice(0, MAX_DISPLAY_NAME_LENGTH);
}

export interface UploadValidationResult {
  ok: true;
  safeExtension: string;
  displayName: string;
}

export interface UploadValidationError {
  ok: false;
  message: string;
  status: number;
}

export type UploadValidation = UploadValidationResult | UploadValidationError;

/**
 * Validates file upload: size and sanitizes names. No extension or MIME whitelist.
 */
export function validateUpload(
  file: Blob | null,
  reportedName: string
): UploadValidation {
  if (!file || file.size === 0) {
    return { ok: false, message: "No file or empty file", status: 400 };
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return {
      ok: false,
      message: `File too large. Max size: ${Math.round(MAX_FILE_SIZE_BYTES / 1024 / 1024)} MB`,
      status: 413,
    };
  }

  const safeExtension = getSafeExtension(reportedName);
  const displayName = sanitizeDisplayName(reportedName);

  return {
    ok: true,
    safeExtension,
    displayName,
  };
}
