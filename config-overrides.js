module.exports = function override(config, env) {
    config.devServer = {
        ...config.devServer,
        setupMiddlewares: (middlewares, devServer) => {
            console.log('setupMiddlewares is called');

            // Thêm middleware tùy chỉnh vào mảng middlewares
            middlewares.push((req, res, next) => {
                console.log('Custom middleware is called');
                next();
            });

            return middlewares;
        },
    };

    return config;
};
