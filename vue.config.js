module.exports= {
    devServer : {
        proxy : {
            '/ptapi' : {
                target : 'https://www.meituan.com'
            },
            '/group' : {
                target : 'https://apimobile.meituan.com',
            },
        }
    }
}