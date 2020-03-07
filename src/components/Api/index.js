// import axios from '../../plugins/axios.js'

const api = {
    getP() {
        return axios.get('/ptapi/getprovincecityinfo/', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
    },
    getScenesList(config) {
        return axios.get('/ptapi/getScenesList', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            params: {
                ...config,
                // theme : 'quality',
                // 有格调
                //很优惠用的"cheap"
                // tab:'all',
                //feast=约会聚餐
                //spa ==丽人
                //show == 电影
                //journey==出游
                //food == 美食
                //xiuyu ==休闲
                // ci: 40,
                // limit:20
                //10代表有格调
                //20代表很优惠
            }
        }, )

    },
    getHotFilms() {
        return axios.get('/ptapi/getHotFilms', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            params: {
                ci: 40,
                limit: 10
            }
        })
    },
    getComingFilms() {
        return axios.get('/ptapi/getComingFilms', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            params: {
                ci: 40,
                limit: 10
            }
        })
    },
    getHotCinema() {
        return axios.get('/ptapi/getHotCinema', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
    },
    getRecommends() {
        return axios.get('/ptapi/recommends', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
    },
    getShowList(data) {
        return axios.get(`/group/v1/area/search/${data}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })
    },
}

export default api;