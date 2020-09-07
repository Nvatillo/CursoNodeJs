const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');
const { isNumber } = require('util');
const color = require('colors');

let data = '';

let listartablas = (base, limite) => {
    if (!Number(base) && !Number(limit)) {
        rejects('La base no es un Numero');
        return;
    }
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

}

let tablas = (base, limite) => {

    return new Promise((resolve, rejects) => {
        if (!Number(base) && !Number(limite)) {
            rejects('La base no es un Numero');
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                rejects(err);
            } else {
                console.log('==================================='.america);
                console.log(`tabla-${base}-limite-${limite}.txt CREADA`.yellow);
                console.log('==================================='.america);

                resolve(`tabla-${base}.txt`.green);
            }
        })
    })
}

module.exports = {
    tablas,
    listartablas
}