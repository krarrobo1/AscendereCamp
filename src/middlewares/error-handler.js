module.exports = function(error, req, res, next) {
    const { status, message } = error;
    // const status = error.status;
    // const message = error.message;

    return res.status(status || 500).json({
        ok: false,
        message: message || 'Algo salió mal'
    });
}