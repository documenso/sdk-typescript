const tag = (s, ...v) => (Array.isArray(s) ? { id: String.raw(s, ...v), message: String.raw(s, ...v) } : s);
module.exports = { msg: tag, t: tag, defineMessage: tag, plural: () => '', select: () => '', selectOrdinal: () => '', Trans: () => null, Plural: () => null, useLingui: () => ({ t: tag }) };
