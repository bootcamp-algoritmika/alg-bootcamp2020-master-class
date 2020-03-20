class Application {

    constructor() {
        this.stockArray = [] ;

        this.nameInput = document.getElementById('stock-name') ;
        this.tickerInput = document.getElementById('stock-ticker') ;
        this.yieldInput = document.getElementById('stock-yield') ;
        this.priceInput = document.getElementById('stock-price') ;
        this.amouInput = document.getElementById('stock-amount') ;

        this.button = document.getElementById('button') ;

        this.button.addEventListener('click', this.handleButtonClick) ;
    }


    handleButtonClick = () => {
        const name = this.nameInput.value ;
        const ticker = this.tickerInput.value ;
        const _yield = this.yieldInput.value ;
        const price = this.priceInput.value ;
        const amount = this.amouInput.value ;

        if (!name || !ticker || !_yield || !price || !amount) {
            alert('Все поля должны быть заполнены') ;
            return ;
        }

        if(isNaN(Number(price))) {
            alert('Стоимость должна быть числом') ;
            return ;
        }

        if(isNaN(Number(amount))) {
            alert('Количество должно быть числом') ;
            return ;
        }

        this.stockArray.push({
            name,
            ticker,
            _yield,
            price,
            amount,
            total: Number(price)*Number(amount),
        })
        this.nameInput.value = '' ;
        this.tickerInput.value = '' ;
        this.yieldInput.value = '' ;
        this.priceInput.value = '' ;
        this.amouInput.value = '' ;

        this.drawTable() ;

        for (let i=0; i<this.stockArray.length; i++) {
            const tr = document.getElementById('tr' + i) ;

            if (tr) {
                tr.addEventListener('click', () => this.removeRow(i)) ;
            }
        }
    }

    removeRow = i => {

        const newArr = [] ;

        for (let j=0; j<this.stockArray.length; j++) {
            if (i != j) {
                newArr.push(this.stockArray[j]) ;
            }
        }

        this.stockArray = newArr ;
        this.drawTable() ;
    }

    drawTable = () => {
        const container = document.getElementById('briefcase') ;

        const arr = [] ;
        arr[0] = '<table><tr><th>Название акции</th><th>Ticker</th><th>Доходность</th><th>Стоимость</th><th>Количество</th><th>Итого</th></tr>' ;

        for (let i=0; i<this.stockArray.length; i++) {
            const name = this.stockArray[i].name ;
            const ticker = this.stockArray[i].ticker ;
            const _yield = this.stockArray[i]._yield ;
            const price = this.stockArray[i].price ;
            const amount = this.stockArray[i].amount ;
            const total = this.stockArray[i].total ;
            arr[i+1] = this.getRowCode(name, ticker, _yield, price, amount, total, 'tr' + i) ;
        }

        container.innerHTML = '<table>' + arr.join('') + '</table>' ;
    }

    getRowCode(name, ticker, _yield, price, amount, total, id) {
        const namePart = '<td>'+name+'</td>' ;
        const tickerPart = '<td>'+ticker+'</td>' ;
        const yieldPart = '<td>'+_yield+'</td>' ;
        const pricePart = '<td>'+price+'</td>' ;
        const amountPart = '<td>'+amount+'</td>' ;
        const totalPart = '<td>'+total+'</td>' ;

        let row = `<tr class="active" id=${id}>` + namePart + tickerPart + yieldPart + pricePart + amountPart + totalPart + '</tr>' ;
        return row ;
    }

}

