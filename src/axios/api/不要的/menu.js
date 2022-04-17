import {
    get,
    post
} from '@/axios/request.js'

export function saveMenu(data, other) {
    return post('/menu/saveMenu', data, other)
}

export function updateMenu(data, other) {
    return post('/menu/updateMenu', data, other)
}

export function menuTree(data, other) {
    return get('/menu/menuTree', data, other)
}

export function pageListByParentId(data, other) {
    return post('/menu/pageListByParentId', data, other)
}

export function deleteById(data, other) {
    return post(`/menu/deleteById?id=${data.id}`, data, other)
}

export function getMenuDetailById(data, other) {
    return get(`/menu/getMenuDetailById`, data, other)
}

//
export function getchecktree(data, other) {
    return get(`/menu/getchecktree`, data, other)
}

export function saveCheck(data, other) {
    return post('/menu/saveCheck', data, other)
}

export function getCheck(data, other) {
    return post('/menu/getCheck', data, other)
}