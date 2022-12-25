export const env = {
    // 默认配置,如果对应的环境的变量不设置，就会使用默认的
    default: {
        disableLimit: false,
        domains: {
            api: 'http://127.0.0.1:2020', // ovine api 地址 http://localhost:7050
        },
    },
    // 本地开发
    localhost: {
        disableLimit: false,
        domains: {
            api: 'http://127.0.0.1:2020',
        },
        // 日志配置
        logger: {
            // 可根据需要写正则匹配
            moduleName: '.*',
        },
    },
    // 测试环境
    staging: {
        domains: {
            api: 'http://127.0.0.1:2020',
        },
    },
    // 生产环境
    production: {
        isProd: true, // 表示是生产环境
        domains: {
            api: 'http://api.hulu4.com:2020',
        },
    },
}