export default function initBitcoinFetch() {
    const bitcoinDisplay = document.querySelector('[data-bitcoin="value"]')

    async function bitcoinFetch() {
        try {
            const bitcoinValueJSON = await (await fetch('https://blockchain.info/ticker')).json();
            const bitcoinValue = 100 / bitcoinValueJSON.BRL.buy
            bitcoinDisplay.innerText = bitcoinValue.toFixed(6)
        } catch(erro) {
            console.log(erro)
        }
    }
    
    bitcoinFetch()
}