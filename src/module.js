
function sleep(time = 1000) {
    return new Promise(resole => {
        setTimeout(() => {
            resole()
        }, time)
    })
}

async function start () {
    console.log('start')
    await sleep(4000)
    console.log('second')
}

start()
