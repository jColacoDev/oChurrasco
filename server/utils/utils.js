exports.normalizePathLabel = label => label?.toLowerCase()
.normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
.replace(/[\u00c7\u00e7]/g, "c") // Replace "Ç" and "ç" with "c"
.replace(/[^\w\s-]/g, "") // Remove punctuation, except hyphens
.replace(/\s+/g, "-") // Replace spaces with hyphens
|| ""; // Replace empty string with empty string