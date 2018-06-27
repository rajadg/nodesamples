

exports.handler = (event, handler, callback) => {
    return JSON.stringify({ "api": "user_info", "event": event, "handler": handler });
}